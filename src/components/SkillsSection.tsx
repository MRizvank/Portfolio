import { AnimatedSection } from './AnimatedSection';

const skillCategories = [
  {
    title: 'Backend & Frameworks',
    skills: ['Node.js', 'Express.js', 'NestJS', 'REST API Development'],
  },
  {
    title: 'Databases & Storage',
    skills: ['MongoDB', 'Mongoose', 'Aggregation Pipelines', 'Indexing & Query Optimization', 'IndexedDB (Offline Sync)'],
  },
  {
    title: 'Caching & Messaging',
    skills: ['Redis (caching, temporary data, session-like storage)'],
  },
  {
    title: 'Real-Time Systems',
    skills: ['WebSockets', 'Socket.io', 'Live Streaming & Session Management'],
  },
  {
    title: 'Testing & Code Quality',
    skills: ['Jest (Unit & Service Testing)', 'DTO Validation Testing', 'Business Logic & API Response Testing', 'Testable Service Architecture'],
  },
  {
    title: 'Infrastructure & Tooling',
    skills: ['Cloud Server Management', 'Environment-based Configurations', 'CI/CD Basics', 'Git & Version Control', 'Logging & Error Tracking (Sentry)'],
  },
  {
    title: 'Frontend (Supporting)',
    skills: ['React.js', 'Material UI', 'EJS (Server-Side Rendering)', 'API Integration'],
  },
];

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary bg-primary/10 rounded-full mb-4">
              Technical Skills
            </span>
            {/* Visible Section Heading */}
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Technology Stack
            </h2>

            {/* SEO-only support */}
            <h2 className="sr-only">
              Backend technology stack used by a Senior Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tools and technologies I use to build production-grade systems
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  {category.title}
                </h3>
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
