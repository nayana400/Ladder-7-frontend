import React, { useRef } from "react";
import IndustrySectionBackground from "./IndustrySectionBackground";
import IndustryHeading from "./IndustryHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const IndustrySection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Staggered reveal for each block
        const blocks = gsap.utils.toArray(".industry-block");

        blocks.forEach((block) => {
            gsap.from(block, {
                opacity: 0,
                y: 100,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: block,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full bg-black text-white overflow-hidden">
            {/* Floating Background Layer - Sticky to viewport */}
            <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
                <div className="sticky top-0 h-screen w-full">
                    <IndustrySectionBackground />
                </div>
            </div>

            <div className="relative z-10 py-32 px-6 md:px-20 max-w-7xl mx-auto space-y-32">
                {/* Section 1 */}
                <div className="industry-block w-full">
                    <IndustryHeading text="Transforming Industries with Innovative Technology Solutions" />

                    <p className="text-base md:text-lg mb-8 text-justify">
                        At Ladder7 Next Step Solutions, we specialize in providing cutting-edge
                        technology solutions to tackle complex industry challenges. Our
                        dedicated R&D team continuously identifies business challenges and
                        develops innovative solution prototypes, focusing on technology,
                        services, products, and environmental sustainability
                        With a team of seasoned professionals, we offer a range of services, including dynamic
                        website creation, digital transformation, mobile app development, and
                        comprehensive digital marketing solutions.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="industry-block w-full">
                    <IndustryHeading text="Empowering Next-Gen Talents with AI-Driven Career Solutions and Value-Based Education " />

                    <p className="text-base md:text-lg mb-8 text-justify">
                        Ladder7 Next Step Solutions is committed to nurturing the next
                        generation of talents by creating optimal career paths. As one of the
                        best emerging value-based education promoters, we offer various IT and
                        management level upskilling programs, along with transferable skills
                        that enhance employability.
                        Our AI-based upskilling solutions help
                        individuals discover their true potential, aligning their personality,
                        skills, and career aspirations.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IndustrySection;
