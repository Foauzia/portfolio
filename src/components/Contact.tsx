import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, MapPin, Terminal as TerminalIcon, Hash, ChevronRight, CheckCircle2, Copy, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

// To use a real email service, we'll use Formspree as it's the easiest for static sites.
// The user will need to replace the ID with their own Formspree ID.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqakvjnd"; // This is a placeholder, user should replace with their own or use a similar service.

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error(err);
      setError("Execution failed: Connection refused. Check your network or try again later.");
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("contact.foziaabako@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Terminal Window Wrapper */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden font-mono"
          >
            {/* Terminal Header */}
            <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <TerminalIcon className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-300 text-sm font-bold">contact.sh — fozia@devsecops</span>
                </div>
              </div>
              <div className="text-slate-500 text-xs hidden sm:block uppercase tracking-tighter font-bold">
                UTF-8 | SSH | AES-256
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-16">
                <div>
                  <div className="flex items-center space-x-2 text-blue-400 mb-6">
                    <ChevronRight className="w-5 h-5" />
                    <h2 className="text-3xl font-bold text-white tracking-tight">cat ./connect.md</h2>
                  </div>
                  
                  <div className="space-y-6 text-slate-300">
                    <p className="text-lg leading-relaxed border-l-2 border-blue-500/30 pl-6 italic">
                      "I'm always open to discussing new projects, collaboration opportunities, or simply connecting with fellow technology professionals."
                    </p>

                    <div className="space-y-8 pt-8">
                      <div className="relative group/email">
                        <TerminalInfoItem 
                          icon={Mail} 
                          label="email" 
                          value="contact.foziaabako@gmail.com" 
                          href="mailto:contact.foziaabako@gmail.com"
                        />
                        <button 
                          onClick={(e) => { e.preventDefault(); copyEmail(); }}
                          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-slate-500 hover:text-blue-400 opacity-0 group-hover/email:opacity-100 transition-opacity"
                          title="Copy to clipboard"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                      <TerminalInfoItem 
                        icon={Phone} 
                        label="phone" 
                        value="+251 972 733 872" 
                        href="tel:+251972733872"
                      />
                      <TerminalInfoItem 
                        icon={MapPin} 
                        label="location" 
                        value="Ethiopia / Remote" 
                      />
                    </div>

                    <div className="pt-12 flex flex-wrap gap-4">
                      <SocialTerminalLink icon={Linkedin} label="linkedin" href="https://linkedin.com/in/foziaabako" />
                      <SocialTerminalLink icon={Github} label="github" href="https://github.com/foziaabako" />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/50 p-6 lg:p-8 rounded-lg border border-slate-800 min-h-[400px] flex flex-col">
                  <div className="flex items-center space-x-2 text-green-400 mb-8 border-b border-slate-800 pb-4">
                    <Hash className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase tracking-widest">Execute: send_message.py</span>
                  </div>

                  <AnimatePresence mode="wait">
                    {isSuccess ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
                      >
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50">
                          <CheckCircle2 className="w-10 h-10 text-green-500" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white uppercase tracking-widest">Transmission Successful</h3>
                          <p className="text-slate-400 text-sm max-w-xs mx-auto">
                            The data packets have been successfully routed. I'll process your request and respond via secure channel shortly.
                          </p>
                        </div>
                        <button 
                          onClick={() => setIsSuccess(false)}
                          className="text-xs text-blue-400 hover:text-blue-300 font-bold uppercase tracking-widest underline decoration-2 underline-offset-8"
                        >
                          Send another command
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-8 flex-1">
                        {error && (
                          <div className="bg-red-500/10 border border-red-500/30 p-4 rounded text-red-400 text-xs flex items-start space-x-3">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            <span>{error}</span>
                          </div>
                        )}
                        <TerminalInput 
                          id="name"
                          label="NAME" 
                          placeholder="Fozia Abako Dengo"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                        <TerminalInput 
                          id="email"
                          label="EMAIL" 
                          type="email" 
                          placeholder="email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <TerminalTextArea 
                          id="message"
                          label="MESSAGE" 
                          placeholder="How can I help you today?"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative w-full py-4 bg-transparent border border-blue-500/50 text-blue-400 rounded-md font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50 overflow-hidden mt-auto"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            {isSubmitting ? (
                              <>
                                <span className="animate-pulse">PROCESSING...</span>
                                <span className="inline-block animate-bounce">_</span>
                              </>
                            ) : (
                              <>
                                <span>SUBMIT COMMAND</span>
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              </>
                            )}
                          </span>
                        </button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="bg-slate-800/50 px-6 py-3 flex items-center justify-between text-[10px] text-slate-500 uppercase tracking-widest">
              <span className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>Status: Ready</span>
              </span>
              <span>Uptime: 99.9%</span>
              <span>Secure Shell: Active</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TerminalInfoItem({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) {
  const Content = () => (
    <div className="flex items-start space-x-4 group">
      <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center shrink-0 border border-slate-700 group-hover:border-blue-500 transition-colors">
        <Icon className="text-blue-500 w-5 h-5" />
      </div>
      <div>
        <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-1">{label}</p>
        <p className="text-white font-medium group-hover:text-blue-400 transition-colors">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      <Content />
    </a>
  ) : (
    <Content />
  );
}

function SocialTerminalLink({ icon: Icon, label, href }: { icon: any, label: string, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center space-x-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-md hover:border-blue-500 hover:bg-slate-700 transition-all group"
    >
      <Icon className="w-4 h-4 text-slate-400 group-hover:text-blue-400" />
      <span className="text-xs font-bold text-slate-400 group-hover:text-white uppercase tracking-tighter">{label}</span>
    </a>
  );
}

function TerminalInput({ id, label, type = 'text', placeholder, value, onChange, required }: { id: string, label: string, type?: string, placeholder: string, value: string, onChange: any, required?: boolean }) {
  return (
    <div className="space-y-2 group">
      <label className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-blue-400">
        <span className="text-blue-500">$</span>
        <span>{label}</span>
      </label>
      <div className="relative">
        <input
          id={id}
          required={required}
          type={type}
          value={value}
          onChange={onChange}
          className="w-full px-0 py-2 bg-transparent border-b border-slate-800 focus:border-blue-500 outline-none transition-all text-white placeholder:text-slate-700"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

function TerminalTextArea({ id, label, placeholder, value, onChange, required }: { id: string, label: string, placeholder: string, value: string, onChange: any, required?: boolean }) {
  return (
    <div className="space-y-2 group">
      <label className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-blue-400">
        <span className="text-blue-500">$</span>
        <span>{label}</span>
      </label>
      <textarea
        id={id}
        required={required}
        rows={3}
        value={value}
        onChange={onChange}
        className="w-full px-0 py-2 bg-transparent border-b border-slate-800 focus:border-blue-500 outline-none transition-all resize-none text-white placeholder:text-slate-700"
        placeholder={placeholder}
      />
    </div>
  );
}