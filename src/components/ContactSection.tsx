import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Mail, 
  Calendar, 
  Download, 
  Linkedin, 
  Github,
  MessageSquare,
  Clock,
  MapPin,
  Star
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-primary">Let's</span>{" "}
            <span className="text-gradient-secondary">Connect</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Ready to build something amazing together? Let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info & Social */}
          <div className="space-y-8">
            {/* Primary Contact Card */}
            <Card className="glass-card-elevated p-8 glow-primary">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-primary">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">Get In Touch</h3>
                    <p className="text-text-secondary">Available for freelance projects</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full btn-premium-primary group"
                    onClick={() => window.open('mailto:alex.chen@example.com')}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    <span className="relative z-10">abhaysinghjprk6@gmail.com</span>
                  </Button>

                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full btn-premium-secondary group"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    <span className="relative z-10">Schedule a Call</span>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card p-4 text-center">
                <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-text-primary">Response Time</p>
                <p className="text-xs text-text-secondary">Within 24 hours</p>
              </Card>
              
              <Card className="glass-card p-4 text-center">
                <MapPin className="h-6 w-6 text-secondary mx-auto mb-2" />
                <p className="text-sm font-medium text-text-primary">Location</p>
                <p className="text-xs text-text-secondary">Jaipur, Rajasthan</p>
              </Card>
            </div>

            {/* Social Links */}
            <Card className="glass-card p-6">
              <h4 className="text-lg font-semibold text-text-primary mb-4 text-center">
                Connect With Me
              </h4>
              <div className="flex justify-center space-x-4">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="hover:bg-glass glow-primary"
                  onClick={() => window.open('https://linkedin.com')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="hover:bg-glass glow-secondary"
                  onClick={() => window.open('https://github.com')}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="hover:bg-glass glow-accent"
                >
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Right: Resume & Testimonials */}
          <div className="space-y-8">
            {/* Resume Download */}
            <Card className="glass-card-elevated p-8 glow-secondary">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 rounded-2xl bg-gradient-secondary">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gradient-secondary mb-2">
                    Download Resume
                  </h3>
                  <p className="text-text-secondary">
                    Get my complete professional background and project details
                  </p>
                </div>

                <a 
                  href="https://drive.google.com/uc?export=download&id=1_zHOVnXH3WuXpNUl4Xa-D1XOeNoNmN05"
                  download="Abhay-Singh-Resume.pdf"
                >
                  <Button size="lg" className="btn-premium-secondary group">
                    <Download className="mr-2 h-5 w-5" />
                    <span className="relative z-10">Download PDF</span>
                  </Button>
                </a>

                <div className="text-sm text-text-muted">
                  Last updated: September 2025
                </div>
              </div>
            </Card>

            {/* Testimonial Preview */}
            <Card className="glass-card p-6 glow-accent">
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <blockquote className="text-text-secondary italic">
                  "Alex delivered an exceptional full-stack solution that exceeded our expectations. 
                  His expertise in cloud architecture and attention to detail made all the difference."
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-accent" />
                  <div>
                    <p className="font-semibold text-text-primary">Sarah Johnson</p>
                    <p className="text-sm text-text-muted">CTO, TechStart Inc.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Availability Status */}
            <Card className="glass-card p-4 border-l-4 border-l-primary">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <div>
                  <p className="font-medium text-text-primary">Available for Projects</p>
                  <p className="text-sm text-text-secondary">Open to new opportunities • Next available: January 2025</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-glass-border">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-text-primary">
              Ready to Start Your Project?
            </h3>
            <p className="text-text-secondary">
              From concept to deployment, I'll help bring your ideas to life with modern, scalable solutions.
            </p>
             <Button 
              size="lg" 
              className="btn-premium-primary"
              onClick={() => window.open('mailto:abhaysinghjprk6@gmail.com')}
            >
              <Mail className="mr-2 h-5 w-5" />
              <span className="relative z-10">Start a Conversation</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;