import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Database, Cpu, Stethoscope, Terminal as TerminalIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Bilal Community Association',
    description: 'Membership management and payment automation platform with role-based access and member dashboards.',
    tags: ['TypeScript', 'JavaScript', 'REST APIs', 'PostgreSQL'],
    link: 'https://bilalcommunity.com.au/',
    github: 'https://github.com/foziaabako/bilala',
    icon: Globe,
    status: 'deployed'
  },
  {
    title: 'Kenna for Kids with Disabilities',
    description: 'Accessible website promoting disability awareness and inclusive education with WCAG compliance.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Accessibility'],
    link: 'https://kennakid.org',
    github: 'https://github.com/foziaabako/kenna',
    icon: Database,
    status: 'production'
  },
  {
    title: 'Einnosphere Technologies',
    description: 'End-to-end web and ICT project management \u2014 delivered 4+ client websites using WordPress and Agile practices.',
    tags: ['WordPress', 'Agile', 'UX Design', 'Web Development'],
    link: 'https://einnosphere.com/',
    github: 'https://github.com/foziaabako/einnosphere',
    icon: Cpu,
    status: 'deployed'
  },
  {
    title: 'Hijama Care Corner',
    description: 'Professional website for a health and wellness center with service info, booking, and educational resources.',
    tags: ['Web Design', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://hijamacarecorner.org/',
    github: 'https://github.com/foziaabako/hijama',
    icon: Stethoscope,
    status: 'deployed'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-sm font-medium mb-4">
              <TerminalIcon className="w-4 h-4" />
              <span>ls /projects</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Explore my latest deployments and architectural designs. Each project is a testament to impact-driven and user-centric engineering.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 transition-all duration-300 group overflow-hidden flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="p-3 rounded-xl bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-[10px] uppercase tracking-widest">
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold mt-4">{project.title}</CardTitle>
                  <CardDescription className="text-slate-500 dark:text-slate-400 mt-2 min-h-[3rem]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                  <div className="flex w-full justify-between items-center">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="hover:bg-blue-600 hover:text-white transition-all" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                    <div className="text-xs font-mono text-slate-400 group-hover:text-blue-600 transition-colors">
                      0 errors | 0 warnings
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}