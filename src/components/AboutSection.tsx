import React from 'react';
import { Users, Eye, Sparkles, Clock, CheckCircle, HeartHandshake } from 'lucide-react';
import { TRUST_POINTS } from '../data/cleaningData';

export const AboutSection: React.FC = () => {
  const getPointIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Users className="w-6 h-6 text-[#D4AF37]" />;
      case 1:
        return <Eye className="w-6 h-6 text-[#D4AF37]" />;
      case 2:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 3:
        return <Clock className="w-6 h-6 text-[#D4AF37]" />;
      case 4:
        return <CheckCircle className="w-6 h-6 text-[#D4AF37]" />;
      case 5:
        return <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#0B0B0C] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18181C] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            THE URBAN SPARK PROMISE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Why Choose Urban Spark Cleaning Services Hyderabad
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light">
            Dedicated to bringing immaculate comfort, hygienic hygiene, and peace of mind to homes across Hyderabad.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* 6 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRUST_POINTS.map((point, index) => (
            <div
              key={index}
              id={`trust-card-${index}`}
              className="group p-7 rounded-2xl bg-[#141416] border border-[#27272A] hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/30"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1C1C22] border border-[#D4AF37]/30 flex items-center justify-center mb-5 group-hover:border-[#D4AF37] group-hover:bg-[#23232A] transition-all">
                {getPointIcon(index)}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#E5C158] transition-colors font-heading">
                {point.title}
              </h3>

              <p className="text-sm text-gray-400 font-light leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#141416] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
              Looking for a dependable cleaning team in Hyderabad?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 font-light">
              We arrive equipped with our own specialized solutions, vacuums, scrubbers, and cloths.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-[#D4AF37] text-black text-xs sm:text-sm font-bold tracking-wide hover:bg-[#E5C158] transition-colors shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.25)] cursor-pointer"
          >
            Check Availability In Your Area
          </a>
        </div>

      </div>
    </section>
  );
};
