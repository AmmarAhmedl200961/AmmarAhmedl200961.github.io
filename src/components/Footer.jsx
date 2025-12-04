import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/AmmarAhm3d',
      label: 'GitHub',
      color: 'hover:text-accent'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ammar-ahmed-',
      label: 'LinkedIn',
      color: 'hover:text-neon-blue'
    },
    {
      icon: Mail,
      href: 'mailto:ammar.ahmed.paki@gmail.com',
      label: 'Email',
      color: 'hover:text-neon-purple'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-dark-bg via-primary to-secondary text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-neon-blue">
              Ammar Ahmed
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Deep Learning Artisan | Generative AI Architect
            </p>
            <div className="flex items-center gap-2 text-gray-400 mb-6">
              <MapPin size={18} className="text-accent" />
              <span>Lahore, Pakistan</span>
            </div>
            <p className="text-sm text-gray-500">
              Transforming data into intelligent systems
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'Timeline'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4 mb-6">
              <a
                href="mailto:ammar.ahmed.paki@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors group"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-all">
                  <Mail size={18} />
                </div>
                <span className="text-sm">ammar.ahmed.paki@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ammar-ahmed-"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-neon-blue transition-colors group"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-neon-blue/20 transition-all">
                  <Linkedin size={18} />
                </div>
                <span className="text-sm">linkedin.com/in/ammar-ahmed-</span>
              </a>
            </div>
            <a
              href="mailto:ammar.ahmed.paki@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-neon-blue rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300 hover:scale-105"
            >
              <Send size={18} />
              <span>Send Message</span>
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-white/5 rounded-lg ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                whileHover={{ y: -3 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-sm"
          >
            <p>© {currentYear} Ammar Ahmed. All rights reserved.</p>
            <p className="text-xs mt-1">Built with Astro, React & Three.js</p>
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-accent to-neon-blue rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300 hover:scale-110"
            whileHover={{ y: -3 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>

      {/* Glow effect at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
    </footer>
  );
};

export default Footer;
