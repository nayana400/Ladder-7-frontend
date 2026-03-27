export default function DecisionSection() {
    return (
        <section className="w-full min-h-screen bg-[#020617] flex items-center px-6 md:px-20">

            <div className="grid md:grid-cols-2 gap-12 items-center w-full">

                {/* LEFT - GLOW ORB */}
                <div className="flex justify-center md:justify-start">
                    <div className="relative w-[300px] h-[300px] flex items-center justify-center">

                        {/* Outer Glow Ring */}
                        <div className="absolute w-[320px] h-[320px] rounded-full border border-cyan-400/20"></div>

                        {/* Inner Glow */}
                        <div className="absolute w-[260px] h-[260px] rounded-full bg-cyan-400/10 blur-2xl"></div>

                        {/* Core Circle */}
                        <div className="w-[220px] h-[220px] rounded-full bg-gradient-to-br from-cyan-300/20 to-blue-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_0_60px_rgba(0,255,255,0.2)]">

                            {/* Brain Image */}
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4149/4149670.png"
                                alt="brain"
                                className="w-[120px] h-[120px] object-contain opacity-90"
                            />
                        </div>

                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="text-white max-w-xl">

                    {/* Small Line */}
                    <div className="w-10 h-[2px] bg-cyan-400 mb-6"></div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                        Enhanced <br />
                        Decision-Making <br />
                        Skills
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 mt-6 text-sm leading-relaxed">
                        Through targeted mental exercises, Mind Gym sharpens your cognitive
                        abilities, enabling you to make more informed and confident
                        decisions in both personal and professional aspects of life.
                    </p>

                    {/* Stats */}
                    <div className="flex gap-4 mt-8 flex-wrap">

                        {/* Card 1 */}
                        <div className="px-6 py-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 min-w-[120px]">
                            <p className="text-cyan-400 text-lg font-semibold">45%</p>
                            <p className="text-xs text-gray-400 mt-1">
                                Clarity increase
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="px-6 py-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 min-w-[140px]">
                            <p className="text-cyan-400 text-lg font-semibold">2x</p>
                            <p className="text-xs text-gray-400 mt-1">
                                Faster processing
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}