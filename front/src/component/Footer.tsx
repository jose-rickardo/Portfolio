import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r text-white  from-[#1b1b1b] via-black to-[#1b1b1b]  border-t border-green-500/20 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-green-500/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl"></div>

      <div className="container mx-auto px-6 py-12 relative">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Informations personnelles */}
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
              Noeliarimanana Jose Rickardo
            </h3>

            <p className="text-gray-400 mb-4">
              Développeur Web Full Stack passionné par l'innovation et les technologies modernes.
            </p>

            <div className="space-x-2">

              <span className="px-3 py-1 text-sm border border-green-500/30 rounded-full hover:bg-green-500/10 transition">
                Étudiant HEI
              </span>

              <span className="px-3 py-1 text-sm border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 transition">
                2ème Année
              </span>

            </div>
          </div>


          {/* Navigation */}
          <div>

            <h3 className="text-lg font-semibold mb-4">
              Navigation
            </h3>

            <div className="space-y-2">

              <a href="#about" className="block text-gray-400 hover:text-green-500 transition hover:scale-105 transform">
                À Propos
              </a>

              <a href="formation" className="block text-gray-400 hover:text-cyan-500 transition hover:scale-105 transform">
                Formation
              </a>

              <a href="#skills" className="block text-gray-400 hover:text-green-500 transition hover:scale-105 transform">
                Compétences
              </a>

              <a href="#projects" className="block text-gray-400 hover:text-cyan-500 transition hover:scale-105 transform">
                Projets
              </a>

              <a href="#contact" className="block text-gray-400 hover:text-green-500 transition hover:scale-105 transform">
                Contact
              </a>

            </div>

          </div>


          {/* Contact */}
          <div>

            <h3 className="text-lg font-semibold mb-4">
              Contact & Réseaux
            </h3>

            <div className="space-y-4">

              <div className="flex gap-4">

                <a href="https://github.com/jose-rickardo" className="p-2 rounded-full bg-[#1b1b1b] hover:bg-green-500/10 border border-green-500/20 hover:border-green-500/40 transition transform hover:scale-110">
                  <Github className="w-5 h-5 hover:text-green-500 transition" />
                </a>

                <a href="https://www.linkedin.com/in/noeliarimanana-jose-ricardo-1a281939b/" className="p-2 rounded-full bg-[#1b1b1b] hover:bg-cyan-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition transform hover:scale-110">
                  <Linkedin className="w-5 h-5 hover:text-cyan-500 transition" />
                </a>

                <a href="#" className="p-2 rounded-full bg-[#1b1b1b] hover:bg-green-500/10 border border-green-500/20 hover:border-green-500/40 transition transform hover:scale-110">
                  <Mail className="w-5 h-5 hover:text-green-500 transition" />
                </a>

              </div>

              <div className="text-sm text-gray-400">
                <p>[hei.rickardo@gmail.com]</p>
                <p>[+261 38 18 815 66]</p>
                <p>[Antananarivo 101 , Madagascar]</p>
              </div>


              {/* bouton scroll top */}

              <button
                onClick={scrollToTop}
                className="mt-4 flex items-center gap-2 px-4 py-2 text-sm border border-green-500/30 rounded-lg hover:bg-green-500/10 hover:border-green-500/50 transition transform hover:scale-105"
              >
                <ArrowUp className="w-4 h-4" />
                Retour en haut
              </button>

            </div>

          </div>

        </div>


        {/* Séparateur */}

        <div className="border-t border-green-500/20 mt-8 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-gray-400 flex items-center gap-1">
               by Noeliarimanana Jose Rickardo 🔥
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>© 2025</span>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}