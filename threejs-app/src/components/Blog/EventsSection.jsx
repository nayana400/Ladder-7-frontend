import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                show: { opacity: 1, scale: 1, y: 0 }
            }}
            className="group relative glass-card p-6 rounded-3xl overflow-hidden hover:neon-border transition-all duration-500"
        >
            <Link to={`/blog/events/${event.id}`} className="block">
                <div className="flex flex-col gap-6">
                    <div className="w-full h-56 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-xl">
                        <img src={event.image} alt="" className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-700" />
                    </div>
                    <div>
                        <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">{event.date}</div>
                        <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                            {event.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {event.desc}
                        </p>
                    </div>
                </div>
            </Link>
            {/* Hover Decorative Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </motion.div>
    );
};

const EventsSection = ({ events, showViewAll = false }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 }
                }
            }}
            className="lg:col-span-2"
        >
            <div className="mb-16 flex items-center justify-between">
                <Link to="/blog/events" className="group">
                    <h3 className="text-3xl font-black text-white tracking-tight flex items-center gap-4 group-hover:text-blue-400 transition-colors">
                        EVENTS
                    </h3>
                    <div className="h-1 w-20 bg-blue-500 mt-2 group-hover:w-full transition-all duration-500" />
                </Link>
                {showViewAll && (
                    <Link 
                        to="/blog/events"
                        className="text-blue-500 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors flex items-center gap-2 group"
                    >
                        View All
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                )}
            </div>

            <div className="flex flex-col gap-10">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>

            {/* Interactive Widget */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, rotateX: 20 },
                    show: { opacity: 1, rotateX: 0 }
                }}
                className="mt-20 relative p-10 rounded-[3rem] glass-card border-white/10 group cursor-default"
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-blue-500/40 transition-colors duration-700" />

                <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
                    <div className="text-blue-400 font-black mb-2 tracking-widest text-xs">NETWORK ACCESS</div>
                    <h4 className="text-4xl font-black text-white mb-6 leading-none">JOIN THE NEURAL GRID</h4>
                    <p className="text-gray-400 text-sm mb-10 leading-relaxed">Sync your stream with our latest intelligence units and architectural breakthroughs.</p>

                    <div className="space-y-4">
                        <div className="relative overflow-hidden rounded-2xl border-2 border-white/5 transition-all focus-within:border-blue-500/50">
                            <input
                                type="email"
                                placeholder="IDENTITY@GRID.COM"
                                className="w-full bg-black/40 px-6 py-5 text-white font-bold tracking-widest uppercase focus:outline-none"
                            />
                        </div>
                        <button className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300 transform active:scale-95 shadow-xl">
                            AUTHENTICATE
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default EventsSection;
