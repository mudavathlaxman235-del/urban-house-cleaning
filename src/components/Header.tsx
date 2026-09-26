import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, WHATSAPP_NUMBER, getWhatsAppHref, getPhoneHref } from '../config';

interface HeaderProps {
  onBookNowClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookNowClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
    setMobileMenuOpen(false);
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

  const whatsappDirectHref = getWhatsAppHref("Hello Urban Spark Cleaning Services Hyderabad! I would like to inquire about cleaning services in Hyderabad.");

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0C]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-lg shadow-black/50 py-3'
          : 'bg-[#0B0B0C]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            id="brand-logo"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#1C1C20] to-[#121214] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:border-[#D4AF37] transition-all duration-300">
              <Sparkles className="w-5 h-5 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-wider text-white font-heading leading-tight group-hover:text-[#E5C158] transition-colors">
                Urban Spark
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#D4AF37] tracking-wider uppercase font-medium">
                Cleaning Services • Hyderabad
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-[#E5C158] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getPhoneHref()}
              id="header-phone-cta"
              title="Call Urban Spark"
              className="px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide text-gray-200 hover:text-white border border-[#D4AF37]/30 hover:border-[#D4AF37] bg-[#161618] hover:bg-[#1C1C20] transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>+91 73864 87693</span>
            </a>

            <button
              onClick={onBookNowClick}
              id="header-book-cta"
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide text-[#E5C158] border border-[#D4AF37] bg-[#D4AF37]/10 hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onBookNowClick}
              id="mobile-header-quick-book"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#E5C158] border border-[#D4AF37] bg-[#D4AF37]/10 flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg bg-[#161618] border border-white/10 text-gray-300 hover:text-[#E5C158] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0F0F12] border-b border-[#D4AF37]/30 px-5 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`mobile-nav-${link.label.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-base font-medium text-gray-200 hover:text-[#E5C158] hover:bg-[#1A1A1E] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookNowClick();
              }}
              id="mobile-menu-book-btn"
              className="w-full py-3 rounded-lg text-center font-semibold text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Cleaning Service</span>
            </button>

            <a
              href={whatsappDirectHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg text-center text-xs font-semibold text-[#E5C158] border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: +91 73864 87693</span>
            </a>

            <a
              href={getPhoneHref()}
              className="w-full py-2.5 rounded-lg text-center text-xs font-semibold text-gray-200 border border-white/10 hover:border-[#D4AF37]/50 bg-[#161618] transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Call: +91 73864 87693</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
