import { Code, Database, Palette, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "HTML / CSS", level: 70 },
        { name: "JavaScript", level: 50 },
        { name: "React", level: 40 },
        { name: "TypeScript", level: 35 },
        { name: "Tailwind CSS", level: 50 },
        { name: "Bootstrap", level: 20 },
      ],
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", level: 50 },
        { name: "Express.js", level: 40 },
        { name: "MySQL", level: 60 },
        { name: "PostgreSQL", level: 60 },
      ],
    },
    {
      title: "Design",
      icon: Palette,
      skills: [
        { name: "Figma", level: 30 },
      ],
    },
    {
      title: "Outils & Autres",
      icon: Wrench,
      skills: [
        { name: "Git / GitHub", level: 75 },
        { name: "Linux", level: 56 },
      ],
    },
  ];

  const getLevelLabel = (level: number) => {
    if (level >= 80) return "Avancé";
    if (level >= 60) return "Intermédiaire";
    return "Débutant";
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 text-amber-50 bg-gradient-to-br to-[#1b1b1b] via-black from-[#1b1b1b] relative overflow-hidden"
      id="skills"
    >
      <div className="absolute top-20 left-20 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-32 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-500" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">

          <h2
            className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent transition-all duration-1000 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            Compétences Techniques
          </h2>

          <div
            className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ease-out
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] border border-green-500/20 rounded-xl p-6 shadow-lg shadow-green-500/5 hover:shadow-green-500/15 hover:border-green-500/40 transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/20">
                    <category.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-100">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
                          {getLevelLabel(skill.level)}
                        </span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="h-1.5 rounded-full bg-gradient-to-r from-green-500 to-cyan-400 transition-all duration-1000 ease-out"
                          style={{ width: isVisible ? `${skill.level}%` : "0%" }}
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
