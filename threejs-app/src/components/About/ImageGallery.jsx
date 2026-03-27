import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/About/gallery1.jpg",
    "/About/gallery2.jpg",
    "/About/gallery4.jpg",
    "/About/GalleryImage1.jpeg",
    "/About/GalleryImage2.jpeg",
    "/About/GalleryImage4.jpeg",
    "/About/GalleryImage5.jpeg",
    "/About/GalleryImage9.jpeg",
    "/About/GalleryImage10.jpeg",
    "/About/GalleryImage11.jpeg",
    "/About/GalleryImage12.jpeg",
    "/About/GalleryImage13.jpeg",
    "/About/GalleryImage14.jpeg",
    "/About/GalleryImage15.jpeg",
    "/About/GalleryImage16.jpeg",
    "/About/GalleryImage19.jpeg",
    "/About/GalleryImage22.jpeg",
    "/About/GalleryImage27.jpeg",
    "/About/GalleryImage28.jpeg",
    "/About/Christmas-celebration (1).jpg",
    "/About/Christmas-groupPic.jpg",
];

export default function ImageGallery() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setIndex((prev) => (prev + newDirection + images.length) % images.length);
    };

    // Auto-advance
    useEffect(() => {
        if (!isPlaying) return;
        const timer = setInterval(() => paginate(1), 6000);
        return () => clearInterval(timer);
    }, [index, isPlaying]);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 45 : -45,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.6 }
            }
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction < 0 ? 45 : -45,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
            }
        })
    };

    return (
        <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center py-32 px-4 overflow-hidden relative">

            {/* Dynamic Blurred Background (Theme Matched) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <AnimatePresence initial={false}>
                    <motion.img
                        key={`bg-${index}`}
                        src={images[index]}
                        initial={{ opacity: 0, scale: 1.15 }}
                        animate={{ opacity: 0.12, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.8, ease: "easeInOut" }}
                        className="w-full h-full object-cover blur-[120px] saturate-[0.5] contrast-[1.2]"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>
            </div>

            {/* Header Content (Pillars/Vision Theme) */}
            <div className="text-center mb-24 relative z-10 w-full max-w-2xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="text-blue-500 font-black tracking-[0.3em] text-[10px] md:text-xs uppercase mb-6 block">Visual Narrative</span>
                    <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.85] uppercase mb-8">
                        IMAGE GALLERY
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light tracking-wide max-w-lg mx-auto">
                        A cinematic collection of our milestone events, cultural celebrations, and collaborative focus captured through our perspective.
                    </p>
                </motion.div>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full max-w-7xl flex items-center justify-center">

                {/* Floating Navigation (Clean Theme) */}
                <div className="absolute left-4 md:left-8 z-40">
                    <button
                        onClick={() => paginate(-1)}
                        className="hover:scale-125 transition-all active:scale-95 group outline-none"
                    >
                        <ChevronLeft size={64} className="text-white/20 group-hover:text-blue-500 transition-all duration-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]" strokeWidth={0.75} />
                    </button>
                </div>

                {/* Main Viewport */}
                <div className="relative w-full aspect-[16/10] md:aspect-[21/9] flex items-center justify-center perspective-[1200px]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = offset.x;
                                if (swipe < -100) paginate(1);
                                else if (swipe > 100) paginate(-1);
                            }}
                            className="absolute w-full h-full flex items-center justify-center"
                        >
                            <div className="relative w-[92%] md:w-[80%] h-full group">
                                {/* Theme Glow Effect */}
                                <div className="absolute -inset-4 bg-blue-600/5 blur-[60px] rounded-full -z-10 group-hover:bg-blue-600/15 transition-all duration-1000"></div>

                                <img
                                    src={images[index]}
                                    alt={`Gallery photo ${index + 1}`}
                                    className="w-full h-full object-cover rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,1)] border border-white/5"
                                />

                                {/* Subtle Overlay Shadow */}
                                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="absolute right-4 md:right-8 z-40">
                    <button
                        onClick={() => paginate(1)}
                        className="hover:scale-125 transition-all active:scale-95 group outline-none"
                    >
                        <ChevronRight size={64} className="text-white/20 group-hover:text-blue-500 transition-all duration-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]" strokeWidth={0.75} />
                    </button>
                </div>
            </div>

            {/* Controls & Pagination */}
            <div className="flex flex-col items-center gap-12 mt-20 relative z-10 px-4">

                {/* Unified Pagination & Toggle Row */}
                <div className="flex gap-4 flex-wrap justify-center items-center">
                    {images.map((_, i) => (
                        <div key={i} className="flex items-center">
                            {/* Inject Toggle in the middle of the gallery dots */}
                            {i === Math.floor(images.length / 2) && (
                                <motion.button
                                    whileHover={{ scale: 1.2, color: "#3b82f6" }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="mx-4 p-2 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all active:bg-blue-500/10 group outline-none"
                                >
                                    {isPlaying ? (
                                        <Pause size={14} className="text-blue-400" />
                                    ) : (
                                        <Play size={14} className="text-emerald-400 ml-0.5" />
                                    )}
                                </motion.button>
                            )}

                            <button
                                onClick={() => {
                                    setDirection(i > index ? 1 : -1);
                                    setIndex(i);
                                }}
                                className="relative h-2 focus:outline-none transition-all duration-500"
                                style={{ width: i === index ? "48px" : "8px" }}
                            >
                                <div className={`absolute inset-0 rounded-full transition-all duration-700 ${i === index ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]" : "bg-gray-800 hover:bg-gray-600"
                                    }`}></div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>




        </section>
    );
}
