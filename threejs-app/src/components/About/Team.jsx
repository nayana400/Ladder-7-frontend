import React from "react";

export default function Team() {
    return (
        <section className="text-center px-6 md:px-16 mb-28">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Minds Behind Ladder7
            </h2>
            <p className="text-gray-400 mb-16 text-lg md:text-xl max-w-2xl mx-auto">A global team of innovators, engineers, and educators dedicated to your success.</p>

            <div className="flex flex-wrap justify-center gap-12">
                {[1, 2, 3, 4, 5].map((member) => (
                    <div key={member} className="group cursor-pointer">
                        <div className="relative mb-6">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 blur-md"></div>
                            <div className="relative w-28 h-28 rounded-full bg-gray-800 border-2 border-white/10 overflow-hidden mx-auto shadow-2xl">
                                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                                    <span className="text-3xl font-bold italic">L7</span>
                                </div>
                            </div>
                        </div>
                        <p className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors">Expert Mentor</p>
                        <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Industry Vertical</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
