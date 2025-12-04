import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Code, Brain, Cloud, Sparkles, ArrowRight } from 'lucide-react';
import Hero3D from './Hero3D';

const Hero = () => {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const floatingIcons = [
    { Icon: Code, position: 'top-1/4 left-[15%]', delay: 0, color: 'text-neon-blue' },
    { Icon: Brain, position: 'top-1/3 right-[20%]', delay: 0.2, color: 'text-neon-purple' },
    { Icon: Cloud, position: 'bottom-1/3 left-[10%]', delay: 0.4, color: 'text-accent' },
    { Icon: Sparkles, position: 'bottom-1/4 right-[15%]', delay: 0.6, color: 'text-neon-blue' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-bg via-primary to-secondary">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        <Hero3D />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, position, delay, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} hidden lg:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{
            delay,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className={`${color} p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10`}>
            <Icon size={24} />
          </div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/50 text-accent text-xs font-semibold tracking-wide uppercase">
              Agentic AI Consultant
            </span>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              I build Agentic AI systems
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-neon-blue to-neon-purple">
              that replace entire teams
            </span>
          </motion.h1>

          <motion.p 
            className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Automate complex workflows, eliminate manual tasks, and scale your operations 
            with intelligent AI agents that work 24/7.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a 
              href="#booking"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-dark-bg bg-gradient-to-r from-accent to-neon-blue rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]"
            >
              Book Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300"
            >
              View Case Studies
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { value: '500+', label: 'Hours Saved Monthly' },
              { value: '$2.5M+', label: 'Client Value Generated' },
              { value: '15+', label: 'AI Agents Deployed' },
              { value: '98%', label: 'Automation Accuracy' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5">
                <div className="text-xl md:text-2xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { Icon: Github, href: 'https://github.com/AmmarAhm3d', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/ammar-ahmed-', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:ammar.ahmed.paki@gmail.com', label: 'Email' }
            ].map(({ Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white text-sm hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
                custom={i}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} className="group-hover:text-accent transition-colors" />
                <span>{label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Location */}
          <motion.div 
            className="flex items-center justify-center gap-2 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <MapPin size={14} />
            <span>Lahore, Pakistan</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 1, 0.3],
          y: [0, 8, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-5 h-8 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-accent rounded-full mt-1.5"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
