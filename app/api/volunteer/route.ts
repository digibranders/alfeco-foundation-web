import { VolunteerSchema } from '../_shared/validation';
import { sanitizeParams } from '../_shared/sanitize';
import { checkRateLimit } from '../_shared/rateLimit';

const VOLUNTEER_CONFIRMATION_TEMPLATE_ID = 50;
const VOLUNTEER_NOTIFICATION_TEMPLATE_ID = 51;
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

  const result = VolunteerSchema.safeParse(body);
  if (!result.success) {
    const firstError = result.error.errors[0]?.message ?? 'Invalid input';
    return Response.json({ error: firstError }, { status: 400 });
  }

  const { fullName, email, phone, area, interests, availability, message } = result.data;

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('BREVO_API_KEY environment variable is not set');
    return Response.json({ error: 'Unable to process request. Please try again later.' }, { status: 500 });
  }

  const interestsStr = Array.isArray(interests) ? interests.join(', ') : (interests ?? '');

  const templateParams = sanitizeParams({
    FULL_NAME: fullName,
    EMAIL: email,
    PHONE: phone,
    AREA: area,
    INTERESTS: interestsStr,
    AVAILABILITY: availability,
    MESSAGE: message ?? '',
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
          templateId: VOLUNTEER_CONFIRMATION_TEMPLATE_ID,
          params: templateParams,
        }),
      }),
      fetch(BREVO_API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          to: [{ email: 'info@alfecofoundation.com', name: 'Alfeco Foundation' }],
          templateId: VOLUNTEER_NOTIFICATION_TEMPLATE_ID,
          params: templateParams,
        }),
      }),
    ]);

    // Check for network-level failures (rejected) and HTTP-level failures (non-ok response)
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
      console.error('Confirmation email failed:', reason);
    }
    if (notificationFailed) {
      const reason = notificationResult.status === 'rejected'
        ? notificationResult.reason
        : `HTTP ${notificationResult.value.status}`;
      console.error('Notification email failed:', reason);
    }

    if (notificationFailed) {
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err: unknown) {
    console.error('Email send error:', err instanceof Error ? err.message : err);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
