import type { VercelRequest, VercelResponse } from '@vercel/node';

// -----------------------------------------------------------------
// Brevo Template IDs — replace these with your actual template IDs
// from the Brevo dashboard (Campaigns → Templates)
// -----------------------------------------------------------------
const PARTNERSHIP_CONFIRMATION_TEMPLATE_ID = 0; // Confirmation email sent to the partner
const PARTNERSHIP_NOTIFICATION_TEMPLATE_ID = 0; // Notification email sent to Alfeco Foundation

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const contentType = req.headers['content-type'] || '';

  let companyName: string, contactPerson: string, email: string, phone: string;
  let industry: string, partnershipType: string, message: string;

  if (contentType.includes('application/json')) {
    ({ companyName, contactPerson, email, phone, industry, partnershipType, message } = req.body);
  } else {
    // Handle multipart/form-data — Vercel parses the body fields
    companyName = req.body?.companyName;
    contactPerson = req.body?.contactPerson;
    email = req.body?.email;
    phone = req.body?.phone;
    industry = req.body?.industry;
    partnershipType = req.body?.partnershipType;
    message = req.body?.message;
  }

  if (!companyName || !contactPerson || !email || !phone || !industry || !partnershipType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service not configured' });
  }

  // Shared template params — use {{ params.COMPANY_NAME }} etc. in your Brevo templates
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
        templateId: PARTNERSHIP_NOTIFICATION_TEMPLATE_ID,
        params: templateParams,
      }),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
