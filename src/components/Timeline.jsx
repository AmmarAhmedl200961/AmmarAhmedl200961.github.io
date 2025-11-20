import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Award, FileText, Languages, ExternalLink } from 'lucide-react';

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "BS Data Science",
      institution: "National University of Computer and Emerging Sciences (FAST-NUCES)",
      location: "Lahore, Pakistan",
      period: "June 2021 - June 2025",
      fyp: {
        name: "Migrate-AI",
        description: "Final Year Project - AI-powered migration assistant",
        link: "https://migrateai.vercel.app"
      },
      courses: [
        "Generative AI",
        "Deep Learning for Perception",
        "Introduction to Cloud Computing AWS",
        "Natural Language Processing",
        "Data Mining",
        "Data Analysis and Visualization",
        "Big Data Analytics"
      ]
    },
    {
      degree: "A-Levels (Pre-Engineering)",
      institution: "Pakistan International School Riyadh",
      location: "Riyadh, KSA",
      period: "January 2018 - January 2020",
      achievement: "Achieved 3 As"
    }
  ];

  const experience = [
    {
      title: "Business Development Executive",
      company: "Narsun Studios",
      location: "Johar Town, Lahore",
      period: "June 2023 - February 2024",
      responsibilities: [
        "Managed Sales, Marketing, and Client Relationship Management",
        "Led marketing strategies that increased client acquisition by 15%"
      ]
    }
  ];

  const achievements = [
    "Softec AI Competition 2022",
    "Agentic AI Innovation Challenge 2025 (Ready Tensor Platform)"
  ];

  const certificates = [
    {
      name: "Ready Tensor Agentic AI Builder",
      credentialId: "eb338598-3add-4a76-908e-193a655a1c1f",
      link: "https://app.readytensor.ai/certificates/eb338598-3add-4a76-908e-193a655a1c1f",
      featured: true
    },
    {
      name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      credentialId: "9e832aba-c055-4679-b3fd-61401a191ebf",
      link: "https://www.credly.com/badges/9e832aba-c055-4679-b3fd-61401a191ebf/print",
      featured: true
    },
    {
      name: "Data Analysis Using Python",
      credentialId: "7611de03-61c1-49b4-b3e2-f8aad80a913f",
      link: "https://www.credly.com/badges/7611de03-61c1-49b4-b3e2-f8aad80a913f"
    },
    {
      name: "Python for Data Science",
      credentialId: "3d1d18ab-be1b-4e8d-94d0-81c742db3320",
      link: "https://www.credly.com/badges/3d1d18ab-be1b-4e8d-94d0-81c742db3320"
    },
    {
      name: "Python Developer Track",
      credentialId: "#316,931",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/7653fd473502608649fb0922929cb781c8aaae55"
    },
    {
      name: "Containerization and Virtualization",
      provider: "Datacamp"
    }
  ];

  const languages = [
    { name: "English", proficiency: "Full Professional Proficiency" },
    { name: "Urdu", proficiency: "Native or Bilingual Proficiency" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-24 px-4 bg-dark-bg relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
              <GraduationCap className="text-white" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Education</h2>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-all duration-300"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent shadow-[0_0_20px_rgba(0,255,136,0.6)]"></div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-lg text-neon-blue mb-1">{edu.institution}</p>
                  <p className="text-gray-400 mb-1">{edu.location}</p>
                  <p className="text-accent font-semibold mb-3">{edu.period}</p>
                  
                  {/* Final Year Project */}
                  {edu.fyp && (
                    <div className="mt-4 mb-4">
                      <a
                        href={edu.fyp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-block"
                      >
                        <div className="bg-gradient-to-r from-accent/20 to-neon-blue/20 border-2 border-accent rounded-lg p-4 hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-sm text-gray-400 mb-1">🎓 Final Year Project</p>
                              <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors flex items-center gap-2">
                                {edu.fyp.name}
                                <ExternalLink size={18} className="text-accent group-hover:translate-x-1 transition-transform" />
                              </h4>
                              <p className="text-sm text-gray-300 mt-1">{edu.fyp.description}</p>
                            </div>
                          </div>
                          <div className="mt-3 text-xs text-accent font-semibold flex items-center gap-1">
                            <span>🚀 Live Demo</span>
                            <span className="opacity-60">→ migrateai.vercel.app</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                  
                  {edu.courses && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-400 mb-2">Key Courses:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-accent/20 border border-accent/50 rounded-full text-sm text-accent"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {edu.achievement && (
                    <p className="mt-3 text-neon-blue font-semibold">🏆 {edu.achievement}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-neon-blue flex items-center justify-center">
              <Briefcase className="text-white" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
          </motion.div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-neon-blue/30 hover:border-neon-blue transition-all duration-300"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-neon-blue shadow-[0_0_20px_rgba(0,212,255,0.6)]"></div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-lg text-accent mb-1">{exp.company}</p>
                  <p className="text-gray-400 mb-1">{exp.location}</p>
                  <p className="text-neon-blue font-semibold mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-accent mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements, Certificates, Languages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Achievements */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-accent" size={32} />
              <h3 className="text-2xl font-bold text-white">Achievements</h3>
            </div>
            <div className="space-y-3">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-accent/30 hover:border-accent/50 transition-all"
                >
                  <p className="text-gray-300">{achievement}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificates */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-neon-blue" size={32} />
              <h3 className="text-2xl font-bold text-white">Certificates</h3>
            </div>
            <div className="space-y-3">
              {certificates.map((cert, idx) => (
                <div
                  key={idx}
                  className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 border transition-all group hover:scale-105 ${
                    cert.featured 
                      ? 'border-accent/50 hover:border-accent hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]' 
                      : 'border-neon-blue/30 hover:border-neon-blue/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-semibold text-sm hover:text-accent transition-colors flex items-center gap-2 group-hover:underline"
                        >
                          {cert.featured && <span className="text-accent">⭐</span>}
                          {cert.name}
                          <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <p className="text-white font-semibold text-sm">{cert.name}</p>
                      )}
                      {cert.credentialId && (
                        <p className="text-xs text-gray-400 mt-1">
                          Credential ID: <span className="text-neon-blue font-mono">{cert.credentialId}</span>
                        </p>
                      )}
                      {cert.provider && (
                        <p className="text-xs text-gray-400 mt-1">{cert.provider}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* View All Certificates Link */}
              <a
                href="https://www.credly.com/users/ammar-ahmed-bsds-2020-fast-nu-lhr/badges"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-neon-blue/30 hover:border-neon-blue/50 transition-all text-center group"
              >
                <p className="text-neon-blue font-semibold text-sm flex items-center justify-center gap-2">
                  View All on Credly
                  <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                </p>
              </a>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <Languages className="text-neon-purple" size={32} />
              <h3 className="text-2xl font-bold text-white">Languages</h3>
            </div>
            <div className="space-y-3">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-neon-purple/30 hover:border-neon-purple/50 transition-all"
                >
                  <p className="text-white font-semibold">{lang.name}</p>
                  <p className="text-gray-400 text-sm">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
