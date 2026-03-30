import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const JOURNEY_STEPS = [
    {
        title: "Reflection",
        description: "Reflect on your past successes and challenges to understand.",
        extraDetails: "What worked, what didn’t, and how it made you feel. This provides insights into your motivations and areas for growth.",
        color: "#FF5722",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-8 md:h-8">
                <path d="M12 2v20M17 5l-5 5 5 5M7 19l5-5-5-5" />
            </svg>
        )
    },
    {
        title: "Realization",
        description: "Realization is about becoming aware of your current personal ",
        extraDetails: "and professional state—your skills, mindset, and well-being. This awareness helps clarify your goals and what’s holding you back.",
        color: "#FFC107",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-7 md:h-7">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6M10 22h4" />
            </svg>
        )
    },
    {
        title: "Goal Setting",
        description: "In this step, translate your reflections into concrete, SMART  goals—",
        extraDetails: "specific, measurable, attainable, relevant, and time-bound—that align with your values and enhance your well-being.",
        color: "#4CAF50",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-7 md:h-7">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
            </svg>
        )
    },
    {
        title: "Visualization",
        description: "Visualization involves mentally picturing your goals to stay",
        extraDetails: "motivated and focused. By creating a clear image of success, you boost your confidence and drive toward achieving your goals.",
        color: "#FF5722",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-7 md:h-7">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="7.5 4.21 12 6.81 16.5 4.21" /><polyline points="7.5 19.79 7.5 14.6 3 12" /><polyline points="21 12 16.5 14.6 16.5 19.79" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        )
    },
    {
        title: "Set Action Plan",
        description: "After setting goals, create a detailed action plan outlining",
        extraDetails: " steps, timelines, resources, and milestones. A structured plan turns your goals into actionable tasks for success.",
        color: "#00BCD4",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-7 md:h-7">
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M9 12l2 2 4-4" />
            </svg>
        )
    },
    {
        title: "Tracking & Improving",
        description: "Track your progress regularly, adjusting as needed. Monitoring",
        extraDetails: "actions and outcomes ensures continuous improvement, helping you overcome obstacles and stay aligned with your goals.",
        color: "#2962FF",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-7 md:h-7">
                <path d="M3 3v18h18" /><path d="M18 11l-4-4-5 5-4-4" /><circle cx="18" cy="11" r="3" />
            </svg>
        )
    },
    {
        title: "Achieve & Celebrate",
        description: "Achieving goals is a journey—celebrate small wins to boost motivation",
        extraDetails: "and reinforce progress. Acknowledging milestones fosters a sense of accomplishment and enhances well-being.",
        color: "#E91E63",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-7 md:h-7">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
        )
    }
];

function OurJourney() {
    const [activeStep, setActiveStep] = useState(0);
    const [hoveredStep, setHoveredStep] = useState(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef();

    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setActiveStep((prev) => (prev + 1) % JOURNEY_STEPS.length);
            }, 6000);
        }
        return () => clearInterval(autoPlayRef.current);
    }, [isAutoPlaying]);

    const handleStepClick = (index) => {
        setActiveStep(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10); // Reset interval immediately
    };

    // Helper for flowchart buttons
    const StepButton = ({ index }) => {
        const step = JOURNEY_STEPS[index];
        const isActive = activeStep === index;
        const isHovered = hoveredStep === index;
        return (
            <button
                onClick={() => handleStepClick(index)}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`relative flex items-center justify-center p-1.5 md:p-2 rounded-full min-w-[80px] md:min-w-[110px] cursor-pointer transition-all duration-300 border-2 ${isActive || isHovered
                    ? "scale-105 border-black shadow-lg"
                    : "border-transparent"
                    }`}
                style={{
                    backgroundColor: step.color,
                    boxShadow: (isActive || isHovered) ? `0 0 20px ${step.color}AA` : undefined
                }}
            >
                <span className="text-[7px] md:text-[10px] font-bold uppercase tracking-wider text-center text-black">
                    {step.title}
                </span>
            </button>
        );
    };

    const Arrow = ({ direction = "right", className = "" }) => {
        const directions = {
            right: "M5 12h14M12 5l7 7-7 7",
            left: "M19 12H5M12 19l-7-7 7-7",
            down: "M12 5v14M5 12l7 7 7-7",
        };
        return (
            <svg className={`w-5 h-5 text-black/40 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d={directions[direction]} />
            </svg>
        );
    };

    return (
        <section className="bg-white text-black py-20 px-6 overflow-hidden min-h-[700px]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Heading + Flowchart */}
                    <div className="flex flex-col gap-10 lg:pr-8">
                        {/* Header Section */}
                        <div className="text-center lg:text-left space-y-4">
                            <h1 className="text-black font-bold text-lg md:text-4xl">Our Journey</h1>
                            <p className="text-sm md:text-base text-gray-800">
                                Explore L7 framework is a strategic model that focuses on seven essential elements to drive sustainable success
                            </p>
                        </div>

                        {/* Flowchart Buttons */}
                        <div className="relative max-w-[650px] mx-auto lg:mx-0">
                            <div className="flex flex-col gap-10 relative z-10 font-sans">

                                {/* Row 1: 1 -> 2 -> 3 -> 4 */}
                                <div className="flex items-center justify-between gap-1 md:gap-2 relative">
                                    <StepButton index={0} />
                                    <Arrow direction="right" />
                                    <StepButton index={1} />
                                    <Arrow direction="right" />
                                    <StepButton index={2} />
                                    <Arrow direction="right" />
                                    <StepButton index={3} />

                                    {/* Vertical Arrow to Row 2 */}
                                    <div className="absolute top-[100%] right-[30px] md:right-[40px] h-10 flex items-center justify-center">
                                        <Arrow direction="down" />
                                    </div>
                                </div>

                                {/* Row 2: 7 <- 6 <- 5 */}
                                <div className="flex items-center justify-start gap-1 md:gap-4 relative pr-12 md:pr-16">
                                    <StepButton index={6} />
                                    <Arrow direction="left" />
                                    <StepButton index={5} />
                                    <Arrow direction="left" />
                                    <StepButton index={4} />
                                </div>

                            </div>

                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/20 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interaction Circle */}
                    <div className="relative flex items-center justify-center lg:order-2 h-[450px] md:h-[550px]">
                        {/* Dotted Circular Path */}
                        <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full border border-dashed border-black/30 pointer-events-none" />

                        {/* Icons Container */}
                        <motion.div
                            animate={{ rotate: -(360 / JOURNEY_STEPS.length) * activeStep }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px]"
                        >
                            {JOURNEY_STEPS.map((step, index) => {
                                const angle = (360 / JOURNEY_STEPS.length) * index;
                                const radius = window.innerWidth < 768 ? 140 : 225;
                                const x = radius * Math.cos((angle * Math.PI) / 180);
                                const y = radius * Math.sin((angle * Math.PI) / 180);
                                const isActive = activeStep === index;
                                const isHovered = hoveredStep === index;

                                return (
                                    <div
                                        key={index}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            transform: `translate(${x}px, ${y}px) rotate(${(360 / JOURNEY_STEPS.length) * activeStep}deg)`,
                                        }}
                                    >
                                        <motion.div
                                            onClick={() => handleStepClick(index)}
                                            onMouseEnter={() => setHoveredStep(index)}
                                            onMouseLeave={() => setHoveredStep(null)}
                                            whileHover={{ scale: 1.1 }}
                                            animate={{
                                                scale: isActive ? 1.2 : (isHovered ? 1.1 : 1),
                                                borderColor: (isActive || isHovered) ? "black" : "transparent"
                                            }}
                                            className={`w-10 h-10 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-2xl border-2 transition-all duration-500 cursor-pointer group`}
                                            style={{ backgroundColor: step.color }}
                                        >
                                            <motion.div
                                                animate={{ scale: isActive ? 1.3 : 1 }}
                                                className="text-black transition-all duration-300"
                                            >
                                                {step.icon}
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </motion.div>

                        {/* Central Content Area */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[200px] md:w-[350px] text-center z-10 px-4">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeStep}
                                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="pointer-events-auto"
                                    >
                                        <h3 className="text-xl md:text-4xl font-black mb-2 md:mb-4 uppercase tracking-tighter drop-shadow-lg"
                                            style={{ color: JOURNEY_STEPS[activeStep].color }}
                                        >
                                            {JOURNEY_STEPS[activeStep].title}
                                        </h3>
                                        <div className="space-y-4">
                                            <p className="text-black text-[11px] md:text-sm font-bold leading-relaxed max-w-[300px] mx-auto">
                                                {JOURNEY_STEPS[activeStep].description} {JOURNEY_STEPS[activeStep].extraDetails}
                                            </p>
                                            
                                            <Link 
                                                to="/about" 
                                                className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold transition-all hover:gap-3"
                                                style={{ color: JOURNEY_STEPS[activeStep].color }}
                                            >
                                                Learn More
                                                <span>→</span>
                                            </Link>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Decorative background glow */}
                        <motion.div
                            animate={{
                                backgroundColor: JOURNEY_STEPS[activeStep].color,
                                opacity: [0.05, 0.1, 0.05]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] blur-[120px] rounded-full pointer-events-none"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default OurJourney;
