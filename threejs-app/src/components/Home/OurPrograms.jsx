import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import pgm1 from "../../assets/Images/pgm1.webp";
import pgm2 from "../../assets/Images/pgm2.jpg";
import pgm3 from "../../assets/Images/pgm3.avif";
import pgm4 from "../../assets/Images/pgm4.jpg";

function OurPrograms() {
    const programs = [
        {
            title: "Take Off",
            description: "Ignite your career trajectory with Takeoff, the ultimate launchpad to your dream job.",
            image: pgm1,
            links: [{ text: "Join Now", url: "#" }]
        },
        {
            title: "Experience The First Job",
            description: "Dream Big. Start Here: Experience Your First Job and Build a Brighter Future",
            image: pgm2,
            links: [{ text: "Join now", url: "#" }, { text: "Explore now", url: "#" }]
        },
        {
            title: "Earn More",
            description: "Supercharge your income: EarnMore from home, on your terms",
            image: pgm3,
            links: [{ text: "Join Now", url: "#" }]
        },
        {
            title: "Best Pick",
            description: "Talent Meets Opportunity: Best Pick Connects Top Colleges with Leading Corporates.",
            image: pgm4,
            links: [{ text: "Join Now", url: "#" }]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="our-programs" className="pt-12 pb-16 bg-[#000000] text-white px-6 md:px-12 lg:px-36">
            <div className="max-w-full mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-xl md:text-4xl font-black mb-6">Our Programs</h2>
                    <p className="text-white text-lg">
                        Explore the different sets of programs that we offer.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {programs.map((program, idx) => (
                        <motion.div key={idx} variants={cardVariants}>
                            <Tilt
                                perspective={1000}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                scale={1.03}
                                className="bg-[#062861] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl transition-all duration-300 hover:shadow-blue-500/20 h-full"
                            >
                                {/* Upper Image Area */}
                                <div className="relative w-full aspect-[4/3] overflow-hidden">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>

                                {/* Bottom Content */}
                                <div className="p-6 flex flex-col items-center text-center flex-1">
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
                            </Tilt>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default OurPrograms;
