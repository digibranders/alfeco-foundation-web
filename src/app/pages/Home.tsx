'use client';

import Link from 'next/link';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowRight, CheckCircle2, Heart, Users, Leaf, Lightbulb, User, HandCoins, HeartHandshake, Sparkles, Star, Shield, Zap } from 'lucide-react';
import CountUp from 'react-countup';
import { FadeIn } from '../components/FadeIn';

const HERO_IMAGES = [
  '/assets/hero-1.png',
  '/assets/hero-2.png',
  '/assets/hero-3.png',
  '/assets/hero-4.png',
];

const ProgressBar = () => {
   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
   return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C1272D] via-[#E8AB36] to-[#48B2A9] z-[60] origin-left" style={{ scaleX }} />;
};

import { NEWS_ITEMS } from '../data/news';

export function Home() {
   const recentNews = NEWS_ITEMS.slice(0, 3);

   return (
      <div className="flex flex-col min-h-screen font-sans bg-[#EBF3F5] text-[#1A1A1A] overflow-x-hidden selection:bg-[#E8AB36] selection:text-black">
         <ProgressBar />

         {/* HERO SECTION */}
         <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 py-12 bg-[#EBF3F5]">
            {/* Decorative blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#48B2A9]/10 rounded-full blur-3xl pointer-events-none animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E8AB36]/10 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '3s' }} />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

               <FadeIn direction="right" className="relative pt-12 pb-24">
                  <div className="relative z-10">


                     <h1 className="text-6xl md:text-[5.5rem] font-semibold tracking-tight leading-[0.95] mb-6 text-black">
                        Empowering <br />
                        Communities. <br />
                        <span className="gradient-text-teal">Inspiring Change.</span>
                     </h1>
                  </div>

                  <p className="font-sans text-gray-600 text-lg md:text-xl tracking-tight mt-2 font-medium max-w-lg">
                     Born from Purpose, Nurtured by Family, Driven by Passion.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">
                     <Link
                        href="/get-involved"
                        className="playful-btn inline-flex items-center gap-2 bg-[#C1272D] text-white font-bold py-4 px-8 rounded-full uppercase tracking-widest text-sm hover:shadow-lg"
                     >
                        Get Involved <ArrowRight className="w-5 h-5" />
                     </Link>
                     <Link
                        href="/about"
                        className="playful-btn inline-flex items-center gap-2 bg-white text-[#1A1A1A] font-bold py-4 px-8 rounded-full uppercase tracking-widest text-sm border-2 border-[#1A1A1A]/10 hover:border-[#48B2A9] hover:text-[#48B2A9]"
                     >
                        Our Story
                     </Link>
                  </div>
               </FadeIn>

               <FadeIn direction="left" className="relative">
                  <div className="grid grid-cols-2 gap-4">
                     {HERO_IMAGES.map((img, idx) => (
                        <motion.div
                           key={idx}
                           className={`relative aspect-[4/5] rounded-[32px] overflow-hidden group playful-card ${idx === 1 ? 'mt-10' : idx === 2 ? '-mt-10' : ''
                              }`}
                           whileHover={{ rotate: idx % 2 === 0 ? 1 : -1 }}
                           transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                           <img src={img} alt="Community" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                     ))}
                  </div>
               </FadeIn>

            </div>
         </section>

         {/* OUR STORY SECTION */}
         <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden" id="story">
            {/* Decorative corner */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#48B2A9]/5 rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
               <FadeIn>
                  <div className="mb-12">

                     <h2 className="text-4xl md:text-6xl font-semibold text-[#1A1A1A] mb-6 leading-tight">
                        Empowering Communities. <span className="gradient-text-teal">Inspiring Change.</span>
                     </h2>
                     <h4 className="text-xl md:text-2xl font-serif font-medium italic text-gray-400 border-l-4 border-[#E8AB36] pl-6">
                        Born from Purpose, Nurtured by Family, Driven by Passion.
                     </h4>
                  </div>

                  <div className="block">
                     <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                        <p>
                           The Alfeco Foundation was born from the vision, compassion and lived experience of Mr. Sachin Ahuja, a self-made entrepreneur whose remarkable journey from a small town near Jaipur, Rajasthan, to the helm of one of South Africa's most dynamic industrial conglomerates is a testament to perseverance, inclusivity, and the power of human connection.
                        </p>
                        <p>
                           What began as a modest scrap metal trading venture grew - through resilience, foresight and relentless determination - into the Alfeco Group: a diversified enterprise spanning steel, aluminum, and copper beneficiation. Under Mr. Ahuja's leadership, the group now employs more than 2,000 people and has propelled Veer Steel Mills into becoming one of South Africa's second-largest steel manufacturer.
                        </p>
                        <p>
                           Behind every milestone lies a story of family, friends, and mentors the silent pillars whose unwavering support shaped his values, nurtured his ambition, and instilled in him a belief that every achievement is shared. This foundation of humility, gratitude, and community forms the moral compass that guides Alfeco's culture and breathes life into all that we do.
                        </p>
                        <p>
                           Out of this legacy, the Alfeco Foundation emerged, a beacon of compassion, hope and determination in South Africa's ongoing pursuit of progress. Our purpose is deeply rooted in the belief that meaningful change is possible when people come together with courage, empathy and vision.
                        </p>

                        <div className="bg-[#EBF3F5] p-8 rounded-[32px] my-8 border-l-4 border-[#48B2A9] shadow-playful">
                           <p className="font-bold text-[#1A1A1A] mb-4">We focus our efforts on strengthening lives and unlocking potential across four key pillars:</p>
                           <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {[
                                 "Education and Development",
                                 "Food Security",
                                 "Women and Youth Empowerment",
                                 "Conservation and Environment"
                              ].map((item, i) => (
                                 <li key={i} className="flex items-start gap-2 text-sm font-bold text-[#48B2A9]">
                                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" /> <span>{item}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>

                        <p>
                           Every initiative is a testament to our unwavering commitment to building brighter futures and igniting hope in the hearts of those who aspire to rise above their circumstances.
                        </p>
                        <p>
                           Our true strength lies not only in our projects, it lives in the beating heart of our people. Our dedicated and compassionate staff embody the spirit of service, working tirelessly to infuse every initiative with care, dignity and love. They are the vibrant force that transforms our mission into meaningful, lasting impact.
                        </p>
                        <p>
                           We honour and salute every man and woman who walks this journey with us. Their resilience, courage and creativity shape uniquely South African solutions to South African challenges. Together, we are crafting a tapestry of hope, one thread, one life, one community at a time.
                        </p>
                        <p>
                           At the Alfeco Foundation, we believe that we can be the architects of a better future - hand in hand, heart to heart.
                        </p>
                        <p className="font-bold text-[#1A1A1A] text-xl italic border-l-4 border-[#C1272D] pl-6">
                           And with every step forward, we remain guided by the simple yet powerful truth at the core of our story: Empowering communities is not just our mission. It is our purpose, our promise and our passion.
                        </p>
                     </div>
                  </div>
               </FadeIn>
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

         {/* VISION & MISSION SECTION */}
         <section className="py-24 px-6 md:px-12 bg-[#EBF3F5] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
               {/* Section label */}
               <FadeIn className="text-left mb-12">
                  <h2 className="text-5xl md:text-7xl font-semibold text-[#48B2A9] leading-tight">Our Purpose and Promise</h2>
               </FadeIn>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* VISION */}
                  <FadeIn direction="right">
                     <div className="bg-white rounded-[40px] p-8 md:p-12 relative overflow-hidden h-full playful-card shadow-playful hover:shadow-playful-hover">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#48B2A9]/10 to-transparent rounded-bl-full" />

                        <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-6 leading-tight">Growth Through Development</h2>
                        <div className="space-y-4 text-gray-500">
                           <p>
                              At the Alfeco Foundation, our vision — Growth Through Development — is rooted in passion, partnership and people. We believe true growth is not measured only in numbers, but in lives strengthened, leaders nurtured and communities uplifted.
                           </p>
                           <p>
                              Through education, empowerment and environmental stewardship, we create pathways where individuals are supported to grow with confidence, dignity and purpose.
                           </p>
                        </div>
                     </div>
                  </FadeIn>

                  {/* MISSION */}
                  <FadeIn direction="left">
                     <div className="bg-[#1A1A1A] rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden h-full playful-card">
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#C1272D]/20 to-transparent rounded-tr-full" />

                        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">The Impossible Done Simply</h2>
                        <div className="space-y-4 text-white/60">
                           <p>
                              At the Alfeco Foundation, our mission is to turn purpose into action — empowering communities through compassion, collaboration and practical solutions that create lasting impact.
                           </p>
                           <p>
                              Guided by our belief that "the impossible can be done simply," we approach every challenge with humility, determination and a positive mindset.
                           </p>
                        </div>
                     </div>
                  </FadeIn>
               </div>
            </div>
         </section>

         {/* IMPACT STATS */}
         <section className="py-32 bg-[#1A1A1A] text-white px-6 md:px-12 relative overflow-hidden rounded-t-[60px] -mt-16">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#1A1A1A] to-[#2a2a2a]" />
            <div className="absolute -left-32 top-1/2 w-96 h-96 rounded-full bg-[#48B2A9]/5 blur-3xl pointer-events-none" />
            <div className="absolute -right-32 bottom-0 w-64 h-64 rounded-full bg-[#C1272D]/5 blur-3xl pointer-events-none" />

            <FadeIn className="max-w-7xl mx-auto relative z-10">
               <div className="text-center mb-16">

                  <h2 className="text-4xl md:text-5xl font-semibold text-white">Hope in Numbers</h2>
               </div>
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
                  {[
                     { icon: User, color: "#E8AB36", number: "232K", label: "Lives Impacted" },
                     { icon: HandCoins, color: "#C1272D", number: "99M+", label: "Donations Raised" },
                     { icon: HeartHandshake, color: "#48B2A9", number: "132K", label: "Volunteers" },
                     { icon: Users, color: "#7E8083", number: "35K+", label: "Community Partners" },
                  ].map((stat) => {
                     const num = parseInt(stat.number.replace(/[^0-9]/g, ""), 10);
                     const suffix = stat.number.replace(/[0-9]/g, "");
                     const Icon = stat.icon;

                     return (
                        <FadeIn key={stat.label} delay={0.1} scale>
                           <div className="flex flex-col items-center text-center gap-4 group p-6 rounded-[32px] bg-white/5 hover:bg-white/10 transition-all duration-500 playful-card">
                              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: stat.color + '20' }}>
                                 <Icon className="w-7 h-7" style={{ color: stat.color }} />
                              </div>
                              <div>
                                 <div className="text-4xl font-extrabold text-white">
                                    <CountUp
                                       end={num}
                                       duration={2.5}
                                       suffix={suffix}
                                       separator=","
                                       enableScrollSpy
                                       scrollSpyOnce
                                    />
                                 </div>
                                 <div className="text-sm font-bold text-white/40 mt-1">{stat.label}</div>
                              </div>
                           </div>
                        </FadeIn>
                     );
                  })}
               </div>
            </FadeIn>
         </section>

         {/* CTA SECTION */}
         <section className="py-32 px-6 md:px-12 bg-[#C1272D] text-white text-center relative overflow-hidden rounded-t-[60px] -mt-16">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/10 rounded-full pointer-events-none animate-float" />
            <div className="absolute bottom-20 right-20 w-20 h-20 bg-[#E8AB36]/20 rounded-full pointer-events-none animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 right-10 w-48 h-48 border-2 border-white/5 rounded-full pointer-events-none" />

            <FadeIn direction="up" className="max-w-3xl mx-auto relative z-10">
               <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8"
               >
                  <Heart className="w-10 h-10 text-white" />
               </motion.div>
               <h2 className="text-4xl md:text-6xl font-semibold mb-6">Ready to make a difference?</h2>
               <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto">
                  Join us in building brighter futures. Every contribution, big or small, creates lasting change.
               </p>
               <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                  <Link
                     href="/donate"
                     className="playful-btn inline-block bg-white text-[#C1272D] font-bold py-5 px-14 uppercase tracking-widest rounded-full min-w-[200px] hover:shadow-2xl"
                  >
                     Donate Now
                  </Link>
                  <Link
                     href="/volunteer"
                     className="playful-btn inline-block bg-transparent text-white font-bold py-5 px-14 uppercase tracking-widest border-2 border-white min-w-[200px] rounded-full hover:bg-white hover:text-[#C1272D]"
                  >
                     Volunteer
                  </Link>
               </div>
            </FadeIn>
         </section>
      </div>
   );
}