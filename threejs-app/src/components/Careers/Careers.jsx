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

const JobAccordion = ({ job }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.3)]"
        >
            <div className="flex flex-col md:flex-row">
                {/* Image Header (Left on Desktop) */}
                <div className="md:w-[40%] h-72 md:h-auto overflow-hidden relative min-h-[220px]">
                    <img
                        src={job.image}
                        alt={job.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent" />
                </div>

                {/* Content Section (Right on Desktop) */}
                <div className="md:w-[60%] p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 transition-colors">
                        {job.title}
                    </h3>

                    {/* Info List - Horizontal */}
                    <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8">
                        <div className="flex flex-col">
                            <span className="text-[#3b82f6] font-semibold text-xs uppercase tracking-wider mb-1">Location</span>
                            <span className="text-gray-200 text-sm">{job.location}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#3b82f6] font-semibold text-xs uppercase tracking-wider mb-1">Duration</span>
                            <span className="text-gray-200 text-sm">{job.duration}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#3b82f6] font-semibold text-xs uppercase tracking-wider mb-1">Work Mode</span>
                            <span className="text-gray-200 text-sm">{job.mode}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#3b82f6] font-semibold text-xs uppercase tracking-wider mb-1">Qualification</span>
                            <span className="text-gray-200 text-sm">{job.qualification}</span>
                        </div>
                    </div>

                    {/* Primary Apply Button */}
                    <div className="flex flex-wrap items-center gap-6 mt-4">
                        <button className="px-6 py-2 text-sm bg-[#003399] hover:bg-[#0044cc] text-white font-semibold rounded-full transition-all transform hover:scale-105 flex items-center gap-2 group cursor-pointer shadow-[0_8px_20px_-5px_rgba(0,51,153,0.5)]">
                            Apply Now
                            <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="px-4 py-2 text-sm border border-white/20 hover:border-orange-500 text-white font-semibold rounded-full transition-all flex items-center gap-1.5 bg-white/5"
                        >
                            {isOpen ? "Hide Details" : "Read More"}
                            <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                                <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                </svg>
                            </motion.span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Expanded Description Area (Below the card split) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-black/20 border-t border-white/10"
                    >
                        <div className="p-8 md:p-12">
                            <h4 className="text-white font-bold text-xl mb-4 border-l-4 border-orange-500 pl-4">Job Description</h4>
                            <p className="text-gray-300 text-lg leading-relaxed font-light">
                                {job.description}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Careers = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % CAREER_IMAGES.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#000000] min-h-screen">
            {/* Image Slider Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] overflow-hidden group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <div
                            className="w-full h-full bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${CAREER_IMAGES[currentImageIndex]})` }}
                        >
                            {/* Overlay gradient for better readability */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Hero Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center px-6">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-4xl md:text-7xl font-extrabold text-white mb-6 uppercase tracking-wider"
                        >
                            Join Our Mission
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto"
                        />
                    </div>
                </div>

                {/* Slider Indicators */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {CAREER_IMAGES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white w-8' : 'bg-white/30'
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* Open Positions Section */}
            <section
                id="open-positions"
                className="py-24 bg-[#000000] relative z-10 scroll-mt-24"
            >
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="mb-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Open Positions</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>

                    </div>

                    <div className="grid grid-cols-1 gap-12">
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
