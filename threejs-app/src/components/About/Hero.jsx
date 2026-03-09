import TubesCursorBackground from "./HeroBackground";

export default function Hero() {
    return (
        <section className="relative grid lg:grid-cols-2 gap-16 items-start px-6 md:px-16 mb-28 pt-12 overflow-hidden">
            <TubesCursorBackground />

            {/* Image (Now on the Left for Desktop) */}
            <div className="relative group z-10 max-w-md lg:max-w-lg lg:ml-0 mx-auto lg:sticky lg:top-32">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-[#0e2546]/80 backdrop-blur-md border border-white/10 rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden shadow-2xl">
                    <img
                        src="/About/AboutUs.png"
                        alt="About Us"
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-700 group-hover:scale-105"
                    />

                </div>
            </div>

            {/* Content (Now on the Right for Desktop) */}
            <div className="relative z-10 lg:pl-10">
                <p className="text-blue-400 text-sm tracking-wider mb-4 animate-pulse uppercase font-bold text-left">
                    A Passion for Innovation
                </p>

                <div className="mb-10 text-left text-white">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                        About <span className="text-blue-400">Us</span>
                    </h1>
                </div>

                <div className="space-y-8 text-left">
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify">
                        Ladder7, the premier skill development and training division of Neyndra Global Solutions Private Limited, is dedicated to empowering individuals in their journey towards personal as well as professional growth. Our training programs focuses on fundamental, transferable, aspirational, and job-specific skills to help the individuals to thrive in today's competitive job market. By enhancing core competencies and well-being, we provide learners with the tools that they need to succeed in their chosen fields, fostering a lifelong commitment to skill improvement and career advancement.
                    </p>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify">
                        Our outcome-oriented educational approach emphasizes on identifying and developing each learner’s core strengths, setting them up for success in their desired career paths. Through targeted skill-building, we help individuals to achieve their goals and fulfill their aspirations. Ladder7 is committed to bridging up the gap between learning and career readiness, positioning individuals for long-term success in their roles that align with their personal ambitions and professional potential.
                    </p>
                </div>

                <div className="flex flex-wrap gap-6 mt-12">
                    <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 font-bold text-lg hover:scale-105 active:scale-95 text-white">
                        Explore Programs
                    </button>

                    <button className="border border-white/20 hover:border-white/40 px-10 py-4 rounded-xl transition-all backdrop-blur-sm font-bold text-lg hover:bg-white/5 active:scale-95 text-white">
                        Watch Video
                    </button>
                </div>
            </div>
        </section>
    );
}
