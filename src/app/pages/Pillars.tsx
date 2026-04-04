'use client';

import Link from 'next/link';
import { ArrowRight, Users, Shield, Lightbulb, Zap, Leaf, Heart, HandCoins, Sparkles, Star } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const PILLAR_IMAGES = [
  "https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "/pillars/food security/IMG_4106-original.webp",
  "https://images.unsplash.com/photo-1688302529084-767fbc296565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1767479813249-8d8b9e212496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
];

export function Pillars() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#EBF3F5] text-[#1A1A1A] pt-12">

      {/* PILLARS GRID */}
      <section className="py-24 px-6 md:px-12 bg-[#EBF3F5] relative" id="pillars">
         <div className="max-w-7xl mx-auto relative">
            <FadeIn direction="up" className="flex flex-col md:flex-row justify-between items-end mb-16 relative z-10">
               <div className="relative">
                  
                  <h2 className="text-5xl md:text-7xl font-semibold text-[#1A1A1A] relative z-10 leading-none">
                     Our Pillars
                  </h2>
               </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px]">
               {[
                 { title: "Education & Development", path: "/pillars/education", img: PILLAR_IMAGES[0], color: "#48B2A9", desc: "Empowering minds through quality education, skills development and mentorship.", icon: Lightbulb, layout: "tall" as const },
                 { title: "Food Security", path: "/pillars/food-security", img: PILLAR_IMAGES[1], color: "#E8AB36", desc: "Sustainable agriculture, nutrition programmes and food initiatives.", icon: Leaf, layout: "regular" as const },
                 { title: "Women & Youth", path: "/pillars/women-youth", img: PILLAR_IMAGES[2], color: "#C1272D", desc: "Supporting entrepreneurship, leadership development and financial inclusion.", icon: Users, layout: "regular" as const },
                 { title: "Conservation", path: "/pillars/conservation", img: PILLAR_IMAGES[3], color: "#48B2A9", desc: "Protecting our planet through renewable energy and green manufacturing.", icon: Leaf, layout: "wide" as const },
               ].map((pillar, idx) => {
                  const isTall = pillar.layout === "tall";
                  const isWide = pillar.layout === "wide";
                  const gridClass = isTall ? "md:row-span-2" : isWide ? "md:col-span-2" : "";
                  
                  return (
                     <FadeIn
                        key={idx}
                        delay={idx * 0.1}
                        className={`group relative rounded-[40px] overflow-hidden playful-card ${gridClass}`}
                     >
                        <Link href={pillar.path} className="block h-full w-full cursor-pointer">
                        {isTall && (
                           <div className="h-full w-full relative">
                              <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                              <div className="absolute bottom-0 left-0 p-8 text-white">
                                 <h3 className="text-4xl font-extrabold mb-4 leading-tight">{pillar.title}</h3>
                                 <p className="text-white/80 text-lg leading-relaxed mb-4">{pillar.desc}</p>
                                 <span className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 group-hover:gap-3" style={{ backgroundColor: pillar.color, color: '#fff' }}>
                                    Learn More <ArrowRight className="w-4 h-4" />
                                 </span>
                              </div>
                           </div>
                        )}

                        {!isTall && !isWide && (
                           <div className="h-full w-full relative">
                              <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                              <div className="absolute bottom-0 left-0 p-6 text-white">
                                 <h3 className="text-2xl font-semibold mb-2 leading-tight">{pillar.title}</h3>
                                 <p className="text-white/75 text-sm leading-relaxed mb-3">{pillar.desc}</p>
                                 <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 group-hover:gap-3" style={{ backgroundColor: pillar.color, color: '#fff' }}>
                                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                                 </span>
                              </div>
                           </div>
                        )}

                        {isWide && (
                           <div className="h-full w-full flex flex-col md:flex-row bg-white relative overflow-hidden shadow-playful">
                              <div className="md:w-1/2 h-full relative overflow-hidden">
                                 <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                              </div>
                              <div className="p-8 flex flex-col justify-center md:w-1/2 z-10 relative">
                                 <h3 className="text-3xl font-extrabold text-[#1A1A1A] mb-4">{pillar.title}</h3>
                                 <p className="text-gray-500 mb-6">{pillar.desc}</p>
                                 <span className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 group-hover:gap-3 self-start" style={{ backgroundColor: pillar.color, color: '#fff' }}>
                                    Learn More <ArrowRight className="w-4 h-4" />
                                 </span>
                              </div>
                           </div>
                        )}
                        </Link>
                     </FadeIn>
                  );
               })}
            </div>
         </div>
      </section>
      
       {/* PHILOSOPHY SECTION */}
       <section className="py-24 px-6 md:px-12 bg-[#EBF3F5] relative overflow-hidden" id="philosophy">
         <div className="absolute top-0 right-0 w-80 h-80 bg-[#E8AB36]/8 rounded-full -translate-y-1/2 pointer-events-none blur-2xl" />
         
         <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn className="text-center mb-16">
               
               <h2 className="text-5xl md:text-7xl font-semibold text-[#1A1A1A] mb-6">Our Philosophy</h2>
               <p className="text-xl md:text-2xl font-bold text-[#1A1A1A]/60 max-w-3xl mx-auto">
                  At Alfeco Foundation, we believe that progress thrives where people are empowered and purpose meets compassion.
               </p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               {/* Inclusivity */}
               <FadeIn delay={0.1} className="h-full">
                  <div className="h-full bg-white rounded-[40px] flex flex-col justify-end relative overflow-hidden group min-h-[400px] playful-card shadow-playful hover:shadow-playful-hover">
                     <img src="https://images.unsplash.com/photo-1630068846062-3ffe78aa5049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29tbXVuaXR5JTIwaGFuZHMlMjB0b2dldGhlciUyMGluY2x1c2l2aXR5fGVufDF8fHx8MTc3MjcwNTI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Inclusivity" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                     <div className="relative z-10 p-8 md:p-10">
                        <div className="flex justify-between items-start mb-6">
                           
                           <ArrowRight className="w-8 h-8 text-white/30 -rotate-45 group-hover:rotate-0 group-hover:text-[#48B2A9] transition-all duration-300" />
                        </div>
                        <h3 className="text-4xl font-semibold text-white mb-4">Inclusivity</h3>
                        <p className="text-white/80 leading-relaxed text-lg">
                           Every voice matters. Every dream deserves a chance. We build environments where diversity is not just welcomed, but celebrated as our greatest strength.
                        </p>
                     </div>
                  </div>
               </FadeIn>

               <div className="lg:col-span-2 flex flex-col gap-6">
                  {/* Integrity */}
                  <FadeIn delay={0.2}>
                     <div className="rounded-[40px] flex flex-col justify-end relative overflow-hidden group min-h-[240px] playful-card shadow-warm">
                        <img src="https://images.unsplash.com/photo-1696861270495-7f35c35c3273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2UlMjB0cnVzdCUyMGludGVncml0eSUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MjcwNTI2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Integrity" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#E8AB36]/90 via-[#E8AB36]/70 to-transparent" />
                        <div className="relative z-10 p-8 md:p-10">
                           <div className="flex justify-between items-start w-full mb-4">
                              
                              <ArrowRight className="w-8 h-8 text-[#1A1A1A]/30 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                           </div>
                           <div className="max-w-lg">
                              <h3 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">Integrity</h3>
                              <p className="text-[#1A1A1A]/70 text-lg font-bold">Doing right, even when unseen. Building trust through transparency.</p>
                           </div>
                        </div>
                     </div>
                  </FadeIn>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {/* Innovation */}
                     <FadeIn delay={0.3}>
                        <div className="rounded-[40px] flex flex-col justify-end h-full group relative overflow-hidden min-h-[240px] playful-card shadow-playful hover:shadow-playful-hover">
                           <img src="https://images.unsplash.com/photo-1770632067760-70ac2cb9ec3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGlubm92YXRpb24lMjBsaWdodGJ1bGIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjcwNTI2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Innovation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                           <div className="relative z-10 p-8">
                              <div className="flex justify-between items-start mb-4">
                                 
                                 <ArrowRight className="w-8 h-8 text-white/30 -rotate-45 group-hover:rotate-0 group-hover:text-[#E8AB36] transition-all duration-300" />
                              </div>
                              <h3 className="text-2xl font-semibold text-white mb-2">Innovation</h3>
                              <p className="text-white/70 text-sm">Reimagining solutions for today's and tomorrow's challenges.</p>
                           </div>
                        </div>
                     </FadeIn>

                     {/* Empowerment */}
                     <FadeIn delay={0.4}>
                        <div className="rounded-[40px] flex flex-col justify-end h-full group relative overflow-hidden min-h-[240px] playful-card">
                           <img src="https://images.unsplash.com/photo-1606471015285-85fa1288aa4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBvd2VybWVudCUyMHBlb3BsZSUyMGNlbGVicmF0aW5nJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NzI3MDUyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Empowerment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                           <div className="absolute inset-0 bg-gradient-to-t from-[#48B2A9]/90 via-[#48B2A9]/50 to-transparent" />
                           <div className="relative z-10 p-8">
                              <div className="flex justify-between items-start mb-4">
                                 
                                 <ArrowRight className="w-8 h-8 text-white/40 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                              </div>
                              <h3 className="text-2xl font-semibold text-white mb-2">Empowerment</h3>
                              <p className="text-white/80 text-sm">Enabling individuals and communities to stand tall.</p>
                           </div>
                        </div>
                     </FadeIn>
                  </div>

                  {/* Sustainability */}
                  <FadeIn delay={0.5}>
                     <div className="rounded-[40px] flex flex-col justify-end relative overflow-hidden group text-white min-h-[240px] playful-card">
                        <img src="https://images.unsplash.com/photo-1763856957026-a74ab4f05891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHN1c3RhaW5hYmlsaXR5JTIwbmF0dXJlJTIwcGxhbnRzJTIwZ3Jvd3RofGVufDF8fHx8MTc3MjcwNTI2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Sustainability" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/60 to-transparent" />
                        <div className="relative z-10 p-8 md:p-10">
                           <div className="flex justify-between items-start w-full mb-4">
                              
                              <ArrowRight className="w-8 h-8 text-[#48B2A9]/40 -rotate-45 group-hover:rotate-0 group-hover:text-[#48B2A9] transition-all duration-300" />
                           </div>
                           <div className="max-w-lg">
                              <h3 className="text-3xl font-semibold mb-4">Sustainability</h3>
                              <p className="text-white/70 text-lg">Protecting our environment as we grow.</p>
                           </div>
                        </div>
                     </div>
                  </FadeIn>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}