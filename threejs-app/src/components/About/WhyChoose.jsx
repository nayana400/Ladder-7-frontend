import React from "react";

export default function WhyChoose() {
    return (
        <section className="grid lg:grid-cols-2 gap-20 items-center px-6 md:px-16 mb-28">
            <div className="relative group p-4">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                        src="/About/WhyChoose.png"
                        alt="Why Choose Us"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay"></div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-2xl shadow-2xl border border-white/20 hidden md:block animate-bounce text-white">
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-xs uppercase font-bold text-blue-100 italic">Practical Learning</p>
                </div>
            </div>

            <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-10">
                    Why Choose Ladder7?
                </h2>

                <div className="space-y-8">
                    {[
                        { title: "Industry-Led Curriculum", desc: "Our courses are designed and taught by experts from the world's leading tech firms.", icon: "🎯" },
                        { title: "AI-First Approach", desc: "Every program integrates AI tools to ensure you are ready for the modern workplace.", icon: "🤖" },
                        { title: "Guaranteed Placement Assistance", desc: "We don't just teach; we help you launch your career with our network of industry partners.", icon: "💼" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all flex gap-6 group">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-2xl group-hover:bg-blue-500/20 transition-colors">{item.icon}</div>
                            <div>
                                <h4 className="text-2xl font-bold text-blue-400 mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
