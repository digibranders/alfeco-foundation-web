import React from 'react';
import { ArrowRight, GraduationCap, CheckCircle2, Download, FileText, Calendar, ClipboardCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { FadeIn } from '../../components/FadeIn';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import CountUp from 'react-countup';

const BLOCKS_IMG = "/bursary.png";
const AWARD_IMG = "https://images.unsplash.com/photo-1746122097999-31518d837ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function BursaryProgramme() {
  return (
    <div className="min-h-screen bg-[#EBF3F5] pt-12 pb-24 font-sans text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Breadcrumb */}
        <FadeIn>
          <div className="flex items-center gap-2 text-sm text-[#7E8083] mb-8">
            <Link to="/pillars" className="hover:text-[#C1272D] transition-colors">Our Pillars</Link>
            <span>/</span>
            <Link to="/pillars/education" className="hover:text-[#C1272D] transition-colors">Education & Development</Link>
            <span>/</span>
            <span className="text-[#C1272D] font-bold">Bursary Programme</span>
          </div>
        </FadeIn>

        {/* Page Title */}
        <FadeIn className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-semibold text-[#1A1A1A] mb-6">
            Bursary <span className="text-[#48B2A9]">Programme</span>
          </h1>
        </FadeIn>

        {/* Hero Section: About + Image + How to Apply */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">

          {/* About the Programme */}
          <FadeIn delay={0.1}>
            <div className="bg-[#48B2A9] rounded-[40px] p-8 md:p-10 text-white h-full flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-6">About the Programme</h2>
              <p className="text-white/90 leading-relaxed">
                The Alfeco Foundation Bursary Programme offers financial assistance to students in diverse fields of study, helping to remove financial barriers to education. Open to dedicated and hardworking students, the bursary covers disciplines such as Engineering, Finance, Marketing, and more. The selection process takes into account financial need, academic performance, and personal motivation. Awarded for one academic year, the bursary supports education and skills development that align with local economic priorities.
              </p>
            </div>
          </FadeIn>

          {/* Hero Image */}
          <FadeIn delay={0.2}>
            <div className="rounded-[40px] overflow-hidden aspect-[4/3] lg:aspect-auto h-full min-h-[300px]">
              <ImageWithFallback src="https://images.unsplash.com/photo-1686213011624-8578b598ef0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Bursary Programme recipients" className="w-full h-full object-cover" />
            </div>
          </FadeIn>

          {/* How to Apply */}
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-[40px] p-8 md:p-10 h-full flex flex-col border-2 border-[#1A1A1A]/5">
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6 text-left">How to Apply</h2>

              <p className="text-gray-700 mb-4">
                Complete the official bursary application form. Submit the following required documents:
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Certified copy of your ID",
                  "Academic records",
                  "Proof of registration",
                  "Proof of residence",
                  "Motivation letter"
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A]">
                    <CheckCircle2 className="w-4 h-4 text-[#48B2A9] shrink-0" /> {doc}
                  </li>
                ))}
              </ul>

              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-[#E8AB36] shrink-0 mt-0.5" />
                  <span><span className="font-bold text-[#1A1A1A]">Application period:</span> August to January</span>
                </div>
                <div className="flex items-start gap-2">
                  <ClipboardCheck className="w-4 h-4 text-[#E8AB36] shrink-0 mt-0.5" />
                  <span><span className="font-bold text-[#1A1A1A]">Review period:</span> February to March</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-2">
                Bursary is awarded for one academic year based on:
              </p>
              <ul className="space-y-1 mb-8">
                {["Financial need", "Academic performance", "Motivation letter"].map((item, i) => (
                  <li key={i} className="text-sm font-bold text-[#1A1A1A] pl-2">
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white font-bold py-3 px-6 rounded-full text-xs uppercase tracking-widest hover:bg-[#C1272D] transition-colors self-center whitespace-nowrap"
              >
                <Download className="w-4 h-4" /> Download Application
              </a>
            </div>
          </FadeIn>
        </div>

        {/* What We Have Done */}
        <FadeIn className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-semibold text-[#1A1A1A]">
            What We Have <span className="text-[#48B2A9]">Done</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Left Image */}
          <FadeIn delay={0.1} className="lg:col-span-3 flex">
            <div className="rounded-[40px] overflow-hidden w-full">
              <ImageWithFallback src={BLOCKS_IMG} alt="Education development" className="w-full h-full object-cover aspect-square" />
            </div>
          </FadeIn>

          {/* Center Text */}
          <FadeIn delay={0.2} className="lg:col-span-6 flex">
            <div className="bg-white rounded-[40px] p-8 md:p-12 text-center w-full flex flex-col items-center justify-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The Alfeco Foundation has awarded over 260 bursaries for the 2023/2024 academic year, supporting students across various fields of study. Committed to education and skills development, the foundation ensures that financial barriers do not hinder learning, helping students at all levels pursue their academic and career goals.
              </p>

              {/* Stat */}
              <div className="inline-flex flex-col items-center bg-[#48B2A9] rounded-[32px] px-12 py-8 text-white">
                <div className="text-6xl md:text-7xl font-extrabold leading-none">
                  <CountUp
                    end={500}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest mt-2 text-white/90">bursaries awarded</p>
              </div>
            </div>
          </FadeIn>

          {/* Right Image */}
          <FadeIn delay={0.3} className="lg:col-span-3 flex">
            <div className="rounded-[40px] overflow-hidden w-full">
              <ImageWithFallback src={AWARD_IMG} alt="Student receiving award" className="w-full h-full object-cover aspect-square" />
            </div>
          </FadeIn>
        </div>

        {/* Additional Info Cards */}


        {/* CTA */}
        <FadeIn>
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white font-bold py-3 px-6 rounded-full text-xs uppercase tracking-widest hover:bg-[#C1272D] transition-colors self-center whitespace-nowrap"
            >
              <Download className="w-4 h-4" /> Download Application
            </a>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}