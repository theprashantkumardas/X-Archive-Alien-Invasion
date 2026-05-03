"use client"
import { motion } from 'framer-motion';
import { Terminal, ShieldAlert, Zap } from 'lucide-react';

interface CardProps {
  title: string;
  category: string;
  description: string;
  icon: "invasion" | "egypt" | "mystery";
}

export default function DossierCard({ title, category, description, icon }: CardProps) {
  const icons = {
    invasion: <ShieldAlert className="w-5 h-5 text-red-500" />,
    egypt: <Zap className="w-5 h-5 text-yellow-500" />,
    mystery: <Terminal className="w-5 h-5 text-cyan-400" />
  };

  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-none flex flex-col gap-4 overflow-hidden"
    >
      {/* Corner Accents (NASA Look) */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400/50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400/50" />

      <div className="flex justify-between items-center">
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">
          {category}
        </span>
        {icons[icon]}
      </div>

      <h3 className="text-xl font-bold tracking-tight group-hover:text-cyan-400 transition">
        {title}
      </h3>
      
      <p className="text-sm text-gray-400 leading-relaxed font-light">
        {description}
      </p>

      <button className="mt-4 text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-bold border-b border-cyan-400/0 hover:border-cyan-400 w-fit transition-all">
        Access File →
      </button>
    </motion.div>
  );
}