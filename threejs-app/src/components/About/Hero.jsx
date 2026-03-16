import React, { useRef } from "react";
import TubesCursorBackground from "./HeroBackground";
import WebGLPixelEffect from "./WebGLPixelEffect";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
    const containerRef = useRef();
    const aboutRef = useRef();
    const usRef = useRef();

    useGSAP(() => {
        // Exaggerated movement from much further left/right
        gsap.from(aboutRef.current, {
            x: -300,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
        });

        gsap.from(usRef.current, {
            x: 300,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.15,
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative grid lg:grid-cols-2 gap-16 items-start px-6 md:px-16 pt-8 overflow-hidden">
            <TubesCursorBackground />

            {/* Image */}
            <div className="relative z-10 max-w-md lg:max-w-lg lg:ml-0 mx-auto lg:sticky lg:top-32 w-full h-[500px] overflow-hidden rounded-2xl shadow-xl border border-white/10 bg-black/20">
                <WebGLPixelEffect imageUrl="/About/AboutUs.png" />
            </div>

            {/* Content */}
            <div className="relative z-10 lg:pl-10">

                <div className="mb-14 text-left text-white overflow-hidden">
                    <h1 className="flex flex-col gap-2 uppercase tracking-tighter leading-none select-none">
                        <div className="overflow-hidden">
                            <span ref={aboutRef} className="block text-4xl md:text-4xl font-light opacity-80">About</span>
                        </div>
                        <div className="overflow-hidden">
                            <span ref={usRef} className="flex items-center gap-1 text-4xl md:text-4xl font-black">
                                <span>Us</span>
                            </span>
                        </div>
                    </h1>
                </div>

                <div className="space-y-8 text-left">
                    <p className="text-base md:text-lg mb-8 text-justify">
                        Ladder7, the premier skill development and training division of Neyndra Global Solutions Private Limited, is dedicated to empowering individuals in their journey towards personal as well as professional growth. Our training programs focuses on fundamental, transferable, aspirational, and job-specific skills to help the individuals to thrive in today's competitive job market. By enhancing core competencies and well-being, we provide learners with the tools that they need to succeed in their chosen fields, fostering a lifelong commitment to skill improvement and career advancement.
                    </p>

                    <p className="text-base md:text-lg mb-8 text-justify">
                        Our outcome-oriented educational approach emphasizes on identifying and developing each learner’s core strengths, setting them up for success in their desired career paths. Through targeted skill-building, we help individuals to achieve their goals and fulfill their aspirations. Ladder7 is committed to bridging up the gap between learning and career readiness, positioning individuals for long-term success in their roles that align with their personal ambitions and professional potential.
                    </p>
                </div>

            </div>
        </section>
    );
}