import { useParams, Link } from "react-router-dom";
import React, { Suspense } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ladder from "../../../assets/Images/ladder.jpg"
import logoImg from "../../../assets/Images/LADDER 7 LOGO.png";
const PRODUCTS_DATA = {
    "1": {
        title: "My Ladder",
        subtitle: "Achieve your goals with ease through personalized strategies and focused, step-by-step guidance.",
        description: "A step-by-step program designed to help individuals set and achieve career goals that align with their skills and aspirations. The program guides you through a structured process, enabling you to progress systematically toward your defined objectives over a specified period. By focusing on skill development, goal alignment, and continuous improvement, MyLadder ensures that individuals you effectively \"climb the ladder\" to reach your desired career milestones, ultimately leading to sustainable career success and personal growth.",
        image: ladder,
        fullDetails: [
            "Personalized career roadmap based on skills and aspirations.",
            "AI-enabled gap analysis to identify areas for improvement.",
            "One-on-one mentoring with industry veterans.",
            "Regular progress tracking and milestone celebrations."
        ]
    },
    "2": {
        title: "Mind Gym",
        subtitle: "Train your mind to unlock success through focused mental conditioning and resilience-building techniques.",
        description: "Interactive mind exercise for a healthy mind which will enable you to practice stress management and improve your decision making skills leading to a better life.",
        image: "https://images.unsplash.com/photo-1593720213428-28a5b9ed9461?w=1200",
        fullDetails: [
            "Stress management techniques for high-pressure environments.",
            "Focus and concentration exercises for peak performance.",
            "Emotional intelligence (EQ) development.",
            "Decision-making frameworks for career and life."
        ]
    },
    "3": {
        title: "Mirror Me",
        subtitle: "Discover your true potential by exploring strengths and unlocking avenues for personal success.",
        description: "Mirror Me is a self-reflection program to make anybody realize what you know about yourself in terms of talents, IQ, EQ, and Goals through a set of simple programs.",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200",
        fullDetails: [
            "Comprehensive self-assessment tools.",
            "Identification of hidden talents and strengths.",
            "Aptitude and IQ analysis.",
            "Goal alignment based on true personal identity."
        ]
    },
    "4": {
        title: "Fill Dots",
        subtitle: "Bridge the gap to success by connecting missing pieces and achieving your dreams.",
        description: "Specially designed program to upskill and bridge the gap between you and your next best career.",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200",
        fullDetails: [
            "Tailored skilling programs for in-demand roles.",
            "Bridge courses for transitioning between industries.",
            "Practical workshop-based learning.",
            "Certification of excellence upon completion."
        ]
    }
};

function ProductDetail() {
    const { id } = useParams();
    const program = PRODUCTS_DATA[id];

    if (!program) {
        return (
            <div className="min-h-screen bg-[#112240] text-white flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                <Link to="/" className="text-purple-400 hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#000000] text-white">
            <Navbar />
            {/* Header section with 3D Logo (2 Equal Columns) */}
            <div className="relative pt-32 pb-12 px-6 md:px-24 bg-[#062861] border-b border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
                    {/* Column 1: Logo */}
                    <div className="flex justify-center items-center w-full h-48 md:h-64 relative">
                        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                            <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* Column 2: Heading */}
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-black mb-6 text-white">
                            {program.title}
                        </h1>
                        <p className="text-purple-400 text-lg md:text-xl font-semibold italic">
                            {program.subtitle}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-24 py-20">
                <div className="grid md:grid-cols-3 gap-16">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-white/90">Product Overview</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-12">
                            {program.description}
                        </p>

                        <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest text-white/90">Key Highlights</h2>
                        <ul className="space-y-6">
                            {program.fullDetails.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-4 group">
                                    <div className="mt-1.5 w-6 h-6 rounded-full border border-purple-500 flex items-center justify-center shrink-0 group-hover:bg-purple-500 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <span className="text-gray-300 text-lg group-hover:text-white transition-colors">{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 sticky top-24 flex flex-col items-center justify-center text-center">
                            <h3 className="text-2xl font-bold mb-4">Start Your Journey</h3>
                            <p className="text-gray-400 mb-8">
                                Ready to take the next step towards your goals?
                            </p>
                            <Link to="/login" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95">
                                GET STARTED
                            </Link>
                            <p className="text-gray-400 text-xs mt-6">
                                Join 500+ professionals today.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetail;
