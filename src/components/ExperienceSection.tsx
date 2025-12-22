import { AnimatedSection } from './AnimatedSection';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Finsera Ventures Private Limited',
    period: 'Sep 2025 – Present',
    description: [
      'Designing and developing scalable backend systems',
      'Owning API architecture, performance, and reliability',
      'Managing CRMs, backend services, and cloud deployments',
      'Implementing caching, logging, and monitoring strategies',
      'Supporting business requirements with stable technical solutions',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'Repso Live',
    period: 'Feb 2025 – Jul 2025',
    tech: 'NestJS, MongoDB, Redis, Socket.io, Zego Cloud',
    description: [
      'Built backend services for a live streaming platform',
      'Implemented real-time features using WebSockets and Socket.io',
      'Used Redis for caching and session-related data',
      'Wrote Jest unit tests for services and controllers',
      'Worked on private chat, private calls, gifting, and live sessions',
    ],
  },
  {
    title: 'Backend / Full-Stack Developer',
    company: 'Enego Services Private Limited',
    period: 'Feb 2024 – Feb 2025',
    description: [
      'Developed a CRM system with role-based access control',
      'Designed REST APIs using Node.js and Express.js',
      'Implemented authentication, authorization, and secure data handling',
      'Used MongoDB aggregations and optimized queries',
      'Built admin dashboards using React.js',
    ],
  },
  {
    title: 'WordPress Developer',
    company: 'Progzi M Solutions',
    period: 'Jan 2023 – Jan 2024',
    description: [
      'Developed and maintained multiple production websites',
      'Managed hosting, domains, and deployments',
      'Built a strong foundation for transitioning into backend engineering',
    ],
  },
];

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary bg-primary/10 rounded-full mb-4">
              Experience
            </span>
            {/* Visible section heading */}
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Professional Journey
            </h2>

            {/* SEO + accessibility support */}
            <h2 className="sr-only">
              Professional experience of a Senior Software Engineer specializing
              in backend systems
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building production systems that power real businesses
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title + exp.company}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                  {/* Content */}
                  <div
                    className={`flex-1 pl-12 md:pl-0 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Briefcase className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-mono text-primary">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {exp.company}
                      </p>
                      {exp.tech && (
                        <p className="text-xs font-mono text-primary/80 mb-4 px-2 py-1 bg-primary/5 rounded inline-block">
                          {exp.tech}
                        </p>
                      )}
                      <ul className="space-y-2">
                        {exp.description.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
