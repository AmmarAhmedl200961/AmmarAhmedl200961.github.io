import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, Brain, Sparkles, Cloud, Database, 
  Terminal, Cpu, Network, Zap, FileCode
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Agentic AI & Orchestration",
      icon: Brain,
      color: "from-neon-purple to-accent",
      borderColor: "border-neon-purple",
      skills: [
        { name: "AI Agents / RAG", icon: Brain },
        { name: "LangGraph / CrewAI", icon: Network },
        { name: "Multi-Agent Orchestration", icon: Sparkles },
        { name: "Vector Databases", icon: Database },
        { name: "Stateful Workflows", icon: Code },
        { name: "Generative AI", icon: Sparkles }
      ]
    },
    {
      title: "Cloud & FinOps Architecture",
      icon: Cloud,
      color: "from-neon-blue to-neon-purple",
      borderColor: "border-neon-blue",
      skills: [
        { name: "FinOps (Cost Opt.)", icon: Zap },
        { name: "AWS Architecture", icon: Cloud },
        { name: "Kubernetes MLOps", icon: Cpu },
        { name: "IaC (Terraform)", icon: FileCode },
        { name: "Spot Instance Orchestration", icon: Network },
        { name: "CI/CD for Data", icon: Terminal }
      ]
    },
    {
      title: "Advanced Data & Modeling",
      icon: Code,
      color: "from-accent to-neon-blue",
      borderColor: "border-accent",
      skills: [
        { name: "Stochastic Modeling", icon: Brain },
        { name: "Bayesian Inference", icon: Cpu },
        { name: "Computer Vision (Pose Est.)", icon: Network },
        { name: "dbt (Data Governance)", icon: Database },
        { name: "Data Observability", icon: Zap },
        { name: "ELT Architecture", icon: FileCode }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-br from-primary via-secondary to-dark-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-neon-blue to-neon-purple">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-neon-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technologies powering intelligent data solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
              className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 ${category.borderColor}/30 hover:${category.borderColor} transition-all duration-300 shadow-xl hover:shadow-[0_0_40px_rgba(0,255,136,0.2)]`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={tagVariants}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(0, 255, 136, 0.4)"
                    }}
                    className={`group flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${category.color} bg-opacity-10 border ${category.borderColor}/50 rounded-full hover:bg-opacity-20 transition-all duration-300 cursor-pointer`}
                  >
                    <skill.icon size={16} className={`text-transparent bg-clip-text bg-gradient-to-r ${category.color}`} />
                    <span className="text-sm font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${category.color}">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Skill Bar (Infinite Loop) */}
        <motion.div 
          className="mt-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative h-20 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex items-center overflow-hidden">
            <motion.div
              className="flex gap-6 px-6"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...Array(3)].map((_, repetition) => (
                <div key={repetition} className="flex gap-6">
                  {['AI Agents', 'RAG', 'LangGraph', 'AWS Architecture', 'Kubernetes', 'FinOps', 'Terraform', 'Multi-Agent Systems', 'Vector DB', 'Bayesian Inference', 'dbt', 'MLOps'].map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-accent/20 to-neon-blue/20 border border-accent/30 rounded-full"
                    >
                      <span className="text-white font-semibold whitespace-nowrap">{skill}</span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
