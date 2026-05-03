import Link from 'next/link';

export default function FeaturedStory() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-gray-500 mb-2">Category: Ancient Systems</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tighter">The Egyptian Pyramids</h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            A forensic analysis of Giza’s structural precision and the 'Resonant Power Plant' hypothesis versus mainstream burial theories.
          </p>
          <Link href="/theories/egyptian-pyramids" className="border border-white/20 px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
            Read Blog Paper
          </Link>
        </div>
        <div className="relative group overflow-hidden border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1000" 
            alt="Pyramids" 
            className="w-full h-[500px] object-cover  group-hover:grayscale-0 transition duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-[10px] font-mono border border-white/10">
            IMG_REF: PYRAMID_SCAN_092
          </div>
        </div>
      </div>
    </section>
  );
}