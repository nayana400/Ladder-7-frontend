import React, { useState } from "react";
import { Cloud, Cpu, Handshake, BarChart3, ShieldCheck, BookOpen, GraduationCap, Briefcase, Lightbulb, TrendingUp } from "lucide-react";

const whyChooseFeatures = [
    {
        icon: Cloud,
        title: "Complete IT Solutions",
        desc: "From consulting to implementation and support, we offer end-to-end services tailored to your needs.",
    },
    {
        icon: Cpu,
        title: "Innovative Expertise",
        desc: "Our team uses the latest technology to deliver innovative, cutting-edge solutions.",
    },
    {
        icon: Handshake,
        title: "Client-First Approach",
        desc: "Your goals and challenges guide everything we do.",
    },
    {
        icon: BarChart3,
        title: "Proven Results",
        desc: "With years of experience and successful projects, we’re a name you can rely on.",
    },
    {
        icon: ShieldCheck,
        title: "Commitment to Excellence",
        desc: "Quality, reliability, and improvement are at the core of our work.",
    },
];

const upskillingFeatures = [
    {
        icon: BookOpen,
        title: "Personalised Upskilling",
        desc: "Our programs are designed to meet specific industry needs, ensuring practical and relevant learning.",
    },
    {
        icon: GraduationCap,
        title: "Expert Guidance",
        desc: "Learn from experienced professionals from top MNCs who bring real-world knowledge to every session.",
    },
    {
        icon: Lightbulb,
        title: "Hands-On Approach",
        desc: "We emphasise practical skills to prepare you for real-world challenges.",
    },
    {
        icon: Briefcase,
        title: "Flexible Learning",
        desc: "With customisable options, we make upskilling accessible and convenient for everyone.",
    },
    {
        icon: TrendingUp,
        title: "Career-Focused Outcomes",
        desc: "Our training is designed to help you excel in your role and grow in your career.",
    },
];

const WhyChooseUs = () => {
    const [activeTab, setActiveTab] = useState("whyChooseUs");

    const currentFeatures = activeTab === "whyChooseUs" ? whyChooseFeatures : upskillingFeatures;
    const heading = activeTab === "whyChooseUs" ? "Why Choose Us?" : "Upskill Your Needs";
    const subHeading = activeTab === "whyChooseUs"
        ? "The differentiator that makes Ladder7 your ideal partner."
        : "Tailored programs to empower your career journey.";

    return (
        <section className="relative bg-black text-white px-6 md:px-16 py-20">

            {/* Toggle Button */}
            <div className="flex justify-center mb-12">
                <div className="relative flex items-center bg-[#112a4f] rounded-full p-2 w-[420px] shadow-[inset_0_4px_10px_rgba(0,0,0,0.6)] border border-white/10">

                    {/* Sliding 3D Background */}
                    <div
                        className={`absolute top-2 bottom-2 w-[calc(50%-8px)] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-[0_4px_15px_rgba(0,190,255,0.4),inset_0__2px_4px_rgba(255,255,255,0.4)] transition-all duration-500 ease-out z-0`}
                        style={{ left: activeTab === "whyChooseUs" ? "8px" : "calc(50%)" }}
                    ></div>

                    <button
                        onClick={() => setActiveTab("whyChooseUs")}
                        className={`relative z-10 flex-1 py-3 text-lg font-bold rounded-full transition-all duration-500 ${activeTab === "whyChooseUs" ? "text-white" : "text-gray-400 hover:text-white"}`}
                    >
                        Why Choose Us?
                    </button>

                    <button
                        onClick={() => setActiveTab("upskillingNeeds")}
                        className={`relative z-10 flex-1 py-3 text-lg font-bold rounded-full transition-all duration-500 ${activeTab === "upskillingNeeds" ? "text-white" : "text-gray-400 hover:text-white"}`}
                    >
                        Upskilling Needs
                    </button>

                </div>
            </div>

            {/* Heading */}
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center">
                    {heading}
                </h2>

                <p className="text-md text-center">
                    {subHeading}
                </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8">
                {currentFeatures.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className={`bg-[#0e2546]/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-[#0e2546]/90 hover:border-blue-500/30 transition-all group flex flex-col items-center
              ${index === 4 ? "md:col-span-2" : ""}`}
                        >
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0e2546] transition-colors shadow-lg">
                                <Icon className="text-blue-400 w-7 h-7" strokeWidth={1.5} />
                            </div>

                            <h3 className="text-lg font-semibold mb-2 text-center">
                                {item.title}
                            </h3>

                            <p className="text-sm text-center">
                                {item.desc}
                            </p>
                        </div>
                    );
                })}
            </div>

        </section>
    );
};

export default WhyChooseUs;

