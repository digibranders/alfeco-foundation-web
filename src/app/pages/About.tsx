'use client';

import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Sparkles } from 'lucide-react';

export function About() {
    return (
        <div className="min-h-screen bg-[#EBF3F5] pt-12 pb-24 font-sans text-[#1A1A1A]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Page Header */}
                <FadeIn className="mb-16 text-center">

                    <h1 className="text-6xl md:text-8xl font-semibold text-[#1A1A1A] mb-6">
                        About Us
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto">
                        Building a legacy of compassion, empowerment, and sustainable change.
                    </p>
                </FadeIn>

                {/* Section 1: About The Foundation */}
                <div className="bg-white rounded-[48px] p-8 md:p-16 mb-16">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-8 leading-tight">
                            About The Alfeco Foundation
                        </h2>
                    </FadeIn>

                    <div className="space-y-6 text-lg text-gray-500 leading-relaxed max-w-4xl">
                        <FadeIn delay={0.1}>
                            <p>
                                In the heart of South Africa's pursuit of progress and hope, the Alfeco Foundation emerged, a beacon of compassion and determination, ignited by the vision of a remarkable businessman, Mr Sachin Ahuja. Our passion knows no bounds as we embark on transformative projects, spanning the diverse fabric of South African society.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p>
                                Our activities are focused on strengthening lives and fostering dreams in the following areas: Education and Development, Food Security, Women and Youth Empowerment, and Conservation and Environment. Every initiative is a representation of our steadfast commitment to changing the world and igniting the flames of hope in people's hearts who have always aspired for a better tomorrow.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <p>
                                But it is not just our projects it is the beating heart of our caring and compassionate staff that amplifies our vision and mission. They are the heartbeat that breathes life into our endeavors, infusing every project with a touch of love and understanding.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <p>
                                We stand in awe and admiration of all our valiant men and women, working tirelessly to paint the canvas of change with vibrant hues of kindness. Their unwavering commitment embodies the spirit of resilience, crafting uniquely South African solutions for South African problems. To each soul who walks this path with us, we extend our deepest gratitude and heartfelt salute. Together, we weave a tapestry of hope and transformation, touching countless lives and inspiring a nation to rise above adversity.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.5}>
                            <div className="mt-8 pt-8 border-t border-gray-100 bg-gradient-to-r from-[#C1272D]/5 to-transparent p-8 rounded-[32px] -mx-2">
                                <p className="text-2xl font-extrabold text-[#C1272D]">
                                    The Alfeco Foundation thrives on the belief that we can be the architects of a better future, hand in hand, heart to heart.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>


            </div>
        </div>
    );
}