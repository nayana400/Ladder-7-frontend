import React from "react";

export default function Pillars() {
    const pillars = [
        "Innovation",
        "Integrity",
        "Collaboration",
        "Growth",
        "Excellence",
        "Impact",
        "Learning",
    ];

    const positions = [
        "top-0 left-1/2 -translate-x-1/2",
        "top-1/4 right-0",
        "bottom-1/4 right-0",
        "bottom-0 left-1/2 -translate-x-1/2",
        "bottom-1/4 left-0",
        "top-1/4 left-0",
        "top-1/2 right-1/4 -translate-y-1/2",
    ];

    return (
        <section className="text-center px-6 md:px-16 mb-28">

            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                    Core Values
                </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The 7 Pillars of Excellence
            </h2>

            <p className="text-gray-400 mb-20 text-lg md:text-xl max-w-3xl mx-auto">
                Our foundation is built on these core values that drive every program
                and interaction we have.
            </p>

            {/* Circular Layout */}
            <div className="relative w-full max-w-3xl mx-auto h-[500px] flex items-center justify-center">

                {/* Center Pillar */}
                <div className="absolute bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-full w-40 h-40 flex items-center justify-center font-bold text-xl shadow-xl shadow-blue-500/20 border border-white/10 text-white">
                    7<br />PILLARS
                </div>

                {/* Other Pillars */}
                {pillars.map((pillar, index) => (
                    <div
                        key={index}
                        className={`absolute ${positions[index]} w-36 h-36 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex flex-col items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/50 transition-all group`}
                    >
                        <div className="text-blue-500/50 text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                            0{index + 1}
                        </div>
                        <h4 className="font-bold text-sm text-center px-2">{pillar}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}