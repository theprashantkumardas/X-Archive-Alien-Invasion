"use client"
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import FeaturedStory from '../components/sections/FeaturedStory';
import ObservationGallery from '../components/sections/ObservationGallery';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero Section (Dark Video) */}
      <Hero />

      {/* 3. Research Section (Dark Text/Image) */}
      <FeaturedStory />

      {/* 4. Observation Section (White Background) */}
      <ObservationGallery />
      
      {/* 5. Simple Footer */}
      <footer className="bg-white text-black py-12 px-6 border-t border-black/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em]">
          <span>© X-Archive Universal</span>
          <div className="flex gap-8">
            <a href="#" className="hover:opacity-50">Privacy</a>
            <a href="#" className="hover:opacity-50">Mission Log</a>
          </div>
        </div>
      </footer>
    </main>
  );
}