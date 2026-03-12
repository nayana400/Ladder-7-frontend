import TubesCursorBackground from "./HeroBackground";

export default function Hero() {
    return (
        <section className="relative grid lg:grid-cols-2 gap-16 items-start px-6 md:px-16 pt-8 overflow-hidden">
            <TubesCursorBackground />

            {/* Image */}
            <div className="relative z-10 max-w-md lg:max-w-lg lg:ml-0 mx-auto lg:sticky lg:top-32">
                <img
                    src="/About/AboutUs.png"
                    alt="About Us"
                    className="w-full h-auto object-cover rounded-2xl shadow-xl"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 lg:pl-10">

                <div className="mb-10 text-left text-white">
                    <h1 className="text-5xl md:text-5xl font-bold tracking-tight leading-tight">
                        About Us
                    </h1>
                </div>

                <div className="space-y-8 text-left">
                    <p className="text-base md:text-lg mb-8 text-justify">
                        Ladder7, the premier skill development and training division of Neyndra Global Solutions Private Limited, is dedicated to empowering individuals in their journey towards personal as well as professional growth. Our training programs focuses on fundamental, transferable, aspirational, and job-specific skills to help the individuals to thrive in today's competitive job market. By enhancing core competencies and well-being, we provide learners with the tools that they need to succeed in their chosen fields, fostering a lifelong commitment to skill improvement and career advancement.
                    </p>

                    <p className="text-base md:text-lg mb-8 text-justify">
                        Our outcome-oriented educational approach emphasizes on identifying and developing each learner’s core strengths, setting them up for success in their desired career paths. Through targeted skill-building, we help individuals to achieve their goals and fulfill their aspirations. Ladder7 is committed to bridging up the gap between learning and career readiness, positioning individuals for long-term success in their roles that align with their personal ambitions and professional potential.
                    </p>
                </div>

            </div>
        </section>
    );
}