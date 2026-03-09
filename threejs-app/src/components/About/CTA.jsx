import React from "react";

export default function CTA() {
    return (
        <section className="px-6 md:px-16 pb-20">
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 p-12 md:p-20 rounded-[40px] flex flex-col lg:flex-row justify-between items-center gap-10 shadow-2xl shadow-blue-500/30 relative overflow-hidden group border border-white/10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]"></div>

                <div className="relative z-10 text-center lg:text-left max-w-2xl text-white">
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Ready to transform your <span className="text-blue-200">future path?</span>
                    </h3>
                    <p className="text-blue-100 text-xl md:text-2xl opacity-80 leading-relaxed font-medium">
                        Join 5,000+ professionals who have already accelerated
                        their career trajectory with Ladder7.
                    </p>
                </div>
                <button className="relative z-10 bg-white text-blue-600 hover:text-white hover:bg-blue-600 px-12 py-5 rounded-2xl font-black text-xl transition-all transform hover:scale-105 active:scale-95 shadow-2xl border-2 border-transparent hover:border-white shadow-blue-900/40">
                    Get Started Today
                </button>
            </div>
        </section>
    );
}
