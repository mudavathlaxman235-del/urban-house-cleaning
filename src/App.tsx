import React, { useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { BookingContactSection, BookingSectionRef } from './components/BookingContactSection';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppHref } from './config';

export default function App() {
  const bookingRef = useRef<BookingSectionRef>(null);

  const handleScrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollToForm();
    } else {
      const element = document.getElementById('contact');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    if (bookingRef.current) {
      bookingRef.current.setPrefilledService(serviceName);
    }
  };

  const handleSelectPlan = (bhkName: string) => {
    if (bookingRef.current) {
      bookingRef.current.setPrefilledHomeType(bhkName);
    }
  };

  const handleSelectArea = (areaName: string) => {
    if (bookingRef.current) {
      bookingRef.current.setPrefilledArea(areaName);
    }
  };

  const defaultWhatsAppFloatingHref = getWhatsAppHref(
    "Hello Urban Spark Cleaning Services Hyderabad! I would like to book a cleaning service in Hyderabad."
  );

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F3F4F6] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#E5C158] flex flex-col relative">
      
      {/* Sticky Top Header Navigation */}
      <Header onBookNowClick={handleScrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero 
          onBookClick={handleScrollToBooking}
        />
        <ServicesSection onSelectServiceForBooking={handleSelectService} />
        <PricingSection onSelectPlanForBooking={handleSelectPlan} />
        <GallerySection />
        <AboutSection />
        <ReviewsSection />
        <ServiceAreaSection onCheckAreaClick={handleSelectArea} />
        <BookingContactSection 
          ref={bookingRef} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href={defaultWhatsAppFloatingHref}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#18181C] text-[#E5C158] border border-[#D4AF37] shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-black transition-colors" />
          <span className="text-xs font-bold tracking-wide hidden sm:inline">
            WhatsApp Booking
          </span>
        </a>
      </div>

    </div>
  );
}
