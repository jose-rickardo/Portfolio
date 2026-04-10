import { Activity, User, MapPin, GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function About()
{
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
            { 
                threshold: 0.25 
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    return <>
        <div 
            id="about" 
            ref={sectionRef}
            className="relative bg-gradient-to-br to-[#1b1b1b] via-muted/30 from-[#000000] w-full p-20 flex flex-col items-center text-amber-50"
        >
            <h1 
                className={`py-10 text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
                A propos
            </h1>

            <div 
                className={`flex transition-all duration-1000 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            >
                {/* Carte Informations personnelles - Gauche */}
                <div className={`relative bg-black rounded-2xl shadow-md shadow-emerald-400 mb-20 w-100 h-140 px-5 text-amber-50 pt-12 transition-all duration-700 delay-200 pb-20
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                >
                    <img 
                        src="src/assets/6ece8d0a-3287-435d-89f1-7ca06979edd6.jpeg" 
                        alt="" 
                        className="h-20 rounded-2xl absolute -top-10"
                    />
                    <h1 className="text-2xl text-center font-bold bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                        information personnel
                    </h1>

                    <User className="text-cyan-400 mt-6" />
                    <h3><strong>nom et prenoms :</strong> NOELIARIMANANA jose rickardo</h3>
                    <h3><strong>neé le </strong> 25 decembre 2007 à farafangana</h3>

                    <GraduationCap className="text-emerald-400 mt-6" />
                    <h3><strong>en Formation </strong>à HEI Madagascar</h3>
                    <h3>2ème année</h3>

                    <MapPin className="text-cyan-500 mt-6" />
                    <h3><strong>localisation: </strong> ville d'antanarivo</h3>
                    <h3><strong>pay:</strong> MADAGASCAR</h3>

                    <Activity className="text-emerald-500 mt-6" />
                    <h3><strong>autre activiter: </strong> boxer en ckickboxing et K-1</h3>
                </div>

                {/* Carte Origine et motivation - Droite */}
                  <div className={`w-100 bg-black z-5 p-3 shadow-md rounded-2xl shadow-cyan-300 transition-all duration-700 delay-500
                    mt-150 -ml-100 
                    lg:mt-120 lg:-ml-50
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                >
                    <h1 className="text-xl text-center font-bold bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                        origine et motivation
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Depuis mon parcours scolaire, je me suis
                        progressivement orienté vers l’informatique, un domaine qui m’a toujours attiré par curiosité et
                        passion. Les sites web et les applications m’ont toujours poussé à me poser des questions sur leur
                        fonctionnement, ce qui a renforcé mon intérêt pour le développement.
                    </p>
                </div>
            </div>
        </div>
    </>
}