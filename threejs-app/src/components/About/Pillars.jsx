import React, { useState } from "react";
import {
    Lightbulb,
    Heart,
    Globe,
    Star,
    Music,
    Briefcase,
    Code,
} from "lucide-react";

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

    const radius = 300; // distance from center in px
    const totalPillars = pillars.length;

    const getPosition = (index) => {
        // Start from top (-90 deg) and distribute evenly
        const angle = (2 * Math.PI * index) / totalPillars - Math.PI / 2;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return { x, y };
    };

    const handleClick = (id) => {
        setActive((prev) => (prev === id ? null : id));
    };

    return (
        <section className="relative text-center bg-black text-white px-6 md:px-16 py-20">
            {/* Label */}

            {/* Heading */}
            <div className="flex flex-col items-center text-center mb-16">

                <h2 className="text-3xl md:text-4xl font-bold my-8 text-center text-white mb-24">
                    Our Core Values
                </h2>

            </div>


            <div className="hidden md:flex justify-center items-center">
                <div
                    className="relative origin-center transform scale-[0.75] xl:scale-100 -my-24 xl:my-0 transition-transform duration-500"
                    style={{ width: 760, height: 760 }}
                >
                    {/* SVG connectors */}
                    <svg
                        className="absolute inset-0 pointer-events-none"
                        width="760"
                        height="760"
                    >
                        {pillars.map((pillar, index) => {
                            const { x, y } = getPosition(index);
                            return (
                                <line
                                    key={pillar.id}
                                    x1="380"
                                    y1="380"
                                    x2={380 + x}
                                    y2={380 + y}
                                    stroke={active === pillar.id ? "#3b82f6" : "rgba(59,130,246,0.18)"}
                                    strokeWidth={active === pillar.id ? 2 : 1}
                                    strokeDasharray="5 4"
                                    className="transition-all duration-300"
                                />
                            );
                        })}
                    </svg>

                    {/* Center — Large "7" */}
                    <div
                        className="absolute z-10 flex flex-col items-center justify-center rounded-full cursor-default select-none"
                        style={{
                            width: 210,
                            height: 210,
                            background: "rgba(14, 37, 70, 0.6)",
                            backdropFilter: "blur(16px)",
                            boxShadow:
                                "inset 0 0 60px rgba(37, 99, 235, 0.3), 0 0 40px rgba(37, 99, 235, 0.3)",
                            border: "1px solid rgba(96, 165, 250, 0.4)",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        {/* Outer rotating ring */}
                        <div className="absolute inset-[-12px] rounded-full border border-transparent border-t-blue-400 border-r-blue-500 opacity-60 animate-[spin_8s_linear_infinite]"></div>

                        {/* Inner rotating dashed ring */}
                        <div className="absolute inset-[10px] rounded-full border-[1.5px] border-dashed border-blue-400/30 animate-[spin_12s_linear_infinite_reverse]"></div>

                        <span
                            className="relative font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-500"
                            style={{
                                fontSize: 120,
                                letterSpacing: "-6px",
                                filter: "drop-shadow(0 0 15px rgba(96, 165, 250, 0.5))"
                            }}
                        >
                            7
                        </span>

                    </div>

                    {/* Pillar Nodes */}
                    {pillars.map((pillar, index) => {
                        const { x, y } = getPosition(index);
                        const isActive = active === pillar.id;

                        // Outward direction from center — used to position tooltip beyond node edge
                        const angle = (2 * Math.PI * index) / totalPillars - Math.PI / 2;
                        const dx = Math.cos(angle);
                        const dy = Math.sin(angle);
                        // Push tooltip center 160px outward from node center (node radius = 70px)
                        const tooltipOffsetX = dx * 160;
                        const tooltipOffsetY = dy * 160;

                        return (
                            <div
                                key={pillar.id}
                                className="absolute z-20"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                }}
                            >
                                {/* Radially outward tooltip — never overlaps other nodes */}
                                {isActive && (
                                    <div
                                        className="absolute z-30 w-44 rounded-xl p-3 text-left pointer-events-none"
                                        style={{
                                            background: "rgba(14,37,70,0.97)",
                                            border: "1px solid rgba(59,130,246,0.45)",
                                            boxShadow: "0 4px 20px rgba(59,130,246,0.25)",
                                            top: "50%",
                                            left: "50%",
                                            transform: `translate(calc(-50% + ${tooltipOffsetX}px), calc(-50% + ${tooltipOffsetY}px))`,
                                            animation: "fadeIn 0.2s ease",
                                        }}
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <pillar.Icon size={16} className="text-blue-400 shrink-0" />
                                            <span className="text-white font-bold text-xs">{pillar.name}</span>
                                        </div>
                                        <p className="text-gray-300 text-[11px] leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>
                                )}

                                {/* Pillar Circle */}
                                <button
                                    onClick={() => handleClick(pillar.id)}
                                    className="group flex flex-col items-center justify-center rounded-full transition-all duration-300 focus:outline-none"
                                    style={{
                                        width: 140,
                                        height: 140,
                                        background: isActive
                                            ? "linear-gradient(135deg, rgba(37,99,235,0.6), rgba(29,78,216,0.4))"
                                            : "rgba(255,255,255,0.04)",
                                        border: isActive
                                            ? "1.5px solid rgba(96,165,250,0.7)"
                                            : "1.5px solid rgba(255,255,255,0.1)",
                                        boxShadow: isActive
                                            ? "0 0 24px rgba(59,130,246,0.35)"
                                            : "none",
                                        backdropFilter: "blur(12px)",
                                    }}
                                >
                                    <span className="mb-2 transition-transform duration-300 group-hover:scale-110">
                                        <pillar.Icon
                                            size={36}
                                            className="text-white"
                                            strokeWidth={1.5}
                                        />
                                    </span>
                                    <span
                                        className="font-semibold text-center leading-tight px-1"
                                        style={{
                                            fontSize: 13,
                                            color: isActive ? "#93c5fd" : "#e2e8f0",
                                            letterSpacing: "0.04em",
                                        }}
                                    >
                                        {pillar.name}
                                    </span>
                                    <span
                                        className="font-bold mt-0.5"
                                        style={{
                                            fontSize: 11,
                                            color: isActive
                                                ? "rgba(147,197,253,0.8)"
                                                : "rgba(148,163,184,0.5)",
                                        }}
                                    >
                                        0{pillar.id}
                                    </span>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex md:hidden flex-col gap-6 mt-12 relative mx-auto max-w-md">
                {/* Mobile Center Branding */}
                <div className="flex justify-center mb-8">
                    <div
                        className="relative flex flex-col items-center justify-center rounded-full"
                        style={{
                            width: 140,
                            height: 140,
                            background: "rgba(14, 37, 70, 0.6)",
                            backdropFilter: "blur(16px)",
                            boxShadow: "inset 0 0 40px rgba(37, 99, 235, 0.3), 0 0 30px rgba(37, 99, 235, 0.3)",
                            border: "1px solid rgba(96, 165, 250, 0.4)",
                        }}
                    >
                        <div className="absolute inset-[-8px] rounded-full border border-transparent border-t-blue-400 border-r-blue-500 opacity-60 animate-[spin_8s_linear_infinite]"></div>
                        <div className="absolute inset-[6px] rounded-full border-[1.5px] border-dashed border-blue-400/30 animate-[spin_12s_linear_infinite_reverse]"></div>
                        <span className="relative font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-500"
                            style={{ fontSize: 72, letterSpacing: "-4px", filter: "drop-shadow(0 0 10px rgba(96, 165, 250, 0.5))" }}>
                            7
                        </span>
                    </div>
                </div>

                {/* Mobile Pillar Cards */}
                {pillars.map((pillar) => (
                    <div
                        key={pillar.id}
                        className="relative bg-[#0e2546]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left flex gap-5 items-start transition-all hover:bg-[#0e2546]/90 hover:border-blue-500/30"
                    >
                        <div className="shrink-0">
                            <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                <pillar.Icon size={26} className="text-blue-400" strokeWidth={1.5} />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-blue-500 font-black text-xs tracking-wider opacity-70">
                                    0{pillar.id}
                                </span>
                            </div>
                            <h4 className="text-white font-bold text-lg mb-2">{pillar.name}</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Keyframe animation */}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform-origin: center; transform: scale(0.92); }
          to   { opacity: 1; transform-origin: center; transform: scale(1); }
        }
      `}</style>
        </section>
    );
}