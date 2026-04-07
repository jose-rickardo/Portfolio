import { Code, Database, Palette, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animation d'apparition uniquement la première fois au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect(); // Une seule fois
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "HTML/CSS", level: 80 },
        { name: "JavaScript", level: 60 },
        { name: "React", level: 70 },
        { name: "TypeScript", level: 65 },
        { name: "Tailwind CSS", level: 70 },
        { name: "Botstrap", level: 25 },
      ]
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", level: 50 },
        { name: "Express.js", level: 55 },
        { name: "MySQL", level: 75 },
        { name: "psql", level: 74 },
      ]
    },
    {
      title: "Design",
      icon: Palette,
      skills: [
        { name: "Figma", level: 65 }
      ]
    },
    {
      title: "Outils & Autres",
      icon: Wrench,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Linux", level: 66 }
      ] 
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 text-amber-50 bg-gradient-to-br to-[#1b1b1b] via-black from-[#1b1b1b] relative overflow-hidden" 
      id="skills"
    >
      
      <div className="absolute top-20 left-20 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">

          <h2 className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            Compétences Techniques
          </h2>

          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            {skillCategories.map((category, index) => (
              
              <div
                key={index}
                className={`border-2 border-green-500/20 rounded-xl p-6 shadow-lg shadow-green-500/10 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-2 group bg-background
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/20">
                    <category.icon className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-xs border px-2 py-1 rounded-md">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 transition-all duration-1000"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%' 
                          }}
                        />
                      </div>
                    </div>

                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}