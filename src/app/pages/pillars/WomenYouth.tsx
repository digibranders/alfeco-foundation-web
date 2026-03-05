import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { FadeIn } from '../../components/FadeIn';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const SANITATION_IMG = "https://images.unsplash.com/photo-1706524077391-12206f155e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function WomenYouth() {
  return (
    <div className="min-h-screen bg-[#C1272D] pt-16 pb-24 font-sans text-[#F5E6D0]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* ── Title ── */}
        <FadeIn className="text-center mb-10">
          
          <h1 className="text-5xl md:text-6xl font-semibold text-[#F5E6D0] italic">
            Women &amp; Youth
          </h1>
        </FadeIn>

        {/* ── Intro paragraphs ── */}
        <FadeIn className="text-center mb-6 max-w-4xl mx-auto">
          <p className="leading-relaxed mb-6 text-[18px]">
            At the Alfeco Foundation, we believe that empowering women and youth is essential for building resilient, sustainable and equitable communities. Women, especially in South Africa, have historically faced multiple layers of oppression and continue to endure challenges such as gender-based violence, inequality and economic barriers. We recognize that true development can only be achieved when women and young people are given the opportunity, support and resources they need to thrive.
          </p>
          <p className="leading-relaxed mb-6 text-[18px]">
            Our Women &amp; Youth Pillar is dedicated to creating opportunities for growth, education and empowerment.
          </p>
          <p className="leading-relaxed text-[18px]">
            At Alfeco Foundation, we are committed to breaking cycles of poverty, unemployment and inequality through targeted Programmes that uplift and empower the most vulnerable members of society. By investing in women and youth, we are investing in the future of South Africa—one where everyone has the opportunity to succeed and contribute to a thriving society.
          </p>
        </FadeIn>

        {/* ── Programmes heading ── */}
        <FadeIn className="text-center mt-16 mb-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#F5E6D0]">
            Programmes
          </h2>
        </FadeIn>

        {/* ── Two programme cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* EmpowHer Sanitation Programme */}
          <FadeIn delay={0.1}>
            <div className="border-2 border-[#F5E6D0]/30 rounded-[32px] p-8 md:p-10 h-full text-center playful-card hover:bg-white/5 transition-colors">
              <h3 className="text-xl font-semibold text-[#F5E6D0] mb-5">
                EmpowHer Sanitation Programme
              </h3>
              <p className="leading-relaxed text-[#F5E6D0]/90 text-[18px]">
                The EmpowHer Sanitation Programme by the Alfeco Foundation empowers young girls by providing menstrual health education and essential sanitation products. Through informative school workshops, we teach girls about hygiene, self-care and menstruation, helping to break the stigma and boost confidence. To combat period poverty, we host regular pad drives to collect and distribute sanitary products to girls in need. By partnering with communities, schools and donors, we ensure that no girl misses school due to a lack of resources. Join us in making a difference—donate, volunteer, or spread awareness to help create a future where every girl has the dignity, support and education she deserves.
              </p>
            </div>
          </FadeIn>

          {/* EmpowHer Career Guidance */}
          <FadeIn delay={0.2}>
            <div className="border-2 border-[#F5E6D0]/30 rounded-[32px] p-8 md:p-10 h-full text-center playful-card hover:bg-white/5 transition-colors">
              <h3 className="text-xl font-semibold text-[#F5E6D0] mb-5">
                EmpowHer Career Guidance
              </h3>
              <p className="leading-relaxed text-[#F5E6D0]/90 text-[18px]">
                The EmpowHer Career Guidance Programme by the Alfeco Foundation supports Grade 11 and matric girls aspiring to pursue careers in Science, Technology, Engineering and Mathematics (STEM). This initiative provides job shadowing opportunities at Alfeco's plant sites, offering real-world industry exposure to inspire and equip young women with the confidence and knowledge to excel in STEM fields. Selected students will gain hands-on experience, mentorship and career insights to help them break barriers in traditionally male-dominated industries. Schools can nominate students and passionate applicants are encouraged to apply for this career-transforming opportunity. Join us in shaping the future of female leaders in STEM!
              </p>
            </div>
          </FadeIn>
        </div>

        {/* ══════════════════════════════════════════════
            EmpowHer Sanitation Programme – Detail
        ══════════════════════════════════════════════ */}
        <FadeIn className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#F5E6D0]">
            EmpowHer Sanitation Programme
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-end">
          {/* Left – image */}
          <FadeIn delay={0.1}>
            <div className="rounded-[32px] overflow-hidden shadow-premium playful-card">
              <ImageWithFallback
                src={SANITATION_IMG}
                alt="EmpowHer Sanitation Programme – pad drive donations"
                className="w-full h-auto object-cover"
              />
            </div>
          </FadeIn>

          {/* Right – text */}
          <FadeIn delay={0.2}>
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-[#F5E6D0] italic">
                Empowering Young Girls for a Healthier Future
              </h3>
              <p className="leading-relaxed text-[#F5E6D0]/90 text-[18px]">
                In addition to education, the EmpowHer Sanitation Programme organizes regular pad drives to collect and distribute donated sanitary products to girls in need. By partnering with communities, schools and generous donors, we aim to ensure that every girl has access to safe and hygienic menstrual care. Through this initiative, we strive to reduce period poverty, promote dignity and self-esteem and create a supportive environment where young girls can thrive without barriers.
              </p>
              <p className="leading-relaxed text-[#F5E6D0]/90 text-[18px]">
                Join us in making a difference! Whether through donating sanitary products, volunteering at our workshops, or spreading awareness, you can play a crucial role in empowering young girls and ensuring that no girl is held back due to a lack of menstrual resources. Together, we can build a future where every girl has the knowledge, support and resources she deserves.
              </p>
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