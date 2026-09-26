import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, X, Shield, Clock, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/cleaningData';
import { PricingPlan } from '../types';
import { getWhatsAppHref } from '../config';

interface PricingSectionProps {
  onSelectPlanForBooking: (bhkName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlanForBooking }) => {
  const [showFullPriceModal, setShowFullPriceModal] = useState(false);

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-[#0B0B0C] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18181C] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            HONEST ESTIMATES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Affordable &amp; Transparent
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light">
            &ldquo;Quality cleaning at honest prices. No hidden charges.&rdquo;
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {PRICING_PLANS.map((plan) => {
            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative rounded-2xl bg-[#141416] p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-xl ${
                  plan.popular
                    ? 'border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.22)] bg-gradient-to-b from-[#1C1C22] to-[#121214]'
                    : 'border-[#27272A] hover:border-[#D4AF37]/60'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#D4AF37] text-black text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                    Most Requested in Hyd
                  </div>
                )}

                <div>
                  <div className="border-b border-white/10 pb-5 mb-6">
                    <span className="text-sm font-semibold tracking-wider text-[#D4AF37] uppercase">
                      Urban Spark Plan
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 font-heading">
                      {plan.bhk}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#FFF0B8] tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-gray-400">/ one-time deep clean</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 font-light">
                      {plan.idealFor}
                    </p>
                  </div>

                  {/* Included Items */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Package Highlights:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <span className="w-4 h-4 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div>
                  <button
                    onClick={() => onSelectPlanForBooking(plan.bhk)}
                    id={`select-plan-${plan.id}`}
                    className={`w-full py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#D4AF37] text-black hover:bg-[#E5C158] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                        : 'bg-[#1C1C20] text-white hover:text-black hover:bg-[#D4AF37] border border-white/10 hover:border-[#D4AF37]'
                    }`}
                  >
                    <span>Choose {plan.bhk}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-gray-500 mt-2.5">
                    Pay after completion &amp; inspection
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Quotes Note & Prominent "View Full Price List →" */}
        <div className="mt-12 sm:mt-16 text-center space-y-5">
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light">
            &ldquo;Custom quotes available for larger homes, villas &amp; special requests.&rdquo;
          </p>

          <div>
            <button
              onClick={() => setShowFullPriceModal(true)}
              id="view-full-price-list-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#161618] border border-[#D4AF37] text-[#E5C158] text-sm sm:text-base font-bold tracking-wide hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] cursor-pointer"
            >
              <span>View Full Price List</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-gray-500 max-w-xl mx-auto italic">
            *Prices shown reflect Urban Spark Cleaning Services Hyderabad rates for standard residential units in Hyderabad. Final quote verified upon property condition.
          </p>
        </div>

      </div>

      {/* Full Price List Detailed Modal */}
      {showFullPriceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#141416] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setShowFullPriceModal(false)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#1F1F24] text-gray-400 hover:text-white hover:bg-[#2A2A30] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 border-b border-white/10 pb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                URBAN SPARK HOUSE CLEANING
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1">
                Full Service Price Guide
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Transparent and honest rates for residential properties in Hyderabad.
              </p>
            </div>

            {/* Price Table / Categories */}
            <div className="space-y-6 text-left">
              
              {/* Standard Deep Cleaning */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#E5C158] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Full Apartment Deep Clean Packages</span>
                </h4>
                <div className="divide-y divide-white/5 border border-white/10 rounded-xl overflow-hidden bg-[#0F0F12]">
                  <div className="p-3.5 flex justify-between items-center text-sm">
                    <div>
                      <p className="font-semibold text-white">1 BHK Standard Deep Clean</p>
                      <p className="text-xs text-gray-400">1 Bedroom, 1 Bath, Hall, Kitchen, Balcony</p>
                    </div>
                    <span className="font-bold text-[#FFF0B8] text-base">₹4,099</span>
                  </div>
                  <div className="p-3.5 flex justify-between items-center text-sm">
                    <div>
                      <p className="font-semibold text-white">2 BHK Standard Deep Clean</p>
                      <p className="text-xs text-gray-400">2 Bedrooms, 2 Baths, Hall, Kitchen, Balconies</p>
                    </div>
                    <span className="font-bold text-[#FFF0B8] text-base">₹5,999</span>
                  </div>
                  <div className="p-3.5 flex justify-between items-center text-sm">
                    <div>
                      <p className="font-semibold text-white">3 BHK Standard Deep Clean</p>
                      <p className="text-xs text-gray-400">3 Bedrooms, 2-3 Baths, Large Hall, Kitchen, Balconies</p>
                    </div>
                    <span className="font-bold text-[#FFF0B8] text-base">₹7,999</span>
                  </div>
                  <div className="p-3.5 flex justify-between items-center text-sm">
                    <div>
                      <p className="font-semibold text-white">4 BHK Standard Deep Clean</p>
                      <p className="text-xs text-gray-400">4 Bedrooms, 3-4 Baths, Extended Hall, Kitchen, Utility</p>
                    </div>
                    <span className="font-bold text-[#FFF0B8] text-base">₹10,999</span>
                  </div>
                </div>
              </div>

              {/* Special Properties & Custom Additions */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#E5C158] flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#D4AF37]" />
                  <span>Villas, Penthouses &amp; Standalone Homes</span>
                </h4>
                <div className="p-4 rounded-xl border border-white/10 bg-[#0F0F12] space-y-2">
                  <p className="text-sm text-gray-200">
                    <strong className="text-white">Custom Villa &amp; Duplex Cleaning:</strong> Since villas vary greatly in square footage, staircases, terrace areas, and compound spaces, we conduct an upfront walkthrough or quick photo evaluation to provide an exact, guaranteed quote.
                  </p>
                  <p className="text-xs text-gray-400">
                    Typical villa pricing starts from ₹13,999 depending on layout and requirements.
                  </p>
                </div>
              </div>

              {/* Add-on Services */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#E5C158] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>Add-on Individual Services</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#1B1B20] border border-white/5 flex justify-between">
                    <span className="text-gray-200">Standalone Bathroom Descaling</span>
                    <span className="text-[#D4AF37] font-semibold">from ₹1,299 / bath</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#1B1B20] border border-white/5 flex justify-between">
                    <span className="text-gray-200">Standalone Kitchen Intensive Clean</span>
                    <span className="text-[#D4AF37] font-semibold">from ₹2,499</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#1B1B20] border border-white/5 flex justify-between">
                    <span className="text-gray-200">Balcony Pressure &amp; Railing Wash</span>
                    <span className="text-[#D4AF37] font-semibold">from ₹599</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#1B1B20] border border-white/5 flex justify-between">
                    <span className="text-gray-200">Interior Refrigerator Sanitization</span>
                    <span className="text-[#D4AF37] font-semibold">from ₹699</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={() => setShowFullPriceModal(false)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white bg-[#1E1E22] hover:bg-[#25252B] transition-colors"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  setShowFullPriceModal(false);
                  onSelectPlanForBooking('Custom / Large Home');
                }}
                className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
