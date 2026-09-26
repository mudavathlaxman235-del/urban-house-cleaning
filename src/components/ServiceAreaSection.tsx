import React, { useState } from 'react';
import { MapPin, Search, CheckCircle, Building, Building2, Sparkles, Home } from 'lucide-react';
import { hyderabadCityImg, SERVICE_CATEGORIES } from '../data/cleaningData';
import { BUSINESS_CONFIG } from '../config';

interface ServiceAreaSectionProps {
  onCheckAreaClick: (areaName: string) => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ onCheckAreaClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAreas = BUSINESS_CONFIG.serviceAreas.filter((area) =>
    area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Home Cleaning':
        return <Home className="w-6 h-6 text-[#D4AF37]" />;
      case 'Apartment Cleaning':
        return <Building className="w-6 h-6 text-[#D4AF37]" />;
      case 'Villa Cleaning':
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'Office Cleaning':
        return <Building2 className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Home className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="service-area" className="relative py-24 bg-[#0B0B0C] overflow-hidden">
      {/* Background Image of Hyderabad city night with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hyderabadCityImg}
          alt="Hyderabad city skyline and cable bridge at night"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#0B0B0C]/85 to-[#0B0B0C]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18181C]/90 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5" />
            <span>LOCAL COVERAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            We Serve Hyderabad
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            &ldquo;All areas in and around Hyderabad. Get in touch to check availability in your location.&rdquo;
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* 4 Service Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {SERVICE_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#141416]/90 backdrop-blur-md border border-[#27272A] hover:border-[#D4AF37]/60 transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1D1D22] border border-[#D4AF37]/30 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
                  {getCategoryIcon(cat.title)}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#E5C158] border border-[#D4AF37]/30">
                  {cat.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-1.5 group-hover:text-[#E5C158] transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Hyderabad Locality Explorer & Check */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#141416]/95 backdrop-blur-md border border-[#D4AF37]/30 shadow-2xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <span>Primary Neighborhoods Covered Daily</span>
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Prompt dispatch across West, Central, and Greater Hyderabad zones.
              </p>
            </div>

            {/* Area search input */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search your area..."
                className="w-full bg-[#1F1F24] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          {/* Area pills */}
          <div className="flex flex-wrap gap-2.5">
            {filteredAreas.length > 0 ? (
              filteredAreas.map((area, aIdx) => (
                <button
                  key={aIdx}
                  onClick={() => onCheckAreaClick(area)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#1B1B20] border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 text-xs text-gray-200 hover:text-[#FFF0B8] transition-all flex items-center gap-1.5 cursor-pointer"
                  title={`Book service in ${area}`}
                >
                  <CheckCircle className="w-3 h-3 text-[#D4AF37]" />
                  <span>{area}</span>
                </button>
              ))
            ) : (
              <p className="text-xs text-gray-400 py-2">
                Don&apos;t see your area listed? We serve all surrounding Hyderabad regions—please contact us directly!
              </p>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
            <span>Daily operating coverage: 8:00 AM – 8:00 PM</span>
            <a
              href="#contact"
              className="text-[#E5C158] hover:text-[#FFF0B8] underline underline-offset-4 font-semibold"
            >
              Verify your specific address in booking form ↓
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
