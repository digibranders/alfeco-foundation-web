import type { VercelRequest, VercelResponse } from '@vercel/node';

// -----------------------------------------------------------------
// Brevo Template IDs — replace these with your actual template IDs
// from the Brevo dashboard (Campaigns → Templates)
// -----------------------------------------------------------------
const VOLUNTEER_CONFIRMATION_TEMPLATE_ID = 50; // alfeco-volunteer-confirmation
const VOLUNTEER_NOTIFICATION_TEMPLATE_ID = 51; // alfeco-volunteer-notification

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, phone, area, interests, availability, message } = req.body;

  if (!fullName || !email || !phone || !area || !availability) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const interestsStr = Array.isArray(interests) ? interests.join(', ') : interests;

  // Shared template params — use {{ params.FULL_NAME }} etc. in your Brevo templates
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

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
