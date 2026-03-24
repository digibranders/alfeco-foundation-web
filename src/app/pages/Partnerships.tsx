'use client';

import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { CheckCircle2, Send, ArrowLeft, GraduationCap, Calendar, Package, Handshake, Upload, X } from 'lucide-react';
import Link from 'next/link';

const PARTNERSHIP_OPPORTUNITIES = [
  {
    icon: GraduationCap,
    title: 'Sponsoring Projects',
    description: 'Fund bursaries or school programmes that create pathways to education and opportunity for underprivileged learners.',
    color: '#48B2A9',
  },
  {
    icon: Calendar,
    title: 'Event Sponsorships',
    description: 'Partner with us on community events, fundraisers, and awareness campaigns that drive meaningful engagement.',
    color: '#E8AB36',
  },
  {
    icon: Package,
    title: 'Non-Monetary Contributions',
    description: 'Donate goods and services that support our programmes — from educational materials to professional expertise.',
    color: '#C1272D',
  },
  {
    icon: Handshake,
    title: 'Long Term CSI Partnerships',
    description: 'Establish an ongoing partnership with sustained impact, aligned reporting, and shared value creation.',
    color: '#1A1A1A',
  },
];

const PARTNERSHIP_TYPES = [
  'Sponsorship',
  'CSI Project',
  'Other',
];

const inputClass = "w-full bg-[#EBF3F5] border-2 border-transparent rounded-2xl focus:ring-0 focus:border-[#E8AB36] outline-none py-3.5 px-5 text-[#1A1A1A] placeholder:text-gray-400 transition-all text-[15px]";

export function Partnerships() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    partnershipType: '',
    message: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError('File size must be under 10MB.');
        return;
      }
      setFile(selectedFile);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      let fileData: { name: string; content: string } | undefined;
      if (file) {
        const buffer = await file.arrayBuffer();
        const base64 = btoa(
          new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        fileData = { name: file.name, content: base64 };
      }

      const res = await fetch('/api/partnerships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, file: fileData }),
      });

      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#EBF3F5] pt-12 pb-24 font-sans text-[#1A1A1A]">
        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center py-24">
          <FadeIn>
            <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-playful">
              <div className="w-16 h-16 rounded-full bg-[#E8AB36]/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#E8AB36]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Thank You!</h2>
              <p className="text-gray-500 mb-8">
                Your partnership inquiry has been received. We've sent a confirmation email to <strong className="text-[#1A1A1A]">{formData.email}</strong>. Our partnerships team will review your inquiry and respond within 2–3 business days.
              </p>
              <Link href="/get-involved" className="playful-btn inline-flex items-center gap-2 bg-[#E8AB36] text-[#1A1A1A] font-bold py-3.5 px-8 rounded-full uppercase tracking-widest text-sm hover:bg-[#1A1A1A] hover:text-white">
                <ArrowLeft className="w-4 h-4" /> Back to Get Involved
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EBF3F5] pt-12 pb-24 font-sans text-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Header */}
        <FadeIn className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4">Corporate Partnerships</h1>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Partner with us to create measurable social impact while aligning with your ESG and CSI objectives.
          </p>
        </FadeIn>

        {/* Partnership Opportunities */}
        <FadeIn className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-8 text-center">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PARTNERSHIP_OPPORTUNITIES.map((opp, i) => (
              <FadeIn key={opp.title} delay={0.1 * (i + 1)}>
                <div className="bg-white rounded-[28px] p-6 h-full flex gap-4 playful-card shadow-playful hover:shadow-playful-hover">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${opp.color}15` }}
                  >
                    <opp.icon className="w-6 h-6" style={{ color: opp.color }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">{opp.title}</h3>
                    <p className="text-gray-500 text-sm">{opp.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Corporate Inquiry Form */}
        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-8 text-center">Corporate Inquiry Form</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-[40px] p-8 md:p-10 shadow-playful space-y-5 border-2 border-[#E8AB36]/15">

              {/* Company Name & Contact Person */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1.5">
                    Company Name <span className="text-[#C1272D]">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="contactPerson" className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1.5">
                    Contact Person <span className="text-[#C1272D]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Full name"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1.5">
                    Email <span className="text-[#C1272D]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="email@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1.5">
                    Phone <span className="text-[#C1272D]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+27 XXX XXX XXXX"
                  />
                </div>
              </div>

              {/* Industry & Partnership Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="industry" className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1.5">
                    Industry <span className="text-[#C1272D]">*</span>
                  </label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="e.g. Mining, Technology"
                  />
                </div>
                <div>
                  <label htmlFor="partnershipType" className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1.5">
                    Type of Partnership <span className="text-[#C1272D]">*</span>
                  </label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    required
                    value={formData.partnershipType}
                    onChange={handleChange}
                    className={`${inputClass} bg-[#EBF3F5]`}
                  >
                    <option value="">Select type</option>
                    {PARTNERSHIP_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1.5">
                  Message <span className="text-gray-400 normal-case tracking-normal">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about your partnership vision or any proposals..."
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1.5">
                  Upload Document <span className="text-gray-400 normal-case tracking-normal">(Optional — max 10MB)</span>
                </label>
                {file ? (
                  <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#E8AB36]/10 border-2 border-[#E8AB36]/30">
                    <Upload className="w-4 h-4 text-[#E8AB36] shrink-0" />
                    <span className="text-[#1A1A1A] text-sm font-medium truncate flex-grow">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="text-gray-400 hover:text-[#C1272D] shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex items-center justify-center gap-2 px-5 py-5 rounded-2xl border-2 border-dashed border-gray-300 cursor-pointer hover:border-[#E8AB36] transition-colors bg-[#EBF3F5]">
                    <Upload className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400 text-sm font-medium">Click to upload (PDF, DOC, DOCX)</span>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {error && (
                <div className="bg-[#C1272D]/10 text-[#C1272D] px-5 py-3 rounded-2xl text-sm font-medium">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="playful-btn w-full inline-flex items-center justify-center gap-2 bg-[#E8AB36] text-[#1A1A1A] font-bold py-4 px-8 rounded-full uppercase tracking-widest text-sm hover:bg-[#1A1A1A] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting...' : (
                  <>
                    <Send className="w-4 h-4" /> Submit Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
