/**
 * Urban Spark Cleaning Services Hyderabad - Configuration
 *
 * Contact numbers:
 */

export const WHATSAPP_NUMBER: string = "+91 7386487693";
export const PHONE_NUMBER: string = "+91 7386487693";

export const BUSINESS_CONFIG = {
  name: "Urban Spark Cleaning Services Hyderabad",
  tagline: "Clean Spaces ✦ Happy Lives",
  subheading: "Trusted. Affordable. Reliable.",
  location: "Hyderabad, Telangana, India",
  serviceCity: "Hyderabad",
  businessHours: "Monday – Sunday: 8:00 AM – 8:00 PM",
  serviceAreas: [
    "Banjara Hills",
    "Jubilee Hills",
    "Gachibowli",
    "HITEC City",
    "Madhapur",
    "Kondapur",
    "Kukatpally",
    "Manikonda",
    "Kavuri Hills",
    "Financial District",
    "Nallagandla",
    "Begumpet",
    "Secunderabad",
    "Kokapet",
    "Tellapur",
    "Miyapur"
  ]
};

/**
 * Format phone number into clean dial link
 */
export function getPhoneHref(phoneNumber = PHONE_NUMBER): string {
  if (!phoneNumber || phoneNumber === "YOUR_PHONE_NUMBER") {
    return "#";
  }
  const cleaned = phoneNumber.replace(/[^0-9+]/g, "");
  return `tel:${cleaned}`;
}

/**
 * Format WhatsApp click-to-chat URL with prefilled message
 */
export function getWhatsAppHref(message: string, whatsappNumber = WHATSAPP_NUMBER): string {
  const encodedMsg = encodeURIComponent(message);
  if (!whatsappNumber || whatsappNumber === "YOUR_WHATSAPP_NUMBER") {
    // If not yet replaced, fallback to standard web link with message parameter or anchor
    return `https://wa.me/?text=${encodedMsg}`;
  }
  const cleaned = whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleaned}?text=${encodedMsg}`;
}
