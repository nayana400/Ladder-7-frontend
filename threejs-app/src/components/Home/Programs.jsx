import { Link } from "react-router-dom";
import ladder from "../../assets/Images/ladder.jpg";
import mindgym from "../../assets/Images/mindgym.jpg";
import mirror from "../../assets/Images/mirror.jpg";
import filldots from "../../assets/Images/filldots.webp";

const PROGRAMS = [
    {
        id: "1",
        title: "My Ladder",
        subtitle: "Achieve your goals with ease through personalized strategies and focused, step-by-step guidance.",
        description: "MyLadder is a step-by-step program that will enable you to set a set of goals aligned to your skills and help you to climb the ladder up to your defined goals over a defined period.",
        image: ladder,
        tags: []
    },
    {
        id: "2",
        title: "Mind Gym",
        subtitle: "Train your mind to unlock success through focused mental conditioning and resilience-building techniques.",
        description: "Interactive mind exercise for a healthy mind which will enable you to practice stress management and improve your decision making skills leading to a better life.",
        image: mindgym,
        tags: []
    },
    {
        id: "3",
        title: "Mirror Me",
        subtitle: "Discover your true potential by exploring strengths and unlocking avenues for personal success.",
        description: "Mirror Me is a self-reflection program to make anybody realize what you know about yourself in terms of talents, IQ, EQ, and Goals through a set of simple programs.",
        image: mirror,
        tags: []
    },
    {
        id: "4",
        title: "Fill Dots",
        subtitle: "Bridge the gap to success by connecting missing pieces and achieving your dreams.",
        description: "Specially designed program to upskill and bridge the gap between you and your next best career.",
        image: filldots,
        tags: []
    }
];

function Programs() {
    return (
        <section id="programs" className="py-12 bg-black text-white px-6 md:px-16">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PROGRAMS.map((program, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden aspect-[3/5] cursor-pointer shadow-2xl border border-white/5 transition-transform duration-500 hover:scale-[1.03] hover:z-20"
                        >
                            {/* Background Image with Zoom */}
                            <img
                                src={program.image}
                                alt={program.title}
                                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay for Readability */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90 group-hover:bg-blue-600/60 group-hover:from-blue-900/80 group-hover:to-blue-900/90 transition-all duration-500"></div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col h-full z-10">
                                {/* Title at the Top */}
                                <h3 className="text-white text-lg leading-tight mb-1">
                                    {program.title}
                                </h3>
                                <p className="text-white text-sm">
                                    {program.subtitle}
                                </p>

                                <div className="mt-auto transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="flex gap-2 mb-4">
                                        {program.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-white/80 border border-white/20 px-2 py-0.5 rounded backdrop-blur-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-white  text-sm leading-relaxed mb-6">
                                        {program.description}
                                    </p>
                                    <div className="flex justify-center">
                                        <Link
                                            to={`/program/${program.id}`}
                                            className="inline-block px-20 py-3 rounded bg-black text-white font-bold text-sm hover:bg-white hover:text-blue-900 transition-all duration-300 rounded no-underline whitespace-nowrap"
                                        >
                                            Learn more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Programs;
