import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

/**
 * WhatsAppButton Component - Floating action button for WhatsApp contact
 * Features:
 * - Fixed position bottom-right
 * - Pulse animation for attention
 * - Glassmorphism effect
 * - Dynamic link from environment variable
 */

// WhatsApp number from environment variable
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999';

export const WhatsAppButton = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá! Gostaria de saber mais sobre os serviços da Tégris.'
  )}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-shadow duration-300"
      aria-label="Contato via WhatsApp"
    >
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      
      {/* Icon */}
      <MessageCircle className="w-6 h-6 text-white relative z-10" />
    </motion.a>
  );
};
