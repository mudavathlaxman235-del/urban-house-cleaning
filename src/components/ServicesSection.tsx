import React, { useState } from 'react';
import { Bath, UtensilsCrossed, BedDouble, Sparkles, Home, ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/cleaningData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  // Helper for matching icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Bath':
        return <Bath className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />;
      case 'BedDouble':
        return <BedDouble className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />;
      case 'Home':
        return <Home className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#0F0F12] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18181C] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            OUR SPECIALIZED SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Complete Home Cleaning Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-light">
            From deep cleaning to regular maintenance, we handle it all.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isLast = index === 4;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group relative rounded-2xl bg-[#141416] p-7 border border-[#27272A] hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-lg shadow-black/40 hover:shadow-[0_12px_30px_rgba(212,175,55,0.15)] ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Subtle gold top-right highlight border accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-tr-2xl pointer-events-none group-hover:from-[#D4AF37]/25 transition-all" />

                <div>
                  {/* Icon & Index Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#1C1C20] border border-[#D4AF37]/30 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#222228] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.12)]">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono font-semibold text-gray-500 group-hover:text-[#D4AF37] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#E5C158] transition-colors font-heading">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-[#D4AF37] mb-4">
                    &ldquo;{service.shortDesc}&rdquo;
                  </p>

                  <p className="text-sm text-gray-300/85 leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 mb-6 pt-4 border-t border-white/5">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <span className="w-4 h-4 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    id={`book-service-${service.id}`}
                    className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#E5C158] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Book this service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] text-gray-500">Hyderabad</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
