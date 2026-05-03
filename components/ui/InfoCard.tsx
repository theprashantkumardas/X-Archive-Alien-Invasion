import { motion } from 'framer-motion';

interface Props {
  title: string;
  category: string;
  status: string;
  image: string;
}

export default function InfoCard({ title, category, status, image }: Props) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="relative aspect-[3/4] group overflow-hidden bg-zinc-900 border border-white/10"
    >
      <img src={image} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" />
      
      {/* Overlay UI */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <span className="bg-white text-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-tighter">
            {status}
          </span>
          <div className="w-8 h-[1px] bg-white/50 mt-2" />
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">{category}</p>
          <h3 className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:text-white transition-colors">
            {title}
          </h3>
        </div>
      </div>
      
      {/* Hover Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/20 -translate-y-full group-hover:translate-y-[400px] transition-all duration-[2000ms] ease-linear" />
    </motion.div>
  );
}