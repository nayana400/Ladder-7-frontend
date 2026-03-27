import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EventsSection = ({ events, showViewAll = false }) => {
    const sectionRef = useRef(null);
    const rightPanelRef = useRef(null);
    const cardRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    // Capture wheel events on the section and forward them to the right panel
    useEffect(() => {
        const section = sectionRef.current;
        const panel = rightPanelRef.current;
        if (!section || !panel) return;

        const handleWheel = (e) => {
            // Prevent main page scroll
            e.preventDefault();
            // Scroll the right panel instead
            panel.scrollTop += e.deltaY;
        };

        section.addEventListener("wheel", handleWheel, { passive: false });
        return () => section.removeEventListener("wheel", handleWheel);
    }, []);

    // Track which card is in view on the right panel via IntersectionObserver
    useEffect(() => {
        const panel = rightPanelRef.current;
        if (!panel) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = Number(entry.target.dataset.index);
                        if (!isNaN(idx)) setActiveIndex(idx);
                    }
                });
            },
            {
                root: panel,
                threshold: 0.55,
            }
        );

        cardRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [events.length]);

    // Click a thumbnail → smooth-scroll the right panel to that card
    const handleThumbnailClick = useCallback((index) => {
        setActiveIndex(index);
        const target = cardRefs.current[index];
        if (target && rightPanelRef.current) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-screen flex overflow-hidden bg-[#0a0a0a]">

            {/* ── LEFT: Completely Static Sidebar (no scroll) ── */}
            <div className="w-[38%] flex-shrink-0 h-full flex flex-col justify-center px-10 lg:px-16 bg-[#0a0a0a] border-r border-white/5 gap-10 overflow-hidden">

                {/* Section Label */}
                <div className="space-y-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        Events
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs pt-1">
                        Celebrating our milestones, culture, and community at Ladder7.
                    </p>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex flex-col gap-5">
                    {events.map((event, index) => (
                        <button
                            key={event.id}
                            onClick={() => handleThumbnailClick(index)}
                            className="flex items-center gap-5 group cursor-pointer relative text-left"
                        >
                            {/* Blue active indicator */}
                            {activeIndex === index && (
                                <motion.div
                                    layoutId="activeBar"
                                    className="absolute -left-5 w-0.5 h-14 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                                />
                            )}

                            {/* Thumbnail */}
                            <div
                                className={`relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-500 border ${activeIndex === index
                                    ? "ring-1 ring-blue-500 ring-offset-2 ring-offset-black opacity-100 border-blue-500/30"
                                    : "opacity-25 grayscale group-hover:opacity-50 border-gray-700"
                                    }`}
                            >
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                            </div>

                            {/* Label */}
                            <div className={`flex flex-col transition-opacity duration-400 ${activeIndex === index ? "opacity-100" : "opacity-30"}`}>
                                <span className="text-white font-semibold text-sm leading-snug line-clamp-1">
                                    {event.title.split(" ").slice(0, 4).join(" ")}
                                </span>
                                <span className="text-gray-500 text-[10px] tracking-wider uppercase mt-1">
                                    {event.date} · Archive {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Progress indicator */}
                <div className="flex items-center gap-2">
                    {events.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleThumbnailClick(i)}
                            className={`h-0.5 rounded-full transition-all duration-500 ${activeIndex === i
                                ? "w-8 bg-blue-500"
                                : "w-3 bg-white/15 hover:bg-white/30"
                                }`}
                        />
                    ))}
                </div>

                {showViewAll && (
                    <Link
                        to="/blog/events"
                        className="inline-flex items-center gap-3 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
                    >
                        <span>View All Events</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                )}
            </div>

            {/* ── RIGHT: Scrollable Event Details Panel ── */}
            <div
                ref={rightPanelRef}
                className="w-[62%] flex-shrink-0 h-full overflow-y-auto bg-[#0a0a0a] scroll-smooth"
                style={{ scrollbarWidth: "none", overscrollBehavior: "contain" }}
            >
                {events.map((event, index) => (
                    <div
                        key={event.id}
                        ref={(el) => (cardRefs.current[index] = el)}
                        data-index={index}
                        className="w-full min-h-screen relative flex items-center justify-center overflow-hidden px-10 py-8"
                    >
                        {/* Soft ambient glow */}
                        <div className="absolute inset-0 z-0 opacity-20">
                            <img src={event.image} className="w-full h-full object-cover blur-[80px]" alt="" />
                        </div>

                        {/* Card: image + text */}
                        <div className="relative z-10 w-full h-[85vh] flex flex-col gap-5">

                            {/* Image */}
                            <div
                                className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl"
                                style={{ flex: "0 0 58%" }}
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                {/* Badges */}
                                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-md px-3 py-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    <span className="text-blue-400 font-bold text-[9px] uppercase tracking-widest">
                                        {event.date}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-md px-3 py-1.5">
                                    <span className="text-gray-400 font-bold text-[9px] tracking-widest uppercase">
                                        {String(index + 1).padStart(2, "0")} / {String(events.length).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col gap-2 flex-1 overflow-hidden">
                                <h3 className="text-white text-lg md:text-xl font-bold leading-snug tracking-tight line-clamp-2">
                                    {event.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                    {event.desc}
                                </p>
                                <div className="flex items-center gap-3 pt-1">
                                    <div className="h-px w-5 bg-blue-500/50" />
                                    <span className="text-gray-600 text-[10px] uppercase tracking-widest">
                                        By {event.author || "Admin"} · Ladder7
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Subtle step watermark */}
                        <div className="absolute right-5 bottom-5 pointer-events-none select-none font-bold text-[8rem] text-white/[0.025] italic leading-none">
                            {String(index + 1).padStart(2, "0")}
                        </div>
                    </div>
                ))}

                {/* Static page counter */}
                <div className="sticky bottom-8 ml-auto mr-10 z-50 pointer-events-none flex items-center gap-4 text-[10px] font-bold tracking-widest text-gray-700 uppercase w-fit">
                    <span className="text-blue-500/50">[ Event ]</span>
                    <span>{String(activeIndex + 1).padStart(2, "0")} / {String(events.length).padStart(2, "0")}</span>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
