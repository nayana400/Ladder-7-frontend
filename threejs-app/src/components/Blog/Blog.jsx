import React from "react";
import { motion } from "framer-motion";
import BorealSky from "./BorealSky";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import TechnicalSection from "./TechnicalSection";
import EventsSection from "./EventsSection";
import { technicalBlogs, events } from "./blogData";

export default function BlogPage() {
    return (
        <div className="bg-transparent min-h-screen">
            <Navbar />
            <section className="relative min-h-screen pt-32 pb-40 px-6 lg:px-20 overflow-hidden">
                {/* 3D Scene */}
                <BorealSky />

                <div className="relative z-10 max-w-[1400px] mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <motion.h2
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                className="text-8xl md:text-[10rem] font-black italic text-stroke absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-10 select-none z-0"
                            >
                                INNOVATION HUB
                            </motion.h2>

                            <div className="relative z-10">
                                <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-sm mb-4 block animate-fadeIn">Research & Development</span>
                                <h2 className="text-5xl md:text-5xl font-black text-white neon-text-glow mb-8 tracking-tighter">
                                    OUR BLOGS
                                </h2>
                                <div className="h-1.5 w-40 bg-blue-600 mx-auto rounded-full shadow-[0_0_20px_#2563eb]" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-20">
                        {/* LEFT COLUMN: Deep Insights */}
                        <TechnicalSection technicalBlogs={technicalBlogs} showViewAll={true} />

                        {/* RIGHT COLUMN: Events */}
                        <EventsSection events={events} showViewAll={true} />
                    </div>
                </div>

                {/* Floating Tech Elements */}
                <div className="absolute top-1/4 left-10 w-24 h-24 border border-white/5 rounded-full animate-float opacity-20 pointer-events-none" />
                <div className="absolute bottom-1/4 right-10 w-40 h-40 border border-white/5 rounded-[3rem] animate-float opacity-10 pointer-events-none [animation-delay:2s] rotate-45" />
            </section>
            <Footer />
        </div>
    );
}