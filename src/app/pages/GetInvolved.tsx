import React from 'react';
import { ArrowRight, Heart, Users, HandCoins, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { FadeIn } from '../components/FadeIn';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const VOLUNTEER_IMG = "https://images.unsplash.com/photo-1694286068274-1058e6b04dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const DONATE_IMG = "https://images.unsplash.com/photo-1697665387559-253e7a645e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const PARTNER_IMG = "https://images.unsplash.com/photo-1758518729240-7162d07427b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function GetInvolved() {
  return (
    <div className="min-h-screen bg-[#EBF3F5] pt-12 pb-24 font-sans text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Page Header */}
        <FadeIn className="mb-20 text-center">
          
          <h1 className="text-6xl md:text-8xl font-semibold text-[#1A1A1A] mb-6">
            Get Involved
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto">
            Every hand extended, every heart opened, every contribution made brings us closer to a better tomorrow. Here's how you can join our mission.
          </p>
        </FadeIn>

        {/* Ways to Get Involved Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

          {/* Volunteer */}
          <FadeIn delay={0.1} scale>
            <div className="bg-white rounded-[40px] overflow-hidden group h-full flex flex-col playful-card shadow-playful hover:shadow-playful-hover">
              <div className="relative aspect-[16/9] overflow-hidden">
                <ImageWithFallback src={VOLUNTEER_IMG} alt="Volunteer with us" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="text-3xl font-semibold text-[#1A1A1A] mb-4">Volunteer With Us</h3>
                <p className="text-gray-500 mb-6 flex-grow">
                  Lend your time, skills, and passion to our community programmes. Whether it's mentoring youth, assisting at food drives, or supporting environmental clean-ups, your presence makes a tangible difference.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Community outreach programmes", "Mentorship & tutoring", "Event coordination", "Skills-based volunteering"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-bold text-[#48B2A9]">
                      <CheckCircle2 className="w-4 h-4 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/volunteer" className="playful-btn inline-flex items-center gap-2 bg-[#1A1A1A] text-white font-bold py-4 px-8 rounded-full uppercase tracking-widest hover:bg-[#48B2A9] self-start">
                  Sign Up <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Donate */}
          <FadeIn delay={0.2} scale>
            <div className="bg-white rounded-[40px] overflow-hidden group h-full flex flex-col playful-card shadow-playful hover:shadow-playful-hover">
              <div className="relative aspect-[16/9] overflow-hidden">
                <ImageWithFallback src={DONATE_IMG} alt="Donate" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="text-3xl font-semibold text-[#1A1A1A] mb-4">Make a Donation</h3>
                <p className="text-gray-500 mb-6 flex-grow">
                  Your financial contribution fuels our programmes and creates lasting impact. Every rand counts — from funding a child's education to providing meals for families in need.
                </p>
                <ul className="space-y-3 mb-8">
                  {["One-time or recurring donations", "Sponsor a learner's education", "Fund a feeding programme", "Support community infrastructure"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-bold text-[#C1272D]">
                      <CheckCircle2 className="w-4 h-4 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/donate" className="playful-btn inline-flex items-center gap-2 bg-[#C1272D] text-white font-bold py-4 px-8 rounded-full uppercase tracking-widest hover:bg-[#1A1A1A] self-start">
                  Donate Now <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Corporate Partnership - Full width */}
          <FadeIn delay={0.3} className="lg:col-span-2">
            <div className="bg-[#1A1A1A] rounded-[40px] overflow-hidden group flex flex-col md:flex-row playful-card">
              <div className="relative md:w-1/2 aspect-[16/9] md:aspect-auto overflow-hidden">
                <ImageWithFallback src={PARTNER_IMG} alt="Partner with us" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1A1A]/40 hidden md:block" />
                
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center md:w-1/2 text-white">
                <h3 className="text-3xl md:text-4xl font-semibold mb-4">Corporate Partnerships</h3>
                <p className="text-white/60 mb-6">
                  Align your brand with purpose. Partner with the Alfeco Foundation for CSI initiatives, employee engagement programmes, and co-branded community projects that create shared value.
                </p>
                <ul className="space-y-3 mb-8">
                  {["CSI programme alignment", "Employee volunteer days", "Co-branded initiatives", "Impact reporting & visibility"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-bold text-[#E8AB36]">
                      <CheckCircle2 className="w-4 h-4 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/partnerships" className="playful-btn inline-flex items-center gap-2 bg-[#E8AB36] text-[#1A1A1A] font-bold py-4 px-8 rounded-full uppercase tracking-widest hover:bg-white self-start">
                  Partner With Us <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}