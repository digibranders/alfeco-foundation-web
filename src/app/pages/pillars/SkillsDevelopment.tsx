'use client';

import Link from 'next/link';
import { Download, Wrench, ArrowRight } from 'lucide-react';
import { FadeIn } from '../../components/FadeIn';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const skillsHeroImg = '/assets/skills-hero.png';

const VALVE_IMG = "https://images.unsplash.com/photo-1738918922725-d70c666ddccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const WELDING_IMG = "https://images.unsplash.com/photo-1673201159941-68fcdbbb4fa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const BOOTS_IMG = "https://images.unsplash.com/photo-1768158988512-ad31657fe5b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function SkillsDevelopment() {
  return (
    <div className="min-h-screen bg-[#48B2A9] pt-12 pb-24 font-sans text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Breadcrumb */}
        <FadeIn>
          <div className="flex items-center gap-2 text-sm text-white/70 mb-8">
            <Link href="/pillars" className="hover:text-white transition-colors">Our Pillars</Link>
            <span>/</span>
            <Link href="/pillars/education" className="hover:text-white transition-colors">Education & Development</Link>
            <span>/</span>
            <span className="text-white font-bold">Skills Development</span>
          </div>
        </FadeIn>

        {/* Page Title */}
        <FadeIn className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6">Skills Development Programme</h1>
        </FadeIn>

        {/* Top Section: About + Image + How to Apply */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">

          {/* About the Programme */}
          <FadeIn delay={0.1}>
            <div className="bg-white/15 backdrop-blur-sm rounded-[40px] p-8 md:p-10 text-white h-full flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-6">About the programme</h2>
              <p className="text-white/90 leading-relaxed">
                The Alfeco Foundation, through its Holdings Company Alfeco, provides skills development, mentorship and training programmes for individuals pursuing careers in STEM fields, with a strong focus on inclusivity and equal opportunity.
              </p>
            </div>
          </FadeIn>

          {/* Hero Image */}
          <FadeIn delay={0.2}>
            <div className="rounded-[40px] overflow-hidden h-full min-h-[350px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1740205642946-72e75a92124b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Skills Development Programme"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* How to Apply */}
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-[40px] p-8 md:p-10 h-full flex flex-col border-4 border-[#3da69e]">
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-5 text-left">How to apply</h2>

              <p className="text-gray-700 text-sm mb-3 text-left">
                The programme is open to individuals interested in gaining skills in:
              </p>

              <ul className="list-disc list-inside text-sm text-[#1A1A1A] mb-5 space-y-1 pl-2">
                <li>STEM (Science, Technology, Engineering, Mathematics) fields</li>
                <li>Industrial sectors</li>
              </ul>

              <p className="font-extrabold text-sm text-[#1A1A1A] text-left mb-2">Strong focus on empowering:</p>
              <div className="text-sm text-gray-700 text-left mb-5 space-y-0.5">
                <p>Women</p>
                <p>Underrepresented groups</p>
              </div>

              <p className="font-extrabold text-sm text-[#1A1A1A] text-left mb-2">Applications are reviewed based on:</p>
              <div className="text-sm text-gray-700 text-left mb-8 space-y-0.5">
                <p>Eligibility criteria</p>
                <p>Motivation</p>
                <p>Career aspirations</p>
              </div>

              <a
                href="#"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white font-bold py-3 px-8 rounded-full hover:bg-[#C1272D] transition-colors self-start"
              >
                <Download className="w-4 h-4" /> Download Application
              </a>
            </div>
          </FadeIn>
        </div>

        {/* What We Have Done */}
        <FadeIn className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            What we have done
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">

          {/* Left Image */}
          <FadeIn delay={0.1} className="lg:col-span-3 flex">
            <div className="rounded-[40px] overflow-hidden w-full">
              <ImageWithFallback
                src={VALVE_IMG}
                alt="Industrial valve fitting"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
          </FadeIn>

          {/* Center Text */}
          <FadeIn delay={0.2} className="lg:col-span-6 flex">
            <div className="bg-white/15 backdrop-blur-sm rounded-[40px] p-8 md:p-10 w-full flex flex-col items-center justify-center text-center text-white">
              <p className="leading-relaxed">
                Alfeco, through the Phakama SA initiative, has provided training, mentorship, and career development opportunities to individuals, with a focus on empowering women in STEM. Through initiatives like the Pink Hard Hat Programme, Alfeco has offered learnerships, internships, and apprenticeships, equipping participants with practical skills in engineering, steel, and manufacturing. With support from merSETA, Alfeco has trained over 300 learners, enabling career progression from entry-level roles to leadership positions. By fostering inclusive growth, the programme is breaking barriers and strengthening the workforce in male-dominated industries.
              </p>
            </div>
          </FadeIn>

          {/* Right Images Stacked */}
          <FadeIn delay={0.3} className="lg:col-span-3 flex flex-col gap-6">
            <div className="rounded-[40px] overflow-hidden flex-1">
              <ImageWithFallback
                src={WELDING_IMG}
                alt="Welding sparks"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[40px] overflow-hidden flex-1">
              <ImageWithFallback
                src={BOOTS_IMG}
                alt="Safety boots on worksite"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn>

        </FadeIn>

      </div>
    </div>
  );
}