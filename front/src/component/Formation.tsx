import { useEffect, useRef, useState } from "react";

export default function Formation(){

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

    return <>
        <div 
            id="formation" 
            ref={sectionRef}
            className="content-center flex flex-col items-center bg-gradient-to-br from-[#1b1b1b] via-black to-[#1b1b1b] pb-100 "
        >
            
            <h1 className={`my-20 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
                Formation
            </h1>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-amber-50 transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >

                {/* SCOLARITÉ */}
                <div className={`style_card p-10 border-2 border-cyan-400 translate-y-0 transition-all duration-700
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1>SCOLARITÉ</h1>
                    <h2>Au LSPC Ambohipo</h2>
                    <h3>Année 2009-2024</h3>
                </div>

                {/* BACC */}
                <div className={`style_card p-10 border-2 border-emerald-400 translate-y-0 md:translate-y-20 transition-all duration-700
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1>BACCALAURÉAT SERI D</h1>
                    <h2>Au LSPC Ambohipo</h2>
                    <h3>Année 2024</h3>
                </div>

                {/* L1 */}
                <div className={`style_card p-10 border-2 border-cyan-400 translate-y-0 transition-all duration-700
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1>PARCOURS ACADEMIQUE</h1>
                    <h2>L1 Chez HEI Ivandry</h2>
                    <h2>Année 2024-2025</h2>
                </div>

                {/* L2 EN COURS */}
                <div className={`style_card p-1 glow-border relative bg-[#021207] translate-y-0 md:translate-y-20 transition-all duration-700
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    
                    <div className="bg-black w-full h-full p-9 rounded-[7px]">

                        <h1>PARCOURS ACADEMIQUE</h1>
                        <h2>L2 Chez HEI Ivandry</h2>
                        <h2>Année 2025-2026</h2>

                        <span className="absolute bottom-2 left-0 right-0 text-center text-cyan-400 font-semibold">
                            En cours
                            <span className="loading-dots ml-1">
                                <span>.</span>
                                <span>.</span>
                                <span>.</span>
                            </span>
                        </span>

                    </div>
                </div>

            </div>

        </div>
    </>
}