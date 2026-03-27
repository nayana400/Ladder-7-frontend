import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Environment, Sparkles } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// --- 3D Geometric Stellar Core (Mind Gym Edition) ---
const StellarCore = () => {
    const coreRef = useRef();
    const wireframeRef = useRef();

    useGSAP(() => {
        // Core breathing and rotation
        gsap.to(coreRef.current.scale, {
            x: 1.15, y: 1.15, z: 1.15,
            duration: 2, yoyo: true, repeat: -1, ease: "sine.inOut"
        });
        gsap.to(coreRef.current.rotation, {
            y: Math.PI * 2, duration: 25, repeat: -1, ease: "none"
        });

        // Wireframe counter-rotation on multiple axes
        gsap.to(wireframeRef.current.rotation, {
            x: Math.PI * 2, y: -Math.PI * 2, duration: 30, repeat: -1, ease: "none"
        });
    }, []);

    return (
        <Float speed={2} floatIntensity={1.5} rotationIntensity={1}>
            {/* Inner Solid Dodecahedron - Cyan theme */}
            <mesh ref={coreRef}>
                <dodecahedronGeometry args={[0.8, 0]} />
                <meshStandardMaterial 
                    color="#06b6d4" 
                    emissive="#0891b2" 
                    emissiveIntensity={0.8}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>

            {/* Outer Wireframe Dodecahedron Shield */}
            <mesh ref={wireframeRef}>
                <dodecahedronGeometry args={[1.5, 0]} />
                <meshStandardMaterial 
                    color="#22d3ee" 
                    emissive="#06b6d4" 
                    emissiveIntensity={0.6}
                    wireframe={true}
                />
            </mesh>

            {/* Energy Particle Field */}
            <Sparkles count={60} scale={6} size={2.5} speed={0.6} opacity={0.6} color="#22d3ee" />
            
            {/* Lighting */}
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" />
            <pointLight position={[0, 0, 0]} intensity={3} color="#06b6d4" distance={6} />
        </Float>
    );
};


// --- Framer Motion Layout Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.1
        }
    }
};

const titleVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const iconVariants = {
    hidden: { opacity: 0, scale: 0.2, rotate: -15 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 60, damping: 15, duration: 1 } }
};

const cardLeftVariants = {
    hidden: { opacity: 0, x: -40, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const cardRightVariants = {
    hidden: { opacity: 0, x: 40, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const cardBottomVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};


// --- Main Component ---
export default function EmpoweringGrowth() {
    return (
        <section className="bg-gradient-to-b from-[#020617] via-[#050812] to-[#020617] text-white py-24 px-6 md:px-10 lg:px-20 font-sans tracking-wide overflow-hidden">
            <motion.div
                className="max-w-[1400px] mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >

                {/* Main Heading */}
                <motion.h2
                    variants={titleVariants}
                    className="text-[2.2rem] md:text-[2.75rem] font-extrabold mb-16 tracking-tight text-white"
                >
                    Empowering Growth
                </motion.h2>

                {/* Main Layout Container */}
                <div className="flex flex-col items-center gap-14 lg:gap-20 w-full mt-10">

                    {/* Top Row: Left Card - 3D Canvas - Right Card */}
                    <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-12 lg:gap-16">

                        {/* Left Card */}
                        <motion.div
                            variants={cardLeftVariants}
                            className="relative bg-[#0F1426] border border-[#1E293B] rounded-[1.8rem] p-10 md:p-12 w-full max-w-[420px] shadow-2xl text-center flex-shrink-0 transition-all hover:border-cyan-500/30 z-10"
                        >
                            <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 w-7 h-7 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.9)] ring-[6px] ring-[#020617]"></div>

                            <h3 className="text-xl font-bold text-white mb-5 leading-[1.4] px-4">
                                Enhance your well-being<br className="hidden md:block" /> and growth
                            </h3>
                            <p className="text-[#8492A6] text-[0.9rem] leading-[1.8] font-light">
                                With tailored programs, high-quality training, and AI-enabled solutions aligned with UNEP's frameworks and steps, focusing on innovation and inclusivity.
                            </p>
                        </motion.div>

                        {/* Center Animated 3D Model Canvas */}
                        <motion.div
                            variants={iconVariants}
                            className="flex-shrink-0 flex items-center justify-center mx-4 py-8 xl:py-0 w-full max-w-[280px] h-[300px] relative z-20"
                        >
                            <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
                                <StellarCore />
                                <Environment preset="city" />
                            </Canvas>
                        </motion.div>

                        {/* Right Card */}
                        <motion.div
                            variants={cardRightVariants}
                            className="relative bg-[#0F1426] border border-[#1E293B] rounded-[1.8rem] p-10 md:p-12 w-full max-w-[420px] shadow-2xl text-center flex-shrink-0 transition-all hover:border-cyan-500/30 z-10"
                        >
                            <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 w-7 h-7 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.9)] ring-[6px] ring-[#020617]"></div>

                            <h3 className="text-xl font-bold text-white mb-5 leading-[1.4] px-4">
                                Wellbeing through Personal<br className="hidden md:block" /> Growth
                            </h3>
                            <p className="text-[#8492A6] text-[0.9rem] leading-[1.8] font-light">
                                Emphasizes self-awareness, fostering personal growth and academic success. Understanding their strengths and weaknesses helps students achieve a balanced and fulfilling life.
                            </p>
                        </motion.div>

                    </div>

                    {/* Bottom Row: Centered Card */}
                    <motion.div
                        variants={cardBottomVariants}
                        className="relative bg-[#0F1426] border border-[#1E293B] rounded-[1.8rem] p-10 md:p-12 w-full max-w-[420px] shadow-2xl text-center transition-all hover:border-cyan-500/30 z-10"
                    >
                        <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 w-7 h-7 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.9)] ring-[6px] ring-[#020617]"></div>

                        <h3 className="text-xl font-bold text-white mb-5 leading-[1.4] px-4">
                            Upskilling for a Balanced<br className="hidden md:block" /> Life
                        </h3>
                        <p className="text-[#8492A6] text-[0.9rem] leading-[1.8] font-light">
                            Ladder provides comprehensive skill development across various fields. This holistic approach ensures students are well-prepared for their careers, contributing to overall success.
                        </p>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
}
