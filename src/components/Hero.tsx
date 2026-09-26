import React from 'react';
import { ShieldCheck, Leaf, Award, MessageCircle, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { heroCleanerImg } from '../data/cleaningData';
import { getWhatsAppHref, getPhoneHref, PHONE_NUMBER, WHATSAPP_NUMBER } from '../config';

interface HeroProps {
  onBookClick: () => void;
  onPhoneClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onPhoneClick }) => {
  const defaultWhatsAppMsg = "Hello Urban Spark Cleaning Services Hyderabad! I am interested in booking a professional cleaning service in Hyderabad. Please share available slots.";
  const whatsappUrl = getWhatsAppHref(defaultWhatsAppMsg);
  const phoneHref = getPhoneHref();

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0B0B0C]"
    >
      {/* Subtle gold radial ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -right-20 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-7 text-left">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1E] border border-[#D4AF37]/40 w-fit shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E5C158]">
                CLEAN SPACES ✦ HAPPY LIVES
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Professional{' '}
              <span className="block mt-1 sm:mt-2 gold-gradient-text drop-shadow-[0_4px_24px_rgba(212,175,55,0.3)]">
                House Cleaning
              </span>{' '}
              <span className="block mt-1 sm:mt-2 text-white/95">
                in Hyderabad
              </span>
            </h1>

            {/* Supporting Text */}
            <div className="space-y-2 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              <p className="font-semibold text-[#E5C158] tracking-wide text-sm sm:text-base uppercase">
                Trusted. Affordable. Reliable.
              </p>
              <p className="text-gray-300/90 font-light leading-relaxed">
                Urban Spark Cleaning Services Hyderabad brings a fresh shine to your home with professional cleaning services, so you can relax and enjoy what matters most.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.55)] flex items-center gap-2.5 group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book on WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={phoneHref}
                onClick={onPhoneClick}
                id="hero-call-cta"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-white hover:text-[#E5C158] bg-[#161618] hover:bg-[#1C1C20] border border-white/15 hover:border-[#D4AF37]/60 transition-all duration-300 flex items-center gap-2.5 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call 73864 87693</span>
              </a>

              <button
                onClick={onBookClick}
                id="hero-schedule-btn"
                className="text-xs sm:text-sm text-gray-400 hover:text-[#E5C158] underline underline-offset-4 transition-colors ml-1 cursor-pointer"
              >
                Or fill booking form below ↓
              </button>
            </div>

            {/* Three Trust Points */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#141416] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 group-hover:border-[#D4AF37] transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                    Safe &amp; Secure
                  </h4>
                  <p className="text-[11px] text-gray-400 hidden sm:block">
                    Verified personnel
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#141416] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 group-hover:border-[#D4AF37] transition-colors">
                  <Leaf className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                    Eco Friendly Products
                  </h4>
                  <p className="text-[11px] text-gray-400 hidden sm:block">
                    Gentle on home &amp; pets
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#141416] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 group-hover:border-[#D4AF37] transition-colors">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                    Trained Professionals
                  </h4>
                  <p className="text-[11px] text-gray-400 hidden sm:block">
                    Meticulous attention
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Realistic Photograph */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Outer decorative gold frame border */}
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-[#D4AF37]/40 via-white/5 to-[#D4AF37]/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
              
              <div className="relative rounded-xl overflow-hidden bg-[#161618] aspect-[4/3] sm:aspect-[4/3] group">
                <img
                  src={heroCleanerImg}
                  alt="Professional home cleaner deep cleaning modern Indian kitchen countertop in Hyderabad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Ambient dark gradient vignette over bottom & edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Handwritten-Style Decorative Message Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-[#D4AF37]/30 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-10 bg-[#D4AF37] rounded-full shrink-0" />
                    <div>
                      <p className="font-script text-2xl sm:text-3xl text-[#FFF0B8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        &ldquo;A cleaner home is a happier home&rdquo;
                      </p>
                      <p className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold mt-0.5">
                        Urban Spark Standard of Care
                      </p>
                    </div>
                  </div>
                </div>

                {/* Top Corner Floating Badge */}
                <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-[#D4AF37]/40 text-[#E5C158] text-xs font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Serving Hyderabad</span>
                </div>
              </div>
            </div>

            {/* Secondary floating trust pill */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#161618]/95 backdrop-blur-md border border-[#D4AF37]/40 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold text-xs">
                ✦
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white">100% Surface Safe</p>
                <p className="text-[10px] text-gray-400">Non-toxic &amp; eco formulations</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
