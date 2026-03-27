import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const VisionMission = () => {
    const containerRef = useRef(null);
    const visionRef = useRef(null);
    const missionRef = useRef(null);

    const visionTextPart1 = "Ladder7, the premier skill development and training division of Neyndra Global Solutions Private Limited, is dedicated to empowering individuals in their journey towards personal as well as professional growth. Our training programs focuses on fundamental, transferable, aspirational, and job-specific skills to help the individuals to thrive in today's competitive job market. By enhancing core competencies and well-being, we provide learners with the tools that they need to succeed in their chosen fields, fostering a lifelong commitment to skill improvement and career advancement.";


    const missionTextPart1 = "Our outcome-oriented educational approach emphasizes on identifying and developing each learner’s core strengths, setting them up for success in their desired career paths. Through targeted skill-building, we help individuals to achieve their goals and fulfill their aspirations. Ladder7 is committed to bridging up the gap between learning and career readiness, positioning individuals for long-term success in their roles that align with their personal ambitions and professional potential.";


    useGSAP(() => {
        // Master perspective for the section
        gsap.set(containerRef.current, { perspective: 2000 });

        // Vision Section Reveal
        const visionTl = gsap.timeline({
            scrollTrigger: {
                trigger: visionRef.current,
                start: "top 85%",
                end: "bottom 70%",
                scrub: 1,
            }
        });

        visionTl.from(visionRef.current.querySelector('.vision-content'), {
            x: -150,
            rotateY: -35,
            z: -200,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out"
        }).from(visionRef.current.querySelector('.vision-image'), {
            x: 150,
            rotateY: 35,
            z: -200,
            opacity: 0,
            scale: 0.8,
            duration: 1.5,
            ease: "power2.out"
        }, "<");

        // Mission Section Reveal
        const missionTl = gsap.timeline({
            scrollTrigger: {
                trigger: missionRef.current,
                start: "top 85%",
                end: "bottom 70%",
                scrub: 1,
            }
        });

        missionTl.from(missionRef.current.querySelector('.mission-content'), {
            x: 150,
            rotateY: 35,
            z: -200,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out"
        }).from(missionRef.current.querySelector('.mission-image'), {
            x: -150,
            rotateY: -35,
            z: -200,
            opacity: 0,
            scale: 0.8,
            duration: 1.5,
            ease: "power2.out"
        }, "<");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative bg-black text-white py-40 px-6 md:px-16 lg:px-24 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto">

                {/* VISION */}
                <div ref={visionRef} className="grid md:grid-cols-2 gap-20 items-center mb-60">
                    <div className="vision-content flex flex-col gap-8" style={{ transformStyle: "preserve-3d" }}>
                        <div className="space-y-2">
                            <span className="text-blue-500 font-black tracking-widest text-sm uppercase">Our Perspective</span>
                            <h2 className="text-7xl md:text-8xl font-black tracking-tighter leading-none italic">
                                VISION
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <p className="mt-4 text-lg text-justify">
                                {visionTextPart1}
                            </p>

                        </div>
                    </div>

                    <div className="vision-image relative aspect-square md:aspect-auto md:h-[400px] max-w-md w-full ml-auto" style={{ transformStyle: "preserve-3d" }}>
                        <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/5 bg-gray-900 group">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                                alt="Vision"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none" />
                        </div>
                        {/* 3D Floating Frames */}
                        <div className="absolute -top-6 -right-6 w-3/4 h-3/4 border border-blue-500/20 rounded-3xl -z-10 translate-z-[-50px]" />
                        <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 bg-blue-500/5 rounded-3xl -z-10 translate-z-[-20px]" />
                    </div>
                </div>

                {/* MISSION */}
                <div ref={missionRef} className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="mission-image order-2 md:order-1 relative aspect-square md:aspect-auto md:h-[400px] max-w-md w-full mr-auto" style={{ transformStyle: "preserve-3d" }}>
                        <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/5 bg-gray-900 group">
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
                                alt="Mission"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/20 to-transparent pointer-events-none" />
                        </div>
                        {/* 3D Floating Frames */}
                        <div className="absolute -top-6 -left-6 w-3/4 h-3/4 border border-purple-500/20 rounded-3xl -z-10 translate-z-[-50px]" />
                        <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-purple-500/5 rounded-3xl -z-10 translate-z-[-20px]" />
                    </div>

                    <div className="mission-content order-1 md:order-2 flex flex-col gap-8" style={{ transformStyle: "preserve-3d" }}>
                        <div className="space-y-2">
                            <span className="text-blue-500 font-black tracking-widest text-sm uppercase">Our Purpose</span>
                            <h2 className="text-7xl md:text-8xl font-black tracking-tighter leading-none italic">
                                MISSION
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <p className="mt-4 text-lg text-justify">
                                {missionTextPart1}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VisionMission;
