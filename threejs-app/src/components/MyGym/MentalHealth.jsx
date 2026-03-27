import React from "react";

export default function MentalHealth() {
    return (
        <section className="w-full min-h-screen bg-[#020617] flex items-center px-6 md:px-20">

            <div className="grid md:grid-cols-2 gap-10 items-center w-full">

                {/* LEFT CONTENT */}
                <div className="text-white max-w-xl">

                    {/* Small Line */}
                    <div className="w-10 h-[2px] bg-purple-400 mb-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                        Practical <br />
                        Mental Health <br />
                        Strategies
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 mt-6 text-sm leading-relaxed">
                        Establish a strong foundation for professional excellence through
                        evidence-based mental health strategies. Mind Gym provides you with
                        the theoretical knowledge and practical tools to build lasting resilience.
                    </p>

                    {/* Points */}
                    <ul className="mt-6 space-y-3 text-sm">
                        <li className="flex items-center gap-2 text-gray-300">
                            <span className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.4)]"></span>
                            Cognitive resilience training
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                            <span className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.4)]"></span>
                            Behavioral wellness frameworks
                        </li>
                    </ul>
                </div>

                {/* RIGHT CARD */}
                <div className="flex justify-center md:justify-end">
                    <div className="w-[300px] h-[380px] rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-xl border border-white/5 shadow-2xl relative overflow-hidden group">
                        
                        {/* Glow and Texture */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_70%)]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/5 rounded-full blur-[80px] group-hover:bg-purple-500/10 transition-colors duration-700"></div>
                        
                        {/* Inner Content Placeholder (e.g. Brain or Sparkles) */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full border border-purple-400/20 flex items-center justify-center animate-pulse">
                                 <div className="w-20 h-20 rounded-full bg-purple-500/10 blur-xl"></div>
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-[65%] bg-purple-500/50 shadow-[0_0_10px_purple]"></div>
                            </div>
                            <p className="text-[10px] text-purple-300/60 mt-2 uppercase tracking-widest font-bold">Mental Resilience Index</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
