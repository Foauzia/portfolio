import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';
import { ThemeProvider } from './components/ThemeProvider';
import SEO from './components/SEO';

function App() {
  return (
    <ThemeProvider>
      <SEO />
      <main className="min-h-screen font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-primary/30 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
        <Toaster position="bottom-right" theme="system" />
      </main>
    </ThemeProvider>
  );
}

export default App;