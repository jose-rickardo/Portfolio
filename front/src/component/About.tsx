import { Activity, User, MapPin, GraduationCap, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import image1 from "../assets/6ece8d0a-3287-435d-89f1-7ca06979edd6.jpeg";

export function About() {
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

  const infos = [
    {
      icon: User,
      colorClass: "text-cyan-400",
      bgClass: "bg-cyan-500/10 border-cyan-500/20",
      label: "Identité",
      lines: ["NOELIARIMANANA Jose Rickardo"],
    },
    {
      icon: GraduationCap,
      colorClass: "text-emerald-400",
      bgClass: "bg-emerald-500/10 border-emerald-500/20",
      label: "Formation",
      lines: ["HEI Madagascar – Ivandry", "2ème année Licence Informatique"],
    },
    {
      icon: MapPin,
      colorClass: "text-cyan-400",
      bgClass: "bg-cyan-500/10 border-cyan-500/20",
      label: "Localisation",
      lines: ["Antananarivo 101", "Madagascar"],
    },
    {
      icon: Activity,
      colorClass: "text-emerald-400",
      bgClass: "bg-emerald-500/10 border-emerald-500/20",
      label: "Loisirs",
      lines: ["jeux vidéo", "Passionné de sport"],
    },
  ];

  return (
    <div
      id="about"
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#000000] via-[#0d0d0d] to-[#1b1b1b] w-full py-24 px-6 flex flex-col items-center text-amber-50"
    >
      <h2
        className={`text-4xl font-bold mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        À propos
      </h2>

      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-10">

        {/* LEFT – info card */}
        <div
          className={`relative bg-[#0a0a0a] border border-cyan-500/20 rounded-2xl shadow-xl shadow-cyan-500/10 p-8 pt-16 transition-all duration-700 delay-100
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="absolute -top-10 left-8 w-20 h-20 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-lg shadow-emerald-500/20">
            <img src={image1} alt="Jose Rickardo" className="w-full h-full object-cover" />
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible
          </div>

          <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent mb-6">
            Informations personnelles
          </h3>

          <div className="space-y-5">
            {infos.map(({ icon: Icon, colorClass, bgClass, label, lines }) => (
              <div key={label} className="flex items-start gap-4">
                <div className={`mt-0.5 p-2 rounded-lg border shrink-0 ${bgClass}`}>
                  <Icon className={`w-4 h-4 ${colorClass}`} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">{label}</p>
                  {lines.map((l) => (
                    <p key={l} className="text-sm text-gray-200">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – motivation + stats */}
        <div
          className={`flex flex-col gap-6 transition-all duration-700 delay-300
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <div className="bg-[#0a0a0a] border border-emerald-500/20 rounded-2xl shadow-xl shadow-emerald-500/10 p-8 flex-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent mb-4">
              Origine & Motivation
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              Depuis mon parcours scolaire, je me suis progressivement orienté vers l'informatique, 
              un domaine qui m'a toujours attiré par curiosité et passion. Les sites web et les 
              applications m'ont toujours poussé à me poser des questions sur leur fonctionnement, 
              ce qui a renforcé mon intérêt pour le développement.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              Aujourd'hui, je m'investis pleinement dans mon apprentissage à HEI Madagascar, 
              en combinant théorie et pratique à travers des projets concrets qui reflètent mes 
              ambitions de développeur full stack.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "6+", label: "Projets" },
              { value: "0 ans", label: "Expérience Profe" },
              { value: "10+", label: "Technos" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-[#0a0a0a] border border-cyan-500/20 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
                <p className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">{value}</p>
                <p className="text-xs text-gray-400 mt-1">{label}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-cyan-500/20 hover:border-cyan-500/50 text-cyan-300 font-semibold text-sm transition-all duration-300 hover:-translate-y-1 group"
          >
            Me contacter
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>https://rickardo.vercel.app/
      </div>
    </div>
  );
}
