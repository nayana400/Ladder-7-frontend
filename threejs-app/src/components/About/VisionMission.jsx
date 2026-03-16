import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebGLPixelEffect from "./WebGLPixelEffect";

gsap.registerPlugin(ScrollTrigger);

// Component to handle smooth slide up reveal on scroll for images or block elements
const FadeUpReveal = ({ children, delay = 0, className = "" }) => {
    const ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(ref.current,
            { y: 80, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, [delay]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

// Component to smoothly slide words up from an invisible boundary, mirroring Janis Sne site
const WordRevealText = ({ children, className = "" }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const words = textRef.current.querySelectorAll('.word-inner');
        gsap.fromTo(words, 
            { y: "120%", opacity: 0 },
            {
                y: "0%",
                opacity: 1,
                duration: 1,
                stagger: 0.015,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    // Split text by space but preserve it for mapping
    const wordsArray = typeof children === 'string' ? children.split(" ") : [];

    return (
        <p ref={textRef} className={className}>
            {wordsArray.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom pb-1 mr-1.5">
                    <span className="inline-block word-inner origin-bottom">
                        {word}
                    </span>
                </span>
            ))}
        </p>
    );
};

const VisionMission = () => {
    const visionTextPart1 = "Ladder7, the premier skill development and training division of Neyndra Global Solutions Private Limited, is dedicated to empowering individuals in their journey towards personal as well as professional growth. Our training programs focus on fundamental, transferable, aspirational, and job-specific skills to help individuals thrive in today’s competitive job market.";
    const visionTextPart2 = "By enhancing core competencies and well-being, we provide learners with the tools they need to succeed in their chosen fields, fostering a lifelong commitment to skill improvement and career advancement.";
    
    const missionTextPart1 = "Our outcome-oriented educational approach emphasizes identifying and developing each learner’s core strengths, setting them up for success in their desired career paths.";
    const missionTextPart2 = "Through targeted skill-building, we help individuals achieve their goals and fulfill their aspirations. Ladder7 is committed to bridging the gap between learning and career readiness, positioning individuals for long-term success in roles that align with their personal ambitions and professional potential.";

    return (
        <section className="relative bg-black text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
            <div className="relative z-10">
                
                {/* VISION */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    {/* Text */}
                    <div>
                        <FadeUpReveal>
                            <h2 className="text-4xl font-bold mt-10 mb-4">
                                Our VISION
                            </h2>
                        </FadeUpReveal>

                        <WordRevealText className="mt-4 text-lg text-justify leading-relaxed">
                            {visionTextPart1}
                        </WordRevealText>
                        
                        <div className="h-4"></div>

                        <WordRevealText className="text-lg text-justify leading-relaxed">
                            {visionTextPart2}
                        </WordRevealText>
                    </div>

                    {/* Images */}
                    <FadeUpReveal className="relative group overflow-hidden rounded-2xl shadow-2xl h-96 w-full" delay={0.2}>
                        <WebGLPixelEffect imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" />
                    </FadeUpReveal>
                </div>

                {/* MISSION */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Images */}
                    <FadeUpReveal className="order-2 md:order-1 relative group overflow-hidden rounded-2xl shadow-2xl h-96 w-full" delay={0.2}>
                        <WebGLPixelEffect imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" />
                    </FadeUpReveal>

                    {/* Text */}
                    <div className="order-1 md:order-2">
                        <FadeUpReveal>
                            <h2 className="text-4xl font-bold mt-10 mb-4">
                                Our MISSION
                            </h2>
                        </FadeUpReveal>

                        <WordRevealText className="mt-4 text-lg text-justify leading-relaxed">
                            {missionTextPart1}
                        </WordRevealText>

                        <div className="h-4"></div>

                        <WordRevealText className="text-lg text-justify leading-relaxed">
                            {missionTextPart2}
                        </WordRevealText>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VisionMission;
