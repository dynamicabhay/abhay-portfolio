import { 
  Code2, 
  Server, 
  Cloud, 
  Database, 
  Zap,
  Globe,
  Container,
  Workflow
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    gradient: "gradient-primary",
    glowClass: "glow-primary"
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Java Spring Boot", "Node.js", "REST APIs", "GraphQL"],
    gradient: "gradient-secondary", 
    glowClass: "glow-secondary"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Kubernetes", "Docker", "Terraform"],
    gradient: "gradient-accent",
    glowClass: "glow-accent"
  },
  {
    title: "Data & Storage",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch"],
    gradient: "gradient-primary",
    glowClass: "glow-primary"
  },
  {
    title: "Event-Driven",
    icon: Zap,
    skills: ["Apache Kafka", "RabbitMQ", "Event Sourcing", "CQRS"],
    gradient: "gradient-secondary",
    glowClass: "glow-secondary"
  },
  {
    title: "Architecture",
    icon: Workflow,
    skills: ["Microservices", "System Design", "Clean Architecture", "DDD"],
    gradient: "gradient-accent",
    glowClass: "glow-accent"
  }
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-primary">Skills</span> &{" "}
            <span className="text-gradient-secondary">Technologies</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Full-stack expertise with cloud-native architecture and modern development practices
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div 
                key={category.title}
                className={`skill-card group ${category.glowClass}`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-${category.gradient} shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-gradient-primary transition-all duration-300">
                    {category.title}
                  </h3>

                  {/* Skills */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill}
                        className="flex items-center space-x-3 group/skill"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                        <span className="text-text-secondary group-hover/skill:text-text-primary transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Proficiency indicator */}
                  <div className="mt-6 pt-4 border-t border-glass-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-muted">Experience</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < 4 ? `bg-${category.gradient}` : 'bg-glass-border'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Icons Float */}
        <div className="mt-20 relative">
          <div className="flex justify-center items-center space-x-8 opacity-30">
            <Globe className="h-12 w-12 text-primary animate-pulse" />
            <Container className="h-10 w-10 text-secondary animate-pulse animation-delay-1000" />
            <Server className="h-14 w-14 text-accent animate-pulse animation-delay-2000" />
            <Database className="h-11 w-11 text-primary animate-pulse animation-delay-3000" />
            <Cloud className="h-13 w-13 text-secondary animate-pulse animation-delay-4000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;