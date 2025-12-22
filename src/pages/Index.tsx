import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExpertiseSection } from '@/components/ExpertiseSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { EducationSection } from '@/components/EducationSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { PhilosophySection } from '@/components/PhilosophySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { StickySocials } from '@/components/StickySocials';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StickySocials />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
