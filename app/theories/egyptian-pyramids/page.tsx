"use client"
import { useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { toPng } from 'html-to-image'; // Changed this
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { 
  FileText, MapPin, Clock, User, Share2, 
  Download, Info, ShieldCheck, Telescope, Zap, 
  ChevronRight, Activity, AlertTriangle 
} from 'lucide-react';

export default function EgyptianPyramidsDossier() {
  const [isDownloading, setIsDownloading] = useState(false);
  const printRef = useRef<HTMLElement>(null);

  // PDF Generation Logic
  const handleDownloadPDF = async () => {
      if (printRef.current === null) return;

    setIsDownloading(true);
    try {
      // 1. Convert the element to a high-quality PNG string
      // html-to-image handles oklch and lab colors correctly!
      const dataUrl = await toPng(printRef.current, { 
        quality: 0.95,
        backgroundColor: '#0a0a0a',
        cacheBust: true,
      });

      // 2. Create the PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        // Use the actual size of the element
        format: [printRef.current.offsetWidth, printRef.current.offsetHeight]
      });

      // 3. Add the image to the PDF
      pdf.addImage(dataUrl, 'PNG', 0, 0, printRef.current.offsetWidth, printRef.current.offsetHeight);
      
      // 4. Trigger download
      pdf.save('X-ARCHIVE-GIZA-REPORT.pdf');

    } catch (err) {
      console.error('Oops, something went wrong!', err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-gray-200 selection:bg-[#D4AF37] selection:text-black">
      <Navbar />

      {/* 1. ACADEMIC HEADER */}
      <header className="pt-32 pb-12 border-b border-white/10 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#D4AF37] text-black text-[9px] font-black px-2 py-1 uppercase tracking-widest">
              Research Dossier: #GIZA-001
            </span>
            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-tighter">
              Classification: Restricted Access // Level 5
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-8">
            The Giza Complex: Engineering Marvels and the Resonant Power Hypothesis
          </h1>

          <div className="flex flex-wrap gap-6 items-center text-[11px] font-mono text-gray-500 uppercase border-t border-white/5 pt-8">
            <div className="flex items-center gap-2">
              <User size={14} className="text-[#D4AF37]" />
              <span>Investigator: Dr. A. Sterling</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#D4AF37]" />
              <span>Est. Read: 12 Min</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#D4AF37]" />
              <span>Giza Plateau, Egypt</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. MAIN CONTENT AREA */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT COLUMN: THE RESEARCH ARTICLE */}
        <article ref={printRef} className="lg:col-span-8 bg-[#0a0a0a] p-2">
          
          {/* Featured Image with HUD Frame */}
          <div className="mb-12 relative group">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />
            <img 
              src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=2000" 
              className="w-full h-[450px] object-cover  brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              alt="The Great Pyramid"
            />
            <div className="mt-4 flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase">
              <span>Fig 1.1: Multi-spectral Satellite Imagery</span>
              <span>UEA_SCAN_GZ_99</span>
            </div>
          </div>

          <section className="space-y-10">
            {/* Introduction */}
            <p className="text-xl text-gray-300 leading-relaxed font-light italic">
              The Great Pyramid of Giza is not merely a monument to human ego, but a mathematical and physical anomaly that suggests a profound understanding of global energy mechanics.
            </p>

            {/* Section I */}
            <div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-[#D4AF37] pl-4 mb-6">
                I. The Engineering Paradox
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Mainstream archaeology dictates that the pyramids were constructed over a 20-year period using copper tools and massive labor forces. However, a forensic look at the 2.3 million limestone blocks reveals a margin of error less than 1/15th of an inch. 
              </p>
              <p className="text-gray-400 leading-relaxed">
                Logistically, setting one block every two minutes—24 hours a day for two decades—suggests an industrial-grade mechanical sophistication. The use of "Rose Granite," transported from Aswan (500 miles away), adds a layer of complexity; these 80-ton slabs were elevated to the King's Chamber with millimetric precision that challenges modern hydraulic capabilities.
              </p>
            </div>

            {/* Technical Box */}
            <div className="bg-zinc-900/50 p-8 border border-white/5 my-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5"><Zap size={80} /></div>
              <h4 className="flex items-center gap-2 text-[#D4AF37] uppercase text-xs font-black mb-4">
                <Info size={16} /> Technical Analysis: Piezoelectricity
              </h4>
              <p className="text-sm text-gray-400 italic leading-relaxed relative z-10">
                "Quartz crystals, which make up a high percentage of the Rose Granite used in the King’s Chamber, are piezoelectric. When subjected to mechanical stress—such as the seismic vibrations of the Earth—they generate an electrical charge. This indicates the structure was designed to process energy, not just store a body."
              </p>
            </div>

            {/* Section II */}
            <div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-[#D4AF37] pl-4 mb-6">
                II. The Acoustic Resonance Hypothesis
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Proponents of the Giza Power Plant hypothesis argue that the structure functioned as a giant harmonic resonator. By vibrating in sympathy with the Earth's Schumann Resonance, the pyramid could have converted seismic pulse into high-frequency electricity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="p-4 border border-white/10 font-mono text-[10px] uppercase">
                  <span className="text-[#D4AF37]">Reactant A:</span> Hydrochloric Acid
                </div>
                <div className="p-4 border border-white/10 font-mono text-[10px] uppercase">
                  <span className="text-[#D4AF37]">Reactant B:</span> Zinc Hydrate
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Chemical residues found in the "Air Shafts" support the theory that hydrogen gas was produced within the Queen’s Chamber. This gas would have filled the Grand Gallery, acting as a medium for microwave energy wave propagation, essentially creating a MASER beam.
              </p>
            </div>

            {/* Section III */}
            <div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-[#D4AF37] pl-4 mb-6">
                III. Celestial Synchronization
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                The astronomical precision of the complex is undeniable. The three pyramids mirror the stars of Orion’s Belt with a deviation of nearly zero. This suggests that the builders were signaling a specific celestial origin point or tracking an interstellar cycle beyond our current understanding.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2000" 
                className="w-full h-64 object-cover opacity-50 border border-white/5"
                alt="Celestial Overlay"
              />
            </div>
          </section>

          {/* References */}
          <footer className="mt-20 pt-10 border-t border-white/10">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#D4AF37] mb-6">Intel Intelligence Sources</h4>
            <ul className="text-[10px] font-mono text-gray-500 space-y-2 list-none p-0">
              <li>[1] F. Petrie, "The Pyramids and Temples of Gizeh" (1883)</li>
              <li>[2] UEA Internal Report - Sub-surface Anomalies (2024)</li>
              <li>[3] C. Dunn, "The Giza Power Plant: Ancient Technologies"</li>
            </ul>
          </footer>
        </article>

        {/* RIGHT COLUMN: THE SIDEBAR */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* ACTION BUTTONS */}
          <div className="bg-white text-black p-6 sticky top-24 z-30">
            <h3 className="font-black uppercase text-[10px] mb-4 flex items-center gap-2 tracking-widest">
              <ShieldCheck size={14} /> Archive Actions
            </h3>
            <div className="grid grid-cols-1 gap-2">
              <button 
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="flex items-center justify-between bg-black text-white px-4 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition disabled:opacity-50"
              >
                {isDownloading ? "Generating..." : "Download Dossier"}
                <Download size={14} />
              </button>
              <button className="flex items-center justify-between border border-black px-4 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-100 transition">
                Share Dossier <Share2 size={14} />
              </button>
            </div>
          </div>

          {/* TACTICAL METADATA */}
          <div className="border border-white/10 p-6 bg-zinc-900/30">
            <h3 className="text-[#D4AF37] font-black uppercase text-[10px] tracking-[0.2em] mb-6 border-b border-white/10 pb-2">
              Tactical Metadata
            </h3>
            <div className="space-y-4 font-mono text-[10px] uppercase">
              <div className="flex justify-between">
                <span className="text-gray-500">Lat:</span>
                <span className="text-white">29.9792° N</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Long:</span>
                <span className="text-white">31.1342° E</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Orientation:</span>
                <span className="text-white">True North</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Signal:</span>
                <span className="text-green-500 flex items-center gap-1">
                  <Activity size={10} className="animate-pulse" /> Active
                </span>
              </div>
            </div>
          </div>

          {/* CROSS-REFERENCED FILES */}
          <div className="border-l-2 border-[#D4AF37] pl-6 space-y-6">
            <h3 className="font-black uppercase text-xs text-white">Related Intelligence</h3>
            <div className="space-y-6">
              <RelatedLink title="The Orion Correlation" tag="Astronomy" />
              <RelatedLink title="Zep Tepi Protocols" tag="History" />
              <RelatedLink title="Acoustic Levitation" tag="Physics" />
            </div>
          </div>

          {/* WARNING BOX */}
          <div className="p-4 bg-red-900/10 border border-red-900/30">
            <div className="flex items-center gap-2 text-red-500 mb-2">
              <AlertTriangle size={14} />
              <span className="text-[9px] font-bold uppercase tracking-widest">Warning</span>
            </div>
            <p className="text-[9px] text-gray-600 leading-tight uppercase font-mono">
              Unauthorized access to the sub-surface chambers at Giza is prohibited under the Antiquities Act of 1952.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

// Sidebar Link Component
function RelatedLink({ title, tag }: { title: string, tag: string }) {
  return (
    <div className="group cursor-pointer">
      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">{tag}</span>
      <h4 className="text-sm font-bold group-hover:text-[#D4AF37] transition-colors leading-tight uppercase mt-1">
        {title}
      </h4>
    </div>
  );
}