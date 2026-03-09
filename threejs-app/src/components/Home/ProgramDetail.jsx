import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ladder from "../../assets/Images/ladder.jpg"
const PROGRAMS_DATA = {
    "1": {
        title: "My Ladder",
        subtitle: "Achieve your goals with ease through personalized strategies and focused, step-by-step guidance.",
        description: "MyLadder is a step-by-step program that will enable you to set a set of goals aligned to your skills and help you to climb the ladder up to your defined goals over a defined period.",
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

function ProgramDetail() {
    const { id } = useParams();
    const program = PROGRAMS_DATA[id];

    if (!program) {
        return (
            <div className="min-h-screen bg-[#112240] text-white flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-bold mb-4">Program Not Found</h1>
                <Link to="/" className="text-purple-400 hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#112240] text-white">
            <Navbar />
            {/* Header Image */}
            <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-[#112240]/40 to-transparent"></div>
                <div className="absolute bottom-12 left-6 md:left-24 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter">{program.title}</h1>
                    <p className="text-purple-400 text-xl md:text-2xl font-semibold italic">{program.subtitle}</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-24 py-20">
                <div className="grid md:grid-cols-3 gap-16">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest text-white/90">Program Overview</h2>
                        <p className="text-gray-400 text-xl leading-relaxed mb-12">
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
                        <div className="bg-zinc-900/50 p-10 rounded-3xl border border-white/5 sticky top-24">
                            <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider">Ready to start?</h3>
                            <p className="text-gray-400 mb-8 text-sm">Join hundreds of successful learners who transformed their careers with {program.title}.</p>
                            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:scale-105 transition-transform mb-4 uppercase tracking-widest text-xs">
                                Enroll Now
                            </button>
                            <Link to="/" className="block text-center text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-bold">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProgramDetail;
