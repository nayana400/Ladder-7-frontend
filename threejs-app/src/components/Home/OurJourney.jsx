import React from 'react';

const JOURNEY_STEPS = [
    {
        title: "Reflection",
        description: "Reflect on your past successes and challenges to understand.",
        extraDetails: "what worked, what didn’t, and how it made you feel. This provides insights into your motivations and areas for growth.",
        color: "#FF5722",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
        )
    }
];

function OurJourney() {
    return (
        <section className="py-12 bg-black text-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 px-4">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 mt-0">Our Journey</h2>
                    <p className="text-white mx-auto text-lg max-w-3xl">
                        Explore L7 framework is a strategic model that focuses on seven essential elements to drive sustainable success
                    </p>
                </div>

                {/* Horizontal Timeline Container */}
                <div className="relative mt-20 hidden lg:block">
                    {/* The Progress Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2"></div>

                    <div className="grid grid-cols-7 gap-4 relative z-10 h-full">
                        {JOURNEY_STEPS.map((step, idx) => {
                            const isAbove = idx % 2 === 0;
                            return (
                                <div key={idx} className="flex flex-col items-center group">
                                    {/* Content Card (Above) */}
                                    <div className={`transition-all duration-700 ease-out transform ${isAbove
                                        ? 'mb-8 -translate-y-2'
                                        : 'mb-8 opacity-0 pointer-events-none h-0'
                                        }`}>
                                        {isAbove && (
                                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl w-56 text-center group-hover:bg-white/10 transition-all duration-500 overflow-hidden flex flex-col items-center">
                                                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                                                <p className="text-white text-[10px] font-bold opacity-90">
                                                    {step.description}
                                                </p>
                                                {/* This wrapper extends on hover */}
                                                <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                                                    <div className="mt-0">
                                                        <p className="text-white text-[9px] font-medium leading-relaxed">
                                                            {step.extraDetails}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Vertical Connector Line */}
                                    <div className={`w-0.5 h-10 bg-gradient-to-b ${isAbove ? 'from-white/20 to-transparent' : 'from-transparent to-white/20'} mb-1 transition-all duration-500 ${isAbove ? 'opacity-40 group-hover:h-8 group-hover:opacity-100' : 'opacity-0 h-0'}`}></div>

                                    {/* The Node (Circle) */}
                                    <div
                                        style={{ backgroundColor: step.color }}
                                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl relative z-20 transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                                    >
                                        <div className="transition-transform duration-500 group-hover:scale-110">{step.icon}</div>
                                        <div className="absolute inset-0 rounded-full bg-inherit opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
                                    </div>

                                    {/* Vertical Connector Line */}
                                    <div className={`w-0.5 h-10 bg-gradient-to-b ${!isAbove ? 'from-white/20 to-transparent' : 'from-transparent to-white/20'} mt-1 transition-all duration-500 ${!isAbove ? 'opacity-40 group-hover:h-8 group-hover:opacity-100' : 'opacity-0 h-0'}`}></div>

                                    {/* Content Card (Below) */}
                                    <div className={`transition-all duration-700 ease-out transform ${!isAbove
                                        ? 'mt-8 translate-y-2'
                                        : 'mt-8 opacity-0 pointer-events-none h-0'
                                        }`}>
                                        {!isAbove && (
                                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl w-56 text-center group-hover:bg-white/10 transition-all duration-500 overflow-hidden flex flex-col items-center">
                                                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                                                <p className="text-white text-[10px] font-bold opacity-90">
                                                    {step.description}
                                                </p>
                                                {/* This wrapper extends on hover */}
                                                <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                                                    <div className="mt-0">
                                                        <p className="text-white text-[9px] font-medium leading-relaxed">
                                                            {step.extraDetails}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Vertical Timeline */}
                <div className="lg:hidden flex flex-col gap-12 relative px-4">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>

                    {JOURNEY_STEPS.map((step, idx) => (
                        <div key={idx} className="flex gap-8 relative items-start group">
                            <div
                                style={{ backgroundColor: step.color }}
                                className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg relative z-10 transition-transform duration-500 group-hover:scale-105"
                            >
                                <div className="scale-75">{step.icon}</div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex-grow">
                                <h3 className="text-lg font-bold mb-1 text-white">{step.title}</h3>
                                <p className="text-white text-[10px] font-bold opacity-90">{step.description}</p>
                                <p className="text-white text-[9px] font-medium leading-relaxed mb-2">{step.extraDetails}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurJourney;
