import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroSectionBackground from "./HeroSectionBackground";

// ─── Main HeroSection Component ───
export default function HeroSection() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            className="relative w-full overflow-hidden flex items-center"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #050505 0%, #0a0a0a 30%, #080812 60%, #050510 100%)",
            }}
        >
            {/* ── 3D Canvas Background ── */}
            <HeroSectionBackground />

            {/* ── Ambient Glow Effects ── */}
            <div
                className="pointer-events-none absolute z-[1]"
                style={{
                    top: "20%",
                    right: "15%",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,229,204,0.06) 0%, transparent 70%)",
                }}
            />
            <div
                className="pointer-events-none absolute z-[1]"
                style={{
                    bottom: "10%",
                    left: "30%",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,150,136,0.04) 0%, transparent 70%)",
                }}
            />

            {/* ── Main Content ── */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">

                {/* Left: Text Content */}
                <div className="max-w-[550px]">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        style={{
                            fontFamily: "'Playfair Display', 'Georgia', serif",
                            fontSize: "clamp(56px, 8vw, 96px)",
                            fontWeight: 900,
                            lineHeight: 1.0,
                            color: "#ffffff",
                            letterSpacing: "-0.02em",
                            marginBottom: "28px",
                        }}
                    >
                        Mind Gym
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                        style={{
                            fontSize: "15px",
                            lineHeight: 1.75,
                            color: "rgba(255, 255, 255, 0.6)",
                            maxWidth: "440px",
                            marginBottom: "36px",
                            fontFamily: "'Inter', sans-serif",
                        }}
                    >
                        An interactive program designed to enhance mental well-being
                        through targeted exercises. It focuses on stress management and
                        decision-making skills, providing tools and techniques to help
                        individuals maintain a healthy mind.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
                    >
                        <button
                            className="cursor-pointer group relative overflow-hidden"
                            style={{
                                padding: "14px 36px",
                                borderRadius: "50px",
                                border: "none",
                                background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
                                color: "#ffffff",
                                fontSize: "13px",
                                fontWeight: 700,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 25px rgba(124, 58, 237, 0.3), 0 0 40px rgba(6, 182, 212, 0.15)",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = "translateY(-2px)";
                                e.target.style.boxShadow = "0 8px 35px rgba(124, 58, 237, 0.5), 0 0 60px rgba(6, 182, 212, 0.25)";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = "translateY(0)";
                                e.target.style.boxShadow = "0 4px 25px rgba(124, 58, 237, 0.3), 0 0 40px rgba(6, 182, 212, 0.15)";
                            }}
                        >
                            GET STARTED
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* ── Bottom Gradient Fade ── */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32 z-[5] pointer-events-none"
                style={{
                    background: "linear-gradient(to top, #050505, transparent)",
                }}
            />
        </section>
    );
}
