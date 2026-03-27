import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";

// Importing real event images
import ChristmasImg from "../../assets/Images/blog/Christmas-celebration.jpg";
import IndependenceImg from "../../assets/Images/blog/IndependenceDay-celebration.png";
import OnamImg from "../../assets/Images/blog/Onam-celebration.jpeg";

const EventCard = ({ event, index, activeIndex, setActiveIndex, total, onExpand }) => {
    const cardRef = useRef();
    const contentRef = useRef();
    const glassRef = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const isActive = index === activeIndex;

    useGSAP(() => {
        // Calculate relative index for shuffling logic
        const relativeIndex = (index - activeIndex + total) % total;

        // Glass Card shuffle/stacking physics - Aggressive Stacking for Maximum Visibility
        gsap.to(cardRef.current, {
            x: isHovered ? relativeIndex * 420 : relativeIndex * 260, // Massive persistent peek
            y: isHovered ? relativeIndex * 30 : relativeIndex * 100,   // Clear staircase offset
            scale: 1 - relativeIndex * 0.06,
            opacity: relativeIndex === 0 ? 1 : (isHovered ? 0.98 : 0.95) - relativeIndex * 0.1, 
            zIndex: total - relativeIndex,
            rotateY: isHovered ? relativeIndex * -14 : relativeIndex * -32,
            rotateX: isHovered ? 0 : relativeIndex * 5,
            z: -relativeIndex * 300, 
            filter: relativeIndex === 0 ? "brightness(1) blur(0px)" : `brightness(${1 - (isHovered ? 0.03 : 0.08) * relativeIndex}) blur(${relativeIndex * 0.15}px)`,
            perspective: 5500,
            duration: 1.8,
            ease: "expo.out",
            overwrite: "auto"
        });

        // Content reveal for active card
        if (isActive) {
            gsap.fromTo(contentRef.current,
                { y: 30, opacity: 0, filter: "blur(10px)" },
                { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, delay: 0.4, ease: "power3.out" }
            );
        } else {
            gsap.to(contentRef.current, { opacity: 0, y: 10, filter: "blur(5px)", duration: 0.4 });
        }
    }, [activeIndex, total, index, isHovered]);

    // Premium interactive tilt for the active card
    const handleMouseMove = (e) => {
        if (!isActive) return;
        const rect = glassRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateY = (e.clientX - centerX) / (rect.width / 2) * 12;
        const rotateX = -(e.clientY - centerY) / (rect.height / 2) * 12;

        gsap.to(glassRef.current, {
            rotateY: rotateY,
            rotateX: rotateX,
            transformPerspective: 1200,
            duration: 0.6,
            ease: "power2.out"
        });
    };

    const handleMouseLeaveInner = () => {
        if (!isActive) return;
        gsap.to(glassRef.current, {
            rotateY: 0,
            rotateX: 0,
            duration: 1,
            ease: "elastic.out(1, 0.4)"
        });
    };

    return (
        <div
            ref={cardRef}
            onClick={() => {
                if (isActive) onExpand(event);
                else setActiveIndex(index);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
        >
            <div
                ref={glassRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeaveInner}
                className="relative w-full max-w-[850px] aspect-video group pointer-events-auto cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Main Glass Body - Noir Glass Theme */}
                <div className={`w-full h-full rounded-[3.5rem] overflow-hidden bg-black/80 backdrop-blur-[80px] border border-white/10 shadow-[0_50px_120px_rgba(0,0,0,0.9)] flex transition-all duration-700 ${isActive ? 'ring-2 ring-blue-500/30 shadow-[0_0_60px_rgba(37,99,235,0.15)]' : 'ring-1 ring-white/5 opacity-90'}`}>

                    {/* Visual Section - Noir Overlay & Full Image visibility */}
                    <div className="w-[60%] h-full relative overflow-hidden bg-black border-r border-white/5">
                        <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-full object-contain opacity-95 group-hover:scale-105 transition-transform duration-[8s] ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent opacity-40 pointer-events-none" />

                        {/* Quote Signature */}
                        <div className="absolute bottom-10 left-10 text-white/5 pointer-events-none">
                            <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56928 13 5.017 13H3.017V21H5.017Z" />
                            </svg>
                        </div>
                    </div>

                    {/* Content Section - Noir Glass Background */}
                    <div ref={contentRef} className="w-[40%] h-full p-12 flex flex-col justify-center space-y-6 bg-gradient-to-br from-black/40 to-transparent backdrop-blur-3xl">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-[1px] w-10 bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
                                <span className="text-blue-500 font-black text-[9px] tracking-[0.5em] uppercase">
                                    {event.date}
                                </span>
                            </div>
                            <h3 className="text-4xl font-bold text-white tracking-tighter leading-[1] italic">
                                "{event.title}"
                            </h3>
                        </div>

                        <p className="text-gray-300 text-base leading-relaxed font-light italic opacity-90 border-l border-white/20 pl-6">
                            {event.paragraph}
                        </p>

                        <div className="pt-4">
                            <button className="px-8 py-3.5 bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 text-white font-black uppercase tracking-[0.3em] rounded-xl shadow-2xl transition-all transform hover:scale-105 active:scale-95 text-[9px]">
                                Explore Story
                            </button>
                        </div>
                    </div>
                </div>

                {/* Ambient Internal Glow */}
                <div className="absolute -inset-px rounded-[3.5rem] bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 pointer-events-none" />
                {isActive && (
                    <div className="absolute inset-x-20 -bottom-10 h-2 bg-blue-500/40 blur-[50px] rounded-full opacity-50 pointer-events-none" />
                )}
            </div>
        </div>
    );
};

export default function EventsPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const containerRef = useRef();

    const events = [
        {
            id: 1,
            title: "Lux Noel: A Magical Christmas Celebration",
            date: "19-12-2024",
            image: ChristmasImg,
            paragraph: "On December 19, 2024, Ladder7's highly anticipated Christmas celebration, Lux Noel, elevated the festive spirit to a whole new level. The day was filled with joy, camaraderie, and heartfelt moments, perfectly reflecting the company's core values of unity, warmth, and celebration."
        },
        {
            id: 2,
            title: "Celebrating Unity and Responsibility",
            date: "14-08-2024",
            image: IndependenceImg,
            paragraph: "On August 14, 2024, Ladder7 Next Step Solutions proudly celebrated India's Independence Day, honoring the nation's rich history and the values that drive both our country and our organization. The event was a perfect blend of reflection, unity, and responsibility."
        },
        {
            id: 3,
            title: "Vibrant Onam Festivities at Ladder7",
            date: "05-09-2024",
            image: OnamImg,
            paragraph: "The vibrant Spirit of Onam took center stage at Ladder7 as we celebrated the harvest festival with traditional grandeur. Dressed in elegant traditional attire, employees enjoyed a sumptuous Onasadya feast, bringing everyone together in a true sense of fellowship."
        }
    ];

    // Automated Shuffle Engine
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % events.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, events.length]);

    // Immersion Mode Animation
    useGSAP(() => {
        if (selectedEvent) {
            gsap.fromTo(".reveal-full", 
                { scale: 0.9, opacity: 0, filter: "blur(20px)" },
                { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1, ease: "expo.out" }
            );
        }
    }, [selectedEvent]);

    useGSAP(() => {
        // Floating background graphics
        gsap.to(".bg-orb", {
            x: "random(-100, 100)",
            y: "random(-100, 100)",
            duration: "random(10, 20)",
            repeat: -1,
            yoyo: true,
            ease: "none"
        });

        // Intro sequence
        gsap.from(".reveal-item", {
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "expo.out"
        });
    }, { scope: containerRef });

    const handleNext = () => setActiveIndex((prev) => (prev + 1) % events.length);
    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + events.length) % events.length);

    return (
        <div className="bg-[#051120] min-h-screen text-white font-sans selection:bg-blue-500/30 overflow-hidden relative" ref={containerRef}>
            <Navbar />

            {/* Glass BG Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="bg-orb absolute top-0 left-[-10%] w-[800px] h-[800px] bg-blue-600/[0.05] rounded-full blur-[120px]" />
                <div className="bg-orb absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-blue-500/[0.05] rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
            </div>

            <section className="relative min-h-screen pt-40 pb-40 px-6 lg:px-20 flex flex-col items-center justify-center">

                {/* 1. Header Section */}
                <div className="text-center mb-20 relative z-[100]">
                    <span className="reveal-item block text-blue-500 font-black uppercase tracking-[0.7em] text-[11px] mb-8">
                        Corporate Memoirs
                    </span>
                    <h1 className="reveal-item text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter italic drop-shadow-2xl">
                        Tech Events
                    </h1>
                    <p className="reveal-item text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Capturing the vibrant moments and professional milestones that define our journey at Ladder7.
                    </p>
                </div>

                {/* 2. GSAP Shuffle Deck - Optimized Container for high-visibility fanning */}
                <div className="relative w-full h-[680px] perspective-[3000px] overflow-visible">
                    {events.map((event, index) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            index={index}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                            total={events.length}
                            onExpand={(e) => {
                                setIsPlaying(false);
                                setSelectedEvent(e);
                            }}
                        />
                    ))}
                </div>

                {/* 3. Small & Simple Shuffle Controls */}
                <div className="relative z-[100] flex flex-col items-center gap-8">
                    {/* Interaction Pod */}
                    <div className="flex items-center gap-6 bg-black/60 backdrop-blur-2xl px-8 py-3 rounded-full border border-white/10 shadow-2xl">
                        {/* Compact Prev Arrow */}
                        <button 
                            onClick={handlePrev}
                            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors group"
                        >
                            <svg className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Small Play / Pause */}
                        <button 
                            onClick={() => setIsPlaying(!isPlaying)}
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white`}
                        >
                            {isPlaying ? (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            )}
                        </button>

                        {/* Compact Next Arrow */}
                        <button 
                            onClick={handleNext}
                            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors group"
                        >
                            <svg className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Minimal Dots Below */}
                    <div className="flex gap-3">
                        {events.map((_, i) => (
                            <button 
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`h-1 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-8 bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'w-2 bg-white/20'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* 4. Glass Interactive Row */}
                <div className="mt-40 w-full max-w-6xl relative z-[100] reveal-item">
                    <div className="bg-white/5 backdrop-blur-[40px] border border-white/10 rounded-[3.5rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl group overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/10 transition-colors duration-700" />

                        <div className="flex-1 space-y-6 relative z-10">
                            <div className="flex items-center gap-3 text-blue-500 font-black tracking-widest text-xs uppercase">
                                <div className="h-0.5 w-8 bg-blue-500" /> UPCOMING FOCUS
                            </div>
                            <h2 className="text-5xl font-bold text-white leading-tight itali">
                                Nexus Protocol Summit
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
                                High-profile networking and technical deep-dives into the future of digital integration.
                            </p>
                        </div>
                        <div className="relative z-10">
                            <button className="px-14 py-6 bg-blue-600 hover:bg-white hover:text-black text-white font-black uppercase tracking-widest rounded-[2rem] shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all hover:scale-105 active:scale-95 whitespace-nowrap text-xs">
                                Register Interest
                            </button>
                        </div>
                    </div>
                </div>
                {/* 4. Fullscreen Immersion Mode */}
                {selectedEvent && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 md:p-20">
                        {/* Backdrop with extreme blur */}
                        <div 
                            className="absolute inset-0 bg-black/90 backdrop-blur-[120px]"
                            onClick={() => setSelectedEvent(null)}
                        />
                        
                        {/* Full Size Content */}
                        <div className="relative w-full max-w-7xl aspect-video md:aspect-[21/9] bg-black/40 rounded-[4rem] border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.2)] flex flex-col md:flex-row reveal-full">
                            
                            {/* Cinematic Close Button */}
                            <button 
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-10 right-10 z-[100] w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-500 transition-all duration-500 hover:scale-110"
                            >
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>

                            {/* Full Image Section */}
                            <div className="w-full md:w-[65%] h-full bg-black relative">
                                <img 
                                    src={selectedEvent.image} 
                                    className="w-full h-full object-contain"
                                    alt={selectedEvent.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Detailed Narrative Section */}
                            <div className="w-full md:w-[35%] h-full p-12 md:p-20 flex flex-col justify-center space-y-10 bg-black/20 backdrop-blur-3xl border-l border-white/5">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-[1px] bg-blue-500 shadow-[0_0_20px_#3b82f6]" />
                                        <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.5em]">{selectedEvent.date}</span>
                                    </div>
                                    <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter italic">
                                        {selectedEvent.title}
                                    </h2>
                                </div>
                                <p className="text-gray-400 text-xl md:text-2xl font-light italic leading-relaxed border-l-2 border-blue-500/20 pl-8">
                                    {selectedEvent.paragraph}
                                </p>
                                <div className="pt-6">
                                    <button className="px-12 py-5 bg-blue-600 text-white font-black uppercase tracking-[0.4em] rounded-2xl shadow-2xl hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 active:scale-95 text-xs">
                                        Share Memory
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
}
