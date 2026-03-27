import React, { useState, useRef } from "react";
import {
    Lightbulb,
    Heart,
    Globe,
    Star,
    Music,
    Briefcase,
    Code,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
    {
        id: 1,
        name: "Innovation",
        Icon: Lightbulb,
        description:
            "We continuously push boundaries, embracing new ideas and technologies to create breakthrough solutions that shape the future.",
    },
    {
        id: 2,
        name: "Integrity",
        Icon: Heart,
        description:
            "We uphold the highest standards of honesty and transparency, building trust through every action we take.",
    },
    {
        id: 3,
        name: "Collaboration",
        Icon: Globe,
        description:
            "Together we achieve more. We foster an inclusive culture where diverse minds unite to tackle challenges collectively.",
    },
    {
        id: 4,
        name: "Growth",
        Icon: Star,
        description:
            "We nurture a mindset of continuous improvement — helping individuals and organisations unlock their true potential.",
    },
    {
        id: 5,
        name: "Excellence",
        Icon: Music,
        description:
            "We are committed to delivering world-class quality in everything we do, setting the standard others aspire to reach.",
    },
    {
        id: 6,
        name: "Impact",
        Icon: Briefcase,
        description:
            "Every decision we make is guided by the positive difference it creates for people, communities, and the planet.",
    },
    {
        id: 7,
        name: "Learning",
        Icon: Code,
        description:
            "Knowledge is power. We champion lifelong learning, equipping our people with skills that keep them ahead of the curve.",
    },
];

export default function Pillars() {
    const [active, setActive] = useState(null);
    const [hovered, setHovered] = useState(null);
    const containerRef = useRef(null);
    const centerRef = useRef(null);

    const radius = 300; // distance from center in px
    const totalPillars = pillars.length;

    const getPosition = (index) => {
        const angle = (2 * Math.PI * index) / totalPillars - Math.PI / 2;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return { x, y };
    };

    useGSAP(() => {
        // Entrance animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });

        tl.from(centerRef.current, {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)"
        })
            .from(".pillar-node", {
                x: 0,
                y: 0,
                scale: 0,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "elastic.out(1, 0.75)"
            }, "-=0.4")
            .from(".connector-line", {
                strokeDashoffset: 1000,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out"
            }, "-=0.8");

        // Mobile cards reveal
        gsap.from(".mobile-pillar-card", {
            x: -50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".mobile-container",
                start: "top 85%",
            }
        });
    }, { scope: containerRef });

    const handleClick = (id) => {
        setActive((prev) => (prev === id ? null : id));
    };

    const onCenterMove = (e) => {
        const rect = centerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(".branding-content", {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.6,
            ease: "power2.out"
        });
    };

    const onCenterLeave = () => {
        gsap.to(".branding-content", {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
        });
    };

    return (
        <section ref={containerRef} className="relative text-center bg-black text-white px-6 md:px-16 py-32 overflow-hidden">
            {/* Heading */}
            <div className="flex flex-col items-center text-center mb-24 relative z-10">
                <span className="text-blue-500 font-black tracking-widest text-sm uppercase mb-4">Foundation</span>
                <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter">
                    OUR CORE VALUES
                </h2>
            </div>

            <div className="hidden md:flex justify-center items-center min-h-[800px]">
                <div className="relative" style={{ width: 760, height: 760 }}>
                    {/* SVG connectors */}
                    <svg className="absolute inset-0 pointer-events-none" width="760" height="760">
                        {pillars.map((pillar, index) => {
                            const { x, y } = getPosition(index);
                            const isPillarActive = active === pillar.id;
                            const isPillarHovered = hovered === pillar.id;
                            const isHighlighted = hovered ? isPillarHovered : isPillarActive;
                            return (
                                <line
                                    key={pillar.id}
                                    x1="380"
                                    y1="380"
                                    x2={380 + x}
                                    y2={380 + y}
                                    stroke={isHighlighted ? "#3b82f6" : "rgba(59,130,246,0.15)"}
                                    strokeWidth={isHighlighted ? 2 : 1}
                                    strokeDasharray="5 4"
                                    className="connector-line transition-all duration-500"
                                />
                            );
                        })}
                    </svg>

                    {/* Center Branding */}
                    <div
                        ref={centerRef}
                        onMouseMove={onCenterMove}
                        onMouseLeave={onCenterLeave}
                        className="absolute z-10 flex flex-col items-center justify-center rounded-full cursor-default select-none hover:shadow-[0_0_60px_rgba(37,99,235,0.4)] transition-shadow duration-500"
                        style={{
                            width: 240,
                            height: 240,
                            background: "rgba(14, 37, 70, 0.4)",
                            backdropFilter: "blur(20px)",
                            border: "1.5px solid rgba(96, 165, 250, 0.3)",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        {/* Rotating Rings */}
                        <div className="absolute inset-[-15px] rounded-full border border-transparent border-t-blue-400/40 border-r-blue-500/40 animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-[15px] rounded-full border-[1.5px] border-dashed border-blue-400/20 animate-[spin_15s_linear_infinite_reverse]"></div>

                        <div className="branding-content flex flex-col items-center">
                            <span className="font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-600"
                                style={{ fontSize: 130, letterSpacing: "-8px", filter: "drop-shadow(0 0 20px rgba(96, 165, 250, 0.6))" }}>
                                7
                            </span>
                        </div>
                    </div>

                    {/* Pillar Nodes */}
                    {pillars.map((pillar, index) => {
                        const { x, y } = getPosition(index);
                        const isActive = active === pillar.id;
                        const isHovered = hovered === pillar.id;
                        // Single state priority: Hover takes precedence, then Active
                        const isVisible = hovered ? isHovered : isActive;
                        const angle = (2 * Math.PI * index) / totalPillars - Math.PI / 2;
                        const tooltipOffsetX = Math.cos(angle) * 180;
                        const tooltipOffsetY = Math.sin(angle) * 180;

                        return (
                            <div
                                key={pillar.id}
                                className="pillar-node absolute z-20"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                }}
                            >
                                {/* Tooltip */}
                                {isVisible && (
                                    <div
                                        className="absolute z-30 w-56 rounded-2xl p-5 text-left pointer-events-none"
                                        style={{
                                            background: "rgba(10, 25, 47, 0.96)",
                                            backdropFilter: "blur(12px)",
                                            border: "1px solid rgba(59, 130, 246, 0.5)",
                                            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6)",
                                            top: "50%",
                                            left: "50%",
                                            // Pass offsets as CSS variables for the animation
                                            "--tx": `${tooltipOffsetX}px`,
                                            "--ty": `${tooltipOffsetY}px`,
                                            transform: `translate(calc(-50% + ${tooltipOffsetX}px), calc(-50% + ${tooltipOffsetY}px))`,
                                            animation: "pillarFadeIn 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards",
                                        }}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-blue-500/20 rounded-lg">
                                                <pillar.Icon size={18} className="text-blue-400" />
                                            </div>
                                            <span className="text-white font-black text-sm uppercase tracking-wider">{pillar.name}</span>
                                        </div>
                                        <p className="text-gray-300 text-xs leading-relaxed font-light">
                                            {pillar.description}
                                        </p>
                                    </div>
                                )}

                                <button
                                    onClick={() => handleClick(pillar.id)}
                                    onMouseEnter={() => setHovered(pillar.id)}
                                    onMouseLeave={() => setHovered(null)}
                                    className={`group flex flex-col items-center justify-center rounded-full transition-all duration-500 
                                              ${isVisible ? 'scale-110' : 'hover:scale-105'}`}
                                    style={{
                                        width: 154,
                                        height: 154,
                                        background: isVisible ? "rgba(37, 99, 235, 0.25)" : "rgba(255, 255, 255, 0.03)",
                                        border: isVisible ? "2px solid rgba(59, 130, 246, 0.8)" : "1.5px solid rgba(255, 255, 255, 0.08)",
                                        boxShadow: isVisible ? "0 0 30px rgba(59, 130, 246, 0.4)" : "none",
                                        backdropFilter: "blur(12px)",
                                    }}
                                >
                                    <pillar.Icon size={40} className={`mb-3 transition-colors duration-500 ${isVisible ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} strokeWidth={1.2} />
                                    <span className={`font-black text-xs uppercase tracking-widest ${isVisible ? 'text-blue-300' : 'text-gray-500 group-hover:text-blue-300'}`}>
                                        {pillar.name}
                                    </span>
                                    <span className="absolute -bottom-2 text-[10px] font-black text-blue-500/40 tracking-tighter">
                                        0{pillar.id}
                                    </span>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Mobile View */}
            <div className="mobile-container flex md:hidden flex-col gap-8 mt-12 max-w-md mx-auto relative px-4">
                <div className="flex justify-center mb-12">
                    <div className="relative flex flex-col items-center justify-center rounded-full w-40 h-40 bg-[#0e2546]/60 backdrop-blur-xl border border-blue-500/30">
                        <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-500">7</span>
                    </div>
                </div>

                {pillars.map((pillar) => (
                    <div
                        key={pillar.id}
                        className="mobile-pillar-card bg-[#0e2546]/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 text-left flex gap-6 items-center hover:border-blue-500/30 transition-all"
                    >
                        <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-400/20">
                            <pillar.Icon size={32} className="text-blue-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-black text-xl uppercase tracking-tight mb-2">{pillar.name}</h4>
                            <p className="text-sm text-center">{pillar.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes pillarFadeIn {
                    from { 
                        opacity: 0; 
                        transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0.85); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1); 
                    }
                }
            `}</style>
        </section>
    );
}