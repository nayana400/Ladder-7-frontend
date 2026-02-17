function OurPrograms() {
    const programs = [
        {
            title: "Take Off",
            description: "Ignite your career trajectory with Takeoff, the ultimate launchpad to your dream job.",
            icon: "✈️",
            links: [{ text: "Join Now", url: "#" }]
        },
        {
            title: "Experience The First Job",
            description: "Dream Big. Start Here: Experience Your First Job and Build a Brighter Future",
            icon: "🖥️",
            links: [{ text: "Join now", url: "#" }, { text: "Explore now", url: "#" }]
        },
        {
            title: "Earn More",
            description: "Supercharge your income: EarnMore from home, on your terms",
            icon: "💰",
            links: [{ text: "Join Now", url: "#" }]
        },
        {
            title: "Best Pick",
            description: "Talent Meets Opportunity: Best Pick Connects Top Colleges with Leading Corporates.",
            icon: "👍",
            links: [{ text: "Join Now", url: "#" }]
        }
    ];

    return (
        <section className="pt-0 pb-16 bg-[#1a365d] text-white px-6 md:px-12 lg:px-36">
            <div className="max-w-full mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-xl md:text-4xl font-black mb-6">Our Programs</h2>
                    <p className="text-gray-400 text-lg">
                        Explore the different sets of programs that we offer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((program, idx) => (
                        <div key={idx} className="bg-black border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                            <div className="text-5xl mb-4">
                                {program.icon}
                            </div>
                            <h3 className="text-xl font-black mb-3 leading-tight whitespace-nowrap">
                                {program.title}
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed mb-auto">
                                {program.description}
                            </p>
                            <div className="flex flex-col items-center gap-2 mt-4">
                                {program.links.map((link, lIdx) => (
                                    <a
                                        key={lIdx}
                                        href={link.url}
                                        className="group text-white font-bold text-base flex items-center"
                                    >
                                        <span className="group-hover:underline underline-offset-2 decoration-white decoration-1 transition-all duration-300">{link.text}</span>
                                        <span className="ml-1">→</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurPrograms;
