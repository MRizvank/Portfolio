import { ArrowRight, Download, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const taglines = [
  "I build scalable backend systems and real-time services designed for production scale.",
  "I focus on reliability, performance, and observability to ensure systems remain stable under real-world load.",
  "My work emphasizes clean architecture, efficient data flow, and long-term maintainability."
];

export function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = taglines[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentTagline.length) {
          setDisplayText(currentTagline.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    }, isDeleting ? 20 : 40);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Intro */}
          <div className="animate-fade-up mb-6">
            <p className="text-lg sm:text-xl text-muted-foreground">
              Hi, I'm{" "}
              <span className="text-foreground font-semibold">Rizvan</span>
            </p>
            <div className="h-14 sm:h-12 flex items-center justify-center mt-2">
              <p className="text-base sm:text-lg text-muted-foreground/90 max-w-2xl mx-auto">
                {displayText}
                <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
              </p>
            </div>
            <p className="text-sm text-muted-foreground/70 mt-2">
              Kerala, India
            </p>
          </div>

          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Available for new opportunities
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Senior Software Engineer
            <span className="block text-gradient mt-2">(Backend)</span>
          </h1>
          <h2 className="sr-only">
            Senior Software Engineer Backend in Tirur, Malappuram, Kerala, India
          </h2>
          {/* Sub-headline */}
          <p className="animate-fade-up-delay-2 text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            I design and build scalable backend systems, APIs, and real-time
            applications using{" "}
            <span className="text-foreground font-medium">Node.js</span>,{" "}
            <span className="text-foreground font-medium">NestJS</span>,{" "}
            <span className="text-foreground font-medium">MongoDB</span>,{" "}
            <span className="text-foreground font-medium">Redis</span>, and
            cloud infrastructure.
          </p>

          {/* Supporting Text */}
          <p className="animate-fade-up-delay-3 text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            With 2+ years of hands-on backend experience, I focus on building
            production-ready systems that are reliable, observable, testable,
            and scalable.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#" download>
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Tech Stack Preview */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Core Technologies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-mono text-muted-foreground">
              {[
                "Node.js",
                "NestJS",
                "MongoDB",
                "Redis",
                "WebSocket",
                "Jest",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
