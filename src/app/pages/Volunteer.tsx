import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { CheckCircle2, Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

const INTEREST_OPTIONS = [
  'Community outreach programmes',
  'Mentorship & tutoring',
  'Event coordination',
  'Skills-based volunteering',
  'Environmental clean-ups',
  'Food drives',
];

const AVAILABILITY_OPTIONS = [
  'Weekdays',
  'Weekends',
  'Evenings',
  'Flexible',
];

const inputClass = "w-full bg-[#EBF3F5] border-2 border-transparent rounded-2xl focus:ring-0 focus:border-[#48B2A9] outline-none py-3.5 px-5 text-[#1A1A1A] placeholder:text-gray-400 transition-all text-[15px]";

export function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    area: '',
    interests: [] as string[],
    availability: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
              <div className="w-16 h-16 rounded-full bg-[#48B2A9]/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#48B2A9]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Thank You!</h2>
              <p className="text-gray-500 mb-8">
                Your volunteer application has been received. We've sent a confirmation email to <strong className="text-[#1A1A1A]">{formData.email}</strong>. Our team will be in touch shortly.
              </p>
              <Link to="/get-involved" className="playful-btn inline-flex items-center gap-2 bg-[#48B2A9] text-white font-bold py-3.5 px-8 rounded-full uppercase tracking-widest text-sm hover:bg-[#1A1A1A]">
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
      <div className="max-w-3xl mx-auto px-6 md:px-12">

        {/* Header */}
        <FadeIn className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4">Volunteer With Us</h1>
          <p className="text-gray-500 font-medium max-w-xl mx-auto">
            Lend your time, skills, and passion to our community programmes. Fill out the form below and we'll match you with opportunities that align with your interests.
          </p>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="bg-white rounded-[40px] p-8 md:p-10 shadow-playful space-y-5 border-2 border-[#48B2A9]/15">

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1.5">
                Full Name <span className="text-[#C1272D]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter your full name"
              />
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
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1.5">
                  Phone Number <span className="text-[#C1272D]">*</span>
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

            {/* Area / Location */}
            <div>
              <label htmlFor="area" className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1.5">
                Area / Location <span className="text-[#C1272D]">*</span>
              </label>
              <input
                type="text"
                id="area"
                name="area"
                required
                value={formData.area}
                onChange={handleChange}
                className={inputClass}
                placeholder="e.g. Sandton, Johannesburg"
              />
            </div>

            {/* Interests */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-3">
                Interests <span className="text-[#C1272D]">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {INTEREST_OPTIONS.map(interest => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border-2 text-left transition-all text-sm font-medium ${
                      formData.interests.includes(interest)
                        ? 'border-[#48B2A9] bg-[#48B2A9]/10 text-[#48B2A9]'
                        : 'border-transparent bg-[#EBF3F5] text-gray-500 hover:border-[#48B2A9]/30'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${formData.interests.includes(interest) ? 'text-[#48B2A9]' : 'text-gray-300'}`} />
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <label htmlFor="availability" className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1.5">
                Availability <span className="text-[#C1272D]">*</span>
              </label>
              <select
                id="availability"
                name="availability"
                required
                value={formData.availability}
                onChange={handleChange}
                className={`${inputClass} bg-[#EBF3F5]`}
              >
                <option value="">Select your availability</option>
                {AVAILABILITY_OPTIONS.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Optional Message */}
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
                placeholder="Tell us anything else you'd like us to know..."
              />
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
              className="playful-btn w-full inline-flex items-center justify-center gap-2 bg-[#48B2A9] text-white font-bold py-4 px-8 rounded-full uppercase tracking-widest text-sm hover:bg-[#1A1A1A] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : (
                <>
                  <Send className="w-4 h-4" /> Submit Application
                </>
              )}
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
