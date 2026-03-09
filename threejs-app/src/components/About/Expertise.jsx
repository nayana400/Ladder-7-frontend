import React from "react";

export default function Expertise() {
    return (
        <section className="px-6 md:px-16 mb-28">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Areas of Expertise</h2>
                    <p className="text-gray-400 text-lg md:text-xl">Master the technologies that are redefining the digital landscape.</p>
                </div>
                <p className="text-blue-400 hover:text-blue-300 font-bold text-lg cursor-pointer transition-colors flex items-center gap-2">
                    View All Specializations <span className="text-2xl">→</span>
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Full-Stack Engineering", icon: "💻", color: "from-blue-500/20" },
                    { title: "AI & Machine Learning", icon: "🧠", color: "from-purple-500/20" },
                    { title: "Cloud Computing", icon: "☁️", color: "from-cyan-500/20" }
                ].map((exp, i) => (
                    <div key={i} className={`bg-gradient-to-br ${exp.color} to-transparent backdrop-blur-md border border-white/10 rounded-3xl h-[280px] p-10 flex flex-col justify-end group hover:border-white/30 transition-all cursor-pointer relative overflow-hidden hover:scale-[1.02]`}>
                        <div className="absolute top-8 right-8 text-6xl opacity-10 group-hover:opacity-40 transition-opacity transform group-hover:-rotate-12">{exp.icon}</div>
                        <div className="text-5xl mb-auto group-hover:scale-110 transition-transform origin-left">{exp.icon}</div>
                        <h4 className="text-2xl font-bold leading-tight">{exp.title}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}
