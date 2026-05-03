"use client"
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import TheoryCard from '../../components/TheoryCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Database, Activity, Terminal, ChevronDown, ShieldCheck } from 'lucide-react';

// This would ideally move to your /data/theories.ts file
const theories = [
  {
    id: "01",
    title: "The Egyptian Pyramids",
    slug: "egyptian-pyramids",
    category: "Ancient Engineering",
    description: "A forensic analysis of Giza’s structural precision and the 'Resonant Power Plant' hypothesis versus mainstream burial theories.",
    clearance: "LEVEL 5",
    status: "STABLE",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1000",
    color: "#D4AF37" // Egyptian Gold
  },
  {
    id: "02",
    title: "UFO & UAP Incursions",
    slug: "ufo-sightings",
    category: "Aerial Anomalies",
    description: "Tactical intelligence briefing on the 'Five Observables,' trans-medium travel, and the declassified military logs of the Phoenix Lights.",
    clearance: "TOP SECRET",
    status: "ACTIVE",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000",
    color: "#00ff41" // Tactical Green
  },
  // {
  //   id: "03",
  //   title: "Oumuamua Reconnaissance",
  //   slug: "oumuamua-recon",
  //   category: "Interstellar Object",
  //   description: "Orbital telemetry analysis of the first interstellar visitor. Investigating non-gravitational acceleration and artificial geometry.",
  //   clearance: "CLASSIFIED",
  //   status: "DEPARTED",
  //   image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000",
  //   color: "#3b82f6" // NASA Blue
  // },
  // {
  //   id: "04",
  //   title: "The Anunnaki Genesis",
  //   slug: "anunnaki-genesis",
  //   category: "Paleo-Contact",
  //   description: "Deciphering Sumerian cuneiform records regarding directed panspermia and ancient genetic manipulation of Hominid DNA.",
  //   clearance: "RESTRICTED",
  //   status: "ARCHIVED",
  //   image: "https://images.unsplash.com/photo-1539762130874-f791488c1752?q=80&w=1000",
  //   color: "#a855f7" // Deep Purple
  // },
  // {
  //   id: "05",
  //   title: "Project Blue Beam",
  //   slug: "blue-beam",
  //   category: "Psychological Ops",
  //   description: "A theoretical assessment of advanced holographic projection and atmospheric optics used to simulate a planetary-scale 'First Contact' event.",
  //   clearance: "TOP SECRET",
  //   status: "ENCRYPTED",
  //   image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
  //   color: "#ef4444" // Emergency Red
  // },
  // {
  //   id: "06",
  //   title: "Cydonia Mars Anomalies",
  //   slug: "mars-cydonia",
  //   category: "Planetary Science",
  //   description: "High-resolution satellite imagery analysis of the Cydonia region, focusing on geometric symmetry and artificiality in Martian geological formations.",
  //   clearance: "LEVEL 3",
  //   status: "SCANNING",
  //   image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000",
  //   color: "#ea580c" // Mars Rust
  // }
];

export default function TheoriesHome() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTheories = theories.filter((theory) =>
    theory.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    theory.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
         <header className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-black flex flex-col justify-end">
      
      {/* 1. BACKGROUND MEDIA LAYER */}
      <div className="absolute inset-0 z-0">
        {/* OPTION A: VIDEO BACKGROUND */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        >
          <source src="https://cdn.pixabay.com/video/2022/10/04/133520-756991212_large.mp4" type="video/mp4" />
        </video>

        {/* OPTION B: IMAGE BACKGROUND (Fallback or alternative)
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000" 
             className="w-full h-full object-cover opacity-40" /> 
        */}

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/40 z-10" />
      </div>

      {/* 2. TECHNICAL HUD OVERLAY (The "NASA" Details) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Corner Brackets */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/20" />
        <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-white/20" />
        
        {/* Scanning Line Animation */}
        <motion.div 
          initial={{ top: 0 }}
          animate={{ top: "100%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[1px] bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        />

        {/* Floating Data Points */}
        <div className="absolute top-40 right-10 hidden lg:block text-[9px] font-mono text-white-500/60 space-y-2 uppercase tracking-widest">
          <p>Orbital_Velocity: 17,500 mph</p>
          <p>Signal_Latency: 0.0034ms</p>
          <p>Encryption: SHA-256_SECURE</p>
        </div>
      </div>

      {/* 3. CONTENT AREA */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-6 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Top Label */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-red-600 px-3 py-1 text-[10px] font-black tracking-[0.3em] text-white">
              <ShieldCheck size={12} />
              LEVEL 4 CLEARANCE REQUIRED
            </div>
            <div className="h-[1px] w-20 bg-white/20" />
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              Database_Node: Sector_07
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-[120px] font-black uppercase tracking-tighter leading-[0.8] mb-8">
            The <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              Archive
            </span>
          </h1>

          {/* Bottom Meta Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm md:text-lg max-w-xl font-medium leading-tight">
              A comprehensive intelligence repository of non-terrestrial phenomena, 
              ancient bio-digital artifacts, and classified planetary defense strategies.
            </p>
            
            <div className="flex items-center gap-6 text-right shrink-0">
               <div className="font-mono text-[10px] uppercase">
                  <p className="text-gray-600">Total_Records</p>
                  <p className="text-xl font-black">42,809</p>
               </div>
               <div className="font-mono text-[10px] uppercase">
                  <p className="text-gray-600">System_Status</p>
                  <p className="text-green-500 font-black flex items-center gap-2 justify-end uppercase">
                    <Activity size={12} className="animate-pulse" /> Live
                  </p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 opacity-30"
      >
        <ChevronDown size={20} />
      </motion.div>
    </header>

        {/* SEARCH BAR SECTION */}
        <div className="relative mb-12 group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-500 transition-colors">
            <Search size={20} />
          </div>
          <input 
            type="text"
            placeholder="SCANNING DATABASE FOR KEYWORDS (E.G. GIZA, INVASION, SPACE)..."
            className="w-full bg-zinc-900/50 border border-white/10 py-6 pl-14 pr-6 text-sm font-mono uppercase tracking-widest focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 p-2 opacity-20 group-focus-within:opacity-100 transition-opacity">
            <Terminal size={14} className="text-blue-500" />
          </div>
        </div>

        {/* THEORIES GRID */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredTheories.map((theory) => (
              <motion.div
                key={theory.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <TheoryCard theory={theory} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* NO RESULTS STATE */}
        {filteredTheories.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-32 text-center border border-dashed border-white/10"
          >
            <p className="text-gray-500 font-mono text-sm uppercase tracking-[0.3em]">
              Zero matches found in encrypted sectors. <br/>
              <span className="text-xs mt-4 block text-red-500/50">Try checking your clearance level or spelling.</span>
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}