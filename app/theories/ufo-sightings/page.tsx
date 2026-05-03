"use client"
import { useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import { 
  FileText, MapPin, Clock, User, Share2, 
  Download, Info, ShieldCheck, Telescope, Zap, 
  Activity, AlertTriangle, Eye, ShieldAlert 
} from 'lucide-react';

export default function UFOSightingsDossier() {
  const [isDownloading, setIsDownloading] = useState(false);
  const printRef = useRef<HTMLElement>(null);

  const handleDownloadPDF = async () => {
    if (printRef.current === null) return;
    setIsDownloading(true);
    try {
      const dataUrl = await toPng(printRef.current, { 
        quality: 0.95,
        backgroundColor: '#0a0a0a',
        cacheBust: true,
      });
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [printRef.current.offsetWidth, printRef.current.offsetHeight]
      });
      pdf.addImage(dataUrl, 'PNG', 0, 0, printRef.current.offsetWidth, printRef.current.offsetHeight);
      pdf.save('X-ARCHIVE-UAP-REPORT.pdf');
    } catch (err) {
      console.error('Download failed', err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-gray-200 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />

      {/* 1. ARTICLE HEADER */}
      <header className="pt-32 pb-12 border-b border-white/10 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-red-600 text-white text-[9px] font-black px-2 py-1 uppercase tracking-widest">
              Intelligence Report: #UAP-992
            </span>
            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-tighter">
              Status: Declassified // Top Secret Origin
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-8">
            Unidentified Anomalous Phenomena: Tactical Analysis & Scientific Evaluation
          </h1>

          <div className="flex flex-wrap gap-6 items-center text-[11px] font-mono text-gray-500 uppercase border-t border-white/5 pt-8">
            <div className="flex items-center gap-2">
              <User size={14} className="text-white-500" />
              <span>Lead Analyst: Dep. Director Miller</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-white-500" />
              <span>15 Min Read</span>
            </div>
            <div className="flex items-center gap-2 text-white-500">
              <ShieldAlert size={14} />
              <span>Eyes Only</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. MAIN CONTENT AREA */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT COLUMN: THE RESEARCH ARTICLE */}
        <article ref={printRef} className="lg:col-span-8 bg-[#0a0a0a] p-2">
          
          {/* Featured Image */}
          <div className="mb-12 group border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2000" 
              className="w-full h-[450px] object-cover  brightness-75 group-hover:grayscale-0 transition-all duration-1000"
              alt="UAP Observation"
            />
            <p className="text-[10px] font-mono text-gray-500 mt-4 uppercase text-center tracking-widest italic">
              Fig 2.1: Infrared Capture of Trans-Medium Craft (Nellis Range).
            </p>
          </div>

          <section className="space-y-10">
            <p className="text-xl text-gray-300 leading-relaxed font-light italic">
              "The transition from 'UFO' to 'UAP' marks the end of modern mythology and the beginning of a rigorous, data-driven defense initiative."
            </p>

            {/* Section I */}
            <div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-red-600 pl-4 mb-6">
                I. Defining UAP vs. UFO
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                For decades, the term <strong>UFO (Unidentified Flying Object)</strong> was synonymous with science fiction and amateur sightings. However, the modern intelligence community has adopted <strong>UAP (Unidentified Anomalous Phenomena)</strong> to encompass objects that exhibit capabilities across multiple domains—space, atmosphere, and undersea.
              </p>
              <p className="text-gray-400 leading-relaxed">
                This shift allows for the categorization of craft that perform "trans-medium" maneuvers, seamlessly transitioning from high-altitude flight to deep-water submersion without structural damage or a change in velocity.
              </p>
            </div>

            {/* Data Box: The Five Observables */}
            <div className="bg-zinc-900/50 p-8 border border-white/5 my-10 relative">
              <h4 className="flex items-center gap-2 text-white-500 uppercase text-xs font-black mb-6">
                <Activity size={16} /> Intelligence Metric: The Five Observables
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px] font-mono uppercase tracking-wider text-gray-400">
                <div className="border-l border-white/10 pl-3"><span className="text-white">01.</span> Anti-Gravity Lift</div>
                <div className="border-l border-white/10 pl-3"><span className="text-white">02.</span> Instantaneous Acceleration</div>
                <div className="border-l border-white/10 pl-3"><span className="text-white">03.</span> Hypersonic Velocities</div>
                <div className="border-l border-white/10 pl-3"><span className="text-white">04.</span> Low Observability</div>
                <div className="border-l border-white/10 pl-3"><span className="text-white">05.</span> Trans-Medium Travel</div>
              </div>
            </div>

            {/* Section II */}
            <div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-red-600 pl-4 mb-6">
                II. Historical Analysis: The Phoenix Lights
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                On March 13, 1997, one of the most documented mass-sightings in history occurred over Arizona. A massive, V-shaped craft—estimated to be over 1.5 miles in length—slowly and silently drifted over the Phoenix metropolitan area.
              </p>
              <div className="p-6 bg-white/5 border border-white/10 italic text-sm text-gray-300 leading-relaxed">
                "It was a solid object, not flares. It was so big it felt like the sky itself was moving. There was no sound, only a profound sense of scale." — Witness Statement #97-PHX.
              </div>
            </div>

            {/* Section III */}
            <div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-red-600 pl-4 mb-6">
                III. Advanced Tech or Misinterpretation?
              </h2>
              <p className="text-gray-400 leading-relaxed">
                While 95% of sightings can be explained by weather balloons, drones, or optical illusions, the remaining 5% remain unexplained by modern physics. These "anomalous" cases often involve acceleration exceeding 100 Gs—forces that would instantly destroy any known human airframe.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                The debate persists: Are these <strong>Special Access Programs (SAPs)</strong> from terrestrial superpowers, or do they represent automated scouting probes from a non-terrestrial civilization?
              </p>
            </div>
          </section>

          <footer className="mt-20 pt-10 border-t border-white/10">
            <h4 className="text-xs font-black uppercase tracking-widest text-white-500 mb-6">Declassified Sources</h4>
            <ul className="text-[10px] font-mono text-gray-500 space-y-2 list-none p-0">
              <li>[1] Office of the Dir. of National Intelligence - Preliminary Assessment (2021)</li>
              <li>[2] Project Blue Book Case Files #1947-1969</li>
              <li>[3] AATIP Unclassified Sensor Logs - USS Nimitz</li>
            </ul>
          </footer>
        </article>

        {/* RIGHT COLUMN: THE SIDEBAR */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* ACTIONS */}
          <div className="bg-white text-black p-6 sticky top-24 z-30">
            <h3 className="font-black uppercase text-[10px] mb-4 flex items-center gap-2 tracking-widest">
              <ShieldCheck size={14} /> Archive Actions
            </h3>
            <div className="grid grid-cols-1 gap-2">
              <button 
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="flex items-center justify-between bg-black text-white px-4 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition"
              >
                {isDownloading ? "Generating..." : "Export Dossier"}
                <Download size={14} />
              </button>
              <button className="flex items-center justify-between border border-black px-4 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-100 transition">
                Secure Share <Share2 size={14} />
              </button>
            </div>
          </div>

          {/* TACTICAL DATA */}
          <div className="border border-white/10 p-6 bg-zinc-900/30">
            <h3 className="text-white-500 font-black uppercase text-[10px] tracking-[0.2em] mb-6 border-b border-white/10 pb-2">
              Sensor Metadata
            </h3>
            <div className="space-y-4 font-mono text-[10px] uppercase">
              <div className="flex justify-between">
                <span className="text-gray-500">Source:</span>
                <span className="text-white">FLIR1 / RADAR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Velocity:</span>
                <span className="text-white">Hypersonic</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Heat Sign:</span>
                <span className="text-red-500">NONE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Status:</span>
                <span className="text-green-500 flex items-center gap-1 font-bold">
                   ACTIVE TRACKING
                </span>
              </div>
            </div>
          </div>

          {/* CROSS-REFERENCED FILES */}
          <div className="border-l-2 border-white-600 pl-6 space-y-6">
            <h3 className="font-black uppercase text-xs text-white">Related Dossiers</h3>
            <div className="space-y-6">
              <RelatedLink title="The Nimitz 'Tic-Tac' Event" tag="Navy Log" />
              <RelatedLink title="Oumuamua Scouting Vector" tag="Space" />
              <RelatedLink title="Roswell Recovery Protocol" tag="1947" />
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function RelatedLink({ title, tag }: { title: string, tag: string }) {
  return (
    <div className="group cursor-pointer">
      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">{tag}</span>
      <h4 className="text-sm font-bold group-hover:text-red-500 transition-colors leading-tight uppercase mt-1">
        {title}
      </h4>
    </div>
  );
}