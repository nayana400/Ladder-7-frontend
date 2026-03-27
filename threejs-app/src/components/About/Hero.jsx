import React, { useRef } from "react";
import HeroBackground from "./HeroBackground";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

export default function Hero() {
    const containerRef = useRef();
    const headingRef = useRef();
    const textRef = useRef();
    const imageRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Content reveal
        tl.from(imageRef.current, {
            x: -100,
            opacity: 0,
            scale: 0.9,
            duration: 2,
        })
            .from(headingRef.current, {
                y: 80,
                opacity: 0,
                duration: 1.5,
                skewY: 5,
            }, "-=1.5")
            .from(textRef.current.children, {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
            }, "-=1.2");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden flex items-start pt-16 md:pt-24">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <HeroBackground />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-20 grid lg:grid-cols-2 gap-20 items-start">

                {/* Image Area */}
                <div ref={imageRef} className="relative group">
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl -skew-y-1 group-hover:skew-y-0 transition-transform duration-700 ease-out">
                        <img
                            src="/About/AboutUs.png"
                            alt="Ladder7 About Us"
                            className="w-full h-auto scale-105 group-hover:scale-100 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none"></div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -left-6 w-1/2 h-1/2 border border-blue-500/20 rounded-3xl -z-10 blur-sm"></div>
                    <div className="absolute -bottom-8 -right-8 w-1/2 h-1/2 bg-blue-500/5 rounded-[2.5rem] -z-10 blur-md"></div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col">
                    <div className="mb-10 overflow-hidden">
                        <h1 ref={headingRef} className="text-3xl md:text-5xl font-bold mb-4">
                            About Us
                        </h1>
                    </div>

                    <div ref={textRef} className="space-y-8 text-justify">
                        <p className="text-base md:text-lg mb-8 text-justify">
                            Ladder7, the premier skill development and training division of Neyndra Global Solutions Private Limited, is dedicated to empowering individuals in their journey towards personal as well as professional growth. Our training programs focuses on fundamental, transferable, aspirational, and job-specific skills to help the individuals to thrive in today's competitive job market. By enhancing core competencies and well-being, we provide learners with the tools that they need to succeed in their chosen fields, fostering a lifelong commitment to skill improvement and career advancement.
                        </p>

                        <p className="text-base md:text-lg text-justify">
                            Our outcome-oriented educational approach emphasizes on identifying and developing each learner’s core strengths, setting them up for success in their desired career paths. Through targeted skill-building, we help individuals to achieve their goals and fulfill their aspirations. Ladder7 is committed to bridging up the gap between learning and career readiness, positioning individuals for long-term success in their roles that align with their personal ambitions and professional potential.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
