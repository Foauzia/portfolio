import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldCheck, Briefcase, User, Mail, Sparkles, Linkedin, Github, Moon, Sun, Terminal as TerminalIcon, LayoutGrid } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from './ThemeProvider';
import { Terminal } from './Terminal';

const navItems = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: LayoutGrid },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Sparkles },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-slate-200 dark:border-slate-800 py-3 shadow-xl' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 group">
          <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 uppercase">
            FOZIA
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 pl-4 border-l border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="p-2 text-slate-500 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
              title="Open Terminal (Command Mode)"
            >
              <TerminalIcon className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={() => setIsTerminalOpen(true)}
            className="p-2 text-slate-600 dark:text-slate-300"
          >
            <TerminalIcon className="w-6 h-6" />
          </button>
          <button
            className="p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4 text-blue-600" />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                 <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-2 text-slate-600 dark:text-slate-300"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span className="text-xs font-bold uppercase tracking-widest">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                </button>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-500 hover:text-blue-600">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-slate-500 hover:text-white">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </nav>
  );
}