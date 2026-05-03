"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TheoryCard({ theory }: { theory: any }) {
  return (
    <Link href={`/theories/${theory.slug}`} className="group block h-full">
      <motion.div 
        layout
        className="relative h-full border border-white/10 bg-zinc-900/20 backdrop-blur-sm transition-all duration-500 group-hover:border-white/30 flex flex-col"
      >
        {/* Technical Corner Brackets */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500 opacity-50 group-hover:opacity-100" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500 opacity-50 group-hover:opacity-100" />

        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={theory.image} 
            alt={theory.title}
            className="w-full h-full object-cover  group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
          />
          <div className="absolute top-3 right-3">
             <span className="bg-red-600 text-white text-[9px] font-black px-2 py-1 tracking-widest uppercase">
               {theory.clearance}
             </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.2em] font-bold">
              // {theory.category}
            </span>
            <div className="flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: theory.color }} />
               <span className="text-[9px] font-mono text-gray-500 uppercase">{theory.status}</span>
            </div>
          </div>

          <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight mb-4 group-hover:text-white transition">
            {theory.title}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium line-clamp-2">
            {theory.description}
          </p>

          <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-gray-600 uppercase">
             <span>Access: Granted</span>
             <span className="group-hover:text-white transition">Read Dossier →</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}