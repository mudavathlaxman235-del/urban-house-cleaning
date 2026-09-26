import React from 'react';
import { Quote, Home, MapPin } from 'lucide-react';
import { SAMPLE_REVIEWS } from '../data/cleaningData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#0F0F12] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18181C] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            CLIENT EXPERIENCES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Happy Homes, Happy Customers
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light">
            Read sample feedback from Hyderabad households who experienced our deep cleaning service.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SAMPLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="group p-7 sm:p-8 rounded-2xl bg-[#141416] border border-[#27272A] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/40 relative hover:-translate-y-1"
            >
              {/* Top Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1C1C20] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Quote className="w-4 h-4 text-[#D4AF37] fill-current opacity-80" />
                </div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider bg-[#1D1D22] px-2.5 py-1 rounded-full border border-white/5">
                  Verified Visit
                </span>
              </div>

              {/* Review Text */}
              <blockquote className="text-sm sm:text-base text-gray-200/90 font-light leading-relaxed mb-6 italic">
                &ldquo;{review.comment}&rdquo;
              </blockquote>

              {/* Author / Metadata Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-[#E5C158] transition-colors">
                    {review.authorLabel}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{review.locationArea}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-md border border-[#D4AF37]/20">
                  <Home className="w-3 h-3" />
                  <span>{review.homeType}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Transparent Note */}
        <p className="text-center text-[11px] text-gray-500 mt-10 italic">
          *Note: Testimonials shown above are sample reviews for illustrative layout purposes, awaiting real customer survey replacements.
        </p>

      </div>
    </section>
  );
};
