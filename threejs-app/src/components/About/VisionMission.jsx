import React from "react";


const VisionMission = () => {
    return (
        <section className="relative bg-black text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden">


            <div className="relative z-10">
                {/* VISION */}

                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

                    {/* Text */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Our <span className="text-blue-400">VISION</span>
                        </h2>

                        <p className="text-gray-300 leading-relaxed text-lg">
                            Ladder7, the premier skill development and training division of
                            Neyndra Global Solutions Private Limited, is dedicated to empowering
                            individuals in their journey towards personal as well as professional
                            growth. Our training programs focus on fundamental, transferable,
                            aspirational, and job-specific skills to help individuals thrive in
                            today’s competitive job market.
                            <br /><br />
                            By enhancing core competencies and well-being, we provide learners
                            with the tools they need to succeed in their chosen fields,
                            fostering a lifelong commitment to skill improvement and career
                            advancement.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="relative group">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                            alt="team vision"
                            className="rounded-2xl shadow-2xl object-cover h-96 w-full hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>

                </div>

                {/* MISSION */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Images */}
                    <div className="order-2 md:order-1 relative group">
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                            alt="team working"
                            className="rounded-2xl shadow-2xl object-cover h-96 w-full hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>


                    {/* Text */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Our <span className="text-blue-400">MISSION</span>
                        </h2>

                        <p className="text-gray-300 leading-relaxed text-lg">
                            Our outcome-oriented educational approach emphasizes identifying
                            and developing each learner’s core strengths, setting them up for
                            success in their desired career paths.
                            <br /><br />
                            Through targeted skill-building, we help individuals achieve their
                            goals and fulfill their aspirations. Ladder7 is committed to
                            bridging the gap between learning and career readiness,
                            positioning individuals for long-term success in roles that align
                            with their personal ambitions and professional potential.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};


export default VisionMission;
