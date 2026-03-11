import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, ChevronRight, Terminal as TerminalIcon, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Project Manager & Frontend Developer",
    company: "Bilal Community Association",
    location: "Australia",
    period: "Nov 2025 – Present",
    website: "bilalcommunity.com.au",
    details: [
      "Led the development of a membership management and payment automation platform.",
      "Coordinated a cross-functional team of developers to deliver a scalable, user-centered solution.",
      "Optimized frontend performance and accessibility using React and modern TypeScript patterns."
    ]
  },
  {
    title: "Project Manager & Web Designer",
    company: "Einnosphere Technologies",
    location: "Ethiopia",
    period: "Mar 2024 – Present",
    website: "einnosphere.com",
    details: [
      "Managed web and ICT projects end-to-end, coordinating with clients to gather requirements.",
      "Delivered multiple production-grade websites on schedule using Agile methodologies.",
      "Designed user-centric interfaces and ensured high availability for client platforms."
    ]
  },
  {
    title: "Project Manager & Dev Lead",
    company: "Classy Trips",
    location: "Ethiopia",
    period: "Feb 2025 – Jun 2025",
    details: [
      "Led development teams and defined the product roadmap.",
      "Set technical priorities to align engineering efforts with business goals.",
      "Ensured robust delivery pipelines and high-quality software releases."
    ]
  },
  {
    title: "Project Lead",
    company: "Kenna for Kids",
    location: "Ethiopia",
    period: "2023 – Present",
    website: "kennakid.org",
    details: [
      "Coordinated project activities and contributed to building technology-driven solutions for community impact.",
      "Focused on accessibility and inclusive design for children with disabilities.",
      "Managed stakeholder relationships and resource allocation for key initiatives."
    ]
  },
  {
    title: "Lecturer",
    company: "Wachemo University",
    location: "Ethiopia",
    period: "Dec 2023 – Present",
    details: [
      "Taught software engineering courses and mentored students through capstone projects.",
      "Contributed to curriculum development in computer science and engineering.",
      "Supervised academic research and student engineering labs."
    ]
  },
  {
    title: "Assistant Lecturer",
    company: "Wachemo University",
    location: "Ethiopia",
    period: "Oct 2020 – Dec 2023",
    details: [
      "Supported teaching activities and supervised student projects.",
      "Assisted in course delivery for undergraduate software engineering programs.",
      "Facilitated laboratory sessions and graded technical assignments."
    ]
  },
  {
    title: "Graduate Assistant",
    company: "Wachemo University",
    location: "Ethiopia",
    period: "Oct 2019 – Oct 2020",
    details: [
      "Assisted in teaching and research activities while pursuing further academic development.",
      "Provided support for senior faculty and student coordination.",
      "Developed introductory lab materials for fundamental programming courses."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-sm font-medium mb-4 border border-blue-600/20 font-mono">
              <TerminalIcon className="w-4 h-4" />
              <span>history | grep "experience"</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
            <p className="text-slate-600 dark:text-slate-400">A timeline of leadership, technical delivery, and academic contribution.</p>
          </motion.div>

          <div className="space-y-12 relative">
             {/* Timeline Vertical Line */}
            <div className="absolute left-[9px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-10"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1.5 w-[20px] h-[20px] rounded-full bg-blue-600 border-4 border-white dark:border-slate-950 shadow-lg z-10" />
                
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-all group">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                         <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                         <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <div className="flex flex-wrap items-center gap-y-2 text-blue-600 font-bold uppercase tracking-widest text-xs">
                        <span>{exp.company}</span>
                        <span className="mx-2 text-slate-300 dark:text-slate-700">|</span>
                        <div className="flex items-center text-slate-500 lowercase font-normal tracking-normal">
                          <MapPin className="w-3 h-3 mr-1" />
                          {exp.location}
                        </div>
                        {exp.website && (
                          <a 
                            href={`https://${exp.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-4 flex items-center text-slate-400 hover:text-blue-600 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            <span className="font-mono">{exp.website}</span>
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                      <Calendar className="w-3 h-3 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                        <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}