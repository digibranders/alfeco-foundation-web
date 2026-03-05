import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Calendar, Filter, ChevronLeft, ChevronRight, Instagram, Linkedin, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FadeIn } from '../components/FadeIn';
import { NEWS_ITEMS } from '../data/news';

const EVENT_CALENDAR_IMAGES = [
  "https://images.unsplash.com/photo-1761342608658-6b13accf86c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGNoaWxkcmVuJTIwdGVudCUyMG91dGRvb3IlMjBBZnJpY2F8ZW58MXx8fHwxNzcyMDgyMTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1544884576-92fe6c8b154d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xpZGF5JTIwdG95JTIwZG9uYXRpb24lMjBkcml2ZSUyMGdpZnRzfGVufDF8fHx8MTc3MjA4MjE5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1769837231004-497d93ae155c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBmdW5kcmFpc2VyJTIwZ2F0aGVyaW5nJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzIwODIxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1768508947362-bca7a379e62a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZ2FsYSUyMGRpbm5lciUyMGV2ZW50fGVufDF8fHx8MTc3MjA4MjE5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

const FILTER_COLORS: Record<string, string> = {
  "All": "#1A1A1A",
  "News": "#48B2A9",
  "Events": "#E8AB36",
  "Impact Stories": "#C1272D",
};

export function News() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredNews = activeFilter === "All" 
    ? NEWS_ITEMS 
    : NEWS_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#EBF3F5] pt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="mb-16 text-center">
            
            <h1 className="text-6xl md:text-8xl font-semibold text-[#1A1A1A] mb-6">
                News & <span className="gradient-text-teal">Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto">
                Stories of impact, community updates, and upcoming opportunities to get involved.
            </p>
        </FadeIn>

        {/* Filter Bar - Pill Buttons */}
        <FadeIn delay={0.1} className="flex justify-center mb-12 relative z-20">
            <div className="flex flex-wrap justify-center gap-3">
              {["All", "News", "Events", "Impact Stories"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`playful-btn px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all ${
                    activeFilter === category 
                      ? 'text-white shadow-lg' 
                      : 'bg-white text-[#1A1A1A]/60 hover:bg-white/80 shadow-playful'
                  }`}
                  style={activeFilter === category ? { backgroundColor: FILTER_COLORS[category] } : {}}
                >
                  {category}
                </button>
              ))}
            </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {filteredNews.map((item, idx) => (
                <FadeIn key={item.id} delay={idx * 0.08} scale>
                   <Link 
                      to={`/news/${item.id}`}
                      className="group bg-white rounded-[40px] overflow-hidden h-full flex flex-col playful-card shadow-playful hover:shadow-playful-hover block"
                   >
                      <div className="relative aspect-[4/3] overflow-hidden">
                         <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                         <div className="absolute top-4 left-4 backdrop-blur-md bg-white/80 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#1A1A1A] shadow-sm">
                            {item.category}
                         </div>
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="bg-white text-black px-6 py-2.5 rounded-full font-bold uppercase text-sm tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                                Read Story
                            </span>
                         </div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                         <div className="flex items-center gap-2 text-[#C1272D] font-bold text-sm mb-3">
                            <Calendar className="w-4 h-4" />
                            <span>{item.date}</span>
                         </div>
                         <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-3 leading-tight group-hover:text-[#48B2A9] transition-colors">
                            {item.title}
                         </h3>
                         <p className="text-gray-500 font-medium mb-6 line-clamp-3">
                            {item.excerpt}
                         </p>
                         <div className="mt-auto flex items-center gap-2 text-[#1A1A1A] font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all group-hover:text-[#C1272D]">
                            Read More <ArrowRight className="w-4 h-4" />
                         </div>
                      </div>
                   </Link>
                </FadeIn>
             ))}
        </div>

        {/* Events Calendar Section */}
        <FadeIn className="mt-24">
          <div className="rounded-[48px] py-16 px-6 md:px-16 bg-white shadow-premium">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[#E8AB36]/10 rounded-full px-5 py-2 mb-4">
                <Calendar className="w-4 h-4 text-[#E8AB36]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#E8AB36]">Upcoming</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
                Events Calendar
              </h2>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={2}
                slidesToScroll={1}
                prevArrow={<PrevArrow />}
                nextArrow={<NextArrow />}
                responsive={[
                  {
                    breakpoint: 640,
                    settings: {
                      slidesToShow: 1,
                    }
                  }
                ]}
              >
                {EVENT_CALENDAR_IMAGES.map((img, idx) => (
                  <div key={idx} className="px-3">
                    <div className="rounded-[28px] overflow-hidden aspect-square playful-card shadow-playful">
                      <img
                        src={img}
                        alt={`Event ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </FadeIn>

      </div>

      {/* Contact Us Section */}
      <FadeIn className="mt-24">
        <div className="bg-[#C1272D] py-20 px-6 md:px-12 rounded-t-[60px] relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white/10 rounded-full pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-20 h-20 bg-[#E8AB36]/20 rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-10">
              Contact Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left - Contact Cards */}
              <div className="flex flex-col gap-5">
                <div className="bg-white/15 backdrop-blur-sm rounded-full px-8 py-5 playful-btn">
                  <p className="text-white">
                    <span className="font-extrabold">Phone:</span>{" "}
                    <span className="font-medium">011-9089440</span>
                  </p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-full px-8 py-5 playful-btn">
                  <p className="text-white">
                    <span className="font-extrabold">Email:</span>{" "}
                    <span className="font-medium">info@alfecofoundation.com</span>
                  </p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-[30px] px-8 py-5 playful-btn">
                  <p className="text-white">
                    <span className="font-extrabold">LOCATION:</span>{" "}
                    <span className="font-medium">29 Autumn Street, Edenburg, Sandton, 2128</span>
                  </p>
                  <a
                    href="https://maps.google.com/?q=29+Autumn+Street+Edenburg+Sandton+2128"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E8AB36] font-extrabold text-sm mt-1 inline-block hover:underline"
                  >
                    View on Google Map
                  </a>
                </div>
              </div>

              {/* Right - Description & Social */}
              <div className="flex flex-col justify-center">
                <p className="text-white/80 font-medium mb-5">
                  Participating in development is very easy through the Alfeco Foundation.
                </p>
                <p className="text-white/80 font-medium mb-5">
                  Help us identify a worthy cause of any kind that has a significant impact on development and growth! These projects must be passionate to you and be driven by you for us to consider partnering in any meaningful manner.
                </p>
                <p className="text-white/80 font-medium mb-8">
                  Also remember no cause is too small or too for Alfeco Foundation to considering partnering with you to bring about changes to people's lives!
                </p>
                <div className="flex items-center gap-3">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/30 transition-all playful-btn">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/30 transition-all playful-btn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

    </div>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-[-20px] md:left-[-30px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-playful flex items-center justify-center text-[#1A1A1A] hover:bg-[#48B2A9] hover:text-white transition-all playful-btn"
      aria-label="Previous"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-[-20px] md:right-[-30px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-playful flex items-center justify-center text-[#1A1A1A] hover:bg-[#48B2A9] hover:text-white transition-all playful-btn"
      aria-label="Next"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  );
}