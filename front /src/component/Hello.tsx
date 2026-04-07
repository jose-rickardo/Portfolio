export function Hello() {  
    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#3a3a3a] via-black to-[#3a3a3a] overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22d3ee_0%,transparent_60%)] opacity-20"></div>

            <div className="relative flex flex-col items-center">
                <h1 
                    className="text-9xl md:text-[180px] font-black tracking-tighter 
                               bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 
                               bg-clip-text text-transparent
                               animate-[fadeInScale_1.8s_ease-out_forwards]
                               drop-shadow-[0_0_60px_rgba(34,211,238,0.6)]"
                >
                    Hello
                </h1>

                <p className="mt-6 text-2xl text-gray-400 tracking-widest font-light 
                            opacity-0 animate-[fadeInUp_1.2s_0.6s_forwards]">
                    NOELIARIMANANA JOSE RICKARDO
                </p>

                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent 
                              mt-8 animate-[expandLine_2s_1.2s_forwards]"></div>
            </div>
        </div>
    )
}