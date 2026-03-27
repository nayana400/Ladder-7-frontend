import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import TechnicalSection from "./TechnicalSection";
import EventsSection from "./EventsSection";
import { technicalBlogs, events } from "./blogData";

const Blog = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const cursorRef = useRef(null);

    // Mouse movement effect for the premium glow
    const handleMouseMove = (e) => {
        if (!cursorRef.current) return;
        const x = e.clientX;
        const y = e.clientY;
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseLeave = () => {
        if (!cursorRef.current) return;
        cursorRef.current.style.opacity = "0";
    };

    const handleMouseEnter = () => {
        if (!cursorRef.current) return;
        cursorRef.current.style.opacity = "1";
    };

    return (
        <div className="bg-[#000000] min-h-screen text-white overflow-x-hidden selection:bg-blue-500/30">
            <Navbar />
            
            {/* Ambient Background Grid */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Custom Premium Cursor Glow */}
            <div 
                ref={cursorRef}
                className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-10 transition-opacity duration-500 opacity-0 -translate-x-1/2 -translate-y-1/2"
            />

            {/* HERO & TECHNICAL SECTION */}
            <section
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative min-h-screen flex flex-col items-center justify-start pb-40"
            >
                <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-20 pt-40">
                    {/* Interactive Section Header */}
                    <motion.div
                        ref={heroRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-32 relative"
                    >
                        <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1] uppercase">
                                Our Blog
                            </h1>
                            
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="max-w-md text-right lg:mb-4"
                            >
                                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                                    Exploring the frontiers of technology, digital transformation, and sustainable innovation.
                                </p>
                                <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full max-w-sm mt-8 opacity-30 ml-auto" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* TOP SECTION: Deep Insights */}
                    <div className="w-full relative z-20">
                        <TechnicalSection technicalBlogs={technicalBlogs} showViewAll={true} />
                    </div>
                </div>
            </section>

            {/* EVENTS SECTION: Placed outside main section to ensure perfect sticky behavior */}
            <div className="w-full relative z-30">
                <EventsSection events={events} showViewAll={true} />
            </div>

            <Footer />
        </div>
    );
};

export default Blog;