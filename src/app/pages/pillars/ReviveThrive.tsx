'use client';

import React from 'react';
import { Download, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '../../components/FadeIn';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const HERO_IMG = "https://images.unsplash.com/photo-1744960149322-db88b3f4f25f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const GROUP_IMG = "https://images.unsplash.com/photo-1599666882726-fe28581e3147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const RENOVATED_IMG = "https://images.unsplash.com/photo-1647342003191-70d033b24485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function ReviveThrive() {
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
            <span className="text-white font-bold">Revive & Thrive</span>
          </div>
        </FadeIn>

        {/* Page Title */}
        <FadeIn className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6">
            Revive & Thrive Programme
          </h1>
        </FadeIn>

        {/* Top Section: About + Image + How to Apply */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">

          {/* About the Programme */}
          <FadeIn delay={0.1}>
            <div className="bg-white/15 backdrop-blur-sm rounded-[40px] p-8 md:p-10 text-white h-full flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-6">About the programme</h2>
              <p className="text-white/90 leading-relaxed">
                The Revive and Thrive Programme is at the heart of the Alfeco Foundation's efforts to create sustainable change in education by restoring dilapidated schools and essential infrastructure. Our goal is to provide students with safe, modern and functional learning environments that promote academic excellence.
              </p>
            </div>
          </FadeIn>

          {/* Hero Image */}
          <FadeIn delay={0.2}>
            <div className="rounded-[40px] overflow-hidden h-full min-h-[350px]">
              <ImageWithFallback
                src={HERO_IMG}
                alt="Revive & Thrive Programme"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* How to Apply */}
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-[40px] p-8 md:p-10 h-full flex flex-col border-4 border-[#3da69e]">
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-5 text-left">How to apply</h2>

              <div className="text-sm text-gray-700 text-left space-y-3 mb-6">
                <p>
                  <span className="font-extrabold text-[#1A1A1A]">Step 1:</span> Contact the Alfeco Foundation to express your school's interest.
                </p>
                <p>
                  <span className="font-extrabold text-[#1A1A1A]">Step 2:</span> If your school is shortlisted, you will receive an application form.
                </p>
                <p>
                  <span className="font-extrabold text-[#1A1A1A]">Step 3:</span> Complete the form and submit it along with:
                </p>
                <div className="space-y-0.5">
                  <p>Supporting documents</p>
                  <p>A motivation letter</p>
                </div>
                <p>
                  <span className="font-extrabold text-[#1A1A1A]">Step 4:</span> The Alfeco team will:
                </p>
                <div className="space-y-0.5">
                  <p>Review your application</p>
                  <p>Conduct site visits (if necessary)</p>
                  <p>Present your proposal to the executive committee</p>
                </div>
                <p>
                  <span className="font-extrabold text-[#1A1A1A]">Final Step:</span> Await confirmation of approval.
                </p>
              </div>

              <p className="text-sm text-[#48B2A9] font-extrabold text-left mb-6">
                Apply today and take the first step towards creating a thriving learning environment for your learners!
              </p>

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
                src={GROUP_IMG}
                alt="Community group at school"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </FadeIn>

          {/* Center Text */}
          <FadeIn delay={0.2} className="lg:col-span-6 flex">
            <div className="bg-white/15 backdrop-blur-sm rounded-[40px] p-8 md:p-10 w-full flex flex-col items-center justify-center text-center text-white">
              <p className="leading-relaxed">We have successfully refurbished and upgraded multiple schools, focusing on creating safe, dignified and future-ready learning environments. Our work has included the improvement of essential water and sanitation facilities to ensure health and hygiene, the installation and repair of secure fencing to enhance safety, and the establishment of fully equipped computer laboratories to support digital learning and broaden educational opportunities for learners.</p>
            </div>
          </FadeIn>

          {/* Right Image */}
          <FadeIn delay={0.3} className="lg:col-span-3 flex">
            <div className="rounded-[40px] overflow-hidden w-full">
              <ImageWithFallback
                src={RENOVATED_IMG}
                alt="Renovated school facility"
                className="w-full h-full object-cover aspect-square"
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