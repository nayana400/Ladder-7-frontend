import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

const TechnicalBlogCard = ({ blog, isList = false }) => {
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
            className="group relative w-full perspective-2000"
        >
            {/* Main Surface */}
            <div className="relative bg-[#0a192f]/40 backdrop-blur-xl rounded-[2.5rem] p-10 overflow-hidden border border-white/5 group-hover:border-blue-500/30 transition-all duration-700">

                {/* 3D Content Container - Adapts between Grid and List */}
                <div className={isList ? "grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center" : "flex flex-col gap-10"} style={{ transformStyle: "preserve-3d" }}>

                    {/* Visual Stack */}
                    <div className={`relative ${isList ? 'h-[550px]' : 'h-[420px]'}`} style={{ transformStyle: "preserve-3d" }}>

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
                            className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black/40"
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
                                transform: "translateZ(100px)"
                            }}
                            className="absolute -right-4 -bottom-4 p-5 glass-card rounded-2xl border-white/30 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40"
                        >
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">System Online</span>
                                </div>
                                <div className="text-white font-black text-lg">{blog.stats.views} <span className="text-blue-400 text-xs font-normal">VIEWS</span></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom/Right: Text & Data */}
                    <div className={`${isList ? 'space-y-8' : 'space-y-6'}`} style={{ transform: "translateZ(60px)" }}>
                        <div className="flex items-center gap-4">
                            <span className={`px-4 py-1 rounded-full bg-blue-600/20 text-blue-400 font-black uppercase border border-blue-500/30 ${isList ? 'text-xs' : 'text-[10px]'}`}>
                                {blog.category}
                            </span>
                            <div className="h-[1px] w-8 bg-white/20" />
                            <span className={`text-gray-500 font-bold uppercase ${isList ? 'text-xs' : 'text-[10px]'}`}>{blog.stats.readTime} Read</span>
                        </div>

                        <h3 className={`${isList ? 'text-4xl lg:text-5xl' : 'text-2xl'} font-black text-white leading-tight group-hover:neon-text-glow transition-all duration-300`}>
                            {blog.title}
                        </h3>

                        <p className={`text-gray-400 leading-relaxed ${isList ? 'text-lg md:text-xl' : 'text-base line-clamp-2'}`}>
                            {blog.desc}
                        </p>

                        <div className={`flex items-center justify-between pt-6 border-t border-white/5`}>
                            <Link 
                                to={`/blog/technical-insights/${blog.id}`}
                                className={`flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest hover:text-white transition-colors group/link ${isList ? 'text-xs' : 'text-[10px]'}`}
                            >
                                Read Insights
                                <svg className={`${isList ? 'w-5 h-5' : 'w-4 h-4'} group-hover/link:translate-x-1 transition-transform`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>

                            <div className="flex flex-col items-end">
                                <span className={`text-gray-500 font-bold uppercase ${isList ? 'text-[10px]' : 'text-[9px]'}`}>Author</span>
                                <span className={`text-white font-bold ${isList ? 'text-base' : 'text-xs'}`}>{blog.author}</span>
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

const TechnicalSection = ({ technicalBlogs, showViewAll = false, columns = 2 }) => {
    return (
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
            className="w-full"
        >
            <div className="mb-16 flex items-center justify-between">
                <Link to="/blog/technical-insights" className="group">
                    <h3 className="text-3xl font-black text-white tracking-tight flex items-center gap-4 group-hover:text-blue-400 transition-colors">
                        TECHNICAL INSIGHTS
                    </h3>
                    <div className="h-1 w-20 bg-blue-500 mt-2 group-hover:w-full transition-all duration-500" />
                </Link>
                {showViewAll && (
                    <Link 
                        to="/blog/technical-insights"
                        className="text-blue-500 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors flex items-center gap-2 group"
                    >
                        View All
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                )}
            </div>

            <div className={columns === 1 ? "flex flex-col gap-16" : "grid md:grid-cols-2 gap-12"}>
                {technicalBlogs.map((blog) => (
                    <TechnicalBlogCard key={blog.id} blog={blog} isList={columns === 1} />
                ))}
            </div>
        </motion.div>
    );
};

export default TechnicalSection;
