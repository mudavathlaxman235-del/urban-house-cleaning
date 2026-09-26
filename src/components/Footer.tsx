import React, { useState } from 'react';
import { Sparkles, MapPin, Phone, MessageCircle, X, Shield, FileText } from 'lucide-react';
import { BUSINESS_CONFIG, getPhoneHref, getWhatsAppHref, PHONE_NUMBER, WHATSAPP_NUMBER } from '../config';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const footerNavLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const whatsappHref = getWhatsAppHref("Hello Urban Spark Cleaning Services Hyderabad! Inquiring about service availability in Hyderabad.");
  const phoneHref = getPhoneHref();

  return (
    <footer id="main-footer" className="bg-[#08080A] text-gray-400 border-t border-white/5 pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative top gold hairline gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#141416] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-heading leading-tight">
                  Urban Spark Cleaning Services Hyderabad
                </h3>
                <p className="text-xs text-[#D4AF37] tracking-widest uppercase font-medium">
                  Hyderabad | Clean Homes, Brighter Days.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 max-w-md font-light leading-relaxed">
              Hyderabad’s dedicated residential deep cleaning service. Specialized in bathroom descaling, kitchen degreasing, and turnkey move-in transformations.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#141416] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-gray-300 hover:text-[#E5C158] flex items-center gap-2 transition-all text-xs"
                title="WhatsApp Us"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>+91 73864 87693</span>
              </a>
              <a
                href={phoneHref}
                className="px-3 py-1.5 rounded-lg bg-[#141416] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-gray-300 hover:text-[#E5C158] flex items-center gap-2 transition-all text-xs"
                title="Call Us"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Helpline</span>
              </a>
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Hyderabad, Telangana</span>
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#E5C158] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage & Operating Hours Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Service Details
            </h4>
            <div className="space-y-2 text-xs text-gray-400">
              <p>
                <strong className="text-gray-200">Operating Hours:</strong><br />
                {BUSINESS_CONFIG.businessHours}
              </p>
              <p>
                <strong className="text-gray-200">Coverage:</strong><br />
                Banjara Hills, Jubilee Hills, Gachibowli, Madhapur, Kondapur, HITEC City &amp; all surrounding zones.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-block text-xs font-semibold text-[#D4AF37] hover:underline"
                >
                  Schedule an on-site visit →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            <p>© {new Date().getFullYear()} Urban Spark Cleaning Services Hyderabad. Telangana, India.</p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-[#E5C158] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-gray-700">•</span>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-[#E5C158] transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {modalType === 'privacy' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#141416] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto text-left">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#1F1F24] text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4 text-[#D4AF37]">
              <Shield className="w-5 h-5" />
              <h3 className="text-xl font-bold text-white font-heading">
                Privacy Policy
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
              <p>
                <strong>Urban Spark Cleaning Services Hyderabad</strong> respects your privacy and is committed to protecting the personal information you share with us.
              </p>
              <h4 className="font-semibold text-white">1. Information We Collect</h4>
              <p>
                When you request a booking or communicate via WhatsApp or telephone, we collect your name, phone number, residence address or locality in Hyderabad, and specific cleaning preferences.
              </p>
              <h4 className="font-semibold text-white">2. How We Use Your Information</h4>
              <p>
                Your information is used solely to coordinate your cleaning schedule, confirm availability, dispatch personnel, and ensure quality service completion. We never sell, rent, or publicly disclose your contact details or home address.
              </p>
              <h4 className="font-semibold text-white">3. Direct Booking &amp; Communication</h4>
              <p>
                All booking communications are direct between you and our service coordinators. You may opt out of future maintenance reminders at any time.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <button
                onClick={() => setModalType(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#222228] text-white hover:bg-[#2E2E36] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {modalType === 'terms' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#141416] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto text-left">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#1F1F24] text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4 text-[#D4AF37]">
              <FileText className="w-5 h-5" />
              <h3 className="text-xl font-bold text-white font-heading">
                Terms &amp; Conditions
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
              <p>
                Welcome to <strong>Urban Spark Cleaning Services Hyderabad</strong>. By requesting or booking our cleaning services in Hyderabad, you agree to the following standard terms:
              </p>
              <h4 className="font-semibold text-white">1. Booking Confirmation</h4>
              <p>
                Submitting a web form constitutes a request for service. A booking is confirmed once our representative contacts you directly to verify property specifics and time slot availability.
              </p>
              <h4 className="font-semibold text-white">2. Scope of Service &amp; Inspection</h4>
              <p>
                Our crew performs services in accordance with the package selected (e.g. 1 BHK to 4 BHK or custom villa scope). Customers are encouraged to do a joint walkthrough with the team supervisor prior to departure.
              </p>
              <h4 className="font-semibold text-white">3. Pricing &amp; Payment</h4>
              <p>
                Quoted rates are transparent. Payments are made upon completion of service via Cash, UPI, or standard bank transfer.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <button
                onClick={() => setModalType(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#222228] text-white hover:bg-[#2E2E36] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
