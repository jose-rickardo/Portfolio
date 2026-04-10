import "../index.css"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import image1 from "../assets/logoPro.png";
import cv from "../assets/cv.pdf";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const itemNav = [
        { name: "Accueil", href: "#home" },
        { name: "À propos", href: "#about" },
        { name: "Formation", href: "#formation" },
        { name: "Compétences", href: "#skills" },
        { name: "Projets", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl transition-shadow duration-300 ${
                    scrolled ? "shadow-none" : "shadow-2xl shadow-green-500"
                }`}
            >
                <nav className="max-w-6xl mx-auto flex justify-between items-center p-3">
                    <a href="#home">
                        <img src={image1} alt="logo" className="w-10 lg:w-12" />
                    </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="min-[850px]:hidden text-green-500 text-3xl"
                        aria-label="Menu"
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>

                    <ul className="hidden min-[850px]:flex items-center gap-10">
                        {itemNav.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="text-amber-50 uppercase font-semibold text-sm hover:text-green-400 transition"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}

                        <li>
                            <a
                                href={cv}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 text-black font-bold text-sm rounded-md bg-gradient-to-t from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 transition"
                            >
                                CV
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <div
                className={`
                    fixed inset-x-0 top-16 bg-black border-b border-gray-700
                    flex flex-col items-center gap-10 py-12
                    transition-all duration-300 ease-in-out
                    ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
                    min-[850px]:hidden
                    z-40
                `}
            >
                {itemNav.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-amber-50 text-lg uppercase font-semibold hover:text-green-400 transition"
                    >
                        {item.name}
                    </a>
                ))}

                <a
                    href="src/assets/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-3 text-black font-bold rounded-md bg-gradient-to-t from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 transition"
                >
                    CV
                </a>
            </div>
        </>
    )
}