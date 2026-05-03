"use client"
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Zap, Target, Globe, Cpu } from 'lucide-react';

export default function AncientSystems() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* 1. HERO SECTION: CINEMATIC IMPACT */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1539762130874-f791488c1752?q=80&w=2000" 
          alt="Ancient Giza" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase mb-4 block">
              Mission: Reconstruction // Objective: Origin
            </span>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-6">
              Ancient <br /> <span className="text-gray-400">Systems</span>
            </h1>
            <div className="flex justify-center gap-4 text-[10px] font-mono text-gray-500">
              <span>LAT: 29.9792° N</span>
              <span>LONG: 31.1342° E</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TECHNICAL STATS BAR (NASA STYLE) */}
      <section className="bg-white text-black py-10 border-y border-black/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatBox label="Structure Age" value="~4,500 Yrs" />
          <StatBox label="Precision" value="0.05° Arc" />
          <StatBox label="Material" value="Rose Granite" />
          <StatBox label="Status" value="Resonating" />
        </div>
      </section>

      {/* 3. THE TRANSMITTER THEORY (EDITORIAL WHITE SECTION) */}
      <section className="bg-white text-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                The Giza <br /> Power Plant
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                Conventional archaeology labels the Great Pyramid as a tomb. However, spectral analysis reveals no biological remains. Instead, the internal architecture mirrors a modern <strong>microwave resonator.</strong>
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-600 mt-1" />
                  <span><strong>Hydrogen Conductivity:</strong> Evidence of chemical precursors in the Queen's chamber.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 mt-1" />
                  <span><strong>Orion Correlation:</strong> Mathematical alignment with interstellar navigation points.</span>
                </li>
              </ul>
              <button className="bg-black text-white px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition">
                View Blueprints
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1000" 
                className="w-full h-[600px] object-cover border-[12px] border-gray-100 shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 hidden md:block">
                <p className="font-mono text-[10px] uppercase tracking-widest">Analysis_Module_09</p>
                <p className="text-xl font-bold italic">"Non-human precision detected."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE INTERSTELLAR CONNECTION (DARK VIDEO SECTION) */}
      <section className="bg-black py-32 px-6 relative overflow-hidden">
        {/* Background Decorative Tech Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* <Globe className="w-12 h-12 text-white-500 mx-auto mb-8" /> */}
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white">
            Astronomic <br /> Synchronization
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed mb-12">
            The three pyramids of Giza mirror the stars of Orion's Belt. This isn't just religious worship—it's a <strong>Deep Space Beacon</strong> intended for an audience returning from the stars.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
              <Cpu className="w-6 h-6 text-white-500 mb-4" />
              <h4 className="font-bold uppercase mb-2">Computational Archeology</h4>
              <p className="text-sm text-gray-500">Using AI to simulate the night sky of 10,500 BC to find the perfect alignment matches.</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
              <Globe className="w-6 h-6 text-white-500 mb-4" />
              <h4 className="font-bold uppercase mb-2">Global Network</h4>
              <p className="text-sm text-gray-500">Mapping the pyramids to other sites like Teotihuacán and Stonehenge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER (CLEAN WHITE) */}
      <footer className="bg-white text-black py-20 px-6 border-t border-black/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-black text-3xl tracking-[0.5em] mb-4">X-ARCHIVE</div>
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-10">Searching for our true architects.</p>
          <div className="flex justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <a href="/" className="hover:text-black">Home</a>
            <a href="/theories" className="hover:text-black">Dossiers</a>
            <a href="/live" className="hover:text-black">Mission Control</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Reusable Stat Component
function StatBox({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">{label}</span>
      <span className="text-2xl font-black uppercase tracking-tight">{value}</span>
    </div>
  );
}