import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle, XCircle } from "lucide-react";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<"success" | "error">("success");

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://portfolio-1-sieo.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToastType("success");
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        triggerToast();
      } else {
        setToastType("error");
        setStatus("error");
        triggerToast();
      }
    } catch (error) {
      console.error(error);
      setToastType("error");
      setStatus("error");
      triggerToast();
    }
  };

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setTimeout(() => setStatus("idle"), 500);
    }, 4000);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br text-white from-[#1b1b1b] via-black to-[#1b1b1b] relative overflow-hidden"
      id="contact"
    >
      {/* Toast */}
      <div
        className={`fixed top-10 right-5 z-50 transition-all duration-500 transform ${
          showToast ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl border ${
          toastType === "success"
            ? "bg-green-900/90 border-green-500 text-green-100"
            : "bg-red-900/90 border-red-500 text-red-100"
        }`}>
          {toastType === "success" ? <CheckCircle className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
          <div>
            <h4 className="font-bold">{toastType === "success" ? "Message Envoyé !" : "Erreur"}</h4>
            <p className="text-sm">
              {toastType === "success"
                ? "Je vous répondrai dans les plus brefs délais."
                : "Le serveur ne répond pas. Réessayez plus tard."}
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          
          <h2 className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            Me Contacter
          </h2>

          <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            
            {/* Infos (Gauche) */}
            <div className={`space-y-8 transition-all duration-700 delay-200
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Restons en Contact</h3>
                <p className="text-lg text-gray-400 mb-8">
                  Je suis toujours ouvert aux opportunités de collaboration,
                  aux projets intéressants et aux nouvelles connexions professionnelles.
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-green-500 bg-[#1b1b1b] rounded-xl p-6 shadow-lg hover:shadow-green-500/20 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-green-500/10 border border-green-500/20">
                      <Mail className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-400">hei.rickardo@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-cyan-500 bg-[#1b1b1b] rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      <Phone className="w-5 h-5 text-cyan-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="font-medium">Téléphone</h4>
                      <p className="text-gray-400">+261 38 18 815 66</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 bg-[#1b1b1b] rounded-xl p-6 shadow-lg hover:shadow-green-500/20 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-green-500/10 border border-green-500/20">
                      <MapPin className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="font-medium">Localisation</h4>
                      <p className="text-gray-400">Antananarivo, Madagascar</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">Suivez-moi</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/jose-rickardo" className="p-3 rounded-full bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40 transition-all hover:scale-110">
                    <Github className="w-5 h-5 text-green-500" />
                  </a>
                  <a href="https://www.linkedin.com/in/noeliarimanana-jose-ricardo-1a281939b/" className="p-3 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:scale-110">
                    <Linkedin className="w-5 h-5 text-cyan-500" />
                  </a>
                  <a className="p-3 rounded-full bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40 transition-all hover:scale-110">
                    <Mail className="w-5 h-5 text-green-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Formulaire (Droite) */}
            <div className={`transition-all duration-700 delay-500
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="border border-cyan-500/20 bg-[#1b1b1b] rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    <Send className="w-5 h-5 text-cyan-500" />
                  </div>
                  <span className="text-lg font-semibold bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">
                    Envoyez-moi un message
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-cyan-500 outline-none transition-all"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-cyan-500 outline-none transition-all"
                    />
                  </div>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet"
                    required
                    className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-cyan-500 outline-none transition-all"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet..."
                    required
                    className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-cyan-500 outline-none min-h-32 transition-all"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 transition-all hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        Envoi...
                      </>
                    ) : (
                      <>
                        Envoyer
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}