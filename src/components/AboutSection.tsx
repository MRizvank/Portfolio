import { AnimatedSection } from './AnimatedSection';
import { Server, Code2, Layers } from 'lucide-react';

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary bg-primary/10 rounded-full mb-3">
              About Me
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              Senior Backend Engineer from Tirur, Kerala, India
            </h2>

            {/* SEO + Accessibility only (district-level) */}
            <h2 className="sr-only">
              Senior Backend Engineer in Tirur, Malappuram district, Kerala,
              India
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a backend-focused software engineer with over two years of
              real-world experience building, deploying, and maintaining
              production systems.
            </p>
            <p>
              My work includes{" "}
              <span className="text-foreground font-medium">
                API development
              </span>
              ,{" "}
              <span className="text-foreground font-medium">
                authentication and authorization
              </span>
              ,{" "}
              <span className="text-foreground font-medium">
                caching strategies
              </span>
              ,{" "}
              <span className="text-foreground font-medium">
                real-time communication
              </span>
              ,{" "}
              <span className="text-foreground font-medium">
                background processing
              </span>
              ,{" "}
              <span className="text-foreground font-medium">
                database optimization
              </span>
              , <span className="text-foreground font-medium">testing</span>,
              and{" "}
              <span className="text-foreground font-medium">
                system observability
              </span>
              .
            </p>
            <p>
              Currently working as a Senior Software Engineer, I take ownership
              of backend architecture, performance, and reliability while
              building systems that support real business workflows and scale in
              production.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Server, label: "Production Systems", value: "10+" },
              { icon: Code2, label: "Years Experience", value: "2+" },
              { icon: Layers, label: "APIs Built", value: "50+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
