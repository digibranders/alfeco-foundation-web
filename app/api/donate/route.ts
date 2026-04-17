import { DonationSchema } from '../_shared/validation';
import { sanitizeParams } from '../_shared/sanitize';
import { checkRateLimit } from '../_shared/rateLimit';

const DONATION_CONFIRMATION_TEMPLATE_ID = 65;
const DONATION_NOTIFICATION_TEMPLATE_ID = 64;
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

export async function POST(request: Request): Promise<Response> {
  const rateLimitResponse = checkRateLimit(request);
  if (rateLimitResponse) return rateLimitResponse;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const result = DonationSchema.safeParse(body);
  if (!result.success) {
    const firstError = result.error.errors[0]?.message ?? 'Invalid input';
    return Response.json({ error: firstError }, { status: 400 });
  }

  const { fullName, email, phone, amount, taxNumber, message } = result.data;

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('BREVO_API_KEY environment variable is not set');
    return Response.json({ error: 'Unable to process request. Please try again later.' }, { status: 500 });
  }

  const templateParams = sanitizeParams({
    DONOR_NAME: fullName,
    EMAIL: email,
    PHONE: phone,
    AMOUNT: amount.toLocaleString('en-ZA'),
    TAX_NUMBER: taxNumber,
    MESSAGE: message,
  });

  const headers = {
    'accept': 'application/json',
    'api-key': apiKey,
    'content-type': 'application/json',
  };

  try {
    const [confirmationResult, notificationResult] = await Promise.allSettled([
      fetch(BREVO_API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          to: [{ email, name: fullName }],
          templateId: DONATION_CONFIRMATION_TEMPLATE_ID,
          params: templateParams,
        }),
      }),
      fetch(BREVO_API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          to: [{ email: 'info@alfecofoundation.com', name: 'Alfeco Foundation' }],
          templateId: DONATION_NOTIFICATION_TEMPLATE_ID,
          params: templateParams,
        }),
      }),
    ]);

    const confirmationFailed =
      confirmationResult.status === 'rejected' ||
      (confirmationResult.status === 'fulfilled' && !confirmationResult.value.ok);
    const notificationFailed =
      notificationResult.status === 'rejected' ||
      (notificationResult.status === 'fulfilled' && !notificationResult.value.ok);

    if (confirmationFailed) {
      const reason = confirmationResult.status === 'rejected'
        ? confirmationResult.reason
        : `HTTP ${confirmationResult.value.status}`;
      console.error('Donation confirmation email failed:', reason);
    }
    if (notificationFailed) {
      const reason = notificationResult.status === 'rejected'
        ? notificationResult.reason
        : `HTTP ${notificationResult.value.status}`;
      console.error('Donation notification email failed:', reason);
    }

    if (notificationFailed) {
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err: unknown) {
    console.error('Donation email send error:', err instanceof Error ? err.message : err);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
