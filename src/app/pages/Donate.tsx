import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { CheckCircle2, ArrowLeft, Heart, CreditCard, Building2, QrCode, Smartphone } from 'lucide-react';
import { Link, useSearchParams } from 'react-router';

const SUGGESTED_AMOUNTS = [100, 500, 1000];

const PAYMENT_METHODS = [
  { icon: CreditCard, label: 'Card', description: 'Visa / Mastercard' },
  { icon: Building2, label: 'EFT', description: 'Bank Transfer' },
  { icon: QrCode, label: 'Snapscan', description: 'Scan & Pay' },
  { icon: Smartphone, label: 'PayFast', description: 'Secure Checkout' },
];

const inputClass = "w-full bg-[#EBF3F5] border-2 border-transparent rounded-2xl focus:ring-0 focus:border-[#C1272D] outline-none py-3.5 px-5 text-[#1A1A1A] placeholder:text-gray-400 transition-all text-[15px]";

export function Donate() {
  const [searchParams] = useSearchParams();
  const isSuccess = searchParams.get('success') === 'true';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    amount: '',
    customAmount: '',
    taxNumber: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAmountSelect = (amount: number) => {
    setFormData(prev => ({
      ...prev,
      amount: String(amount),
      customAmount: '',
    }));
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      amount: '',
      customAmount: e.target.value,
    }));
  };

  const selectedAmount = formData.amount ? Number(formData.amount) : (formData.customAmount ? Number(formData.customAmount) : 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAmount < 10) {
      setError('Please select or enter a donation amount (minimum R10).');
      return;
    }
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          amount: selectedAmount,
        }),
      });

      if (!res.ok) throw new Error('Failed to initiate payment');

      const data = await res.json();
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      }
    } catch {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#EBF3F5] pt-12 pb-24 font-sans text-[#1A1A1A]">
        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center py-24">
          <FadeIn>
            <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-playful">
              <div className="w-16 h-16 rounded-full bg-[#C1272D]/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#C1272D]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Thank You for Your Donation!</h2>
              <p className="text-gray-500 mb-4">
                Your generous contribution makes a real difference in the lives of those we serve. A confirmation email with your donation details has been sent.
              </p>
              <p className="text-sm text-gray-400 mb-8">
                A <strong className="text-[#1A1A1A]">Section 18A tax certificate</strong> will be issued and sent to your email address.
              </p>
              <Link to="/get-involved" className="playful-btn inline-flex items-center gap-2 bg-[#C1272D] text-white font-bold py-3.5 px-8 rounded-full uppercase tracking-widest text-sm hover:bg-[#1A1A1A]">
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
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4">Make a Donation</h1>
          <p className="text-gray-500 font-medium max-w-xl mx-auto">
            Together, we can make a difference. Your financial contribution helps us deliver impactful programmes and build a better future - one rand at a time
          </p>
        </FadeIn>

        {/* Payment Methods */}
        <FadeIn className="mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PAYMENT_METHODS.map((method) => (
              <div
                key={method.label}
                className="bg-white rounded-2xl p-4 text-center shadow-playful"
              >
                <method.icon className="w-6 h-6 mx-auto mb-2 text-[#C1272D]" />
                <p className="text-sm font-bold text-[#1A1A1A]">{method.label}</p>
                <p className="text-xs text-gray-400">{method.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Donation Form */}
        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="bg-white rounded-[40px] p-8 md:p-10 shadow-playful space-y-5 border-2 border-[#C1272D]/15">

            {/* Amount Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-3">
                Donation Amount <span className="text-[#C1272D]">*</span>
              </label>
              <div className="grid grid-cols-3 gap-3 mb-3">
                {SUGGESTED_AMOUNTS.map(amount => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3.5 rounded-2xl font-bold text-lg transition-all border-2 ${formData.amount === String(amount)
                        ? 'border-[#C1272D] bg-[#C1272D]/10 text-[#C1272D]'
                        : 'border-transparent bg-[#EBF3F5] text-[#1A1A1A] hover:border-[#C1272D]/30'
                      }`}
                  >
                    R{amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-[15px]">R</span>
                <input
                  type="number"
                  name="customAmount"
                  min="10"
                  value={formData.customAmount}
                  onChange={handleCustomAmountChange}
                  className={`${inputClass} pl-10`}
                  placeholder="Custom amount"
                />
              </div>
            </div>

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

            {/* Tax Number */}
            <div>
              <label htmlFor="taxNumber" className="block text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1.5">
                Tax Number <span className="text-gray-400 normal-case tracking-normal">(For Section 18A Certificate)</span>
              </label>
              <input
                type="text"
                id="taxNumber"
                name="taxNumber"
                value={formData.taxNumber}
                onChange={handleChange}
                className={inputClass}
                placeholder="e.g. 0123456789"
              />
            </div>

            {/* Section 18A Notice */}
            <div className="bg-[#C1272D]/5 rounded-2xl p-5 flex gap-3">
              <Heart className="w-5 h-5 text-[#C1272D] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-[#1A1A1A] mb-1">Section 18A Tax Certificate</p>
                <p className="text-xs text-gray-500">
                  A Section 18A certificate will be issued for your donation, allowing you to claim a tax deduction. The certificate will be emailed to the address provided above.
                </p>
              </div>
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
                placeholder="Dedicate your donation or leave a message..."
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
              className="playful-btn w-full inline-flex items-center justify-center gap-2 bg-[#C1272D] text-white font-bold py-4 px-8 rounded-full uppercase tracking-widest text-sm hover:bg-[#1A1A1A] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Processing...' : (
                <>
                  <Heart className="w-4 h-4" /> Donate R{selectedAmount > 0 ? selectedAmount.toLocaleString() : '...'}
                </>
              )}
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
