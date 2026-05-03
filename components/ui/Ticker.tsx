"use client"
import { motion } from 'framer-motion';

export default function Ticker() {
  const data = [
    "SIGNAL DETECTED: SECTOR 7G", 
    "SATELLITE DELTA-9 ONLINE", 
    "ANOMALY DETECTED AT GIZA PLATEAU", 
    "DEEP SPACE SCAN: 84% COMPLETE",
    "UNIDENTIFIED AERIAL PHENOMENA TRACKED"
  ];

  return (
    <div className="bg-white text-black py-1 overflow-hidden whitespace-nowrap border-y border-white/20">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex gap-10 items-center text-[10px] font-black uppercase tracking-widest"
      >
        {[...data, ...data].map((item, i) => (
          <span key={i} className="flex items-center gap-4">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}