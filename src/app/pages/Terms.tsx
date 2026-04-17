'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Mail } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const LAST_UPDATED = 'April 17, 2026';

const SECTIONS = [
  {
    title: 'Acceptance of Terms',
    body: (
      <p>
        By accessing or using alfecofoundation.com (the &quot;Site&quot;), you agree to be bound by
        these Terms of Use. If you do not agree, please do not use the Site.
      </p>
    ),
  },
  {
    title: 'About Us',
    body: (
      <p>
        The Alfeco Foundation is a non-profit organisation based in Sandton, South Africa, working
        across education, food security, women &amp; youth development, and conservation. Content on
        this Site is provided for informational purposes.
      </p>
    ),
  },
  {
    title: 'Use of the Site',
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>You agree to use the Site lawfully and respectfully.</li>
        <li>You will not attempt to disrupt, reverse engineer, or gain unauthorised access to the Site.</li>
        <li>You will not use the Site to transmit harmful, offensive, or misleading content.</li>
        <li>You will provide accurate information when submitting any form on the Site.</li>
      </ul>
    ),
  },
  {
    title: 'Intellectual Property',
    body: (
      <p>
        All content on the Site — text, images, logos, graphics, and design — is owned by or
        licensed to the Alfeco Foundation and is protected by applicable copyright and trademark
        laws. You may not reproduce, redistribute, or use any content without prior written
        permission, except for personal, non-commercial use.
      </p>
    ),
  },
  {
    title: 'Donations and Pledges',
    body: (
      <p>
        Donations and pledges made through the Site support our programmes. Contributions are
        voluntary and, where applicable, may qualify for a Section 18A tax certificate in South
        Africa. Refund requests for processing errors can be sent to{' '}
        <a href="mailto:info@alfecofoundation.com" className="text-[#C1272D] hover:underline">
          info@alfecofoundation.com
        </a>
        .
      </p>
    ),
  },
  {
    title: 'Volunteer and Partnership Applications',
    body: (
      <p>
        Submitting a volunteer or partnership application does not guarantee acceptance. The
        Foundation reserves the right to review, accept, or decline applications at its discretion
        and in line with programme needs.
      </p>
    ),
  },
  {
    title: 'Third-Party Links',
    body: (
      <p>
        The Site may link to third-party websites for convenience. We are not responsible for the
        content, policies, or practices of those websites and recommend reviewing their terms and
        privacy policies.
      </p>
    ),
  },
  {
    title: 'Disclaimer',
    body: (
      <p>
        The Site and its content are provided &quot;as is&quot; without warranties of any kind,
        express or implied. While we strive to keep information accurate and up to date, we do not
        guarantee completeness or reliability.
      </p>
    ),
  },
  {
    title: 'Limitation of Liability',
    body: (
      <p>
        To the maximum extent permitted by law, the Alfeco Foundation shall not be liable for any
        indirect, incidental, consequential, or special damages arising from your use of the Site.
      </p>
    ),
  },
  {
    title: 'Governing Law',
    body: (
      <p>
        These Terms are governed by the laws of the Republic of South Africa. Any disputes shall
        be subject to the exclusive jurisdiction of the South African courts.
      </p>
    ),
  },
  {
    title: 'Changes to These Terms',
    body: (
      <p>
        We may update these Terms from time to time. Continued use of the Site after changes are
        posted constitutes acceptance of the updated Terms.
      </p>
    ),
  },
];

export function Terms() {
  return (
    <div className="bg-[#EBF3F5]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8AB36]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C1272D]/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#E8AB36]/15 rounded-full px-4 py-1.5 mb-6">
              <FileText className="w-3.5 h-3.5 text-[#E8AB36]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8AB36]">Terms of Use</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-[#1A1A1A] leading-tight mb-4">
              The ground rules for using our site.
            </h1>
            <p className="text-[#1A1A1A]/70 text-lg max-w-2xl">
              Please read these Terms of Use carefully before using alfecofoundation.com.
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
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-4">Questions?</h2>
                <p className="text-[#1A1A1A]/75 leading-relaxed mb-6">
                  If you have any questions about these Terms, please get in touch.
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
