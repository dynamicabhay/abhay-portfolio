import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-90" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary animate-glow opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-secondary animate-glow animation-delay-1000 opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-accent animate-glow animation-delay-2000 opacity-50" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-primary animate-glow animation-delay-3000 opacity-30" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="space-y-8 animate-fade-in-up">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-xl text-text-secondary font-medium tracking-wide">
              Hey, I'm
            </p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="text-gradient-primary">Alex</span>{" "}
              <span className="text-gradient-secondary">Chen</span>
            </h1>
          </div>

          {/* Role & Tagline */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">
              Full-Stack Developer & Cloud Engineer
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Building{" "}
              <span className="text-gradient-accent font-semibold">
                Scalable Systems
              </span>{" "}
              &{" "}
              <span className="text-gradient-primary font-semibold">
                Elegant User Experiences
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="btn-premium-primary group"
              onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">View My Work</span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-premium-secondary group"
            >
              <Download className="mr-2 h-5 w-5" />
              <span className="relative z-10">Download Resume</span>
            </Button>
          </div>

          {/* Quick contact */}
          <div className="pt-12">
            <Button
              variant="ghost"
              className="text-text-muted hover:text-primary transition-colors group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4" />
              alex.chen@example.com
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-text-muted" />
        </div>
      </div>

      {/* Glass overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
    </section>
  );
};

export default HeroSection;