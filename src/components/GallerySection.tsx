import React, { useState } from 'react';
import { Sparkles, Eye, ArrowRight, X, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/cleaningData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  // Store slider position (0 to 100) or toggle state for each card
  const [activeViewMode, setActiveViewMode] = useState<Record<string, 'after' | 'before'>>({
    'gallery-kitchen': 'after',
    'gallery-bathroom': 'after',
    'gallery-living': 'after',
    'gallery-bedroom': 'after',
  });

  const [sliderPositions, setSliderPositions] = useState<Record<string, number>>({
    'gallery-kitchen': 50,
    'gallery-bathroom': 50,
    'gallery-living': 50,
    'gallery-bedroom': 50,
  });

  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [showAllPhotosModal, setShowAllPhotosModal] = useState(false);

  const toggleView = (id: string, mode: 'after' | 'before') => {
    setActiveViewMode((prev) => ({ ...prev, [id]: mode }));
  };

  const handleSliderChange = (id: string, value: number) => {
    setSliderPositions((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#0F0F12] relative overflow-hidden border-t border-white/5">
      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18181C] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            PROVEN EXCELLENCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Before &amp; After – Real Results
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light">
            &ldquo;See the difference a professional clean can make.&rdquo;
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* 4 Cards: Kitchen, Bathroom, Living Room, Bedroom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {GALLERY_ITEMS.map((item) => {
            const currentMode = activeViewMode[item.id] || 'after';
            const sliderVal = sliderPositions[item.id] ?? 50;

            return (
              <div
                key={item.id}
                id={`gallery-card-${item.id}`}
                className="group relative rounded-2xl bg-[#141416] border border-[#27272A] hover:border-[#D4AF37]/60 overflow-hidden shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Header bar of Card */}
                <div className="p-5 sm:p-6 pb-3 flex items-center justify-between border-b border-white/5 bg-[#17171B]">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                      {item.category}
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#D4AF37]/15 text-[#E5C158] font-semibold border border-[#D4AF37]/30">
                    {item.highlight}
                  </span>
                </div>

                {/* Visual Area with Interactive Split Comparison Slider */}
                <div className="relative aspect-[4/3] bg-black overflow-hidden select-none">
                  {/* Before Image (underneath) */}
                  <img
                    src={item.beforeImg}
                    alt={`${item.category} before cleaning in Hyderabad home`}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                  />

                  {/* After Image (clipped on top by slider) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 0 0 ${sliderVal}%)` }}
                  >
                    <img
                      src={item.afterImg}
                      alt={`${item.category} after deep cleaning in Hyderabad home`}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>

                  {/* Vertical Divider Line with handle */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-[#D4AF37] pointer-events-none shadow-[0_0_10px_#D4AF37]"
                    style={{ left: `${sliderVal}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black/80 border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-lg">
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Native range input overlay for intuitive touch / mouse dragging */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderVal}
                    onChange={(e) => handleSliderChange(item.id, Number(e.target.value))}
                    aria-label={`Slide to compare before and after for ${item.category}`}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  />

                  {/* Badges on Bottom Corners */}
                  <div className="absolute bottom-3 left-3 pointer-events-none z-10">
                    <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-[11px] font-bold tracking-wider text-rose-300 border border-rose-500/30 uppercase">
                      Before
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 pointer-events-none z-10">
                    <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-[11px] font-bold tracking-wider text-emerald-300 border border-emerald-500/30 uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      After Sparkle
                    </span>
                  </div>
                </div>

                {/* Bottom Card Details & Toggle Buttons */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-[#141416]">
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div className="flex items-center gap-1 text-[11px] text-gray-400">
                      <span>Drag slider to inspect results</span>
                    </div>

                    <button
                      onClick={() => setLightboxItem(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#FFF0B8] transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Full View</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* "View All Photos →" Prominent Link */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={() => setShowAllPhotosModal(true)}
            id="view-all-photos-btn"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#141416] border border-[#D4AF37] text-[#E5C158] text-sm sm:text-base font-bold tracking-wide hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] cursor-pointer"
          >
            <span>View All Photos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal for Specific Card */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#141416] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#1F1F24] text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Urban Spark Hyderabad Transformation
              </span>
              <h3 className="text-2xl font-bold text-white font-heading mt-0.5">
                {lightboxItem.category} – {lightboxItem.title}
              </h3>
              <p className="text-xs text-gray-300 mt-1">{lightboxItem.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="inline-block text-xs font-bold text-rose-300 bg-rose-500/20 px-2.5 py-1 rounded">
                  BEFORE CLEANING
                </span>
                <div className="rounded-xl overflow-hidden aspect-[4/3] border border-white/10">
                  <img
                    src={lightboxItem.beforeImg}
                    alt="Before cleaning condition"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <span className="inline-block text-xs font-bold text-[#E5C158] bg-[#D4AF37]/20 px-2.5 py-1 rounded">
                  AFTER DEEP CLEAN
                </span>
                <div className="rounded-xl overflow-hidden aspect-[4/3] border border-[#D4AF37]/40">
                  <img
                    src={lightboxItem.afterImg}
                    alt="After sparkling clean result"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* "View All Photos" Showcase Modal */}
      {showAllPhotosModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#141416] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setShowAllPhotosModal(false)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#1F1F24] text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 border-b border-white/10 pb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                PROJECT SHOWCASE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1">
                Real Home Transformations in Hyderabad
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Visual proof of our meticulous sanitization across Indian living spaces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GALLERY_ITEMS.map((item) => (
                <div key={item.id} className="p-4 rounded-xl bg-[#1A1A1E] border border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base">{item.category}</h4>
                    <span className="text-xs text-[#D4AF37] font-medium">{item.highlight}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg overflow-hidden aspect-[4/3] relative">
                      <img
                        src={item.beforeImg}
                        alt={`${item.category} before`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-1 left-1 bg-black/70 px-1.5 py-0.5 rounded text-[9px] font-bold text-rose-300">
                        Before
                      </span>
                    </div>
                    <div className="rounded-lg overflow-hidden aspect-[4/3] relative border border-[#D4AF37]/40">
                      <img
                        src={item.afterImg}
                        alt={`${item.category} after`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-1 left-1 bg-black/70 px-1.5 py-0.5 rounded text-[9px] font-bold text-[#E5C158]">
                        After
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAllPhotosModal(false)}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-gray-300 bg-[#222228] hover:bg-[#2C2C32] transition-colors"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
