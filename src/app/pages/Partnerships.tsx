import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { CheckCircle2, Send, ArrowLeft, GraduationCap, Calendar, Package, Handshake, Upload, X } from 'lucide-react';
import { Link } from 'react-router';

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
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value);
      });
      if (file) {
        payload.append('file', file);
      }

      const res = await fetch('/api/partnerships', {
        method: 'POST',
        body: payload,
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
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center py-24">
          <FadeIn>
            <div className="bg-white rounded-[40px] p-12 md:p-16 shadow-playful">
              <div className="w-20 h-20 rounded-full bg-[#E8AB36]/10 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-[#E8AB36]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-6">Thank You!</h2>
              <p className="text-xl text-gray-500 mb-8">
                Your partnership inquiry has been received. We've sent a confirmation email to <strong>{formData.email}</strong>. Our partnerships team will review your inquiry and respond within 2-3 business days.
              </p>
              <Link to="/get-involved" className="playful-btn inline-flex items-center gap-2 bg-[#E8AB36] text-[#1A1A1A] font-bold py-4 px-8 rounded-full uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white">
                <ArrowLeft className="w-5 h-5" /> Back to Get Involved
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EBF3F5] pt-12 pb-24 font-sans text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Back link */}
        <FadeIn>
          <Link to="/get-involved" className="inline-flex items-center gap-2 text-[#E8AB36] font-bold mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Get Involved
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-semibold text-[#1A1A1A] mb-6">Corporate Partnerships</h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto">
            Partner with us to create measurable social impact while aligning with your ESG and CSI objectives.
          </p>
        </FadeIn>

        {/* Partnership Opportunities */}
        <FadeIn className="mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-10 text-center">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNERSHIP_OPPORTUNITIES.map((opp, i) => (
              <FadeIn key={opp.title} delay={0.1 * (i + 1)}>
                <div className="bg-white rounded-[32px] p-8 h-full flex gap-5 playful-card shadow-playful hover:shadow-playful-hover">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${opp.color}15` }}
                  >
                    <opp.icon className="w-7 h-7" style={{ color: opp.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{opp.title}</h3>
                    <p className="text-gray-500">{opp.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Corporate Inquiry Form */}
        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-10 text-center">Corporate Inquiry Form</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-[40px] p-8 md:p-12 shadow-playful space-y-8">

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                  Company Name <span className="text-[#C1272D]">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#E8AB36] focus:outline-none transition-colors text-lg"
                  placeholder="Your company name"
                />
              </div>

              {/* Contact Person */}
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                  Contact Person <span className="text-[#C1272D]">*</span>
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  required
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#E8AB36] focus:outline-none transition-colors text-lg"
                  placeholder="Full name of contact person"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                    Email <span className="text-[#C1272D]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#E8AB36] focus:outline-none transition-colors text-lg"
                    placeholder="email@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                    Phone <span className="text-[#C1272D]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#E8AB36] focus:outline-none transition-colors text-lg"
                    placeholder="+27 XXX XXX XXXX"
                  />
                </div>
              </div>

              {/* Industry */}
              <div>
                <label htmlFor="industry" className="block text-sm font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                  Industry <span className="text-[#C1272D]">*</span>
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#E8AB36] focus:outline-none transition-colors text-lg"
                  placeholder="e.g. Mining, Financial Services, Technology"
                />
              </div>

              {/* Type of Partnership */}
              <div>
                <label htmlFor="partnershipType" className="block text-sm font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                  Type of Partnership <span className="text-[#C1272D]">*</span>
                </label>
                <select
                  id="partnershipType"
                  name="partnershipType"
                  required
                  value={formData.partnershipType}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#E8AB36] focus:outline-none transition-colors text-lg bg-white"
                >
                  <option value="">Select partnership type</option>
                  {PARTNERSHIP_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                  Message <span className="text-gray-400">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#E8AB36] focus:outline-none transition-colors text-lg resize-none"
                  placeholder="Tell us about your partnership vision or any proposals..."
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">
                  Upload Document <span className="text-gray-400">(Optional — company profile or proposal, max 10MB)</span>
                </label>
                {file ? (
                  <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border-2 border-[#E8AB36] bg-[#E8AB36]/5">
                    <Upload className="w-5 h-5 text-[#E8AB36] shrink-0" />
                    <span className="text-[#1A1A1A] font-medium truncate flex-grow">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="text-gray-400 hover:text-[#C1272D] shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <label className="flex items-center justify-center gap-3 px-6 py-8 rounded-2xl border-2 border-dashed border-gray-300 cursor-pointer hover:border-[#E8AB36] transition-colors">
                    <Upload className="w-6 h-6 text-gray-400" />
                    <span className="text-gray-500 font-medium">Click to upload a file (PDF, DOC, DOCX)</span>
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
                <div className="bg-[#C1272D]/10 text-[#C1272D] px-6 py-4 rounded-2xl font-medium">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="playful-btn w-full inline-flex items-center justify-center gap-3 bg-[#E8AB36] text-[#1A1A1A] font-bold py-5 px-8 rounded-full uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {submitting ? 'Submitting...' : (
                  <>
                    <Send className="w-5 h-5" /> Submit Inquiry
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
