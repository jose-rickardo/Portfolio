import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import one from "../assets/one.png";
import voyage from "../assets/voyage.png";
import pokedex from "../assets/pokedex.png";
import tracker from "../assets/ereur.png";
import barca from "../assets/ereur.png";
import heiAdmin from "../assets/heiAdmin.png";
const projects = [
    { name:'Boblido', img: one, description:'Un jeu de typing test...', href:'https://jose-rickardo.github.io/boblido/' },
    { name:'Voyage', img: voyage, description:'Plateforme de réservation...', href:'https://voyage-web-1.vercel.app/'},
    { name:'Pokedex', img: pokedex, description:'Recherche Pokémon...', href:'https://preojet-deux.vercel.app/'},
    { name:'Expense Tracker', img: tracker, description:'Gestionnaire...', href:'#' },
    { name:'Barça', img: barca, description:'Mon premier site...', href:'#'},
    {name:'HEI Admin', img: heiAdmin, description:'une copie du admin de hei pour les étudiants...', href:'https://hei-admin-static-web-1-rne6.vercel.app/'},
];

export function Projects(){
    const sectionRef = useRef<HTMLDivElement>(null);
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1, arrows: false }
            }
        ]
    };

    return (
        <div 
            id="projects" 
            ref={sectionRef}
            className="flex flex-col items-center bg-gradient-to-br to-[#1b1b1b] via-black from-[#1b1b1b] pb-20 md:pb-50 px-4"
        >
            
            <h1 className={`text-4xl font-bold bg-gradient-to-r my-10 md:my-20 from-cyan-400 to-emerald-400 bg-clip-text text-transparent text-center transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
                Projets
            </h1>

           <div className={`w-full max-w-[1200px] px-2 transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
           >
                <Slider {...settings}>
                    {projects.map((d, index) => (
                    <div key={index} className="px-2 md:px-3">
                        {/* Conteneur avec dégradé de bordure */}
                        <div className="bg-gradient-to-t p-[2px] from-emerald-400 to-cyan-400 rounded-xl hover:to-emerald-400 hover:from-cyan-400 transition-all duration-300 group">
                            
                            {/* Le lien "a" qui englobe tout */}
                            <a href={d.href} target="_blank" rel="noreferrer" className="relative h-[300px] md:h-[350px] bg-gray-900 flex flex-col rounded-xl overflow-hidden group">
                                
                                {/* Image de fond */}
                                <div className="h-2/3 w-full overflow-hidden">
                                    <img 
                                        src={d.img || 'https://via.placeholder.com/400x300'} 
                                        alt={d.name} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Contenu texte (Nom + Description) */}
                                <div className="h-1/3 p-4 flex flex-col justify-center bg-gray-900">
                                    <h3 className="text-cyan-400 font-bold text-xl mb-1">{d.name}</h3>
                                    <p className="text-gray-300 text-sm line-clamp-2 italic">
                                        {d.description || "Aucune description disponible."}
                                    </p>
                                </div>

                                {/* Overlay au survol pour l'effet visuel */}
                                <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>

                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}