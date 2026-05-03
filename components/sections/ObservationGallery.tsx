interface GalleryItemProps {
    img: string;
    title: string;
}

function GalleryItem({ img, title }: GalleryItemProps) {
    return (
        <div className="relative group overflow-hidden h-[400px] border border-black/5">
            <img src={img} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt={title} />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest text-center px-4">{title}</span>
            </div>
        </div>
    );
}

export default function ObservationGallery() {
    const items = [
        { img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000", title: "Orbit Observation" },
        { img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000", title: "Mars Surface Scan" },
        { img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000", title: "Deep Space Nebula" },
    ];

    return (
        <>
            <section className="bg-white text-black py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-12 border-b-2 border-black pb-4">
                        <h2 className="text-5xl font-black uppercase tracking-tighter">Latest <br /> Observations</h2>
                        {/* <button className="text-xs font-bold border-b border-black pb-1 uppercase tracking-widest hover:text-gray-500 transition">View Archive</button> */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {items.map((item, index) => (
                            <GalleryItem key={index} img={item.img} title={item.title} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Section: Global Incursion Monitoring */}
            <section className="bg-black  py-24 px-6 border-t border-white/10 overflow-hidden relative">
                {/* Decorative HUD Lines */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                        <div >
                            <h2 className=" text-white text-xs font-bold tracking-[0.6em] uppercase text-white-500 mb-4 animate-pulse">● Live Tactical Feed</h2>
                            <h3 className=" text-white text-5xl md:text-7xl font-black uppercase tracking-tighter">Global <br /> Incursions</h3>
                        </div>
                        <div className="mt-6 md:mt-0 text-right">
                            <p className="text-gray-500 font-mono text-[10px] uppercase">Frequency: 1420 MHz (Hydrogen Line)</p>
                            <p className="text-gray-500 font-mono text-[10px] uppercase">Encryption: Phase-Shift Alpha</p>
                        </div>
                    </div>

                    {/* Invasion Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="group border bg-black text-white border-white/10 p-8 hover:bg-white hover:text-black transition-all duration-500">
                            <div className="flex justify-between items-start mb-12">
                                <span className="font-mono text-xs opacity-50">FILE_NO: INV-092</span>
                                <span className="px-2 py-1 bg-red-600 text-white text-[10px] font-bold">CRITICAL ANOMALY</span>
                            </div>
                            <h4 className="text-3xl font-black uppercase tracking-tighter mb-4">The Pacific Submersion</h4>
                            <p className="text-sm opacity-70 mb-8 leading-relaxed">
                                High-speed craft detected entering the water near the Mariana Trench. Visual confirmation shows no splash or heat signature. Hydrophone arrays are picking up repetitive mechanical pulses.
                            </p>
                            <div className="h-[1px] w-full bg-current opacity-20 mb-4" />
                            <button className="text-[10px] font-bold uppercase tracking-[0.2em]">Analyze Data Source</button>
                        </div>

                        <div className="group border bg-black text-white border-white/10 p-8 hover:bg-white hover:text-black transition-all duration-500">
                            <div className="flex justify-between items-start mb-12">
                                <span className="font-mono text-xs opacity-50">FILE_NO: INV-104</span>
                                <span className="px-2 py-1 border border-current text-[10px] font-bold">MONITORING</span>
                            </div>
                            <h4 className="text-3xl font-black uppercase tracking-tighter mb-4">Satellite Disruption</h4>
                            <p className="text-sm opacity-70 mb-8 leading-relaxed">
                                Communication satellites in geosynchronous orbit experiencing "shadowing." Unknown objects are positioning themselves between the sun and the arrays, blocking 90% of solar intake.
                            </p>
                            <div className="h-[1px] w-full bg-current opacity-20 mb-4" />
                            <button className="text-[10px] font-bold uppercase tracking-[0.2em]">Access Satellite Log</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Chronology of Contact  */}
            <section className="bg-white text-black py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-6xl font-black uppercase tracking-tighter text-center mb-20">Timeline of <br /> Inter stellar </h2>

                    <div className="space-y-24">
                        {/* Event 1 */}
                        <div className="flex gap-8 group">
                            <div className="text-4xl font-black opacity-20 group-hover:opacity-100 transition">2560 BC</div>
                            <div className="pt-2">
                                <h4 className="text-xl font-bold uppercase tracking-widest border-b-4 border-black inline-block mb-4">The Giza Calibration</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    The Great Pyramid is completed with an accuracy of 0.05 degrees. New evidence suggests the internal shafts were designed as waveguides for atmospheric electricity, powered by the Nile's aquifer.
                                </p>
                            </div>
                        </div>

                        {/* Event 2 */}
                        <div className="flex gap-8 group">
                            <div className="text-4xl font-black opacity-20 group-hover:opacity-100 transition">1947 AD</div>
                            <div className="pt-2">
                                <h4 className="text-xl font-bold uppercase tracking-widest border-b-4 border-black inline-block mb-4">The Roswell Recovery</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Initial reports of "flying discs" are quickly retracted. Declassified documents mention "memory metal" and fiber-optic cables that match hieroglyphic descriptions of the "Gods' tools."
                                </p>
                            </div>
                        </div>

                        {/* Event 3 */}
                        <div className="flex gap-8 group">
                            <div className="text-4xl font-black opacity-20 group-hover:opacity-100 transition">TODAY</div>
                            <div className="pt-2">
                                <h4 className="text-xl font-bold uppercase tracking-widest border-b-4 border-black inline-block mb-4">Active Signal Reception</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    The same mathematical constants found in the Pyramid's geometry are now being detected in radio bursts coming from the James Webb telescope's deep field scans.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* /* Section: Intelligence Briefing (Video) */ }
            <section className="relative h-[70vh] bg-black flex items-center">
                <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover grayscale opacity-40">
                    <source src="https://cdn.pixabay.com/video/2023/12/12/192935-893872011_large.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="max-w-xl">
                        <span className="font-mono text-white text-xs uppercase tracking-widest block mb-4"> DECLASSIFIED_FOOTAGE_01</span>
                        <h2 className="text-4xl text-white md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">The Phoenix <br /> Archive</h2>
                        <p className="text-gray-300 mb-8 italic">"Analyzing the 1.5-mile wide craft spotted over the Nevada desert. No heat signature, no propulsion system detected."</p>
                        <button className="bg-white text-black px-8 py-3 font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-white-600 hover:text-black transition">
                            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                            Play Briefing
                        </button>
                    </div>
                </div>
            </section>

        </>
    );
}