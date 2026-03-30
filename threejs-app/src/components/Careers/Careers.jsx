import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import career images
import career1 from '../../assets/Images/careers/career1.webp';
import career2 from '../../assets/Images/careers/career2.webp';
import career3 from '../../assets/Images/careers/career3.webp';

const CAREER_IMAGES = [career1, career2, career3];

const OPEN_POSITIONS = [
    {
        title: "HR Intern",
        location: "Trivandrum",
        duration: "3 months",
        mode: "Work from Office",
        qualification: "MBA in HR / Marketing",
        description: "We are looking for an HR Intern to assist in our recruitment and talent management processes. Assist in screening resumes, scheduling interviews, and maintaining employee records.",
        category: "HR",
        image: career1,
        type: "Paid"
    },
    {
        title: "WordPress Developer",
        location: "Trivandrum",
        duration: "3 months",
        mode: "Work from Office",
        qualification: "B.Tech / MCA / BCA",
        description: "Join our development team to build and maintain WordPress websites. Experience with PHP, HTML5, CSS3, and JavaScript is preferred.",
        category: "Engineering",
        image: career2,
        type: "Stipend"
    },
    {
        title: "Flutter Developer",
        location: "Trivandrum",
        duration: "3 months",
        mode: "Work from Office",
        qualification: "B.Tech / MCA / BCA",
        description: "Looking for a passionate Flutter developer to build cross-platform mobile applications. knowledge of Dart and state management is essential.",
        category: "Engineering",
        image: career3,
        type: "Paid"
    },
    {
        title: "AEM Author Intern",
        location: "Hybrid",
        duration: "1 month",
        mode: "Hybrid",
        qualification: "Computer Science Degree",
        description: "Learn and work with Adobe Experience Manager. You will be responsible for content authoring and managing digital assets within the AEM platform.",
        category: "Engineering",
        image: career1,
        type: "Unpaid"
    }
];


const Careers = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedJob, setSelectedJob] = useState(OPEN_POSITIONS[0]);

    // Auto-rotate images on right side every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % CAREER_IMAGES.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[oklch(0.93_0.01_0)] min-h-screen">
            {/* Two-Column Hero Section */}
            <section className="min-h-[80vh] flex items-center bg-[oklch(0.93_0.01_0)] relative overflow-hidden">
                {/* Background subtle glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-8 lg:px-16 py-20 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 items-center relative z-10">

                    {/* LEFT: Text Content */}
                    <div className="flex flex-col justify-center">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4"
                        >
                            We're Hiring
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 whitespace-nowrap"
                        >
                            Join Our{' '}
                            <span className="bg-gradient-to-r from-[#003399] via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                Mission
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 origin-left"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md"
                        >
                            Be part of a passionate team building innovative digital solutions.
                            We value creativity, growth, and collaboration.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.55 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#open-positions"
                                className="px-6 py-2.5 text-sm md:text-base bg-[#003399] hover:bg-[#0044cc] text-white font-semibold rounded-full transition-all transform hover:scale-105 flex items-center gap-2 shadow-[0_8px_30px_-5px_rgba(0,51,153,0.5)] cursor-pointer"
                            >
                                View Open Positions
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                        </motion.div>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex gap-10 mt-12"
                        >
                            {[{ label: 'Open Roles', value: '4+' }, { label: 'Team Members', value: '50+' }, { label: 'Cities', value: '2' }].map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                                    <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT: Auto-rotating Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-[0_30px_80px_-15px_rgba(59,130,246,0.25)]"
                    >
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImageIndex}
                                src={CAREER_IMAGES[currentImageIndex]}
                                alt="Career at Ladder7"
                                initial={{ opacity: 0, scale: 1.08 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 1.2, ease: 'easeInOut' }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        {/* Image counter dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {CAREER_IMAGES.map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1.5 rounded-full transition-all duration-500 ${i === currentImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Open Positions Section */}
            <section
                id="open-positions"
                className="py-20 bg-[oklch(0.97_0_0)] relative z-10 scroll-mt-24"
            >
                <div className="container mx-auto px-6 max-w-6xl">
                    {/* Heading */}
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Open Positions</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-[#003399] to-indigo-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Split Panel */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

                        {/* LEFT: Job List */}
                        <div className="flex flex-col gap-5 h-full justify-between">
                            {OPEN_POSITIONS.map((job, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setSelectedJob(job)}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className={`text-left w-full px-6 py-5 min-h-[120px] flex flex-col justify-center rounded-2xl border border-gray-100 border-b-[6px] border-b-[#003399] transition-all duration-300 cursor-pointer ${selectedJob.title === job.title
                                        ? 'bg-blue-50 shadow-[0_20px_40px_rgba(0,51,153,0.1)] scale-[1.02]'
                                        : 'bg-white hover:border-gray-200 hover:shadow-lg hover:scale-[1.01]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between w-full mb-4">
                                        <h3 className={`font-bold text-base md:text-lg transition-colors ${selectedJob.title === job.title ? 'text-[#003399]' : 'text-gray-800'}`}>{job.title}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">📍 {job.location}</span>
                                        <span className="flex items-center gap-1">⏱ {job.duration}</span>
                                        <span className="flex items-center gap-1">💼 {job.mode}</span>
                                    </div>
                                </motion.button>
                            ))}
                        </div>

                        {/* RIGHT: Selected Job Detail */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedJob.title}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white border border-gray-100 border-b-[8px] border-b-[#003399] rounded-3xl overflow-hidden h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col"
                            >
                                {/* Image */}
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={selectedJob.image}
                                        alt={selectedJob.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <div className="absolute bottom-6 left-8">
                                        <h3 className="text-white text-3xl font-bold tracking-tight">{selectedJob.title}</h3>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="p-8 flex flex-col flex-1">
                                    {/* Info Grid */}
                                    <div className="grid grid-cols-2 gap-8 mb-8">
                                        {[
                                            { label: 'Location', value: selectedJob.location },
                                            { label: 'Duration', value: selectedJob.duration },
                                            { label: 'Work Mode', value: selectedJob.mode },
                                            { label: 'Qualification', value: selectedJob.qualification },
                                        ].map(({ label, value }) => (
                                            <div key={label}>
                                                <p className="text-[#003399] text-xs font-bold uppercase tracking-widest mb-1">{label}</p>
                                                <p className="text-gray-700 font-medium">{value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <div className="border-t border-gray-100 pt-7 mb-8">
                                        <h4 className="text-gray-900 font-bold mb-3 border-l-4 border-blue-600 pl-4">Position Overview</h4>
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{selectedJob.description}</p>
                                    </div>

                                    {/* Apply Button */}
                                    <button className="mt-auto mx-auto w-fit px-8 py-2.5 text-sm bg-[#003399] hover:bg-[#0044cc] text-white font-semibold rounded-full transition-all transform hover:scale-[1.05] flex items-center justify-center gap-2 cursor-pointer shadow-[0_8px_20px_-5px_rgba(0,51,153,0.5)]">
                                        Apply Now
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
