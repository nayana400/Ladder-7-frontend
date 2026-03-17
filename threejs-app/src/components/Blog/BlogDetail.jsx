import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import BorealSky from "./BorealSky";
import { technicalBlogs, events } from "./blogData";

export default function BlogDetail() {
    const { type, id } = useParams();
    
    const data = type === "technical-insights" ? technicalBlogs : events;
    const item = data.find(i => i.id === parseInt(id));

    if (!item) {
        return (
            <div className="bg-[#020617] min-h-screen text-white flex flex-col items-center justify-center p-10">
                <h1 className="text-4xl font-black mb-6">404 | INSIGHT NOT FOUND</h1>
                <Link to="/blog" className="text-blue-500 hover:underline">Return to Hub</Link>
            </div>
        );
    }

    return (
        <div className="bg-transparent min-h-screen text-white">
            <Navbar />
            <section className="relative pt-40 pb-20 px-6 lg:px-20 min-h-screen overflow-hidden">
                <BorealSky />
                
                <div className="relative z-10 max-w-4xl mx-auto glass-card rounded-[3rem] p-10 md:p-16 border border-white/10 backdrop-blur-3xl shadow-2xl">
                    <Link to="/blog" className="text-blue-400 font-bold mb-8 inline-flex items-center gap-2 group">
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        BACK TO HUB
                    </Link>

                    <div className="mb-10">
                        <span className="px-4 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-black uppercase border border-blue-500/30">
                            {item.category || "Event"}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black mt-6 mb-4 leading-tight">{item.title}</h1>
                        <div className="text-gray-400 flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                            <span>{item.date}</span>
                            <span>•</span>
                            <span>By {item.author}</span>
                        </div>
                    </div>

                    <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-xl text-gray-300 leading-relaxed whitespace-pre-line">
                            {item.desc}
                        </p>
                        {/* More detailed content could go here if available */}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
