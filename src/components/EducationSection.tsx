import { AnimatedSection } from './AnimatedSection';
import { GraduationCap, BookOpen, Code2 } from 'lucide-react';

const education = [
  {
    icon: GraduationCap,
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'University of Calicut',
    period: '2018 – 2021',
    details: ['Core computer science fundamentals', 'Programming, databases, and software engineering concepts'],
  },
  {
    icon: Code2,
    title: 'Full Stack Web Development Program (9 Months)',
    institution: 'Masai School',
    period: 'Oct 2022 – Jun 2023',
    details: [
      'Intensive, industry-oriented full-stack training',
      'Backend-focused curriculum with real-world projects',
      'Technologies: JavaScript (Advanced), Node.js & Express.js, MongoDB, REST APIs, Authentication & Authorization, React.js',
      'Strong focus on problem-solving, clean code, and collaboration',
    ],
  },
  {
    icon: BookOpen,
    title: 'Python Development Internship (6 Months)',
    institution: 'Softloom IT Solutions, Kochi',
    period: 'Aug 2021 – Jan 2022',
    details: [
      'Worked on Python-based backend and scripting tasks',
      'Gained real industry exposure and development workflow experience',
      'Learned backend logic, data handling, and debugging in production',
    ],
  },
];

export function EducationSection() {
  return (
    <AnimatedSection className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary bg-primary/10 rounded-full mb-4">
              Education
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Education & Training
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building a strong foundation in computer science and software engineering
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            {education.map((item) => (
              <div
                key={item.title}
                className="group p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <span className="text-sm font-mono text-primary">{item.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.institution}</p>
                    <ul className="space-y-2">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
