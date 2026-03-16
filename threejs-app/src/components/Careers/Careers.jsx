import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OPEN_POSITIONS = [
    {
        title: "HR Intern",
        location: "Trivandrum",
        duration: "3 months (1+2 months)",
        mode: "Work from Office",
        qualification: "MBA in HR / Marketing / General",
        description: "We are looking for an HR Intern to assist in our recruitment and talent management processes. The ideal candidate should have strong communication skills and a passion for people management.",
        category: "HR"
    },
    {
        title: "WordPress Developer Intern",
        location: "Trivandrum",
        duration: "3 months (1+2 months)",
        mode: "Work from Office",
        qualification: "Computer Science, IT, or related field",
        description: "Join our mobile development team to build cutting-edge applications using React Native or Flutter. You will work on cross-platform solutions and collaborate with UI/UX designers.",
        category: "Engineering"
    },
    {
        title: "Flutter Developer Intern",
        location: "Trivandrum",
        duration: "3 months (1+2 months)",
        mode: "Work from Office",
        qualification: "Current student or recent graduate in Computer Science, IT, or a related field",
        description: "Looking for a passionate web developer with experience in React, Node.js, and modern CSS frameworks. You will be responsible for building and maintaining responsive web applications.",
        category: "Engineering"
    },
    {
        title: "AEM Author Internship Program",
        location: "Hybrid",
        duration: "1-month Unpaid Probation",
        mode: "Hybrid",
        qualification: "Graduate (Any Computer Science Degree)",
        description: "Help us expand our digital footprint. You will manage social media campaigns, SEO, and content marketing strategies to drive engagement and growth.",
        category: "Marketing"
    }

];

const JobAccordion = ({ job }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-6 md:p-8 rounded-xl bg-gradient-to-r from-[#1e3a8a] via-[#312e81] to-[#4c1d95] border border-white/10 hover:border-blue-500/50 transition-all duration-300 relative group overflow-hidden"
            >
                {/* Title and Job Preview */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                    <div className="flex-1">
                        <h3 className="text-2xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                            {job.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-blue-100/70 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{job.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span>{job.mode}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                                <span>{job.qualification}</span>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="text-white bg-white/10 p-2 rounded-full hidden md:block"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </motion.div>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-[#0a1128] rounded-b-xl -mt-2 border-x border-b border-white/5"
                    >
                        <div className="p-8 pt-10">
                            <div className="mb-8">
                                <h4 className="text-white font-bold text-lg mb-4">Job Description</h4>
                                <p className="text-blue-100/70 leading-relaxed text-base">
                                    {job.description}
                                </p>
                            </div>
                            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 flex items-center gap-2 group cursor-pointer border-none outline-none">
                                Apply Now
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Careers = () => {
    const rolesSectionRef = useRef(null);

    const scrollToRoles = (e) => {
        e.preventDefault();
        rolesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-[#000000]">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] overflow-hidden flex items-center pt-20">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-4xl">
                            <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-6 mb-8 leading-tight">
                                EXPLORE YOUR PASSION, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                                    CREATE LASTING CHANGE
                                </span>
                            </h2>
                            <p className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-2xl leading-relaxed">
                                Transform your career while transforming lives.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button
                                    onClick={scrollToRoles}
                                    className="px-10 py-4 bg-white text-[#1a365d] font-bold rounded-full hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-2xl flex items-center gap-2 group cursor-pointer border-none outline-none"
                                >
                                    Explore Open Roles
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Colorful Letters Column */}
                        <div
                            className="hidden lg:flex flex-wrap justify-end gap-4 select-none opacity-50 lg:opacity-100"
                            style={{ perspective: '1000px' }}
                        >
                            {[
                                { char: 'C', color: 'text-cyan-400' },
                                { char: 'A', color: 'text-pink-400' },
                                { char: 'R', color: 'text-blue-500' },
                                { char: 'E', color: 'text-purple-500' },
                                { char: 'E', color: 'text-indigo-500' },
                                { char: 'R', color: 'text-blue-400' }
                            ].map((item, index) => (
                                <span
                                    key={index}
                                    className={`text-8xl lg:text-9xl font-black ${item.color} cursor-default text-3d-extruded`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    {item.char}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section
                ref={rolesSectionRef}
                id="open-positions"
                className="py-12 bg-[#000000] relative z-10 scroll-mt-24"
            >
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="mb-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Open Positions</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>

                    </div>

                    <div className="space-y-4">
                        {OPEN_POSITIONS.map((job, index) => (
                            <JobAccordion key={index} job={job} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
