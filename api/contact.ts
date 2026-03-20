import type { VercelRequest, VercelResponse } from '@vercel/node';

// -----------------------------------------------------------------
// Brevo Template IDs — replace these with your actual template IDs
// from the Brevo dashboard (Campaigns → Templates)
// -----------------------------------------------------------------
const CONTACT_CONFIRMATION_TEMPLATE_ID = 0; // Confirmation email sent to the sender
const CONTACT_NOTIFICATION_TEMPLATE_ID = 0; // Notification email sent to Alfeco Foundation

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service not configured' });
  }

  // Template params — use {{ params.NAME }} etc. in your Brevo templates
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

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
