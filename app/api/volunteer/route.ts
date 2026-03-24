// Brevo Template IDs
const VOLUNTEER_CONFIRMATION_TEMPLATE_ID = 50; // alfeco-volunteer-confirmation
const VOLUNTEER_NOTIFICATION_TEMPLATE_ID = 51; // alfeco-volunteer-notification

export async function POST(request: Request) {
  const body = await request.json();
  const { fullName, email, phone, area, interests, availability, message } = body;

  if (!fullName || !email || !phone || !area || !availability) {
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

  const interestsStr = Array.isArray(interests) ? interests.join(', ') : interests;

  const templateParams = {
    FULL_NAME: fullName,
    EMAIL: email,
    PHONE: phone,
    AREA: area,
    INTERESTS: interestsStr,
    AVAILABILITY: availability,
    MESSAGE: message || '',
  };

  try {
    // 1. Send confirmation email to the volunteer
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        to: [{ email, name: fullName }],
        templateId: VOLUNTEER_CONFIRMATION_TEMPLATE_ID,
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
        templateId: VOLUNTEER_NOTIFICATION_TEMPLATE_ID,
        params: templateParams,
      }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
