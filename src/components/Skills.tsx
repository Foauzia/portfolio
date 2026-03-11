import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Zap, CheckCircle2, Terminal as TerminalIcon, Search, Layout } from 'lucide-react';

const skillCategories = [
  {
    title: "Infrastructure & Cloud",
    icon: Shield,
    skills: [
      "Cloud Infrastructure (AWS/Azure)",
      "CI/CD Automation",
      "Docker & Containerization",
      "Security Best Practices",
      "System Administration",
      "Network Fundamentals"
    ]
  },
  {
    title: "Technical Expertise",
    icon: Zap,
    skills: [
      "Project Management & Collaboration",
      "Agile / Scrum",
      "Project Roadmapping",
      "Stakeholder Management",
      "Sprint Planning",
      "QA & Testing Coordination",
      "Team Leadership & Mentorship"
    ]
  },
  {
    title: "Technical Skills",
    icon: Code,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "REST APIs",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "DevSecOps Fundamentals"
    ]
  },
  {
    title: "Tools",
    icon: Layout,
    skills: [
      "Jira",
      "Notion",
      "ClickUp",
      "Git",
      "GitHub",
      "Netlify",
      "Postman",
      "AI-driven Decision Tools"
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-sm font-medium mb-4 border border-blue-600/20 font-mono">
              <Search className="w-4 h-4" />
              <span>scan_skills --all</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Professional Toolkit</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
                  <category.icon className="text-blue-600 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tighter bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 mr-1.5 text-blue-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Output Log */}
          <div className="bg-slate-900 rounded-3xl p-8 font-mono text-[10px] md:text-xs text-green-500/80 border border-slate-800 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-3">
                <TerminalIcon className="w-5 h-5 text-blue-500" />
                <span className="text-slate-400 font-bold uppercase tracking-widest">skill_audit_results.log</span>
              </div>
              <span className="px-3 py-1 bg-green-500/10 rounded-full text-green-500 text-[10px] font-black">SEC_AUDIT_PASS</span>
            </div>
            <div className="space-y-2 relative z-10">
              <p className="flex items-center"><span className="w-4 text-slate-700">01</span> [INFO] Initializing skill dependency check...</p>
              <p className="flex items-center"><span className="w-4 text-slate-700">02</span> [INFO] Infrastructure & Cloud: Validated 100% (AWS, Docker, CI/CD)</p>
              <p className="flex items-center"><span className="w-4 text-slate-700">03</span> [INFO] Project Management: Validated 100% (Agile, Jira, Roadmap)</p>
              <p className="flex items-center"><span className="w-4 text-slate-700">04</span> [INFO] Technical Stack: Validated 100% (React, PostgreSQL, REST)</p>
              <p className="text-blue-400 pt-4 font-black uppercase tracking-widest">SUMMARY: Fozia Abako is fully optimized for high-performance production roles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}