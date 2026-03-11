import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Terminal as TerminalIcon, Info, Users, Cpu, Rocket } from 'lucide-react';

const pillars = [
  {
    title: "Leadership",
    icon: Users,
    description: "Directing cross-functional teams to deliver complex digital solutions on time and within scope.",
    color: "blue"
  },
  {
    title: "Mentorship",
    icon: Cpu,
    description: "Guiding the next generation of software engineers through university teaching and project supervision.",
    color: "purple"
  },
  {
    title: "Innovation",
    icon: Rocket,
    description: "Championing inclusive technology and building platforms that create real-world impact.",
    color: "green"
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-sm font-medium mb-4 border border-blue-600/20">
              <TerminalIcon className="w-4 h-4" />
              <span className="font-mono">cat profile.md</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Where Code Meets Purpose</h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              I lead teams, deliver scalable systems, and mentor engineers — turning bold ideas into digital solutions that drive real results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-all"
              >
                <div className={`w-12 h-12 bg-${pillar.color}-600/10 rounded-2xl flex items-center justify-center mb-6`}>
                  <pillar.icon className={`w-6 h-6 text-${pillar.color}-600`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-colors group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors group-hover:text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Academic Background</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-tight">Master's Degree</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">Computer Science & Engineering</p>
                  <p className="text-xs text-blue-600 font-bold mt-2 uppercase">Adama Science and Technology University</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-tight">Bachelor's Degree</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">Software Engineering</p>
                  <p className="text-xs text-green-600 font-bold mt-2 uppercase">Wachemo University</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-indigo-500/50 transition-colors group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors group-hover:text-white">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Professional Validation</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <div className="space-y-3">
                {[ 
                  "AI-Enhanced Project Management \u2014 10 Academy",
                  "Higher Diploma for Higher Education Teaching",
                  "Foundations for Excellence in Teaching \u2014 Arizona State University"
                ].map((cert, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                    <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Terminal System Info Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-slate-900 rounded-2xl border border-slate-800 font-mono text-xs text-slate-400 shadow-2xl"
          >
            <div className="flex items-center space-x-2 mb-4 text-slate-300 border-b border-slate-800 pb-2">
              <Info className="w-4 h-4 text-blue-500" />
              <span>system_info --detailed</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-blue-500 mb-1">[OS]</p>
                <p>Linux (Debian/Ubuntu)</p>
              </div>
              <div>
                <p className="text-blue-500 mb-1">[STATUS]</p>
                <p>Available for Collaboration</p>
              </div>
              <div>
                <p className="text-blue-500 mb-1">[ZONE]</p>
                <p>Global / Remote</p>
              </div>
              <div>
                <p className="text-blue-500 mb-1">[UPTIME]</p>
                <p>Active Professional / 24-7</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}