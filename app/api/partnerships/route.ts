import { PartnershipSchema } from '../_shared/validation';
import { sanitizeParams } from '../_shared/sanitize';
import { checkRateLimit } from '../_shared/rateLimit';

const PARTNERSHIP_CONFIRMATION_TEMPLATE_ID = 48;
const PARTNERSHIP_NOTIFICATION_TEMPLATE_ID = 49;
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

// Base64 magic byte prefixes for allowed file types
const MIME_SIGNATURES: Record<string, string[]> = {
  '.pdf': ['JVBERi'],           // %PDF
  '.doc': ['0M8R4KGx'],        // OLE2 (legacy .doc)
  '.docx': ['UEsDB', 'UEsFB'], // ZIP/PK (Office Open XML)
};

function validateFileMimeType(content: string, extension: string): boolean {
  const signatures = MIME_SIGNATURES[extension];
  if (!signatures) return false;
  return signatures.some((sig) => content.startsWith(sig));
}

export async function POST(request: Request): Promise<Response> {
  const rateLimitResponse = checkRateLimit(request);
  if (rateLimitResponse) return rateLimitResponse;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const result = PartnershipSchema.safeParse(body);
  if (!result.success) {
    const firstError = result.error.errors[0]?.message ?? 'Invalid input';
    return Response.json({ error: firstError }, { status: 400 });
  }

  const { companyName, contactPerson, email, phone, industry, partnershipType, message, file } = result.data;

  if (file) {
    const ext = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return Response.json(
        { error: 'Invalid file type. Only PDF, DOC, and DOCX files are accepted.' },
        { status: 400 }
      );
    }

    const estimatedSize = (file.content.length * 3) / 4;
    if (estimatedSize > MAX_FILE_SIZE_BYTES) {
      return Response.json({ error: 'File too large. Maximum size is 10MB.' }, { status: 400 });
    }

    if (!validateFileMimeType(file.content, ext)) {
      return Response.json(
        { error: 'File content does not match its extension. Please upload a valid file.' },
        { status: 400 }
      );
    }
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('BREVO_API_KEY environment variable is not set');
    return Response.json({ error: 'Unable to process request. Please try again later.' }, { status: 500 });
  }

  const templateParams = sanitizeParams({
    COMPANY_NAME: companyName,
    CONTACT_PERSON: contactPerson,
    EMAIL: email,
    PHONE: phone,
    INDUSTRY: industry,
    PARTNERSHIP_TYPE: partnershipType,
    MESSAGE: message ?? '',
  });

  const headers = {
    'accept': 'application/json',
    'api-key': apiKey,
    'content-type': 'application/json',
  };

  try {
    const notificationPayload: Record<string, unknown> = {
      to: [{ email: 'info@alfecofoundation.com', name: 'Alfeco Foundation' }],
      templateId: PARTNERSHIP_NOTIFICATION_TEMPLATE_ID,
      params: templateParams,
    };

    if (file) {
      notificationPayload.attachment = [
        { content: file.content, name: file.name },
      ];
    }

    const [confirmationResult, notificationResult] = await Promise.allSettled([
      fetch(BREVO_API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          to: [{ email, name: contactPerson }],
          templateId: PARTNERSHIP_CONFIRMATION_TEMPLATE_ID,
          params: templateParams,
        }),
      }),
      fetch(BREVO_API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(notificationPayload),
      }),
    ]);

    if (confirmationResult.status === 'rejected') {
      console.error('Confirmation email failed:', confirmationResult.reason);
    }
    if (notificationResult.status === 'rejected') {
      console.error('Notification email failed:', notificationResult.reason);
    }

    return Response.json({ success: true });
  } catch (err: unknown) {
    console.error('Email send error:', err instanceof Error ? err.message : err);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
