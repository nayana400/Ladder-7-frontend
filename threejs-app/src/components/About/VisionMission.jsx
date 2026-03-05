export default function VisionMission() {
    return (
        <section className="grid md:grid-cols-2 gap-12 px-10 py-10 bg-[#07162b]">

            <div className="p-10 bg-[#0e2546] rounded-2xl transform hover:scale-[1.02] transition-transform">
                <div className="text-4xl mb-6">👁️</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                    To be the global catalyst for digital transformation, empowering every individual
                    with the technical mastery and creative confidence to build the future.
                </p>
            </div>

            <div className="p-10 bg-[#0e2546] rounded-2xl transform hover:scale-[1.02] transition-transform">
                <div className="text-4xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                    To bridge the industry-skill gap through immersive, project-based learning and
                    AI-integrated training that prepares leaders for the next generation of tech.
                </p>
            </div>

        </section>
    );
}
