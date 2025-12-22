import { AnimatedSection } from './AnimatedSection';
import {
  Globe,
  Key,
  Shield,
  Database,
  Zap,
  RefreshCw,
  Wifi,
  Clock,
  AlertTriangle,
  BarChart3,
  Gauge,
  Search,
  Lock,
  Bug,
} from 'lucide-react';

const expertiseItems = [
  { icon: Globe, title: 'RESTful API Design & Versioning' },
  { icon: Key, title: 'Authentication (JWT, OTP, Google OAuth)' },
  { icon: Shield, title: 'Role-Based Access Control (RBAC)' },
  { icon: Database, title: 'Database Schema Design' },
  { icon: Zap, title: 'MongoDB Aggregations & Indexing' },
  { icon: RefreshCw, title: 'Redis Caching & In-Memory Data Stores' },
  { icon: Wifi, title: 'WebSockets & Real-Time Systems' },
  { icon: Clock, title: 'Background Jobs & Async Processing' },
  { icon: AlertTriangle, title: 'Error Handling & Centralized Logging' },
  { icon: BarChart3, title: 'Observability & Monitoring (Sentry)' },
  { icon: Gauge, title: 'Performance Optimization' },
  { icon: Search, title: 'Pagination, Filtering & Search' },
  { icon: Lock, title: 'Rate Limiting & Security Best Practices' },
  { icon: Bug, title: 'Production Debugging & Incident Handling' },
];

export function ExpertiseSection() {
  return (
    <AnimatedSection id="expertise" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary bg-primary/10 rounded-full mb-4">
              Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Backend & System Design
            </h2>
            <h2 className="sr-only">
              Senior Software Engineer Backend specializing in scalable system
              design
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Core competencies in building robust, scalable backend systems
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {expertiseItems.map((item, index) => (
              <div
                key={item.title}
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
