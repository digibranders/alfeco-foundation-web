// Brevo Template IDs
const CONTACT_CONFIRMATION_TEMPLATE_ID = 53; // alfeco-contact-confirmation
const CONTACT_NOTIFICATION_TEMPLATE_ID = 52; // alfeco-contact-notification

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!EMAIL_REGEX.test(email)) {
    return Response.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'Email service not configured' }, { status: 500 });
  }

  const templateParams = {
    NAME: name,
    EMAIL: email,
    MESSAGE: message,
  };

  try {
    // 1. Send confirmation email to the sender
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        to: [{ email, name }],
        templateId: CONTACT_CONFIRMATION_TEMPLATE_ID,
        params: templateParams,
      }),
    });

    // 2. Send notification email to Alfeco Foundation
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        to: [{ email: 'info@alfecofoundation.com', name: 'Alfeco Foundation' }],
        templateId: CONTACT_NOTIFICATION_TEMPLATE_ID,
        params: templateParams,
      }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
