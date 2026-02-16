import React from 'react';
import advisor1 from "../../assets/Images/advisor1.jpg"
const Advisor = () => {
    const features = [
        "Personalised Goal Setting",
        "Free Career Counselling",
        "Free Access to Ladder7 Events"
    ];

    return (
        <section className="bg-[#2d2387] text-white py-12 px-6 md:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Text Content */}
                <div className="flex-1 text-left">
                    <h2 className="text-3xl md:text-5xl font-bold mb-1 leading-tight">
                        Talk to our Advisor
                    </h2>
                    <p className="text-white text-lg mb-2 uppercase tracking-widest">
                        AND GET
                    </p>

                    <div className="flex flex-nowrap gap-6 mb-4 overflow-x-auto no-scrollbar">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                                <span className="text-yellow-400 text-lg font-bold">✓</span>
                                <span className="text-base font-bold">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <a href="" className="inline-block mt-2 bg-[#c53030] text-white py-4 px-10 rounded text-base shadow-xl hover:bg-red-700 transition-colors">
                        Request a call
                    </a>
                </div>

                {/* Illustration */}
                <div className="flex-1 relative">
                    <div className="relative z-10 w-full max-w-[500px] mx-auto lg:mr-0">
                        <img
                            src={advisor1}
                            alt="Talk to our Advisor"
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advisor;
