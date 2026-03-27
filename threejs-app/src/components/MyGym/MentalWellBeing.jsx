import React from "react";

export default function MentalWellBeing() {
    return (
        <section className="w-full min-h-screen bg-[#020617] flex items-center px-6 md:px-20">

            <div className="grid md:grid-cols-2 gap-10 items-center w-full">

                {/* LEFT IMAGE/CARD - Alternating from MentalHealth */}
                 <div className="flex justify-center md:justify-start order-2 md:order-1">
                    <div className="w-[300px] h-[380px] rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent backdrop-blur-xl border border-white/5 shadow-2xl relative overflow-hidden group">
                        
                        {/* Glow and Texture */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.15),transparent_70%)]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/5 rounded-full blur-[80px] group-hover:bg-indigo-500/10 transition-colors duration-700"></div>
                        
                        {/* Central Iconography Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-24 h-24">
                                <div className="absolute inset-0 border-2 border-indigo-400/10 rounded-full animate-[ping_3s_infinite]"></div>
                                <div className="absolute inset-4 border-2 border-indigo-400/20 rounded-full animate-[ping_2s_infinite]"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-[10px] text-indigo-300/60 uppercase tracking-widest font-bold">Balance Level</span>
                                <span className="text-xl font-bold text-indigo-300">82%</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-[82%] bg-indigo-500/50 shadow-[0_0_10px_indigo]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="text-white max-w-xl order-1 md:order-2">

                    {/* Small Line */}
                    <div className="w-10 h-[2px] bg-indigo-400 mb-6 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                        Holistic <br />
                        Mental <br />
                        Well-Being
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 mt-6 text-sm leading-relaxed">
                        A integrative approach to mental health that focuses on personal
                        equilibrium. Develop self-awareness and synchronization between
                        body and mind, leading to sustainable professional performance.
                    </p>

                    {/* Points */}
                    <ul className="mt-6 space-y-3 text-sm">
                        <li className="flex items-center gap-2 text-gray-300">
                            <span className="w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.4)]"></span>
                            Emotional intelligence development
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                            <span className="w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.4)]"></span>
                            Mind-body synchronization
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
