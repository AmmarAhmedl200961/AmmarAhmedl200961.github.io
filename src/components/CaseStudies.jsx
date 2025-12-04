import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Clock, DollarSign, Users, Bot, FileSearch, Mail, Database, Workflow, Brain } from 'lucide-react';

const caseStudies = [
  {
    title: "E-commerce Customer Support Automation",
    client: "RetailTech Solutions",
    icon: Bot,
    color: "from-accent to-neon-blue",
    metrics: [
      { icon: Clock, value: "85%", label: "Response Time Reduced" },
      { icon: DollarSign, value: "$180K", label: "Annual Savings" },
      { icon: Users, value: "24/7", label: "Support Coverage" },
    ],
    description: "Deployed multi-agent system handling 10,000+ daily inquiries with human-like responses.",
    tags: ["CrewAI", "GPT-4", "RAG", "Zendesk Integration"]
  },
  {
    title: "Legal Document Analysis Pipeline",
    client: "Morrison & Partners LLP",
    icon: FileSearch,
    color: "from-neon-blue to-neon-purple",
    metrics: [
      { icon: Clock, value: "90%", label: "Time Saved" },
      { icon: DollarSign, value: "$320K", label: "Annual Value" },
      { icon: Users, value: "500+", label: "Contracts/Month" },
    ],
    description: "Built AI agents that review, summarize, and extract key terms from legal contracts in minutes.",
    tags: ["LangGraph", "Claude 3", "Vector DB", "OCR"]
  },
  {
    title: "Automated Email Campaign Manager",
    client: "GrowthScale Marketing",
    icon: Mail,
    color: "from-neon-purple to-accent",
    metrics: [
      { icon: TrendingUp, value: "340%", label: "ROI Increase" },
      { icon: DollarSign, value: "$95K", label: "Revenue Generated" },
      { icon: Users, value: "50K+", label: "Leads Processed" },
    ],
    description: "AI agents that personalize, schedule, and optimize email campaigns based on user behavior.",
    tags: ["OpenAI", "Mailchimp API", "Analytics", "A/B Testing"]
  },
  {
    title: "Financial Data Extraction & Reporting",
    client: "CapitalView Analytics",
    icon: Database,
    color: "from-accent to-neon-purple",
    metrics: [
      { icon: Clock, value: "95%", label: "Manual Work Eliminated" },
      { icon: DollarSign, value: "$250K", label: "Cost Reduction" },
      { icon: Users, value: "100+", label: "Reports Daily" },
    ],
    description: "Automated extraction from PDFs, spreadsheets, and databases into unified dashboards.",
    tags: ["Python", "AWS", "Tableau", "NLP"]
  },
  {
    title: "HR Recruitment Screening Agent",
    client: "TalentFirst Corp",
    icon: Users,
    color: "from-neon-blue to-accent",
    metrics: [
      { icon: Clock, value: "80%", label: "Screening Time Cut" },
      { icon: DollarSign, value: "$120K", label: "Annual Savings" },
      { icon: Users, value: "2000+", label: "CVs Processed/Week" },
    ],
    description: "AI-powered resume screening, skill matching, and initial candidate communication.",
    tags: ["GPT-4", "ATS Integration", "NLP", "Automation"]
  },
  {
    title: "Supply Chain Optimization Agent",
    client: "LogiFlow Industries",
    icon: Workflow,
    color: "from-neon-purple to-neon-blue",
    metrics: [
      { icon: TrendingUp, value: "35%", label: "Efficiency Gain" },
      { icon: DollarSign, value: "$400K", label: "Savings Achieved" },
      { icon: Clock, value: "Real-time", label: "Decision Making" },
    ],
    description: "Predictive AI agents managing inventory, routing, and supplier negotiations.",
    tags: ["ML Models", "ERP Integration", "IoT", "Analytics"]
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" ref={ref} className="py-24 px-4 bg-gradient-to-br from-primary via-dark-bg to-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-neon-blue">Studies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-neon-blue mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real results from AI automation projects that transformed businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,136,0.15)]"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center flex-shrink-0`}>
                  <study.icon className="text-dark-bg" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-400">{study.client}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {study.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center p-3 bg-white/5 rounded-lg">
                    <metric.icon size={16} className="text-accent mx-auto mb-1" />
                    <div className="text-lg font-bold text-white">{metric.value}</div>
                    <div className="text-xs text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-r from-accent/10 to-neon-blue/10 border border-accent/20 rounded-2xl"
        >
          <div className="text-center mb-6">
            <Brain size={40} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">Previous Clients Results</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-accent">2,400+</div>
              <div className="text-gray-400">Hours Saved Monthly</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-neon-blue">$1.5M+</div>
              <div className="text-gray-400">Annual Client Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-neon-purple">50+</div>
              <div className="text-gray-400">AI Agents Built</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent">99.2%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
