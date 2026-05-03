"use client"
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      <video 
        autoPlay muted loop playsInline
        className="absolute z-0 w-full h-full object-cover opacity-60"
      >
        <source src="https://cdn.pixabay.com/video/2023/09/14/180527-864656573_large.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />

      <div className="relative z-20 text-center px-4 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs md:text-sm tracking-[0.5em] uppercase mb-4 text-gray-400 font-bold"
        >
          Universal Exploration Authority
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-tight text-white"
        >
          Searching for <br/> <span className="text-white">Intelligence</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:scale-105 transition duration-300">
            View Latest Imagery
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}