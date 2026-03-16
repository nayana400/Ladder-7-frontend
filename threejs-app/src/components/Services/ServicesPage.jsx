import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import webDevImg from '../../assets/Images/services/web-development.jpg';
import productDevImg from '../../assets/Images/services/product-development.webp';
import itConsultancyImg from '../../assets/Images/services/it-consultancy.jpg';
import digitalMarketingImg from '../../assets/Images/services/digital-marketing.webp';
import hyperAutomationImg from '../../assets/Images/services/hyper-automation.jpg';
import remoteWorkImg from '../../assets/Images/services/remote-work.jpg';
import skillDevelopmentImg from '../../assets/Images/services/skill-development.jpg';
import VideoCard from './VideoCard';
const services = [
    {
        id: "web-app-dev",
        category: "Web and App Development",
        color: "text-blue-500",
        image: webDevImg,
        items: [
            "Responsive Website Development",
            "Mobile App Development",
            "Custom Solutioning",
            "Maintenance & Testing"
        ]
    },
    {
        id: "product-dev",
        category: "Product Development & Innovation",
        color: "text-blue-500",
        image: productDevImg,
        items: [
            "Product Ideation & Innovation",
            "End-to-End Product Development",
            "Product Customization"
        ]
    },
    {
        id: "it-consultancy",
        category: "IT Consultancy",
        color: "text-blue-500",
        image: itConsultancyImg,
        items: [
            "Technology Assessment",
            "Product Comparison",
            "IT Strategy Building"
        ]
    },
    {
        id: "digital-marketing",
        category: "Digital Marketing",
        color: "text-blue-500",
        image: digitalMarketingImg,
        items: [
            "Content Creation",
            "Search Engine Optimization (SEO)",
            "Social Media Marketing (SMM)",
            "Comprehensive Social Media Management"
        ]
    },
    {
        id: "hyper-automation",
        category: "Hyper Automation",
        color: "text-blue-500",
        image: hyperAutomationImg,
        items: [
            "Cost-Effective Custom Automation Solutions",
            "Robotic Process Automation (RPA)",
            "Standardization with Lean & Six Sigma Practices"
        ]
    },
    {
        id: "remote-workforce",
        category: "Remote Workforce Solutions",
        color: "text-blue-500",
        image: remoteWorkImg,
        items: [
            "Access to Niche Skills (Salesforce, Marketo, Cybersecurity, etc.)",
            "Remote Project Management"
        ]
    },
    {
        id: "skill-development",
        category: "Skill Development and Training",
        color: "text-blue-500",
        image: skillDevelopmentImg,
        items: [
            "Team Coaching & Development",
            "Corporate Training Programs",
            "Devox Training",
            "Customized Skill Development Initiatives"
        ]
    }
];

const ServicesPage = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    const CheckIcon = () => (
        <svg className="w-5 h-5 text-blue-500 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2" />
            <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <div className="bg-[#000000] min-h-screen font-sans relative overflow-hidden">
            <Navbar />

            <div className="pt-20 text-center">
                <h1 className="text-xl md:text-5xl font-black text-white px-10 md:px-20">
                    Our Services
                </h1>
            </div>

            <div className="flex justify-center items-center mt-14 mb-12">
                <VideoCard
                    title="Ladder7 Website"
                    video="/assets/ladder7.mp4"
                    link="http://localhost:5173/"

                />
            </div>

            <div className="pb-20 px-6 max-w-7xl mx-auto relative z-10 w-full">
                {/* Services Cards */}
                <div className="w-full flex flex-col pt-8">
                    <div className="w-full space-y-8 flex flex-col items-start">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="w-full p-6 rounded-2xl bg-[#231d5e] border border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-xl shadow-black/40 scroll-mt-24 group"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center flex-1">
                                    {/* First Column: Text Content */}
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                                {service.category}
                                            </h2>
                                            <div className="space-y-2">
                                                {service.items.map((item) => (
                                                    <div key={item} className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                                                        <CheckIcon />
                                                        <span>{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Second Column: Picture Space */}
                                    <div className="relative w-full aspect-[21/9] bg-[#231d5e] rounded-xl overflow-hidden flex flex-col items-center justify-center group-hover:border-blue-500/20 transition-all duration-300">
                                        <img
                                            src={service.image}
                                            alt={service.category}
                                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ServicesPage;
