import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Network, FileText, Linkedin, Mail, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "sh init_infrastructure.sh --env=production";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: FileText, label: "Resume", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/foziabakodengo" },
    { icon: Github, label: "GitHub", href: "https://github.com/foziabakodengo" },
    { icon: Mail, label: "Email", href: "mailto:fozia.abako@gmail.com" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden bg-slate-950 text-white">
      {/* DevSecOps Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-400 text-sm font-medium mb-4 border border-blue-600/20">
              <ShieldCheck className="w-4 h-4" />
              <span className="uppercase tracking-widest text-[10px]">System Status: Online</span>
            </div>
            
            <p className="text-blue-500 font-mono text-lg mb-1 font-bold uppercase tracking-[0.3em]">Fozia Abako Dengo</p>
            
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight mb-4 text-slate-200 border-l-4 border-blue-600 pl-4 bg-blue-600/5 py-2">
              Technical Project Manager | Software Engineer | Lecturer
            </h1>
            
            <p className="text-base text-slate-400 mb-6 max-w-xl leading-relaxed">
              I build reliable, high-performance digital systems that solve real-world problems and mentor teams and students to deliver impactful solutions.
            </p>

            {/* Social Links and Quick Actions */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-600/50 transition-all group"
                    title={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="h-8 w-px bg-slate-800 hidden md:block" />
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 h-12 text-base font-bold group shadow-2xl shadow-blue-600/20" asChild>
                  <a href="#projects">
                    Explore Projects
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-slate-500">
              <div className="flex items-center space-x-2 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-tighter">Uptime 99.9%</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-xs font-mono uppercase tracking-tighter">Security Level: A+</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Terminal Mockup */}
            <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm">
              <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs text-slate-500">fozia@devsecops: ~</div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">$</span>
                  <span className="text-white">{typedText}</span>
                  <span className="w-2 h-5 bg-blue-500 animate-pulse" />
                </div>
                <AnimatePresence>
                  {typedText === fullText && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-2 text-slate-400"
                    >
                      <p className="text-blue-400">$ fozia --whoami</p>
                      <p className="text-white font-bold underline underline-offset-4 decoration-blue-500/50">Fozia Abako Dengo</p>
                      <p className="text-white uppercase">[ROLE] TPM | Software Engineer | Lecturer</p>
                      <p className="text-green-500 mt-4">[STATUS] System optimized for real-world impact.</p>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                          <div className="flex items-center space-x-2 mb-1">
                            <Cpu className="w-4 h-4 text-blue-400" />
                            <span className="text-xs font-bold text-slate-200">MENTORSHIP</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-700 rounded-full mt-2">
                            <div className="h-full w-[95%] bg-blue-500 rounded-full" />
                          </div>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                          <div className="flex items-center space-x-2 mb-1">
                            <Network className="w-4 h-4 text-purple-400" />
                            <span className="text-xs font-bold text-slate-200">DELIVERY</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-700 rounded-full mt-2">
                            <div className="h-full w-[98%] bg-purple-500 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Decorative blurs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}