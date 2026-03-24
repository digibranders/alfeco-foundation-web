import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Youtube, Instagram, Send, MessageCircle, Clock, Sparkles, Heart, ArrowRight, Star } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

const TEAM_IMG = "https://images.unsplash.com/photo-1690383922983-90d7a4658ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMGRpdmVyc2UlMjB0ZWFtJTIwbWVldGluZyUyMHNtaWxpbmd8ZW58MXx8fHwxNzcyNzAzMjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const CONTACT_CARDS = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '29 Autumn Street, Edenburg, Sandton, 2128',
    bg: '#48B2A9',
    iconBg: 'bg-white/20',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '011-908 9440',
    bg: '#E8AB36',
    iconBg: 'bg-white/20',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@alfecofoundation.com',
    bg: '#C1272D',
    iconBg: 'bg-white/20',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Fri: 8:00 AM – 5:00 PM',
    bg: '#1A1A1A',
    iconBg: 'bg-white/15',
  },
];

const SOCIALS = [
  { icon: Facebook, href: '#', label: 'Facebook', bg: '#48B2A9' },
  { icon: Twitter, href: '#', label: 'Twitter', bg: '#E8AB36' },
  { icon: Youtube, href: '#', label: 'YouTube', bg: '#C1272D' },
  { icon: Instagram, href: 'https://www.instagram.com', label: 'Instagram', bg: '#48B2A9' },
];

function FloatingShape({ className, color, delay = 0 }: { className: string; color: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{ background: color }}
      animate={{
        y: [0, -18, 0],
        rotate: [0, 8, -8, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

function FloatingStar({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [0, -12, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Star className="w-full h-full" />
    </motion.div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-[#1A1A1A] font-sans">

      {/* ── Hero Section — Colorful ── */}
      <div className="relative pt-20 pb-32 px-6 md:px-12 overflow-hidden" style={{ background: 'linear-gradient(135deg, #48B2A9 0%, #3A9B93 40%, #2D8A82 100%)' }}>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 mb-8 border border-white/20">
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">We'd Love to Hear from You</span>
            </div>
          </FadeIn>

          <FadeIn direction="down" delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6">
              Let's <span className="text-[#E8AB36]">Connect</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-10">
              Whether you want to partner with us, volunteer your time, or simply learn more about our work — no cause is too small or too big for Alfeco Foundation.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact-form" className="playful-btn inline-flex items-center gap-2 bg-[#E8AB36] text-[#1A1A1A] font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm hover:shadow-lg">
                <Send className="w-4 h-4" /> Send a Message
              </a>
              <a href="tel:011-9089440" className="playful-btn inline-flex items-center gap-2 bg-white/15 text-white font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm backdrop-blur-sm hover:bg-white/25 border border-white/20">
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Straight bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0H1440V80H0V0Z" fill="#EBF3F5" />
          </svg>
        </div>
      </div>

      {/* ── Contact Info Cards — Bold Colors ── */}
      <div className="relative bg-[#EBF3F5] pb-20 px-6 md:px-12 -mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <FadeIn key={card.label} delay={0.1 * i} scale>
                  <motion.div
                    className="playful-card rounded-[32px] p-7 cursor-default h-full text-white relative overflow-hidden"
                    style={{ background: card.bg }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {/* Decorative circle */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/5 rounded-full" />

                    <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-5 relative z-10`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-bold text-white mb-1 relative z-10">{card.label}</p>
                    <p className="text-white/75 text-sm relative z-10">{card.value}</p>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Google Maps Embed ── */}
      <div className="relative bg-[#EBF3F5] pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="overflow-hidden rounded-[32px] shadow-lg" style={{ height: '450px' }}>
              <iframe
                title="Alfeco Foundation Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.openstreetmap.org/export/embed.html?bbox=28.0412%2C-26.0933%2C28.0612%2C-26.0733&layer=mapnik&marker=-26.0833%2C28.0512"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── Form + Image Section ── */}
      <div id="contact-form" className="relative py-24 px-6 md:px-12 overflow-hidden" style={{ background: 'linear-gradient(180deg, #EBF3F5 0%, #ffffff 30%, #EBF3F5 100%)' }}>
        {/* Colorful decorative blobs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#48B2A9]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-[#E8AB36]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-[5%] w-64 h-64 bg-[#C1272D]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

            {/* Left — Form */}
            <FadeIn delay={0.1} direction="right">
              <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-playful h-full flex flex-col border-2 border-[#48B2A9]/15">
                <div className="inline-flex items-center gap-2 bg-[#E8AB36]/15 rounded-full px-4 py-1.5 mb-6 self-start">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8AB36]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E8AB36]">Send a Message</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-2">
                  Drop Us a <span className="text-[#48B2A9]">Line</span>
                </h2>
                <p className="text-[#1A1A1A]/50 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <form className="space-y-5 flex-1 flex flex-col" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-[#EBF3F5] border-2 border-transparent rounded-2xl focus:ring-0 focus:border-[#48B2A9] outline-none py-4 px-5 text-[#1A1A1A] placeholder:text-gray-400 transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-[#EBF3F5] border-2 border-transparent rounded-2xl focus:ring-0 focus:border-[#48B2A9] outline-none py-4 px-5 text-[#1A1A1A] placeholder:text-gray-400 transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <textarea
                      rows={5}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full h-full min-h-[140px] bg-[#EBF3F5] border-2 border-transparent rounded-2xl focus:ring-0 focus:border-[#48B2A9] outline-none py-4 px-5 text-[#1A1A1A] placeholder:text-gray-400 transition-all resize-none"
                    />
                  </div>

                  <p className="text-xs text-gray-400">
                    By submitting, you agree to the processing of personal data by Alfeco Foundation as described in the{' '}
                    <a href="#" className="underline hover:text-[#E8AB36] transition-colors">Privacy Statement</a>.
                  </p>

                  {error && (
                    <div className="bg-[#C1272D]/10 text-[#C1272D] px-5 py-3 rounded-2xl text-sm font-medium">
                      {error}
                    </div>
                  )}

                  <div>
                    {submitted ? (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-2 bg-[#48B2A9] text-white font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm"
                      >
                        <Heart className="w-4 h-4" /> Message Sent!
                      </motion.div>
                    ) : (
                      <button
                        type="submit"
                        disabled={submitting}
                        className="playful-btn inline-flex items-center gap-2 bg-[#C1272D] text-white font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="w-4 h-4" /> {submitting ? 'Sending...' : 'Submit'}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </FadeIn>

            {/* Right — Image + Social Strip */}
            <FadeIn delay={0.2} direction="left">
              <div className="flex flex-col gap-6 h-full">
                {/* Image with colorful border accent */}
                <div className="rounded-[40px] overflow-hidden flex-1 min-h-[280px] relative group ring-4 ring-[#E8AB36]/20 ring-offset-4 ring-offset-white">
                  <ImageWithFallback
                    src={TEAM_IMG}
                    alt="Alfeco Foundation team"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-[#48B2A9]/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-lg">Our doors are always open</p>
                    <p className="text-white/70 text-sm">Come visit us in Sandton, Johannesburg</p>
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#E8AB36] rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ── CTA Banner — Multi-Color ── */}
      <div className="bg-[#EBF3F5] py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn scale>
            <div className="relative rounded-[40px] p-10 md:p-16 text-center overflow-hidden bg-[#48B2A9]">
              {/* Decorative circles */}
              <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
              <div className="absolute top-1/2 right-[15%] w-20 h-20 bg-white/10 rounded-full" />
              <div className="absolute top-[20%] right-[12%] w-12 h-12 bg-white/15 rounded-full" />
              <div className="absolute bottom-[25%] left-[25%] w-8 h-8 bg-white/10 rounded-full" />

              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-block mb-6"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
                  Ready to Make a Difference?
                </h2>
                <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
                  Join thousands of others who are helping us build stronger communities across South Africa.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="/get-involved"
                    className="playful-btn inline-flex items-center gap-2 bg-white text-[#48B2A9] font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm hover:shadow-lg"
                  >
                    Get Involved <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:info@alfecofoundation.com"
                    className="playful-btn inline-flex items-center gap-2 bg-white/15 text-white font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm hover:bg-white/25 border border-white/20"
                  >
                    <Mail className="w-4 h-4" /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}