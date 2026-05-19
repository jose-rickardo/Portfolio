import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExternalLink, Github } from "lucide-react";

import one from "../assets/one.png";
import voyage from "../assets/voyage.png";
import pokedex from "../assets/pokedex.png";
import tracker from "../assets/ereur.png";
import barca from "../assets/ereur.png";
import heiAdmin from "../assets/heiAdmin.png";

const projects = [
  {
    name: "Boblido",
    img: one,
    description: "Jeu de typing test interactif — testez votre vitesse de frappe en temps réel avec des niveaux progressifs.",
    href: "https://jose-rickardo.github.io/boblido/",
    tags: ["HTML", "CSS", "JS"],
    live: true,
  },
  {
    name: "Voyage",
    img: voyage,
    description: "Plateforme de réservation de voyages avec interface moderne, sélection de destinations et gestion de réservations.",
    href: "https://voyage-web-1.vercel.app/",
    tags: ["React", "Tailwind"],
    live: true,
  },
  {
    name: "Pokédex",
    img: pokedex,
    description: "Application de recherche Pokémon utilisant la PokéAPI pour afficher stats, types et évolutions de chaque Pokémon.",
    href: "https://preojet-deux.vercel.app/",
    tags: ["React", "API REST"],
    live: true,
  },
  {
    name: "Expense Tracker",
    img: tracker,
    description: "Gestionnaire de dépenses personnel avec tableau de bord, catégories et historique de transactions.",
    href: "#",
    tags: ["React", "Node.js"],
    live: false,
  },
  {
    name: "FC Barcelone",
    img: barca,
    description: "Mon premier site web — hommage au club du FC Barcelone avec galerie photos et stats de joueurs.",
    href: "#",
    tags: ["HTML", "CSS"],
    live: false,
  },
  {
    name: "HEI Admin",
    img: heiAdmin,
    description: "Réplique du portail étudiant HEI Madagascar avec gestion de notes, planning et ressources académiques.",
    href: "https://hei-admin-static-web-1-rne6.vercel.app/",
    tags: ["React", "TypeScript"],
    live: true,
  },
];

export function Projects() {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <div
      id="projects"
      ref={sectionRef}
      className="flex flex-col items-center bg-gradient-to-br to-[#1b1b1b] via-black from-[#1b1b1b] pb-24 pt-4 px-4"
    >
      <h2
        className={`text-4xl font-bold bg-gradient-to-r my-16 from-cyan-400 to-emerald-400 bg-clip-text text-transparent text-center transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        Projets
      </h2>

      <div
        className={`w-full max-w-[1200px] px-2 transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <Slider {...settings}>
          {projects.map((d, index) => (
            <div key={index} className="px-2 md:px-3">
              <div className="bg-gradient-to-t p-[1.5px] from-emerald-400/80 to-cyan-400/80 rounded-xl hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 group">
                <div className="relative bg-[#0a0a0a] flex flex-col rounded-xl overflow-hidden h-[340px]">
                  {/* Image */}
                  <div className="h-[55%] w-full overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 flex flex-col justify-between bg-[#0a0a0a]">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-cyan-400 font-bold text-lg">{d.name}</h3>
                        {d.live ? (
                          <a href={d.href} target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          <span className="text-xs text-gray-600 border border-gray-700 px-2 py-0.5 rounded-full">Bientôt</span>
                        )}
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{d.description}</p>
                    </div>
                    <div className="flex gap-1.5 flex-wrap mt-2">
                      {d.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
