'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Download, Heart, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '../../components/FadeIn';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import CountUp from 'react-countup';

const HERO_IMG = "https://images.unsplash.com/photo-1591503049013-993ae5cf7e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const FEEDING_IMG = "/IMG_3891.jpg";
const KITCHEN_IMG = "/IMG_3902.jpg";
const PARCELS_IMG = "https://images.unsplash.com/photo-1595589538352-f3b77350b84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const CAROUSEL_IMAGES = [HERO_IMG, FEEDING_IMG, KITCHEN_IMG];

export function FoodSecurity() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMoreOpen, setReadMoreOpen] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);

  return (
    <div className="min-h-screen bg-[#E8AB36] pt-12 pb-24 font-sans text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Food Security Hero ── */}
        <FadeIn className="text-center mb-12">

          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-2">
            Food Security
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-start">
          {/* Left – intro text */}
          <FadeIn delay={0.1}>
            <div className="text-[#1A1A1A]/90 space-y-5 leading-relaxed">
              <p>
                Food insecurity remains one of the biggest challenges facing communities in South Africa, affecting vulnerable children and families daily.
              </p>
              <p>At the Alfeco Foundation, we are committed to eradicating malnutrition and ensuring that every child has access to at least one nutritious meal per day. Through our National Breakfast Feeding Programme, we currently provide meals to over 10,000 primary school children, with a goal of reaching. Additionally, we work with grassroots community organisations, support local community gardens with resilient seeds and collaborate with agricultural extensions to equip communities with the knowledge needed to reduce food insecurity.</p>
              <p>
                Our mission is clear—by 2030, we aim to eliminate malnutrition in our communities and create a sustainable food security solution for future generations.
              </p>
            </div>
          </FadeIn>

          {/* Right – image carousel */}
          <FadeIn delay={0.2}>
            <div className="relative rounded-[40px] overflow-hidden aspect-[4/3]">
              <ImageWithFallback
                src={CAROUSEL_IMAGES[currentSlide]}
                alt="Food Security programme"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Carousel arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-[#1A1A1A] rounded-full p-2 transition-all playful-btn shadow-lg"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-[#1A1A1A] rounded-full p-2 transition-all playful-btn shadow-lg"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* ── Stat: No. of Meals Served ── */}
        <FadeIn className="mb-6">
          <div className="text-7xl md:text-8xl font-extrabold text-[#1A1A1A]">
            <CountUp end={111} duration={2.5} enableScrollSpy scrollSpyOnce />
          </div>
          <p className="text-lg font-extrabold text-[#1A1A1A] mt-1">No. of Meals Served</p>
        </FadeIn>

        <FadeIn className="mb-20">
          <span className="inline-block border-2 border-[#1A1A1A] rounded-full px-6 py-2 font-bold text-[#1A1A1A]">
            Breakfast Feeding Programme
          </span>
        </FadeIn>

        {/* ══════════════════════════════════════════════
            Breakfast Feeding Programme
        ══════════════════════════════════════════════ */}
        <FadeIn className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A]">
            Breakfast Feeding Programme
          </h2>
        </FadeIn>

        {/* Three-column: About / Image / How to Apply */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {/* About the programme */}
          <FadeIn delay={0.1}>
            <div className="bg-white/20 backdrop-blur-sm rounded-[40px] p-8 md:p-10 h-full flex flex-col justify-center text-[#1A1A1A] playful-card">
              <h3 className="text-2xl font-semibold mb-6">About the programme</h3>
              <div className="space-y-4 text-[#1A1A1A]/85 leading-relaxed">
                <p>
                  At the Alfeco Foundation, we recognise that hunger is a major barrier to education. Our National Breakfast Feeding Programme is designed to ensure that underprivileged children across South Africa receive at least one nutritious meal every school day.
                </p>
                <p>
                  By providing breakfast to learners, we aim to combat malnutrition, improve concentration levels, and support overall academic performance. With a particular focus on rural schools, our goal is to create a sustainable solution that not only feeds children but also strengthens communities through long-term food security initiatives.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Centre image */}
          <FadeIn delay={0.2}>
            <div className="rounded-[40px] overflow-hidden h-full min-h-[350px] shadow-premium playful-card">
              <ImageWithFallback
                src={FEEDING_IMG}
                alt="Breakfast Feeding Programme"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* How to apply */}
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-[40px] p-8 md:p-10 h-full flex flex-col border-4 border-[#d9952e] shadow-premium playful-card">
              <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-5 text-left">How to apply</h3>

              <div className="text-sm text-gray-700 text-left space-y-3 mb-6">
                <p>
                  <span className="font-black text-[#1A1A1A]">Step 1:</span> Download the application form.
                </p>
                <p>
                  <span className="font-black text-[#1A1A1A]">Step 2:</span> Complete the form by answering all required questions.
                </p>
                <p>
                  <span className="font-black text-[#1A1A1A]">Step 3:</span> Attach all necessary supporting documents.
                </p>
                <p>
                  <span className="font-black text-[#1A1A1A]">Step 4:</span> Submit the completed application for review by the Alfeco Foundation team.
                </p>
              </div>

              <a
                href="#"
                className="mt-auto playful-btn inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white font-bold py-3 px-8 rounded-full hover:bg-[#C1272D] transition-colors self-start"
              >
                <Download className="w-4 h-4" /> Download Application
              </a>
            </div>
          </FadeIn>
        </div>

        {/* ── What we have done ── */}
        <FadeIn className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A]">
            What we have done
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* Left image */}
          <FadeIn delay={0.1} className="lg:col-span-3 flex">
            <div className="rounded-[40px] overflow-hidden w-full">
              <ImageWithFallback
                src={KITCHEN_IMG}
                alt="Kitchen serving meals"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </FadeIn>

          {/* Centre text */}
          <FadeIn delay={0.2} className="lg:col-span-6 flex">
            <div className="bg-white/20 backdrop-blur-sm rounded-[40px] p-8 md:p-10 w-full flex flex-col justify-center text-center text-[#1A1A1A]/90 space-y-5 leading-relaxed">
              <p>
                Since its inception, the Breakfast Feeding Programme has played a vital role in combating food insecurity among schoolchildren. In 2023 alone, the programme delivered over 1.5 million meals to 8,000 learners across three provinces.
              </p>
              <p>Building on this momentum, we expanded to serve 10,280 learners, providing more than 2 million meals. A major milestone in this growth was the successful rollout of the programme at Sicelo Primary School in Meyerton, Gauteng—reinforcing our commitment to ensuring that no child begins their school day hungry.</p>
              <p>
                Looking ahead, our aim is to reach 20,000 school children nationwide by 2026, deepening our impact in the fight against malnutrition and helping children get the nutrition they need to learn, grow and succeed.
              </p>
            </div>
          </FadeIn>

          {/* Right image */}
          <FadeIn delay={0.3} className="lg:col-span-3 flex">
            <div className="rounded-[40px] overflow-hidden w-full">
              <ImageWithFallback
                src={PARCELS_IMG}
                alt="Food parcels and donations"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </FadeIn>
        </div>

        {/* ── Bottom Stats ── */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <div className="bg-white rounded-[40px] px-10 py-6 text-center shadow-premium playful-card">
              <div className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]">
                <CountUp end={1191} separator="," duration={2.5} enableScrollSpy scrollSpyOnce />
              </div>
              <p className="text-xs font-extrabold text-[#1A1A1A] uppercase tracking-wider mt-1">
                Meals Impacted to Date
              </p>
            </div>
            <div className="bg-white rounded-[40px] px-10 py-6 text-center shadow-premium playful-card">
              <div className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]">
                <CountUp end={1191} separator="," duration={2.5} enableScrollSpy scrollSpyOnce />
              </div>
              <p className="text-xs font-extrabold text-[#1A1A1A] uppercase tracking-wider mt-1">
                Meals Served to Kids Daily
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ── Read More: Tamaho Primary School Launch ── */}
        <FadeIn>
          <div className="bg-white rounded-[40px] p-8 md:p-12 mb-20 shadow-premium playful-card">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
              Launch of the Breakfast Feeding Scheme
            </h2>
            <div className="space-y-5 text-[#1A1A1A]/85 leading-relaxed">
              <p>
                The Alfeco Foundation is thrilled to announce the successful launch of the Breakfast Feeding Scheme that took place at Tamaho Primary School in Mandela Township Johannesburg. We firmly believe that every child should have access to nutritious meals, regardless of their background or socio-economic status. In pursuit of this belief, we have introduced our School Feeding Programme, specifically designed to provide daily breakfasts to children in underserved communities.
              </p>
              <p>
                Our program aims to address the challenges of poverty and hunger, which can significantly hinder a child's ability to learn and thrive. By offering a nutritious breakfast, we not only nourish young bodies but also enhance their focus and attendance in school. We take pride in our partnerships with local schools and organizations, as they play a vital role in making this program a resounding success. Together, we are making a positive and lasting impact on the lives of children who need it most.
              </p>

              {readMoreOpen && (
                <>
                  <p>
                    The Breakfast Feeding Programme has received official recognition from the National Department of Basic Education in South Africa and is fully aligned with the Sustainability Development Goals (SDGs) that aim to eradicate poverty across Southern Africa and the entire continent. As part of this initiative, every learner, regardless of their socio-economic background, is provided with a nutritious breakfast served promptly at 07:00 in the morning. The remarkable outcomes of this program include a significant reduction in learner absenteeism, enhanced focus during class time, and a notable decrease in instances of bullying.
                  </p>
                  <p>
                    We extend our sincerest gratitude to the School Governing Body, Siyanakekela Transformation Agency, parents, and community members who have played integral roles in ensuring the success of this initiative. Their unwavering involvement and support serve as a powerful reminder of our collective responsibility to effect positive change in the lives of those around us. We were honored to have esteemed guests in attendance, including the Ward 51 Councillor, Ms. Lumka Poki, Cluster Leader for Ekurhuleni District, Mr. Dino Reddy, and Mr. Jan Koetze from Counter Point Risk of the K-9 Unit, who captivated the children with an engaging dog show. Moreover, the dedicated team from the Alfeco Foundation orchestrated the packaging and distribution of delightful goody bags to the students, further enhancing the joyous atmosphere of the event.
                  </p>
                </>
              )}

              <button
                onClick={() => setReadMoreOpen(!readMoreOpen)}
                className="inline-flex items-center gap-2 text-[#E8AB36] font-bold hover:text-[#C1272D] transition-colors mt-2"
              >
                {readMoreOpen ? 'Show Less' : 'Read More'}
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${readMoreOpen ? 'rotate-[-90deg]' : 'rotate-0'}`} />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* ── CTA ── */}
        <FadeIn>

        </FadeIn>

      </div>
    </div>
  );
}