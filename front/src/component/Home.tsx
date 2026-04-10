import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import image1 from "../assets/Gemini_Generated_Image_yylrtjyylrtjyylr.png";

export function Home() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [displayText, setDisplayText] = useState<string>('');

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          color: 0x00ff88,
          backgroundColor: 0x0,
          points: 12,
          maxDistance: 25,
          spacing: 18,
          showDots: true,
        })
      );
    }
    return () => { if (vantaEffect) vantaEffect.destroy(); };
  }, [vantaEffect]);

  useEffect(() => {
    const texts = ["BIENVENUE", "JOSE RICKARDO"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout | null = null;

    const typeWriter = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        setDisplayText(currentText.substring(0, charIndex));
        charIndex--;
        if (charIndex < 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          charIndex = 0;
          timeoutId = setTimeout(typeWriter, 700);
          return;
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentText.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeWriter, 1800);
          return;
        }
      }
      timeoutId = setTimeout(typeWriter, isDeleting ? 35 : 75);
    };

    timeoutId = setTimeout(typeWriter, 800);
    return () => { if (timeoutId) clearTimeout(timeoutId); };
  }, []);

  return (
    <div
      id="home"
      ref={vantaRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black px-4 sm:px-8 lg:px-20 py-16"
    >
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 w-full max-w-3xl">

        <img
          src={image1}
          alt="Jose Rickardo"
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover shrink-0 border-2 border-white p-1 rounded-2xl"
        />

        <div className="flex flex-col gap-2 text-white text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold m-0 flex items-center justify-center sm:justify-start flex-wrap gap-1">
            <span className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">
              {displayText}
            </span>
            <span className="text-white animate-pulse leading-none">|</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-normal m-0">
            Developer Web Full Stack
          </h2>
          <p className="text-sm sm:text-base text-gray-300 m-0">
            Étudiant en informatique passionné par l'innovation technologique
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-6 w-full max-w-xs sm:w-auto">
        <a href="src/assets/cv.pdf" className="text-center px-6 py-3 rounded-2xl font-semibold text-black text-sm bg-gradient-to-r from-cyan-400 to-green-400 hover:from-green-400 hover:to-cyan-400 transition duration-150">
          Télécharger le CV
        </a>
        <a href="#about" className="text-center px-6 py-3 rounded-2xl font-semibold text-black text-sm bg-gradient-to-l from-cyan-400 to-green-400 hover:from-green-400 hover:to-cyan-400 transition duration-150">
          À propos
        </a>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white opacity-70 hover:opacity-100 transition flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 animate-bounce opacity-60 -mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </div>
  );
}