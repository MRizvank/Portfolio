import { AnimatedSection } from './AnimatedSection';
import { ExternalLink, Radio, Users, Link2, ShoppingBag } from 'lucide-react';

const projects = [
  {
    icon: Radio,
    title: 'Live Streaming Platform',
    subtitle: 'Backend',
    description: 'Real-time streaming, private chat & calls with Redis-based caching & session handling. WebSocket-driven architecture.',
    tech: ['NestJS', 'MongoDB', 'Redis', 'Socket.io'],
    featured: true,
  },
  {
    icon: Users,
    title: 'CRM System',
    description: 'Role-based access control (User / Admin / Senior Admin) with secure APIs using JWT authentication. Booking and business workflow management.',
    tech: ['Node.js', 'Express', 'MongoDB', 'React'],
  },
  {
    icon: Link2,
    title: 'URL Shortener Platform',
    description: 'Complete URL shortening service with Google OAuth authentication, server-side rendered views using EJS, URL redirection and persistence logic.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Google OAuth'],
  },
  {
    icon: ShoppingBag,
    title: 'Affiliate Platform — SnapGizmo',
    description: 'Backend APIs for digital product affiliates with data tracking and system structure.',
    tech: ['Node.js', 'MongoDB'],
  },
];

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary bg-primary/10 rounded-full mb-3">
              Projects
            </span>

            {/* Visible section heading */}
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Production Systems
            </h2>

            {/* SEO + accessibility support */}
            <h2 className="sr-only">
              Production backend systems built by a Senior Software Engineer
            </h2>

            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Real-world backend systems deployed and running in production.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group relative p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-card ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                {project.featured && (
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded">
                    Featured
                  </span>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                      {project.subtitle && (
                        <span className="text-muted-foreground font-normal">
                          {" "}
                          ({project.subtitle})
                        </span>
                      )}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
