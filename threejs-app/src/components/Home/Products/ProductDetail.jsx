import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ladder from "../../../assets/Images/ladder.jpg";
import mindgym from "../../../assets/Images/mindgym.jpg";
import mirror from "../../../assets/Images/mirror.jpg";
import filldots from "../../../assets/Images/filldots.webp";

const PRODUCTS = [
    {
        id: "1",
        title: "My Ladder",
        subtitle: "Achieve your goals with ease through personalized strategies and focused, step-by-step guidance.",
        description:
            "MyLadder is a step-by-step program that will enable you to set a set of goals aligned to your skills and help you to climb the ladder up to your defined goals over a defined period.",
        image: ladder,
        color: "#1a365d",
        highlights: [
            "Personalized goal-setting framework",
            "Step-by-step milestone tracking",
            "Skill-aligned career roadmap",
            "Expert mentorship and guidance",
            "Progress analytics dashboard",
        ],
        tags: ["Goal Setting", "Career Growth", "Mentorship"],
    },
    {
        id: "2",
        title: "Mind Gym",
        subtitle: "Train your mind to unlock success through focused mental conditioning and resilience-building techniques.",
        description:
            "Interactive mind exercise for a healthy mind which will enable you to practice stress management and improve your decision making skills leading to a better life.",
        image: mindgym,
        color: "#1a4a3d",
        highlights: [
            "Daily mental conditioning exercises",
            "Stress management techniques",
            "Decision-making skill development",
            "Resilience and focus training",
            "Mindfulness & wellness modules",
        ],
        tags: ["Mental Wellness", "Resilience", "Mindfulness"],
    },
    {
        id: "3",
        title: "Mirror Me",
        subtitle: "Discover your true potential by exploring strengths and unlocking avenues for personal success.",
        description:
            "Mirror Me is a self-reflection program to make anybody realize what you know about yourself in terms of talents, IQ, EQ, and Goals through a set of simple programs.",
        image: mirror,
        color: "#3d1a4a",
        highlights: [
            "IQ & EQ assessment tools",
            "Talent discovery modules",
            "Personal strength mapping",
            "Goal alignment workshops",
            "360° self-reflection framework",
        ],
        tags: ["Self-Reflection", "IQ & EQ", "Personal Growth"],
    },
    {
        id: "4",
        title: "Fill Dots",
        subtitle: "Bridge the gap to success by connecting missing pieces and achieving your dreams.",
        description:
            "Specially designed program to upskill and bridge the gap between you and your next best career.",
        image: filldots,
        color: "#4a3a1a",
        highlights: [
            "Skill gap analysis",
            "Targeted upskilling programs",
            "Career-ready certification paths",
            "Industry-aligned curriculum",
            "Hands-on project experience",
        ],
        tags: ["Upskilling", "Career Readiness", "Certification"],
    },
];

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = PRODUCTS.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
                <h1 className="text-4xl font-bold">Product Not Found</h1>
                <button
                    onClick={() => navigate("/")}
                    className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
                >
                    Go Back Home
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{ filter: "brightness(0.45)" }}
                />
                {/* Gradient overlays */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(135deg, ${product.color}cc 0%, transparent 60%)`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                {/* Back button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors z-10 group"
                >
                    <svg
                        className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm font-medium">Back</span>
                </button>

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 px-8 md:px-20 pb-12 z-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {product.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/80"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                        {product.title}
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
                        {product.subtitle}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-6 md:px-16 py-16 grid md:grid-cols-2 gap-16 items-start">
                {/* Left: Description */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span
                            className="inline-block w-1 h-7 rounded-full"
                            style={{ background: `linear-gradient(to bottom, ${product.color}, #fff)` }}
                        />
                        About This Program
                    </h2>
                    <p className="text-white/60 text-base leading-relaxed mb-10">
                        {product.description}
                    </p>

                    <button
                        onClick={() => navigate("/signup")}
                        className="inline-block px-10 py-4 rounded-full font-bold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${product.color}, #1a365d)` }}
                    >
                        Get Started →
                    </button>
                </div>

                {/* Right: Highlights */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span
                            className="inline-block w-1 h-7 rounded-full"
                            style={{ background: `linear-gradient(to bottom, ${product.color}, #fff)` }}
                        />
                        What You'll Get
                    </h2>
                    <ul className="space-y-4">
                        {product.highlights.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div
                                    className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                    style={{ background: product.color }}
                                >
                                    {i + 1}
                                </div>
                                <span className="text-white/70 text-base leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Other Products */}
            <div className="border-t border-white/10 px-6 md:px-16 py-16 max-w-6xl mx-auto">
                <h2 className="text-xl font-bold text-white/50 uppercase tracking-widest mb-10">
                    Explore Other Programs
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {PRODUCTS.filter((p) => p.id !== product.id).map((p) => (
                        <div
                            key={p.id}
                            onClick={() => navigate(`/products/${p.id}`)}
                            className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]"
                        >
                            <img
                                src={p.image}
                                alt={p.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                style={{ filter: "brightness(0.4)" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-5 z-10">
                                <h3 className="text-white font-bold text-lg">{p.title}</h3>
                                <p className="text-white/50 text-xs mt-1 line-clamp-2">{p.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
