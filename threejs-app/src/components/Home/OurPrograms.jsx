import React from 'react';
import { motion } from "framer-motion";
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

    const getIcon = (idx) => {
        const icons = [
            // 0: Take Off (Rocket/Launch)
            <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.36c-3.12 0-7.44-5.22-8.3-6.53a1.5 1.5 0 01.3-2.1l.65-.54a6 6 0 018.66-8.66l.54-.65a1.5 1.5 0 012.1-.3c1.3.86 6.53 5.18 6.53 8.3a6 6 0 01-4.64 3.12z" />
            </svg>,
            // 1: Experience (Briefcase/Star)
            <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>,
            // 2: Earn More (Growth/Trend)
            <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>,
            // 3: Best Pick (Target/Award)
            <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ];
        return icons[idx] || icons[0];
    };

    return (
        <section id="our-programs" className="py-12 bg-[oklch(0.97_0_0)] text-gray-900 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: Content List */}
                    <div className="flex flex-col relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 uppercase tracking-tight">Our Programs</h2>
                            <p className="text-gray-600 text-lg md:text-xl">
                                Explore the different sets of programs that we offer.
                            </p>
                        </motion.div>

                        <div className="flex flex-col w-full border-t border-gray-200">
                            {programs.map((program, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="flex items-start md:items-center gap-4 py-4 md:py-5 border-b border-gray-200 group cursor-pointer"
                                    onClick={() => window.location.href = program.links[0]?.url || '#'}
                                >
                                    <div className="shrink-0 text-blue-500 group-hover:text-blue-600 transition-colors p-2.5 bg-gray-50 group-hover:bg-blue-50 rounded-2xl border border-gray-200 group-hover:border-blue-200">
                                        <div className="transform transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(360deg)]">
                                            {getIcon(idx)}
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col gap-3">
                                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {program.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md pl-4">
                                            {program.description}
                                        </p>
                                        <div className="flex items-center gap-4 mt-1">
                                            {program.links.map((link, lIdx) => (
                                                <a
                                                    key={lIdx}
                                                    href={link.url}
                                                    className="font-semibold text-blue-500 hover:text-blue-700 transition-colors flex items-center gap-1 group/link text-sm md:text-base whitespace-nowrap"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {link.text}
                                                    <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Offset Image Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:flex items-center justify-center h-full min-h-[450px] w-full"
                    >
                        {/* Background Accent Shape (mimicking the reference shape, but in Ladder7 blue) */}
                        <div className="absolute top-[5%] bottom-[5%] right-[5%] left-[20%] bg-[#003399] rounded-3xl opacity-90 rounded-bl-[100px] rounded-tr-[100px] transform -rotate-2" />

                        {/* Outline Border Accent */}
                        <div className="absolute top-[2%] bottom-[8%] right-[2%] left-[17%] border-2 border-dashed border-blue-400/50 rounded-3xl" />

                        {/* Staggered Collage Images */}
                        <div className="relative z-10 w-full h-[400px] flex gap-4 pl-4 pr-16 lg:pr-12">
                            {/* Left Image (Lower offset) */}
                            <div className="w-1/2 h-[80%] mt-auto pb-8 group">
                                <div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,30,80,0.15)] border-[8px] border-white relative">
                                    <img src={pgm1} alt="Program 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>

                            {/* Right Image (Higher offset) */}
                            <div className="w-1/2 h-[85%] mb-auto pt-4 group">
                                <div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,30,80,0.15)] border-[8px] border-white relative">
                                    <img src={pgm2} alt="Program 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>

                        {/* Chevron Graphic Accent (mimicking reference arrows) */}
                        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 -translate-x-1/2 z-20 flex flex-col gap-1 opacity-80">
                            {[...Array(3)].map((_, i) => (
                                <svg key={i} className={`w-12 h-12 text-blue-400 drop-shadow-lg transform rotate-90 ${i === 0 ? 'opacity-100 translate-x-4' : i === 1 ? 'opacity-70 translate-x-2' : 'opacity-40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                                </svg>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default OurPrograms;
