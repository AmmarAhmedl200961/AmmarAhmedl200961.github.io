import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/923365442539?text=Hi%20Ammar%2C%20I%27m%20interested%20in%20AI%20automation%20for%20my%20business.";

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: [0, -8, 0]
      }}
      transition={{ 
        scale: { delay: 1, duration: 0.5 },
        opacity: { delay: 1, duration: 0.5 },
        y: { 
          delay: 1.5,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileHover={{ scale: 1.15, y: -5 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring effect */}
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-25" />
      <span className="absolute inset-[-4px] rounded-full bg-[#25d366]/20 animate-pulse" />
      
      {/* Button with WhatsApp SVG */}
      <div className="relative w-16 h-16 bg-[#25d366] rounded-full flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.7)] transition-all duration-300">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp"
          className="w-9 h-9"
        />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-sm font-medium pointer-events-none">
        Chat with me on WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
