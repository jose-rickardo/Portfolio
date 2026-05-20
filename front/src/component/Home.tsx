import image1 from "../assets/Gemini_Generated_Image_yylrtjyylrtjyylr.png";
import cv from "../assets/cv.pdf";

export function Home() {
  return (
    <div
      id="home"
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center bg-[#0d0f14] overflow-hidden"
    >

      {/* ── GAUCHE ── */}
      <div className="flex-1 w-full flex flex-col justify-center items-center lg:items-start gap-4 px-8 sm:px-14 lg:px-20 pt-20 pb-6 lg:py-0 z-10 text-center lg:text-left">

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
          Bonjour<span className="text-cyan-400">.</span>
        </h1>

        <div className="flex items-center gap-3">
          <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-green-400 rounded" />
          <span className="text-gray-400 text-sm font-light">je suis  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
           Jose Rickardo</span></span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Développeur
        </h2>

        <p className="text-sm text-gray-500 font-light leading-relaxed max-w-sm">
          Étudiant en informatique passionné par l'innovation technologique
        </p>

        <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 to-green-400 hover:opacity-90 transition"
          >
            Télécharger le CV
          </a>
          <a
            href="#about"
            className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-300 border border-white/15 hover:border-white/30 hover:text-white transition"
          >
            À propos
          </a>
        </div>
      </div>

      {/* ── DROITE ── */}
      <div className="flex-1 w-full flex items-center justify-center relative min-h-[320px] lg:min-h-screen">

        {/* Cercles décoratifs centrés */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] lg:w-[360px] lg:h-[360px] rounded-full border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-green-500/5" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] lg:w-[270px] lg:h-[270px] rounded-full border border-green-500/10" />

        {/* Symboles déco */}
        <span className="absolute top-1/2 -translate-y-1/2 left-4 text-3xl font-bold text-cyan-500/20 select-none">&lt;</span>
        <span className="absolute top-1/2 -translate-y-1/2 right-4 text-2xl font-bold text-green-500/20 select-none">&gt;</span>

        {/* Photo centrée */}
        <div className="relative z-10 w-[200px] sm:w-[240px] lg:w-[280px] overflow-hidden rounded-[120px]">
          <img
            src={image1}
            alt="Jose Rickardo"
            className="w-full h-full object-cover object-top"
            style={{ minHeight: '300px' }}
          />
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 opacity-20 hover:opacity-50 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 animate-bounce opacity-50 -mt-2.5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </div>
  );
}