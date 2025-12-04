import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Target, Lightbulb, ExternalLink } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const highlights = [
    {
      icon: TrendingUp,
      title: "Data-Driven Solutions",
      description: "Leveraging machine learning and deep learning to extract actionable insights from complex datasets"
    },
    {
      icon: Target,
      title: "Precision & Innovation",
      description: "Expertise in NLP, Computer Vision, and Generative AI to solve real-world challenges"
    },
    {
      icon: Lightbulb,
      title: "Cloud & Scale",
      description: "Building scalable AI solutions with AWS, big data analytics, and modern cloud infrastructure"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-br from-secondary via-primary to-dark-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-neon-blue">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-neon-blue mx-auto mb-6"></div>
          </motion.div>

          {/* Main Bio */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-10 border border-white/10 shadow-[0_0_50px_rgba(0,255,136,0.1)]">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                Aspiring <span className="text-accent font-semibold">Data Scientist</span> with expertise in{' '}
                <span className="text-neon-blue font-semibold">machine learning</span>,{' '}
                <span className="text-neon-purple font-semibold">deep learning</span>,{' '}
                <span className="text-accent font-semibold">NLP</span>, and{' '}
                <span className="text-neon-blue font-semibold">cloud computing</span>.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-4">
                Passionate about leveraging data to solve complex problems and deliver{' '}
                <span className="text-accent font-semibold">actionable insights</span> that drive real-world impact.
                From neural networks to generative models, I transform data into intelligent systems.
              </p>
              
              {/* Featured Project - Migrate-AI */}
              <div className="mt-6 p-6 bg-gradient-to-r from-accent/10 to-neon-blue/10 border-2 border-accent/50 rounded-xl hover:border-accent hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <p className="text-sm text-accent font-semibold mb-2">🎓 FEATURED PROJECT</p>
                    <h3 className="text-2xl font-bold text-white mb-2">Migrate-AI</h3>
                    <p className="text-gray-300 mb-3">
                      AI-powered migration assistant - My Final Year Project showcasing advanced NLP and Generative AI capabilities
                    </p>
                  </div>
                  <a
                    href="https://migrateai.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-neon-blue rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all hover:scale-105"
                  >
                    <span>View Live</span>
                    <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(0, 255, 136, 0.3)"
                }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-neon-blue flex items-center justify-center mb-4">
                  <highlight.icon className="text-dark-bg" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
