import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ExternalLink, 
  Github, 
  Target, 
  Lightbulb, 
  Cog, 
  TrendingUp,
  ShoppingBag,
  Link2,
  Globe
} from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Nike Inventory Visibility HLD",
    subtitle: "Enterprise System Design",
    description: "Architected a high-level design for Nike's global inventory visibility system, handling millions of products across multiple channels.",
    icon: ShoppingBag,
    gradient: "gradient-primary",
    glowClass: "glow-primary",
    tags: ["System Design", "Microservices", "AWS", "Kafka"],
    liveDemoUrl: "",
    codeUrl: "",
    star: {
      situation: "Nike needed real-time inventory visibility across 200+ stores and online channels, handling 10M+ SKUs with high availability requirements.",
      task: "Design a scalable system architecture that could handle peak loads of 100K requests/second during product launches while maintaining 99.9% uptime.",
      action: "Designed event-driven microservices architecture using AWS, implemented CQRS pattern with Kafka for real-time updates, and created auto-scaling strategies.",
      result: "Achieved 40% reduction in inventory discrepancies, 60% faster query response times, and successfully handled Black Friday traffic spikes."
    }
  },
  {
    id: 2,
    title: "Scalable URL Shortener",
    subtitle: "Cloud-Native Architecture",
    description: "Built a high-performance URL shortening service handling 10M+ requests daily with advanced analytics and custom domains.",
    icon: Link2,
    gradient: "gradient-secondary",
    glowClass: "glow-secondary",
    tags: ["Java Spring Boot", "Redis", "Kubernetes", "PostgreSQL"],
    liveDemoUrl: "https://tiny-lane.duckdns.org",
    codeUrl: "",
    star: {
      situation: "Startup needed a URL shortener service to compete with bit.ly, requiring sub-100ms response times and advanced analytics.",
      task: "Build a scalable system capable of handling 10M requests/day, with custom domains, analytics dashboard, and 99.95% uptime SLA.",
      action: "Implemented base62 encoding for URLs, Redis caching layer, Kubernetes auto-scaling, and real-time analytics with Apache Kafka streams.",
      result: "Achieved 50ms average response time, 10M+ daily shortened URLs, 40% user engagement increase through analytics insights."
    }
  },
  {
    id: 3,
    title: "Digital Marketing Website",
    subtitle: "Business Growth Platform",
    description: "Developed a modern marketing website that increased client conversion rates by 85% through optimized UX and performance.",
    icon: Globe,
    gradient: "gradient-accent", 
    glowClass: "glow-accent",
    tags: ["React", "TypeScript", "AWS CloudFront", "SEO"],
    liveDemoUrl: "https://preview--vector-digital-launchpad.lovable.app/",
    codeUrl: "", 
    star: {
      situation: "Marketing agency's website had 3% conversion rate and slow loading times, losing potential clients to competitors.",
      task: "Redesign and rebuild the website to improve conversion rates, reduce bounce rate, and establish the agency as an industry leader.",
      action: "Created modern React-based website with optimized performance, implemented A/B testing for CTA buttons, and enhanced SEO strategies.",
      result: "Achieved 85% increase in conversion rate (3% → 5.55%), 40% reduction in bounce rate, and 120% increase in qualified leads."
    }
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-primary">Case</span>{" "}
            <span className="text-gradient-secondary">Studies</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real-world projects showcasing problem-solving approach and measurable business impact
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-20">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            
            return (
              <div key={study.id} className="group">
                {/* Main Card */}
                <Card className={`glass-card-elevated p-8 ${study.glowClass} transition-all duration-500 hover:scale-[1.02]`}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Project Overview */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-${study.gradient}`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gradient-primary">
                            {study.title}
                          </h3>
                          <p className="text-text-secondary">{study.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-lg text-text-secondary leading-relaxed">
                        {study.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 text-sm bg-glass border border-glass-border rounded-lg text-text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                       <div className="flex space-x-4 pt-4">
                        {study.liveDemoUrl && (
                          <a href={study.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" className="btn-premium-primary">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              <span className="relative z-10">Live Demo</span>
                            </Button>
                          </a>
                        )}
                        {study.codeUrl && (
                          <a href={study.codeUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="border-glass-border hover:bg-glass">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: STAR Method */}
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        {/* Situation */}
                        <div className="glass-card p-4 space-y-2">
                          <div className="flex items-center space-x-2">
                            <Target className="h-4 w-4 text-primary" />
                            <h4 className="font-semibold text-primary">Situation</h4>
                          </div>
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {study.star.situation}
                          </p>
                        </div>

                        {/* Task */}
                        <div className="glass-card p-4 space-y-2">
                          <div className="flex items-center space-x-2">
                            <Lightbulb className="h-4 w-4 text-secondary" />
                            <h4 className="font-semibold text-secondary">Task</h4>
                          </div>
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {study.star.task}
                          </p>
                        </div>

                        {/* Action */}
                        <div className="glass-card p-4 space-y-2">
                          <div className="flex items-center space-x-2">
                            <Cog className="h-4 w-4 text-accent" />
                            <h4 className="font-semibold text-accent">Action</h4>
                          </div>
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {study.star.action}
                          </p>
                        </div>

                        {/* Result */}
                        <div className="glass-card p-4 space-y-2">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-primary" />
                            <h4 className="font-semibold text-primary">Result</h4>
                          </div>
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {study.star.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <a href="https://github.com/dynamicabhay/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="btn-premium-secondary">
              <Github className="mr-2 h-5 w-5" />
              <span className="relative z-10">View All Projects on GitHub</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;