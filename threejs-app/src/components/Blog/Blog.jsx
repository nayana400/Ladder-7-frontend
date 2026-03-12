import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import BlogScene from "./BlogScene";

// Local image imports
import Tech1 from "../../assets/Images/blog/tech1.png";
import Tech2 from "../../assets/Images/blog/tech2.png";

const technicalBlogs = [
    {
        id: 1,
        image: Tech1,
        date: "18-12-2024",
        author: "Admin",
        title: "Tips for Collaborating with AI Tools in Web Development Teams",
        desc: "Maximize the potential of AI tools in web development by selecting the right tools and fostering AI literacy within teams.",
        category: "Artificial Intelligence",
        stats: { readTime: "5 min", views: "1.2k" }
    },
    {
        id: 2,
        image: Tech2,
        date: "18-12-2024",
        author: "Admin",
        title: "The Role of AI in Personalizing Web User Experiences",
        desc: "AI is transforming web experiences by enabling personalized content, recommendations and user interactions.",
        category: "UX/UI Design",
        stats: { readTime: "8 min", views: "2.4k" }
    },
];

const events = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        date: "19-12-2024",
        author: "Admin",
        title: "Lux Noel: A Magical Christmas Celebration",
        desc: "Ladder7 celebrated Christmas with joy, camaraderie and festive spirit among employees.",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
        date: "14-08-2024",
        author: "Admin",
        title: "Celebrating Unity and Responsibility",
        desc: "Employees gathered to celebrate India's Independence Day with pride and unity.",
    },
];

const TechnicalBlogCard = ({ blog }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);
    
    // Parallax movement for inner layers
    const layer1X = useTransform(mouseXSpring, [-0.5, 0.5], ["20px", "-20px"]);
    const layer1Y = useTransform(mouseYSpring, [-0.5, 0.5], ["20px", "-20px"]);
    
    const layer2X = useTransform(mouseXSpring, [-0.5, 0.5], ["-40px", "40px"]);
    const layer2Y = useTransform(mouseYSpring, [-0.5, 0.5], ["-40px", "40px"]);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / rect.width - 0.5);
        y.set(mouseY / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            variants={{
                hidden: { opacity: 0, x: -100, rotateY: -30 },
                show: { opacity: 1, x: 0, rotateY: 0 }
            }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group relative w-full perspective-2000 mb-20"
        >
            {/* Main Surface */}
            <div className="relative glass-card rounded-[2.5rem] p-10 overflow-hidden border border-white/10 group-hover:neon-border transition-all duration-700">
                
                {/* 3D Content Container */}
                <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ transformStyle: "preserve-3d" }}>
                    
                    {/* Left Side: 3D Visual Stack */}
                    <div className="relative h-[450px]" style={{ transformStyle: "preserve-3d" }}>
                        
                        {/* Layer 0: Background Glow */}
                        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-colors duration-700" />
                        
                        {/* Layer 1: The Image Panel */}
                        <motion.div 
                            style={{ 
                                x: layer1X, 
                                y: layer1Y, 
                                transform: "translateZ(50px)",
                                transformStyle: "preserve-3d" 
                            }}
                            className="absolute inset-4 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                        >
                            <img src={blog.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            
                            {/* Scanning Effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-400 shadow-[0_0_20px_#3b82f6] z-50 animate-scan opacity-0 group-hover:opacity-100" />
                        </motion.div>

                        {/* Layer 2: Floating Info Panel */}
                        <motion.div 
                            style={{ 
                                x: layer2X, 
                                y: layer2Y, 
                                transform: "translateZ(120px)" 
                            }}
                            className="absolute -right-8 bottom-12 p-6 glass-card rounded-2xl border-white/30 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40"
                        >
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">System Online</span>
                                </div>
                                <div className="text-white font-black text-xl">{blog.stats.views} <span className="text-blue-400 text-sm font-normal">VIEWS</span></div>
                            </div>
                        </motion.div>

                        {/* Layer 3: Tech Brackets */}
                        <motion.div 
                            style={{ transform: "translateZ(150px)" }}
                            className="absolute inset-0 pointer-events-none"
                        >
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-blue-500/50 rounded-tl-3xl group-hover:translate-x-[-10px] group-hover:translate-y-[-10px] transition-transform duration-500" />
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-blue-500/50 rounded-br-3xl group-hover:translate-x-[10px] group-hover:translate-y-[10px] transition-transform duration-500" />
                        </motion.div>
                    </div>

                    {/* Right Side: Text & Data */}
                    <div style={{ transform: "translateZ(80px)" }}>
                        <motion.div className="flex items-center gap-4 mb-4">
                            <span className="px-4 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-black uppercase border border-blue-500/30">
                                {blog.category}
                            </span>
                            <div className="h-[1px] w-12 bg-white/20" />
                            <span className="text-gray-500 text-xs font-bold uppercase">{blog.stats.readTime} Read</span>
                        </motion.div>

                        <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6 group-hover:neon-text-glow transition-all duration-300">
                            {blog.title}
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                            {blog.desc}
                        </p>

                        <div className="flex items-center gap-8">
                            <button className="relative px-8 py-4 bg-blue-600 rounded-xl text-white font-bold uppercase tracking-widest overflow-hidden group/btn hover:shadow-[0_0_30px_#2563eb] transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-2">
                                    Read Insights
                                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-transparent opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                            </button>
                            
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 font-bold uppercase">Author</span>
                                <span className="text-white font-bold">{blog.author}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 text-white/5 font-black text-9xl tracking-tighter select-none pointer-events-none">
                    0{blog.id}
                </div>
                <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rotate-90" />
            </div>
        </motion.div>
    );
};

const EventCard = ({ event }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                show: { opacity: 1, scale: 1, y: 0 }
            }}
            className="group relative glass-card p-6 rounded-3xl overflow-hidden hover:neon-border transition-all duration-500"
        >
            <div className="flex gap-6 items-center">
                <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-xl">
                    <img src={event.image} alt="" className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-700" />
                </div>
                <div>
                    <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">{event.date}</div>
                    <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                        {event.title}
                    </h4>
                    <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                        {event.desc}
                    </p>
                </div>
            </div>
            {/* Hover Decorative Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </motion.div>
    );
};

export default function BlogPage() {
    return (
        <section className="relative min-h-screen pt-32 pb-40 px-6 lg:px-20 overflow-hidden bg-[#020617]">
            {/* 3D Scene */}
            <BlogScene />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2 
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="text-8xl md:text-[10rem] font-black italic text-stroke absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-10 select-none z-0"
                        >
                            INNOVATION HUB
                        </motion.h2>
                        
                        <div className="relative z-10">
                            <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-sm mb-4 block animate-fadeIn">Research & Development</span>
                            <h2 className="text-7xl md:text-9xl font-black text-white neon-text-glow mb-8 tracking-tighter">
                                OUR BLOGS
                            </h2>
                            <div className="h-1.5 w-40 bg-blue-600 mx-auto rounded-full shadow-[0_0_20px_#2563eb]" />
                        </div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-20">
                    {/* LEFT COLUMN: Deep Insights */}
                    <motion.div 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.3 }
                            }
                        }}
                        className="lg:col-span-8"
                    >
                        <div className="mb-16 flex items-center justify-between">
                            <h3 className="text-5xl font-black text-white tracking-tight flex items-center gap-4">
                                <span className="w-12 h-1 bg-blue-500" />
                                TECHNICAL INSIGHTS
                            </h3>
                        </div>

                        {technicalBlogs.map((blog) => (
                            <TechnicalBlogCard key={blog.id} blog={blog} />
                        ))}
                    </motion.div>

                    {/* RIGHT COLUMN: Ecosystem */}
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
                        className="lg:col-span-4"
                    >
                        <div className="mb-16">
                            <h3 className="text-5xl font-black text-white tracking-tight flex items-center gap-4">
                                ECOSYSTEM
                            </h3>
                            <div className="h-1 w-20 bg-blue-500 mt-2" />
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
                </div>
            </div>
            
            {/* Floating Tech Elements */}
            <div className="absolute top-1/4 left-10 w-24 h-24 border border-white/5 rounded-full animate-float opacity-20 pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-40 h-40 border border-white/5 rounded-[3rem] animate-float opacity-10 pointer-events-none [animation-delay:2s] rotate-45" />
        </section>
    );
}