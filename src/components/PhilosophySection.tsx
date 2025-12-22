import { AnimatedSection } from './AnimatedSection';
import { Shield, Eye, Gauge, FileCode } from 'lucide-react';

const principles = [
  {
    icon: Shield,
    title: 'Design for Failure & Scale',
    description: 'I design systems with failure and scale in mind from day one.',
  },
  {
    icon: Eye,
    title: 'Clarity & Maintainability',
    description: 'I prioritize clarity, testability, and maintainability in every line of code.',
  },
  {
    icon: Gauge,
    title: 'Performance-First',
    description: 'I use caching and observability to continuously improve performance.',
  },
  {
    icon: FileCode,
    title: 'Production, Not Demos',
    description: 'I write code for production environments, not demos.',
  },
];

export function PhilosophySection() {
  return (
    <AnimatedSection className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary bg-primary/10 rounded-full mb-4">
              Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              How I Build Systems
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Core engineering principles that guide my work
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-card"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <principle.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{principle.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
