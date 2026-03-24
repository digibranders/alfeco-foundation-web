'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Wrench, Heart, CheckCircle2, Sparkles } from 'lucide-react';
import { FadeIn } from '../../components/FadeIn';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const HERO_IMG = "https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const BURSARY_IMG = "https://images.unsplash.com/photo-1659080907097-6153cd4ff69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const SKILLS_IMG = "https://images.unsplash.com/photo-1768796370577-c6e8b708b980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const REVIVE_IMG = "https://images.unsplash.com/photo-1643214410415-de1976ad74ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const programmes = [
  {
    title: "Bursary Programme",
    path: "/pillars/education/bursary",
    img: BURSARY_IMG,
    icon: GraduationCap,
    color: "#C1272D",
    description: "Providing financial support and mentorship to deserving students, enabling them to access quality education and unlock their full potential.",
  },
  {
    title: "Skills Development Programme",
    path: "/pillars/education/skills",
    img: SKILLS_IMG,
    icon: Wrench,
    color: "#48B2A9",
    description: "Equipping individuals with practical, market-relevant skills through vocational training, workshops, and hands-on learning opportunities.",
  },
  {
    title: "Revive & Thrive Programme",
    path: "/pillars/education/revive",
    img: REVIVE_IMG,
    icon: Heart,
    color: "#E8AB36",
    description: "A holistic programme designed to rehabilitate, empower, and reintegrate individuals into communities through education, wellness, and support.",
  },
];

export function Education() {
  return (
    <div className="min-h-screen bg-[#EBF3F5] pt-12 pb-24 font-sans text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 mb-6 shadow-playful">
              <Sparkles className="w-4 h-4 text-[#C1272D]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/60">Our Pillars</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-semibold text-[#1A1A1A] mb-6 leading-[0.95]">
              Education & <span className="gradient-text-teal">Development</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium mb-8">
              Education is the cornerstone of empowerment. At the Alfeco Foundation, we believe that every individual deserves access to quality education and the tools to develop their potential — regardless of background or circumstance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-involved" className="playful-btn inline-flex items-center gap-2 bg-[#1A1A1A] text-white font-bold py-4 px-8 rounded-full uppercase tracking-widest hover:bg-[#C1272D]">
                Get Involved <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="rounded-[40px] overflow-hidden aspect-[4/3] shadow-premium playful-card hover:shadow-playful-hover">
              <ImageWithFallback src={HERO_IMG} alt="Education" className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        </div>

        {/* Overview */}
        <FadeIn>
          <div className="bg-white rounded-[40px] p-8 md:p-16 mb-20 shadow-premium">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-8">Our Approach</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-4xl">
              <p>
                We invest in people from the ground up — from primary school learners to young professionals entering the workforce. Our education and development programmes are designed to bridge the gap between potential and opportunity.
              </p>
              <p>
                Through bursaries, skills training, and holistic development initiatives, we create pathways for individuals to grow with confidence, dignity, and purpose. Every programme is built on the understanding that sustainable change begins with knowledge.
              </p>
            </div>
            <div className="bg-[#EBF3F5] p-8 rounded-[32px] mt-8 border-l-4 border-[#48B2A9] shadow-playful">
              <p className="font-bold text-[#1A1A1A] mb-4">Our education initiatives focus on:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Access to quality education",
                  "Financial support through bursaries",
                  "Vocational and skills training",
                  "Mentorship and career guidance",
                  "Holistic personal development",
                  "Community-based learning centres"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-bold text-[#48B2A9]">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" /> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Programmes */}
        <FadeIn className="mb-8">
          <h2 className="text-4xl md:text-6xl font-semibold text-[#1A1A1A] mb-4">Our Programmes</h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl">
            Three flagship programmes driving education and development across South Africa.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programmes.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.15} scale>
                <Link
                  href={prog.path}
                  className="group bg-white rounded-[40px] overflow-hidden h-full flex flex-col playful-card shadow-playful hover:shadow-playful-hover block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageWithFallback src={prog.img} alt={prog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl text-white flex items-center justify-center shadow-lg" style={{ backgroundColor: prog.color }}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-3 group-hover:text-[#48B2A9] transition-colors">{prog.title}</h3>
                    <p className="text-gray-600 font-medium mb-6 flex-grow">{prog.description}</p>
                    <div className="flex items-center gap-2 text-[#1A1A1A] font-bold uppercase tracking-widest text-sm group-hover:text-[#C1272D] group-hover:gap-4 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </div>
  );
}