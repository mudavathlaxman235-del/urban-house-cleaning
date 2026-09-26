import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Calendar, 
  Home, 
  Building,
  User,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_CONFIG, WHATSAPP_NUMBER, PHONE_NUMBER, getPhoneHref, getWhatsAppHref } from '../config';
import { BookingFormData } from '../types';

export interface BookingSectionRef {
  setPrefilledService: (serviceName: string) => void;
  setPrefilledHomeType: (homeType: string) => void;
  setPrefilledArea: (areaName: string) => void;
  scrollToForm: () => void;
}

interface BookingContactSectionProps {
  onDirectPhoneClick?: () => void;
}

export const BookingContactSection = forwardRef<BookingSectionRef, BookingContactSectionProps>(
  ({ onDirectPhoneClick }, ref) => {
    const timeOptions = [
      '8:00 AM',
      '10:00 AM',
      '12:00 PM',
      '2:00 PM',
      '4:00 PM',
      '6:00 PM',
      '8:00 PM',
    ];

    const serviceOptions = [
      'Bathroom Cleaning',
      'Kitchen Cleaning',
      'Living Room & Bedroom',
      'Floor Cleaning',
      'Move In / Move Out',
      'Full Home Deep Cleaning',
      'Villa / Custom Residence'
    ];

    const homeTypeOptions = [
      '1 BHK',
      '2 BHK',
      '3 BHK',
      '4 BHK',
      'Villa / Duplex',
      'Commercial / Office',
      'Other'
    ];

    const [formData, setFormData] = useState<BookingFormData>({
      customerName: '',
      phoneNumber: '',
      serviceRequired: 'Full Home Deep Cleaning',
      homeType: '2 BHK',
      preferredDate: '',
      preferredTime: '10:00 AM',
      addressArea: '',
      additionalMessage: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success'>('idle');
    const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

    // Allow parent to prefill fields easily
    useImperativeHandle(ref, () => ({
      setPrefilledService: (serviceName: string) => {
        setFormData((prev) => ({ ...prev, serviceRequired: serviceName }));
        scrollToSection();
      },
      setPrefilledHomeType: (homeType: string) => {
        setFormData((prev) => ({ ...prev, homeType }));
        scrollToSection();
      },
      setPrefilledArea: (areaName: string) => {
        setFormData((prev) => ({ ...prev, addressArea: `${areaName}, Hyderabad` }));
        scrollToSection();
      },
      scrollToForm: () => {
        scrollToSection();
      }
    }));

    const scrollToSection = () => {
      const element = document.getElementById('contact');
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

    const validateForm = (): boolean => {
      const newErrors: Record<string, string> = {};
      if (!formData.customerName.trim()) {
        newErrors.customerName = 'Please enter your name';
      }
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = 'Please enter your phone number';
      } else if (formData.phoneNumber.replace(/[^0-9]/g, '').length < 8) {
        newErrors.phoneNumber = 'Please enter a valid contact number';
      }
      if (!formData.serviceRequired) {
        newErrors.serviceRequired = 'Please select a service';
      }
      if (!formData.homeType) {
        newErrors.homeType = 'Please select your home type';
      }
      if (!formData.preferredDate) {
        newErrors.preferredDate = 'Please select a preferred date';
      }
      if (!formData.preferredTime) {
        newErrors.preferredTime = 'Please select a time slot';
      }
      if (!formData.addressArea.trim()) {
        newErrors.addressArea = 'Please enter your locality or area in Hyderabad';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated[name];
          return updated;
        });
      }
    };

    const formatWhatsAppMessage = (data: BookingFormData): string => {
      return `*Urban Spark Cleaning Services Hyderabad - Booking Request*
✦ Name: ${data.customerName || 'Inquirer'}
✦ Phone: ${data.phoneNumber || 'Not provided'}
✦ Service: ${data.serviceRequired}
✦ Home Type: ${data.homeType}
✦ Preferred Date: ${data.preferredDate || 'Earliest available'}
✦ Preferred Time: ${data.preferredTime}
✦ Address / Area: ${data.addressArea || 'Hyderabad'}
${data.additionalMessage ? `✦ Message: ${data.additionalMessage}` : ''}

Please let me know if this slot is available. Thank you!`;
    };

    const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateForm()) return;

      // In client-side privacy-first flow, store submission state and display required confirmation notice
      setSubmittedData({ ...formData });
      setSubmissionStatus('success');
    };

    const handleWhatsAppBooking = () => {
      // Validate or construct message from current form inputs
      const msg = formatWhatsAppMessage(formData);
      const url = getWhatsAppHref(msg);
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    const resetBookingForm = () => {
      setSubmissionStatus('idle');
      setFormData({
        customerName: '',
        phoneNumber: '',
        serviceRequired: 'Full Home Deep Cleaning',
        homeType: '2 BHK',
        preferredDate: '',
        preferredTime: '10:00 AM',
        addressArea: '',
        additionalMessage: ''
      });
    };

    const phoneHref = getPhoneHref();

    return (
      <section id="contact" className="py-20 sm:py-24 bg-[#0B0B0C] relative overflow-hidden border-t border-white/5">
        {/* Subtle background ambient lights */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18181C] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
              SCHEDULE YOUR SERVICE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Book Your Cleaning
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-light">
              Submit your request below or connect directly via WhatsApp or phone.
            </p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Business & Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-7 sm:p-8 rounded-2xl bg-[#141416] border border-[#27272A] shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                    DIRECT CONTACT
                  </span>
                  <h3 className="text-2xl font-bold text-white font-heading mt-1">
                    Urban Spark Cleaning Services Hyderabad
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Hyderabad, Telangana, India
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-white/5">
                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1C1C22] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Phone Call
                      </h4>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        {PHONE_NUMBER}
                      </p>
                      <a
                        href={phoneHref}
                        onClick={onDirectPhoneClick}
                        className="text-xs text-[#D4AF37] hover:underline mt-0.5 inline-block"
                      >
                        Tap to call now →
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1C1C22] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        WhatsApp Booking
                      </h4>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        {WHATSAPP_NUMBER}
                      </p>
                      <button
                        onClick={handleWhatsAppBooking}
                        className="text-xs text-[#D4AF37] hover:underline mt-0.5 text-left inline-block cursor-pointer"
                      >
                        Start instant WhatsApp chat →
                      </button>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1C1C22] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Service Area
                      </h4>
                      <p className="text-sm text-gray-200 mt-0.5">
                        All areas in and around Hyderabad (Banjara Hills, Jubilee Hills, Gachibowli, Madhapur, Kukatpally, HITEC City, etc.)
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1C1C22] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Business Hours
                      </h4>
                      <p className="text-sm text-gray-200 mt-0.5">
                        {BUSINESS_CONFIG.businessHours}
                      </p>
                      <p className="text-xs text-emerald-400 mt-0.5 font-medium">
                        Open 7 Days a Week
                      </p>
                    </div>
                  </div>
                </div>

                {/* Important Booking Guarantee Note */}
                <div className="p-4 rounded-xl bg-[#1A1A20] border border-[#D4AF37]/20 text-xs text-gray-300 space-y-1">
                  <p className="font-semibold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Urban Spark Transparency</span>
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    No online card payment required in advance. You inspect the cleaned home first before settling the payment.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Professional Booking Form */}
            <div className="lg:col-span-7">
              <div className="p-7 sm:p-9 rounded-2xl bg-[#141416] border border-[#27272A] shadow-2xl relative">
                
                {/* Gold corner accent glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/15 to-transparent rounded-tr-2xl pointer-events-none" />

                {/* SUCCESS NOTIFICATION STATE */}
                {submissionStatus === 'success' ? (
                  <div className="py-10 px-4 text-center space-y-6 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white font-heading">
                        Booking request received. We will contact you to confirm availability.
                      </h3>
                      <p className="text-sm text-gray-300 max-w-md mx-auto">
                        Thank you for choosing Urban Spark Cleaning Services Hyderabad! Our Hyderabad coordinator is reviewing your preferred slot.
                      </p>
                    </div>

                    {/* Summary Card */}
                    {submittedData && (
                      <div className="p-5 rounded-xl bg-[#1B1B20] border border-white/10 text-left text-xs space-y-2 max-w-md mx-auto text-gray-300">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Customer:</span>
                          <span className="font-semibold text-white">{submittedData.customerName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Phone:</span>
                          <span className="font-semibold text-white">{submittedData.phoneNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Service:</span>
                          <span className="font-semibold text-[#D4AF37]">{submittedData.serviceRequired}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Home Type:</span>
                          <span className="font-semibold text-white">{submittedData.homeType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Requested Slot:</span>
                          <span className="font-semibold text-white">
                            {submittedData.preferredDate} at {submittedData.preferredTime}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Area:</span>
                          <span className="font-semibold text-white">{submittedData.addressArea}</span>
                        </div>
                      </div>
                    )}

                    <div className="pt-4 flex flex-wrap justify-center gap-3">
                      <button
                        onClick={handleWhatsAppBooking}
                        className="px-6 py-3 rounded-xl bg-[#D4AF37] text-black font-bold text-xs sm:text-sm hover:bg-[#E5C158] transition-colors flex items-center gap-2 shadow-md cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send Details on WhatsApp</span>
                      </button>

                      <button
                        onClick={resetBookingForm}
                        className="px-5 py-3 rounded-xl bg-[#222228] text-gray-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  /* FORM INPUT FIELDS */
                  <form onSubmit={handleFormSubmit} className="space-y-5 text-left" noValidate>
                    
                    <div className="border-b border-white/10 pb-4 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                        Request a Cleaning Service
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">
                        Fill in your home details. We will contact you to verify your requested time slot.
                      </p>
                    </div>

                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="customerName" className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>Customer Name *</span>
                        </label>
                        <input
                          type="text"
                          id="customerName"
                          name="customerName"
                          value={formData.customerName}
                          onChange={handleInputChange}
                          placeholder="e.g. Laxman Rao"
                          className={`w-full bg-[#1A1A20] border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors ${
                            errors.customerName ? 'border-rose-500' : 'border-white/10 focus:border-[#D4AF37]'
                          }`}
                        />
                        {errors.customerName && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.customerName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phoneNumber" className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>Phone Number *</span>
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 98765 43210"
                          className={`w-full bg-[#1A1A20] border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors ${
                            errors.phoneNumber ? 'border-rose-500' : 'border-white/10 focus:border-[#D4AF37]'
                          }`}
                        />
                        {errors.phoneNumber && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.phoneNumber}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Service Required & Home Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="serviceRequired" className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>Service Required *</span>
                        </label>
                        <select
                          id="serviceRequired"
                          name="serviceRequired"
                          value={formData.serviceRequired}
                          onChange={handleInputChange}
                          className="w-full bg-[#1A1A20] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                        >
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-[#141416] text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="homeType" className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                          <Home className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>Home Type *</span>
                        </label>
                        <select
                          id="homeType"
                          name="homeType"
                          value={formData.homeType}
                          onChange={handleInputChange}
                          className="w-full bg-[#1A1A20] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                        >
                          {homeTypeOptions.map((ht) => (
                            <option key={ht} value={ht} className="bg-[#141416] text-white">
                              {ht}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Preferred Date & Preferred Time (with requested time slots) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="preferredDate" className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>Preferred Date *</span>
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className={`w-full bg-[#1A1A20] border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors ${
                            errors.preferredDate ? 'border-rose-500' : 'border-white/10 focus:border-[#D4AF37]'
                          }`}
                        />
                        {errors.preferredDate && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.preferredDate}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="preferredTime" className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>Preferred Time *</span>
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="w-full bg-[#1A1A20] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                        >
                          {timeOptions.map((time) => (
                            <option key={time} value={time} className="bg-[#141416] text-white">
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Address / Area in Hyderabad */}
                    <div>
                      <label htmlFor="addressArea" className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Address / Area (Hyderabad) *</span>
                      </label>
                      <input
                        type="text"
                        id="addressArea"
                        name="addressArea"
                        value={formData.addressArea}
                        onChange={handleInputChange}
                        placeholder="e.g. Flat 402, Oakwood Towers, Gachibowli"
                        className={`w-full bg-[#1A1A20] border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors ${
                          errors.addressArea ? 'border-rose-500' : 'border-white/10 focus:border-[#D4AF37]'
                        }`}
                      />
                      {errors.addressArea && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.addressArea}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 5: Additional Message */}
                    <div>
                      <label htmlFor="additionalMessage" className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Additional Message (Optional)</span>
                      </label>
                      <textarea
                        id="additionalMessage"
                        name="additionalMessage"
                        rows={3}
                        value={formData.additionalMessage}
                        onChange={handleInputChange}
                        placeholder="Any specific instructions (e.g., balcony glass cleaning, pets at home, key pickup)..."
                        className="w-full bg-[#1A1A20] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      />
                    </div>

                    {/* Three Action Buttons requested: "Request Booking", "Book on WhatsApp", "Call Now" */}
                    <div className="pt-3 border-t border-white/10 space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          type="submit"
                          id="submit-booking-request-btn"
                          className="w-full py-3.5 px-4 rounded-xl bg-[#D4AF37] text-black font-bold text-sm hover:bg-[#E5C158] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          <span>Request Booking</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleWhatsAppBooking}
                          id="whatsapp-booking-btn"
                          className="w-full py-3.5 px-4 rounded-xl bg-[#1A1A20] border border-[#D4AF37] text-[#E5C158] font-bold text-sm hover:bg-[#D4AF37]/15 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                        >
                          <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                          <span>Book on WhatsApp</span>
                        </button>
                      </div>

                      <div className="text-center pt-1">
                        <a
                          href={phoneHref}
                          onClick={onDirectPhoneClick}
                          id="call-now-booking-btn"
                          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-[#E5C158] transition-colors py-1 px-3 rounded-lg hover:bg-white/5"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>Or Call Now for Immediate Assistance: +91 73864 87693</span>
                        </a>
                      </div>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>
    );
  }
);

BookingContactSection.displayName = 'BookingContactSection';
