import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import AboutParticles from "./AboutParticles";
import AboutThreeText from "./AboutThreeText";

const About = () => {
    return (
        <div className="bg-black min-h-screen text-white selection:bg-blue-500/30 relative">
            {/* Background Particles */}
            <div className="fixed inset-0 z-0">
                <AboutParticles />
            </div>

            <Navbar />

            <main className="max-w-7xl mx-auto px-6 pt-40 pb-20 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

                    {/* Left Section with Image */}
                    <div className="space-y-8">
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
                                <img
                                    src="/About/AboutUs.png"
                                    alt="About Us"
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:pl-8">
                        <div className="space-y-8">

                            {/* Section Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit mb-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">Our Mission</span>
                            </div>

                            <div className="relative -ml-4 md:-ml-8 mb-6">
                                <AboutThreeText text="About Ladder7" size={35} />
                            </div>

                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                <span className="font-bold text-blue-400">Ladder7</span>, the premier
                                <span className="text-blue-400"> skill development </span> and training division of
                                <span className="font-semibold text-white"> Neyndra Global Solutions Private Limited</span>,
                                is dedicated to empowering individuals in their journey towards personal as well as professional growth.
                            </p>

                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed border-l-2 border-blue-500/30 pl-6 italic">
                                Our training programs focus on <span className="text-purple-400">fundamental, transferable, aspirational,</span> and job-specific skills to help
                                individuals thrive in today’s competitive job market.
                            </p>

                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                                By enhancing <span className="text-blue-400 font-medium">core competencies</span> and well-being, we provide learners with the tools they need to succeed
                                in their chosen fields, fostering a lifelong commitment to skill improvement and career advancement.
                            </p>

                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                                Our outcome-oriented educational approach emphasizes identifying and developing each learner’s core
                                strengths, setting them up for success in their desired career paths. Through targeted
                                <span className="text-purple-400"> skill-building</span>, we help individuals achieve their goals and fulfill their aspirations.
                            </p>

                        </div>
                    </div>

                </div>

                {/* Features / Stats Section */}
                <div className="grid md:grid-cols-3 gap-8 mt-40">
                    {[
                        { title: "Immersive Design", desc: "Pushing the boundaries of what's possible in the browser.", icon: "✨" },
                        { title: "Technical Excellence", desc: "Architecting scalable 3D applications with React Three Fiber.", icon: "⚡" },
                        { title: "Premium Aesthetics", desc: "Curated experiences that resonate with elegance and power.", icon: "🎨" }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-500/30 transition-all group">
                            <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default About;
