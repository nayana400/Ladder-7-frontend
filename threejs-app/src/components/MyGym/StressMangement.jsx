export default function StressMangement() {
    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] flex items-center px-6 md:px-20">

            <div className="grid md:grid-cols-2 gap-10 items-center w-full">

                {/* LEFT CONTENT */}
                <div className="text-white max-w-xl">

                    {/* Small Line */}
                    <div className="w-10 h-[2px] bg-teal-400 mb-6"></div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                        Stress <br />
                        Management <br />
                        Techniques
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 mt-6 text-sm leading-relaxed">
                        Mind Gym offers a range of interactive exercises specifically
                        designed to help you manage stress effectively, allowing you to
                        maintain a calm and balanced mindset even in challenging situations.
                    </p>

                    {/* Points */}
                    <ul className="mt-6 space-y-3 text-sm">
                        <li className="flex items-center gap-2 text-gray-300">
                            <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                            Guided breathing exercises
                        </li>
                        <li className="flex items-center gap-2 text-gray-300">
                            <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                            Dynamic stress regulation
                        </li>
                    </ul>
                </div>

                {/* RIGHT CARD */}
                <div className="flex justify-center md:justify-end">
                    <div className="w-[280px] h-[360px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-xl">

                        {/* Optional subtle inner texture */}
                        <div className="w-full h-full rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent)] opacity-50"></div>

                    </div>
                </div>

            </div>
        </section>
    );
}