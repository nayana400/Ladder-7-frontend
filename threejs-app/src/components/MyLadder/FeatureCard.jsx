import React from 'react';

const FeatureCard = ({ title, desc, icon, bgColor, layout = 'vertical' }) => {
    // Determine the flex layout based on the prop
    if (layout === 'horizontal') {
        return (
            <div className="bg-[#0B101E] rounded-[1.5rem] p-8 md:p-10 border border-[#1A2035] transition-all duration-300 hover:border-[#2F3A5A] hover:shadow-2xl flex flex-col md:flex-row items-start gap-6 relative group">
                <div className={`w-14 h-14 shrink-0 rounded-[1rem] flex items-center justify-center ${bgColor} transition-transform duration-300 group-hover:scale-110`}>
                    {icon}
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[1.2rem] font-bold text-white mb-2">{title}</h3>
                    <p className="text-[0.95rem] text-gray-400 leading-[1.6] font-light">{desc}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#0B101E] rounded-[1.25rem] p-8 md:p-9 border border-[#1A2035] transition-all duration-300 hover:border-[#2F3A5A] hover:shadow-2xl flex flex-col items-start gap-4 relative group h-full">
            <div className={`w-11 h-11 shrink-0 rounded-[0.75rem] flex items-center justify-center ${bgColor} transition-transform duration-300 group-hover:-translate-y-1`}>
                {icon}
            </div>
            <div className="flex flex-col mt-2">
                <h3 className="text-[1.15rem] font-bold text-white mb-2">{title}</h3>
                <p className="text-[0.85rem] text-gray-400 leading-[1.7] font-light">{desc}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
