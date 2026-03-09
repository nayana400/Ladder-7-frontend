import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import CareersScene from './CareersScene';
const OPEN_POSITIONS = [
    { title: "Junior Mobile App Developer", category: "Engineering" },
    { title: "Junior Web Developer", category: "Engineering" },
    { title: "Digital Marketing Associate", category: "Marketing" },
    { title: "Junior Data Analyst", category: "Data Science" },
    { title: "Salesforce Developer", category: "Engineering" },
    { title: "Junior Data Scientist", category: "Data Science" },
    { title: "Junior CyberSecurity Analyst", category: "Security" },
    { title: "Adobe Experience Manager Author", category: "Content" },
    { title: "Junior HR Talent Manager", category: "HR" },
    { title: "UI UX Architect", category: "Design" },
];
const Careers = () => {
    const rolesSectionRef = useRef(null);
    const scrollToRoles = (e) => {
        e.preventDefault();
        rolesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="bg-[#1a365d]">
            {/* Hero Section */}
            <section className="relative min-h-screen overflow-hidden flex items-center pt-20">
                <CareersScene />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            EXPLORE YOUR PASSION, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                                CREATE LASTING CHANGE
                            </span>
                        </h2>
                        <p className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-2xl">
                            Transform your career while transforming lives.
                        </p>
                        <div className="mt-12 flex flex-wrap gap-6">
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
                </div>
            </section>
            {/* Open Positions Section */}
            <section
                ref={rolesSectionRef}
                id="open-positions"
                className="py-32 bg-[#112240] relative z-10 border-t border-white/5"
            >
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Open Positions</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        <p className="text-gray-400 mt-6 text-lg max-w-2xl">
                            Join our team and help us build the future of well-being-focused careers.
                            We're looking for passionate individuals who want to make a difference.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {OPEN_POSITIONS.map((role, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-[#1a365d]/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] flex flex-col justify-between"
                            >
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 block">
                                        {role.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                                        {role.title}
                                    </h3>
                                </div>
                                <button className="self-start text-sm font-semibold text-gray-400 hover:text-white transition flex items-center gap-2">
                                    Apply Now
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Careers;