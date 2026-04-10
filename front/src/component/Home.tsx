import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

export function Home (){
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  
  // === EFFET MACHINE À ÉCRIRE (cycle entre 2 textes) ===
  const [displayText, setDisplayText] = useState<string>('');

  // Effet Vanta (inchangé)
  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,

          color: 0x00ff88,
          backgroundColor: 0x0,
          points: 12.00,
          maxDistance: 25.00,
          spacing: 18.00,
          showDots: true
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // === NOUVEL EFFET TAPE MACHINE : BIENVENUE ↔ JOSE RICKARDO ===
  // Tape le texte → pause → efface complètement → passe au suivant → boucle ∞
  useEffect(() => {
    const texts = ["BIENVENUE", "JOSE RICKARDO"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout | null = null;

    const typeWriter = () => {
      const currentText = texts[textIndex];

      if (isDeleting) {
        // === EFFACEMENT ===
        setDisplayText(currentText.substring(0, charIndex));
        charIndex--;
        if (charIndex < 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length; // passe au texte suivant
          charIndex = 0;
          timeoutId = setTimeout(typeWriter, 700); // petite pause après effacement
          return;
        }
      } else {
        // === ÉCRITURE ===
        setDisplayText(currentText.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentText.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeWriter, 1800); // longue pause quand tout est affiché
          return;
        }
      }

      // Vitesse selon le mode (plus rapide en effacement)
      const delay = isDeleting ? 35 : 75;
      timeoutId = setTimeout(typeWriter, delay);
    };

    // Démarrage avec un petit délai
    timeoutId = setTimeout(typeWriter, 800);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      id='home'
      ref={vantaRef}
      className="relative w-full h-screen px-20 items-center bg-black grid place-items-center"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 text-white w-2/4">
        
        <img
          src="src/assets/Gemini_Generated_Image_yylrtjyylrtjyylr.png"
          alt=""
          className="col-span-1 block border-2 p-1 rounded-2xl"
        />

        <span className="col-span-2 space-y-2 flex flex-col justify-center">
          {/* === TEXTE AVEC EFFET TAPE MACHINE (cycle BIENVENUE / JOSE RICKARDO) === */}
          <h1 className="text-3xl font-extrabold m-0 flex items-center">
            <span className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">{displayText}</span>
            <span className="text-white ml-1 animate-pulse text-4xl leading-none">|</span>
          </h1>

          <h2 className="text-2xl m-0">Developer Web Full Stack</h2>
          <h3 className="m-0">
            Étudiant en informatique passionné par l'innovation technologique
          </h3>
        </span>

        <div className='max-[1000px]:hidden absolute -bottom-20 left-20 right-20 flex justify-between  text-gray-700 font-bold'>
          <a href="src/assets/cv.pdf" className='p-3 bg-gradient-to-r from-cyan-400 to-green-400 hover:from-green-400 hover:to-cyan-400 transition duration-150 rounded-2xl'>Télecharger le cv</a>
          <a href="#about" className='p-3 bg-gradient-to-l from-cyan-400 to-green-400 hover:from-green-400 hover:to-cyan-400 transition duration-150 rounded-2xl'>à propos</a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white opacity-70 hover:opacity-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};