export function Hello() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3a3a3a] via-black to-[#3a3a3a] overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22d3ee_0%,transparent_70%)] opacity-20"></div>

      <div className="relative flex flex-col items-center text-center px-6 z-10">

        <h1 
          className="font-black tracking-[-0.05em] 
                     text-[13vw] 
                     sm:text-[11vw] 
                     md:text-[9vw] 
                     lg:text-[180px] 
                     xl:text-[200px]
                     leading-none
                     bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 
                     bg-clip-text text-transparent
                     animate-[fadeInScale_1.8s_ease-out_forwards]
                     drop-shadow-[0_0_60px_rgba(34,211,238,0.6)]"
        >
          Hello
        </h1>

        <p className="mt-4 sm:mt-6 text-[5.5vw] sm:text-2xl md:text-3xl 
                      text-gray-400 tracking-[0.25em] font-light
                      opacity-0 animate-[fadeInUp_1.2s_0.6s_forwards]">
          NOELIARIMANANA JOSE RICKARDO
        </p>

        <div className="w-20 sm:w-24 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent 
                        mt-8 sm:mt-10
                        animate-[expandLine_2s_1.2s_forwards]"></div>
      </div>
    </div>
  )
}