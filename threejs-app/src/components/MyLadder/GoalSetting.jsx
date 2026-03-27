import React from "react";
import FeatureCard from "./FeatureCard";
import { BookOpen, Target, Sparkles, List, PartyPopper, History, Rocket, TrendingUp, UserCheck, Focus } from "lucide-react";

const verticalFeatures = [
    {
        title: "Realization",
        desc: "Become aware of your current state—your skills, mindset, and well-being. This clarity identifies what's holding you back.",
        icon: <BookOpen className="w-6 h-6 text-[#5E83F0]" />,
        bgColor: "bg-[#18264A]"
    },
    {
        title: "Reflection",
        desc: "Analyze past successes and challenges to understand motivations and identify core areas for your professional growth.",
        icon: <Focus className="w-6 h-6 text-[#A76CF2]" />,
        bgColor: "bg-[#2A1D4E]"
    },
    {
        title: "Visualization",
        desc: "Mentally picture your goals to stay motivated. Creating a clear image of success builds the confidence needed to drive forward.",
        icon: <Sparkles className="w-6 h-6 text-[#5E83F0]" />,
        bgColor: "bg-[#18264A]"
    }
];

const horizontalFeaturesRow1 = [
    {
        title: "Set Action Plan",
        desc: "Translate goals into a detailed roadmap outlining steps, timelines, and milestones. A structured plan turns aspirations into actionable reality.",
        icon: <List className="w-6 h-6 text-[#A76CF2]" />,
        bgColor: "bg-[#2A1D4E]"
    },
    {
        title: "Goal Setting",
        desc: "Establish concrete, SMART goals—specific, measurable, attainable, relevant, and time-bound—that align perfectly with your values.",
        icon: <Target className="w-6 h-6 text-[#5E83F0]" />,
        bgColor: "bg-[#18264A]"
    }
];

const horizontalFeaturesRow2 = [
    {
        title: "Achieve & Celebrate",
        desc: "Celebrate small wins to boost motivation. Acknowledging milestones fosters accomplishment and long-term success.",
        icon: <PartyPopper className="w-6 h-6 text-[#A76CF2]" />,
        bgColor: "bg-[#2A1D4E]"
    },
    {
        title: "Track & Improve",
        desc: "Regularly monitor progress and adjust as needed to ensure continuous improvement and alignment.",
        icon: <History className="w-6 h-6 text-[#5E83F0]" />,
        bgColor: "bg-[#18264A]"
    }
];

export default function GoalSettingSection() {
    return (
        <section className="bg-gradient-to-b from-[#080c1e] via-[#04060E] to-[#0B0F1A] text-white py-24 px-6 md:px-12 lg:px-20 font-sans tracking-wide">
            
            {/* Header section */}
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h1 className="text-4xl md:text-[3rem] font-extrabold mb-6 tracking-tight text-white">
                    Personalized Goal Setting
                </h1>
                <p className="text-gray-300 text-[1rem] md:text-[1.05rem] leading-[1.8] max-w-3xl mx-auto font-light">
                    A tailored approach to career development, aligning your professional journey
                    with your unique skills and aspirations for meaningful achievement.
                </p>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                
                {/* Full Width Top Banner Image Card */}
                <div className="rounded-[2rem] border border-[#1A2035] shadow-2xl shadow-blue-500/10 relative overflow-hidden w-full h-[300px] md:h-[450px] lg:h-[550px] group">
                    <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop" 
                        alt="Goal Setting Strategy and Analytics" 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Gradient Overlay framing the image into the dark background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04060E] via-[#04060E]/20 to-transparent pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#04060E]/50 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Vertical Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
                    {verticalFeatures.map((item, index) => (
                        <div key={index} className={index === 1 ? "md:translate-y-12" : ""}>
                            <FeatureCard layout="vertical" {...item} />
                        </div>
                    ))}
                </div>

                {/* Horizontal Cards Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {horizontalFeaturesRow1.map((item, index) => (
                        <FeatureCard key={index} layout="horizontal" {...item} />
                    ))}
                </div>

                {/* Horizontal Cards Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {horizontalFeaturesRow2.map((item, index) => (
                        <FeatureCard key={index} layout="horizontal" {...item} />
                    ))}
                </div>

            </div>
        </section>
    );
}