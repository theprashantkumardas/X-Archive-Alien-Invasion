"use client"
import { motion } from 'framer-motion';

export default function DataFeed() {
  return (
    <section className="py-24 px-6 bg-black border-t border-white/10 relative overflow-hidden">
      {/* Technical HUD Overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-grid" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Video Side with Technical Frame */}
        <div className="relative p-2 border border-white/20">
            {/* Corner Brackets */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white" />
            
            <div className="aspect-video bg-zinc-900 overflow-hidden relative">
                <video autoPlay muted loop className="w-full h-full object-cover opacity-80">
                    <source src="https://v0.dev/videos/space.mp4" type="video/mp4" />
                </video>
                {/* Scanning Line Animation */}
                <motion.div 
                    initial={{ top: 0 }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] bg-white/30 z-20"
                />
            </div>
            <div className="mt-2 flex justify-between font-mono text-[10px] text-gray-500 uppercase">
                <span>Signal: Encrypted</span>
                <span>Source: Deep_Space_Array_4</span>
            </div>
        </div>

        {/* Text Side */}
        <div>
          <div className="flex items-center gap-4 mb-6">
             <span className="w-12 h-[1px] bg-white" />
             <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Telemetry Report</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            Real-Time <br/> <span className="text-gray-500">Transmission</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
            Our planetary arrays are currently receiving petabytes of non-random radio frequency data. Processing patterns for linguistic anomalies.
          </p>
          <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
            <span className="bg-white text-black px-6 py-3 group-hover:bg-gray-200 transition">Launch Terminal</span>
            <span className="text-gray-500">Status: Online</span>
          </button>
        </div>
      </div>
    </section>
  );
}