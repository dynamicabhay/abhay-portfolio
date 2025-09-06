import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-midnight">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Skills & Technologies */}
      <SkillsSection />
      
      {/* Case Studies */}
      <CaseStudiesSection />
      
      {/* Contact & Resume */}
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-glass-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-text-secondary">
                © 2024 Alex Chen. Crafted with passion and precision.
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-text-muted">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;