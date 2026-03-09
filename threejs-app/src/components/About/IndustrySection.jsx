import React from "react";
import IndustrySectionBackground from "./IndustrySectionBackground";

const IndustrySection = () => {
    return (
        <section className="relative w-full bg-black text-white overflow-hidden">
            {/* Floating Background Layer - Sticky to viewport */}
            <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
                <div className="sticky top-0 h-screen w-full">
                    <IndustrySectionBackground />
                </div>
            </div>

            <div className="relative z-10 py-32 px-6 md:px-20 max-w-7xl mx-auto">


                {/* Section 1 */}
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Transforming Industries with Innovative Technology Solutions
                </h2>

                <p className="text-gray-300 leading-relaxed text-lg mb-16">
                    At Ladder7 Next Step Solutions, we specialize in providing cutting-edge
                    technology solutions to tackle complex industry challenges. Our
                    dedicated R&D team continuously identifies business challenges and
                    develops innovative solution prototypes, focusing on technology,
                    services, products, and environmental sustainability. With a team of
                    seasoned professionals, we offer a range of services, including dynamic
                    website creation, digital transformation, mobile app development, and
                    comprehensive digital marketing solutions. Our digital marketing
                    expertise spans SEO, social media marketing, content creation, and
                    more, helping businesses establish a strong online presence and drive
                    growth.
                </p>

                {/* Section 2 */}
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Empowering Next-Gen Talents with AI-Driven Career Solutions and
                    Value-Based Education
                </h2>

                <p className="text-gray-300 leading-relaxed text-lg">
                    Ladder7 Next Step Solutions is committed to nurturing the next
                    generation of talents by creating optimal career paths. As one of the
                    best emerging value-based education promoters, we offer various IT and
                    management level upskilling programs, along with transferable skills
                    that enhance employability. Our AI-based upskilling solutions help
                    individuals discover their true potential, aligning their personality,
                    skills, and career aspirations. By providing personalized
                    recommendations for upskilling and reskilling, we enable individuals to
                    make informed decisions.
                </p>

            </div>
        </section>
    );
};

export default IndustrySection;
