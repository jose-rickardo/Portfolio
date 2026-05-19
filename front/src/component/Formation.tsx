import { useEffect, useRef, useState } from "react";
import { BookOpen, Award, GraduationCap, Loader } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    colorClass: "text-cyan-400",
    borderClass: "border-cyan-400/40",
    glowClass: "shadow-cyan-500/10",
    title: "Scolarité",
    school: "LSPC Ambohipo",
    period: "2009 – 2024",
    current: false,
  },
  {
    icon: Award,
    colorClass: "text-emerald-400",
    borderClass: "border-emerald-400/40",
    glowClass: "shadow-emerald-500/10",
    title: "Baccalauréat Série D",
    school: "LSPC Ambohipo",
    period: "2024",
    current: false,
  },
  {
    icon: GraduationCap,
    colorClass: "text-cyan-400",
    borderClass: "border-cyan-400/40",
    glowClass: "shadow-cyan-500/10",
    title: "Licence 1 – Informatique",
    school: "HEI Ivandry",
    period: "2024 – 2025",
    current: false,
  },
  {
    icon: Loader,
    colorClass: "text-emerald-400",
    borderClass: "border-emerald-400/60",
    glowClass: "shadow-emerald-500/20",
    title: "Licence 2 – Informatique",
    school: "HEI Ivandry",
    period: "2025 – 2026",
    current: true,
  },
];

export default function Formation() {
  const sectionRef = useRef<HTMLDivElement>(null);
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

  return (
    <div
      id="formation"
      ref={sectionRef}
      className="flex flex-col items-center bg-gradient-to-br from-[#1b1b1b] via-black to-[#1b1b1b] py-24 px-6"
    >
      <h2
        className={`text-4xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        Formation
      </h2>

      {/* Timeline */}
      <div className="relative w-full max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-emerald-500/40 to-transparent hidden sm:block" />

        <div className="space-y-8">
          {steps.map(({ icon: Icon, colorClass, borderClass, glowClass, title, school, period, current }, i) => (
            <div
              key={i}
              className={`flex items-start gap-6 transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Icon bubble */}
              <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-[#0a0a0a] border ${borderClass} shadow-lg ${glowClass} flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${colorClass} ${current ? "animate-spin" : ""}`} style={current ? { animationDuration: "3s" } : {}} />
              </div>

              {/* Card */}
              <div className={`flex-1 bg-[#0a0a0a] border ${borderClass} rounded-xl p-5 shadow-lg ${glowClass} hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 ${current ? "glow-border" : ""}`}>
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className={`font-bold text-base ${colorClass}`}>{title}</h3>
                    <p className="text-gray-300 text-sm mt-0.5">{school}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">{period}</span>
                    {current && (
                      <span className="flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        En cours
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
