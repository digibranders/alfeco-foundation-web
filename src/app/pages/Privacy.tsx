'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Mail } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const LAST_UPDATED = 'April 17, 2026';

const SECTIONS = [
  {
    title: 'Introduction',
    body: (
      <p>
        The Alfeco Foundation (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy and
        is committed to protecting the personal information you share with us. This Privacy Policy
        explains how we collect, use, store, and safeguard your information when you visit
        alfecofoundation.com or interact with our programmes.
      </p>
    ),
  },
  {
    title: 'Information We Collect',
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Contact details</strong> you provide through our forms — name, email address,
          phone number, and message content.
        </li>
        <li>
          <strong>Volunteer and partnership information</strong> — role preferences, skills,
          organisation, and any supporting details you submit.
        </li>
        <li>
          <strong>Donation and pledge information</strong> — the amount, cause selected, and
          contact details required to process and acknowledge your contribution.
        </li>
        <li>
          <strong>Technical information</strong> collected automatically — IP address, browser
          type, device information, and pages visited — used to improve the site.
        </li>
      </ul>
    ),
  },
  {
    title: 'How We Use Your Information',
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>To respond to enquiries and follow up on volunteer, partnership, and donation requests.</li>
        <li>To send transactional emails (confirmations, thank-you notes, receipts).</li>
        <li>To share updates about our programmes if you have opted in to receive them.</li>
        <li>To improve the performance, security, and accessibility of our website.</li>
        <li>To comply with legal and regulatory obligations in South Africa.</li>
      </ul>
    ),
  },
  {
    title: 'Legal Basis (POPIA)',
    body: (
      <p>
        We process personal information in accordance with the Protection of Personal Information
        Act, 2013 (POPIA). We rely on your consent, the performance of a task in the public
        interest, or our legitimate interests as a non-profit organisation as the lawful basis for
        processing.
      </p>
    ),
  },
  {
    title: 'Sharing Your Information',
    body: (
      <p>
        We do not sell your personal information. We only share it with trusted service providers
        who help us operate — for example, email delivery (Brevo) and hosting partners — and only
        to the extent necessary. These providers are bound by confidentiality obligations.
      </p>
    ),
  },
  {
    title: 'Data Retention',
    body: (
      <p>
        We keep your information only for as long as it is needed for the purpose it was collected,
        or as required by law. You may request deletion of your information at any time by
        contacting us.
      </p>
    ),
  },
  {
    title: 'Your Rights',
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Access the personal information we hold about you.</li>
        <li>Request correction or deletion of your information.</li>
        <li>Object to or restrict certain processing activities.</li>
        <li>Withdraw consent for marketing communications at any time.</li>
      </ul>
    ),
  },
  {
    title: 'Cookies',
    body: (
      <p>
        Our website uses minimal cookies required to operate the site and measure aggregate
        traffic. You can control cookies through your browser settings.
      </p>
    ),
  },
  {
    title: 'Changes to This Policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time. Updates will be posted on this page
        with a revised &quot;last updated&quot; date.
      </p>
    ),
  },
];

export function Privacy() {
  return (
    <div className="bg-[#EBF3F5]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#48B2A9]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8AB36]/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#48B2A9]/15 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-3.5 h-3.5 text-[#48B2A9]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#48B2A9]">Privacy Policy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-[#1A1A1A] leading-tight mb-4">
              Your privacy matters to us.
            </h1>
            <p className="text-[#1A1A1A]/70 text-lg max-w-2xl">
              How the Alfeco Foundation collects, uses, and protects your personal information.
            </p>
            <p className="mt-6 text-xs uppercase tracking-widest text-[#1A1A1A]/50">
              Last updated: {LAST_UPDATED}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-[32px] shadow-[0_1px_40px_rgba(0,0,0,0.04)] p-8 md:p-12 space-y-10">
            {SECTIONS.map(({ title, body }) => (
              <FadeIn key={title}>
                <article>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-4">{title}</h2>
                  <div className="text-[#1A1A1A]/75 leading-relaxed text-base">{body}</div>
                </article>
              </FadeIn>
            ))}

            <FadeIn>
              <article className="border-t border-[#1A1A1A]/10 pt-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-4">Contact Us</h2>
                <p className="text-[#1A1A1A]/75 leading-relaxed mb-6">
                  For any questions about this Privacy Policy, or to exercise your rights, please
                  reach out to us.
                </p>
                <Link
                  href="/contact"
                  className="playful-btn inline-flex items-center gap-2 bg-[#1A1A1A] text-white font-bold py-3 px-8 rounded-full uppercase tracking-widest text-sm hover:bg-[#C1272D]"
                >
                  <Mail className="w-4 h-4" /> Contact Us
                </Link>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
