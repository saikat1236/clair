import { motion } from 'framer-motion';
import whatsappIcon from '../assets/whatsapp-icon.png';

const WhatsAppButton = () => {
  const phoneNumber = '919208571249';
  const message = "Hi! I'd like to learn more about Neuérde's services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[9999] flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-16 h-16 object-contain drop-shadow-xl"
      />
      
      <span className="absolute right-full mr-4 bg-[#131315] text-white px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 pointer-events-none shadow-2xl">
        Chat with us
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
