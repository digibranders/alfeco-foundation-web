// Brevo Template IDs
const PARTNERSHIP_CONFIRMATION_TEMPLATE_ID = 48; // alfeco-partnership-confirmation
const PARTNERSHIP_NOTIFICATION_TEMPLATE_ID = 49; // alfeco-partnership-notification

export async function POST(request: Request) {
  const body = await request.json();
  const { companyName, contactPerson, email, phone, industry, partnershipType, message, file } = body;

  if (!companyName || !contactPerson || !email || !phone || !industry || !partnershipType) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!EMAIL_REGEX.test(email)) {
    return Response.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];
  const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

  if (file && file.content && file.name) {
    const ext = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return Response.json({ error: 'Invalid file type. Only PDF, DOC, and DOCX files are accepted.' }, { status: 400 });
    }
    const estimatedSize = (file.content.length * 3) / 4;
    if (estimatedSize > MAX_FILE_SIZE_BYTES) {
      return Response.json({ error: 'File too large. Maximum size is 10MB.' }, { status: 400 });
    }
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'Email service not configured' }, { status: 500 });
  }

  const templateParams = {
    COMPANY_NAME: companyName,
    CONTACT_PERSON: contactPerson,
    EMAIL: email,
    PHONE: phone,
    INDUSTRY: industry,
    PARTNERSHIP_TYPE: partnershipType,
    MESSAGE: message || '',
  };

  try {
    // 1. Send confirmation email to the partner
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        to: [{ email, name: contactPerson }],
        templateId: PARTNERSHIP_CONFIRMATION_TEMPLATE_ID,
        params: templateParams,
      }),
    });

    // 2. Send notification email to Alfeco Foundation (with file attachment if provided)
    const notificationPayload: Record<string, unknown> = {
      to: [{ email: 'info@alfecofoundation.com', name: 'Alfeco Foundation' }],
      templateId: PARTNERSHIP_NOTIFICATION_TEMPLATE_ID,
      params: templateParams,
    };

    if (file && file.content && file.name) {
      notificationPayload.attachment = [
        { content: file.content, name: file.name },
      ];
    }

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify(notificationPayload),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
