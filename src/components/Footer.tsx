import React from 'react';
import { Github, Linkedin, Mail, ShieldCheck, Terminal, Cpu } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-20 pb-10 overflow-hidden text-slate-900 dark:text-slate-100">
      {/* Decorative tech background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-xl">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                Fozia Abako Dengo
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-8 leading-relaxed font-medium">
              I build reliable, high-performance digital systems that solve real-world problems and mentor teams and students to deliver impactful solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/foziaabako" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-600 transition-all text-slate-600 dark:text-slate-400 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/foziaabako" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-600 transition-all text-slate-600 dark:text-slate-400 hover:text-blue-600">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:contact.foziaabako@gmail.com" className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-600 transition-all text-slate-600 dark:text-slate-400 hover:text-blue-600">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 flex items-center">
              <Terminal className="w-4 h-4 mr-2 text-blue-500" />
              Navigation
            </h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 font-medium">
              <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-blue-600 transition-colors">Journey</a></li>
              <li><a href="#projects" className="hover:text-blue-600 transition-colors">Work</a></li>
              <li><a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 flex items-center">
              <Cpu className="w-4 h-4 mr-2 text-blue-500" />
              Status
            </h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 font-mono text-xs">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Health: Optimal</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>TLS 1.3 Active</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span>Open for Impact</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-mono">
            &copy; {currentYear} Fozia Abako Dengo. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">
            <span>Crafted with Purpose</span>
          </div>
        </div>
      </div>
    </footer>
  );
}