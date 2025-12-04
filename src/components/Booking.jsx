import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const Booking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsCalendlyLoaded(true);
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const benefits = [
    "Discover AI automation opportunities in your business",
    "Get a custom implementation roadmap",
    "Learn about realistic ROI expectations",
    "No commitment required"
  ];

  return (
    <section id="booking" ref={ref} className="py-24 px-4 bg-gradient-to-br from-secondary via-dark-bg to-primary relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-6">
            <Calendar size={16} />
            Free Consultation
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Book Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-neon-blue">Free 15-min</span> AI Consultation
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss how AI agents can transform your business operations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              What you'll get from this call:
            </h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={18} className="text-accent" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-12 p-6 bg-gradient-to-r from-accent/10 to-neon-blue/10 border border-accent/20 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} className="text-accent" />
                <span className="text-xl font-bold text-white">15 Minutes</span>
              </div>
              <p className="text-gray-400">
                Quick, focused call to understand your needs and explore possibilities.
                No sales pitch, just honest advice.
              </p>
            </motion.div>
          </motion.div>

          {/* Calendly Embed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
          >
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/ammarahm3d?hide_gdpr_banner=1&background_color=0a0e27&text_color=ffffff&primary_color=00ff88"
              style={{ minWidth: '320px', height: '700px' }}
            />
            {!isCalendlyLoaded && (
              <div className="flex items-center justify-center h-[700px]">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-400">Loading calendar...</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
