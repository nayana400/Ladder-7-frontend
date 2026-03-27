import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const containerRef = useRef(null);
    const boxRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: boxRef.current,
                start: "top 90%",
            }
        });

        tl.from(boxRef.current, {
            scale: 0.95,
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
        })
        .from(".cta-content > *", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=0.6")
        .from(".cta-button", {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)"
        }, "-=0.8");

        // Subtle float for background circles
        gsap.to(".bg-circle-1", {
            y: -50,
            x: -30,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        gsap.to(".bg-circle-2", {
            y: 50,
            x: 30,
            duration: 12,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="px-6 md:px-16 pb-32">
            <div 
                ref={boxRef}
                className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 p-12 md:p-24 rounded-[3rem] flex flex-col lg:flex-row justify-between items-center gap-12 shadow-[0_30px_100px_rgba(37,99,235,0.25)] relative overflow-hidden group border border-white/10"
            >
                {/* Background Decoratives */}
                <div className="bg-circle-1 absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] group-hover:scale-125 transition-transform duration-1000" />
                <div className="bg-circle-2 absolute bottom-0 left-0 w-64 h-64 bg-black/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]" />
                
                {/* Animated Grid Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

                <div className="cta-content relative z-10 text-center lg:text-left max-w-2xl text-white">
                    <h3 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter italic">
                        READY TO TRANSFORM <br />
                        <span className="text-blue-200">YOUR FUTURE PATH?</span>
                    </h3>
                    <p className="text-blue-100 text-xl md:text-2xl opacity-80 leading-relaxed font-light">
                        Join 5,000+ professionals who have already accelerated
                        their career trajectory with <span className="font-bold">Ladder7</span>.
                    </p>
                </div>
                
                <button className="cta-button relative z-10 bg-white text-blue-700 hover:text-white hover:bg-transparent px-14 py-6 rounded-2xl font-black text-xl transition-all transform hover:scale-105 active:scale-95 shadow-2xl border-2 border-white shadow-blue-900/40">
                    Get Started Today
                </button>
            </div>
        </section>
    );
}

