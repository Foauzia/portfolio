import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COMMANDS = {
  help: 'Available commands: about, skills, contact, experience, whoami, scan, clear, exit',
  about: 'Fozia Abako Dengo - DevSecOps Engineer & Tech Leader. Passionate about automating security and building resilient systems.',
  skills: 'DevSecOps, CI/CD, Terraform, Kubernetes, Docker, AWS, Azure, React, Security Automation.',
  contact: 'Email: contact.foziaabako@gmail.com | LinkedIn: linkedin.com/in/fozia-abako',
  experience: 'Current: Project Manager & Frontend Developer @ Bilal Community Association. Previous: Technical Director @ Classy Trips.',
  whoami: 'fozia_abako_dengo: DevSecOps Engineer [Access Level: Admin]',
  scan: 'Initiating system vulnerability scan... [OK] SSL/TLS active [OK] Firewall active [OK] DevSecOps pipeline secure.',
  clear: 'CLEAR_ACTION',
  exit: 'EXIT_ACTION'
};

export function Terminal({ isOpen, onClose }: TerminalProps) {
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (cmd === 'clear') {
      setHistory([]);
    } else if (cmd === 'exit') {
      onClose();
    } else if (cmd in COMMANDS) {
      if (cmd === 'scan') {
        setHistory([...history, { cmd, output: 'Scanning infrastructure...' }]);
        setTimeout(() => {
          setHistory(prev => [...prev, { cmd: '', output: COMMANDS['scan'] }]);
        }, 800);
      } else {
        setHistory([...history, { cmd, output: COMMANDS[cmd as keyof typeof COMMANDS] }]);
      }
    } else if (cmd !== '') {
      setHistory([...history, { cmd, output: `Command not found: ${cmd}. Type 'help' for available commands.` }]);
    }
    
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <div 
            className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-lg shadow-2xl overflow-hidden font-mono text-sm flex flex-col h-[500px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Header */}
            <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
              <div className="flex items-center space-x-2">
                <TerminalIcon className="w-4 h-4 text-green-500" />
                <span className="text-slate-300">fozia-terminal v1.0.0</span>
              </div>
              <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div 
              className="flex-1 overflow-y-auto p-4 space-y-2 text-slate-300"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="text-green-500 mb-4 font-bold tracking-widest border-b border-green-500/20 pb-2">
                WELCOME TO FOZIA SECURE SHELL
              </div>
              <div className="text-slate-500 text-xs mb-4 italic">Type 'help' to begin or 'scan' for a security report.</div>
              
              {history.map((entry, i) => (
                <div key={i}>
                  {entry.cmd && (
                    <div className="flex items-center space-x-2 text-blue-400">
                      <ChevronRight className="w-4 h-4" />
                      <span>{entry.cmd}</span>
                    </div>
                  )}
                  <div className="pl-6 mt-1 text-slate-400 whitespace-pre-wrap">{entry.output}</div>
                </div>
              ))}
              
              <form onSubmit={handleCommand} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-slate-300"
                  autoFocus
                />
              </form>
              <div ref={bottomRef} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}