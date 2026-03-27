import { Rocket, Layers, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    },
};

const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const features = [
    {
        icon: <Rocket className="w-6 h-6 text-blue-400" />,
        title: "Global Framework",
        description:
            "Align your organization with a clear structure and governance model to drive consistent execution.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    },
    {
        icon: <Layers className="w-6 h-6 text-purple-400" />,
        title: "AI Development Suite",
        description:
            "Empower your teams with advanced tools and AI-driven insights to accelerate innovation.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1400&auto=format&fit=crop",
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
        title: "Step-by-Step Progression",
        description:
            "Adopt a structured journey that guides teams from initial strategy to full execution.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    },
];

export default function CoreFocus() {
    return (
        <section className="bg-gradient-to-b from-[#0B0F1A] via-[#080b18] to-[#050812] text-white py-20 px-6 overflow-hidden">
            <motion.div
                className="max-w-6xl mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.h2 variants={titleVariants} className="text-3xl md:text-4xl font-bold mb-4">
                    Our Core Focus
                </motion.h2>
                <motion.p variants={titleVariants} className="text-gray-400 max-w-2xl mx-auto mb-12">
                    We design systems that empower organizations to execute at scale
                    through structured frameworks and AI-driven tools.
                </motion.p>

                <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
                    {features.map((feature, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className={`bg-[#111827] border border-[#1F2937] rounded-3xl hover:border-blue-500 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] transition-all duration-400 overflow-hidden flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} group cursor-pointer`}
                            >
                                {/* Image Side */}
                                <div className="relative h-64 md:h-auto md:w-[45%] lg:w-1/2 overflow-hidden flex-shrink-0">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    {/* Gradient to blend image perfectly into background */}
                                    <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent via-transparent to-[#111827] md:block hidden opacity-90`}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/20 to-transparent md:hidden block"></div>
                                </div>

                                {/* Content Side */}
                                <div className="p-8 md:p-12 lg:p-14 text-left flex flex-col justify-center flex-grow relative z-10 w-full md:w-[55%] lg:w-1/2">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1F2937] mb-6 border border-white/5 shadow-inner group-hover:bg-[#1E293B] group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>

                                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-400 text-base lg:text-lg leading-relaxed font-light">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
