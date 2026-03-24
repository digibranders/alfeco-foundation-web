'use client';

import React from 'react';
import { ArrowRight, Leaf, Sparkles, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '../../components/FadeIn';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const EARTH_IMG = "https://images.unsplash.com/photo-1701270631538-2fc8bca671dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const WILDLIFE_IMG = "https://images.unsplash.com/photo-1767781404520-28bf77457f10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const ENVIRONMENT_IMG = "https://images.unsplash.com/photo-1704595232687-a180ce7f3b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function Conservation() {
  return (
    <div className="min-h-screen bg-[#D4EDDA] pt-16 pb-24 font-sans text-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* ── Title ── */}
        <FadeIn className="text-center mb-12">
          
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A]">
            Conservation &amp; Environment
          </h1>
        </FadeIn>

        {/* ══════════════════════════════════════════════
            Intro Section – text left, image right
        ══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-start">
          {/* Left – intro text */}
          <FadeIn delay={0.1}>
            <div className="group relative rounded-[32px] bg-white/60 backdrop-blur-sm p-8 cursor-pointer overflow-hidden transition-all duration-500">
              {/* Truncated preview */}
              <div className="space-y-5 leading-relaxed text-[#1A1A1A]/90">
                <p>
                  At the Alfeco Foundation, we are deeply committed to sustainability, conservation and environmental responsibility. We recognise the urgent need to reduce our carbon footprint and actively participate in global efforts such as the "Race to Zero" campaign for a healthier, zero-carbon future.
                </p>
              </div>

              {/* Hover Read More overlay */}
              <div className="max-h-0 group-hover:max-h-[600px] overflow-hidden transition-all duration-700 ease-in-out">
                <div className="pt-5 space-y-5 leading-relaxed text-[#1A1A1A]/90">
                  <p>
                    In alignment with the United Nations Environment Programme's (UNEP) Six-Sector Solution to the Climate Crisis, we continuously strive to implement sustainable practices across our operations. Our focus is not only on corporate responsibility but also on empowering individuals and communities to take meaningful action in their daily lives through the UN Campaign for Individual Action on Climate Change.
                  </p>
                  <p>
                    By addressing climate challenges holistically, we aim to contribute to a resilient and thriving planet for future generations.
                  </p>
                </div>
              </div>

              {/* Read More indicator */}
              <div className="flex items-center gap-2 mt-4 text-[#48B2A9] font-bold text-sm group-hover:opacity-0 transition-opacity duration-300">
                <span>Read More</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </div>
            </div>
          </FadeIn>

          {/* Right – hero image */}
          <FadeIn delay={0.2}>
            <div className="rounded-[20px] overflow-hidden">
              <ImageWithFallback
                src={EARTH_IMG}
                alt="Hands holding earth and plant"
                className="w-full h-auto object-cover"
              />
            </div>
          </FadeIn>
        </div>

        {/* ══════════════════════════════════════════════
            Conservation Section – image left, text right
        ══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-start">
          {/* Left – wildlife image */}
          <FadeIn delay={0.1}>
            <div className="rounded-[20px] overflow-hidden">
              <ImageWithFallback
                src={WILDLIFE_IMG}
                alt="Wildlife conservation – deer fawn"
                className="w-full h-auto object-cover"
              />
            </div>
          </FadeIn>

          {/* Right – conservation text */}
          <FadeIn delay={0.2}>
            <div className="group relative rounded-[32px] bg-white/60 backdrop-blur-sm p-8 cursor-pointer overflow-hidden transition-all duration-500">
              <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-4">Conservation</h2>
              <div className="space-y-5 leading-relaxed text-[#1A1A1A]/90">
                <p>
                  As part of our commitment to wildlife conservation, the Alfeco Foundation actively supports efforts to protect endangered species and preserve natural habitats.
                </p>
              </div>

              {/* Hover Read More overlay */}
              <div className="max-h-0 group-hover:max-h-[600px] overflow-hidden transition-all duration-700 ease-in-out">
                <div className="pt-5 space-y-5 leading-relaxed text-[#1A1A1A]/90">
                  <p>
                    One of our key initiatives was a significant donation to the Hoedspruit Leopard Sanctuary, a non-profit organization dedicated to the conservation and protection of leopards in Limpopo Province. This support has enabled the sanctuary to expand its facilities, enhance its conservation programs and collaborate with other wildlife organisations to ensure the survival of these magnificent animals.
                  </p>
                  <p>
                    Additionally, we have extended our conservation efforts by supporting the Hoedspruit Endangered Species Centre and sponsoring the Moholoholo Wildlife Rehabilitation Centre, both of which play crucial roles in the protection and rehabilitation of South Africa's vulnerable wildlife.
                  </p>
                </div>
              </div>

              {/* Read More indicator */}
              <div className="flex items-center gap-2 mt-4 text-[#48B2A9] font-bold text-sm group-hover:opacity-0 transition-opacity duration-300">
                <span>Read More</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ══════════════════════════════════════════════
            Environment Section – text left, image right
        ══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-start">
          {/* Left – environment text */}
          <FadeIn delay={0.1}>
            <div className="group relative rounded-[32px] bg-white/60 backdrop-blur-sm p-8 cursor-pointer overflow-hidden transition-all duration-500">
              <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-4">Environment</h2>
              <div className="space-y-5 leading-relaxed text-[#1A1A1A]/90">
                <p>
                  Beyond conservation, the Alfeco Foundation is actively engaged in environmental sustainability projects aimed at promoting eco-friendly practices and awareness.
                </p>
              </div>

              {/* Hover Read More overlay */}
              <div className="max-h-0 group-hover:max-h-[600px] overflow-hidden transition-all duration-700 ease-in-out">
                <div className="pt-5 space-y-5 leading-relaxed text-[#1A1A1A]/90">
                  <p>
                    We take a people-centered approach by involving our employees and the communities we work with in climate action initiatives. Our projects range from afforestation efforts, waste reduction programs and renewable energy initiatives to educational campaigns on climate change awareness.
                  </p>
                  <p>
                    A notable example of our community engagement was hosting children from Alexandra Township for International Yoga Day at the Wanderers Stadium, an event that highlighted the connection between well-being and environmental consciousness. Through these initiatives, we continue to promote sustainable living, responsible resource management and a greener future for all.
                  </p>
                </div>
              </div>

              {/* Read More indicator */}
              <div className="flex items-center gap-2 mt-4 text-[#48B2A9] font-bold text-sm group-hover:opacity-0 transition-opacity duration-300">
                <span>Read More</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </div>
            </div>
          </FadeIn>

          {/* Right – environment image */}
          <FadeIn delay={0.2}>
            <div className="rounded-[20px] overflow-hidden">
              <ImageWithFallback
                src={ENVIRONMENT_IMG}
                alt="Children outdoor nature activity"
                className="w-full h-auto object-cover"
              />
            </div>
          </FadeIn>
        </div>

        {/* ── CTA ── */}
        <FadeIn>
          
        </FadeIn>

      </div>
    </div>
  );
}