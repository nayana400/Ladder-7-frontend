import React from "react";

const VideoCard = ({ title, description, video, link }) => {
    return (
        <div className="relative rounded-xl overflow-hidden shadow-xl group w-[480px] border border-white/5 hover:border-blue-500/30 transition-all duration-300">

            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="h-[260px] overflow-hidden">
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="aspect-video w-full origin-top -mt-[10px] object-cover"
                    />
                </div>
            </a>

            <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md p-3 border-t border-white/5">
                <h3 className="text-white font-bold text-xl mb-1">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
            </div>

        </div>
    );
};

export default VideoCard;