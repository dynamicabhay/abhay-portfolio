import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Cloud, 
  Database, 
  Zap,
  Container,
  Layers,
  Box,
  Globe
} from "lucide-react";

const skills = [
  {
    name: "React",
    icon: Code2,
    shape: "circle",
    color: "primary",
    position: { x: -100, y: -50 }
  },
  {
    name: "Java Spring Boot",
    icon: Server,
    shape: "square",
    color: "secondary",
    position: { x: 100, y: -80 }
  },
  {
    name: "AWS",
    icon: Cloud,
    shape: "hexagon",
    color: "accent",
    position: { x: -200, y: 20 }
  },
  {
    name: "Kubernetes",
    icon: Container,
    shape: "circle",
    color: "primary",
    position: { x: 0, y: -20 }
  },
  {
    name: "Docker",
    icon: Box,
    shape: "square",
    color: "secondary",
    position: { x: 150, y: 40 }
  },
  {
    name: "Kafka",
    icon: Zap,
    shape: "hexagon",
    color: "accent",
    position: { x: -50, y: 80 }
  },
  {
    name: "PostgreSQL",
    icon: Database,
    shape: "circle",
    color: "primary",
    position: { x: -250, y: -20 }
  },
  {
    name: "MongoDB",
    icon: Layers,
    shape: "square",
    color: "secondary",
    position: { x: 200, y: -30 }
  },
  {
    name: "Redis",
    icon: Globe,
    shape: "hexagon",
    color: "accent",
    position: { x: 50, y: 120 }
  }
];

const getShapeClasses = (shape: string, color: string) => {
  const baseClasses = "relative flex items-center justify-center cursor-grab active:cursor-grabbing backdrop-blur-sm border transition-all duration-300";
  
  const colorClasses = {
    primary: "bg-primary/10 border-primary/30 text-primary shadow-glow-sm hover:shadow-glow-md hover:bg-primary/20",
    secondary: "bg-secondary/10 border-secondary/30 text-secondary shadow-[0_0_20px_hsl(var(--secondary-glow)/0.3)] hover:shadow-[0_0_30px_hsl(var(--secondary-glow)/0.5)] hover:bg-secondary/20",
    accent: "bg-accent/10 border-accent/30 text-accent shadow-[0_0_20px_hsl(var(--accent-glow)/0.3)] hover:shadow-[0_0_30px_hsl(var(--accent-glow)/0.5)] hover:bg-accent/20"
  };

  const shapeClasses = {
    circle: "w-20 h-20 rounded-full",
    square: "w-20 h-20 rounded-2xl",
    hexagon: "w-20 h-20 rounded-2xl transform rotate-45"
  };

  return `${baseClasses} ${colorClasses[color as keyof typeof colorClasses]} ${shapeClasses[shape as keyof typeof shapeClasses]}`;
};

const DraggableSkillsSection = () => {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-primary">Interactive</span>{" "}
            <span className="text-gradient-secondary">Tech Stack</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Drag the blocks around! Each technology represents a core part of my expertise.
          </p>
        </motion.div>

        {/* Draggable Skills Playground */}
        <div className="relative min-h-[400px] flex items-center justify-center">
          <div className="relative w-full max-w-4xl h-96">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              
              return (
                <motion.div
                  key={skill.name}
                  drag
                  dragMomentum={false}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8,
                    x: skill.position.x,
                    y: skill.position.y
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: skill.position.x,
                    y: skill.position.y
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  whileDrag={{ 
                    scale: 1.05,
                    zIndex: 1000
                  }}
                  className="absolute left-1/2 top-1/2 group"
                  style={{
                    transform: `translate(-50%, -50%) translate(${skill.position.x}px, ${skill.position.y}px)`
                  }}
                >
                  <div className={getShapeClasses(skill.shape, skill.color)}>
                    {skill.shape === "hexagon" ? (
                      <div className="transform -rotate-45">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    ) : (
                      <IconComponent className="h-6 w-6" />
                    )}
                    
                    {/* Skill Name Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="bg-card/90 backdrop-blur-sm border border-glass-border rounded-lg px-3 py-1 whitespace-nowrap">
                        <span className="text-sm font-medium text-text-primary">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Instructions */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-text-muted text-sm">
            ✨ Hover for glow effects • Drag to move around • Each shape represents a different technology category
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DraggableSkillsSection;