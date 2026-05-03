"use client"
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function LiveFeed() {
  return (
    <main className="bg-black min-h-screen text-white pt-24 px-6">
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        {/* Header with Pulse */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
          <h1 className="text-xl font-mono tracking-[0.3em] uppercase">System Live: Deep Space Array 04</h1>
        </div>

        {/* Grid of Video Feeds */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Large Feed */}
          <div className="lg:col-span-2 border border-white/20 relative group">
            <video autoPlay muted loop className="w-full h-full object-cover grayscale brightness-50">
               <source src="https://v0.dev/videos/space.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-4 left-4 font-mono text-[10px] bg-black/60 p-2">
              FEED_ID: MAIN_ORBIT_CAM // 4K_RES
            </div>
          </div>

          {/* Side Sidebar Data */}
          <div className="space-y-6">
            <div className="border border-white/10 p-4 bg-zinc-900/50 h-1/2">
               <h3 className="text-[10px] font-black uppercase text-gray-500 mb-4 tracking-widest">Signal Spectrum</h3>
               <div className="space-y-2">
                  {[...Array(8)].map((_, i) => (
                    <motion.div 
                      key={i}
                      initial={{ width: "10%" }}
                      animate={{ width: `${Math.random() * 100}%` }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
                      className="h-1 bg-blue-500"
                    />
                  ))}
               </div>
            </div>
            
            <div className="border border-white/10 p-4 font-mono text-[10px] text-green-500 overflow-hidden h-1/2">
               <h3 className="text-gray-500 mb-2 underline">INCOMING_DATA_LOG</h3>
               <p className="">{`> RECIEVING_PAKET_092`}</p>
               <p className="">{`> DECODING_ANOMALY...`}</p>
               <p className="">{`> ERROR: NON_HUMAN_ORIGIN`}</p>
               <p className="animate-pulse">{`> SIGNAL_STRENGTH: 98%`}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}