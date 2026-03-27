import { Link } from "react-router-dom";

export default function CTASection() {
    return (
        <section className="py-24 px-6 text-center bg-gradient-to-b from-[#060a18] to-[#0a0f2c]">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Ready to Climb Your Ladder?
                </h2>
                <p className="text-gray-400 mt-4 mb-10 text-lg">
                    Take the first step toward your career goals today with a personalized roadmap built just for you.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Link
                        to="/signup"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30"
                    >
                        Get Started Free
                    </Link>
                    <Link
                        to="/about"
                        className="border border-white/20 hover:border-white text-white px-8 py-4 rounded-xl transition-all"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
}