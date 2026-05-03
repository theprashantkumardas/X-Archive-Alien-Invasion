"use client"
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Missions', href: '/missions' },
    { name: 'Ancient Systems', href: '/ancient-systems' },
    { name: 'Sightings', href: '/sightings' },
    { name: 'Theories', href: '/theories' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[9999] bg-black/90 text-white backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="font-black tracking-[0.3em] text-xl cursor-pointer z-[10000]">
          X<span className="text-gray-500">-</span>ARCHIVE
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-10 text-[11px] uppercase tracking-[0.2em] font-bold">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-gray-400 transition cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP LIVE FEED BUTTON */}
        <div className="hidden md:block">
          <Link href="/live" className="bg-white text-black px-5 py-1.5 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition cursor-pointer">
            Live Feed
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-white z-[10000] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full min-h-screen bg-black flex flex-col pt-24 px-8 z-[9998]"
          >
            {/* Background Branding for Mobile Menu */}
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center overflow-hidden">
                <span className="text-[20vw] font-black uppercase tracking-widest rotate-90 md:rotate-0">Archive</span>
            </div>

            <div className="flex flex-col space-y-8 relative z-10">
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={link.name}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black uppercase tracking-tighter hover:text-gray-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-8 border-t border-white/10"
              >
                <Link 
                  href="/live"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 bg-white text-black w-full py-4 font-black uppercase tracking-[0.2em] text-sm"
                >
                  <Terminal size={18} />
                  Live System Feed
                </Link>
              </motion.div>

              {/* Technical footer for mobile menu */}
              <div className="pt-12 text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em] space-y-2">
                <p>Status: Monitoring...</p>
                <p>Location: Restricted_Area_51</p>
                <p>© 2024 X-Archive Intelligence</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}