import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import ServiceTimeline from './ServiceTimeline';

import Footer from '../Home/Footer';
import webDevImg from '../../assets/Images/services/web-development.jpg';
import productDevImg from '../../assets/Images/services/product-development.webp';
import itConsultancyImg from '../../assets/Images/services/it-consultancy.jpg';
import digitalMarketingImg from '../../assets/Images/services/digital-marketing.webp';
import hyperAutomationImg from '../../assets/Images/services/hyper-automation.jpg';
import remoteWorkImg from '../../assets/Images/services/remote-work.jpg';
import skillDevelopmentImg from '../../assets/Images/services/skill-development.jpg';
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
        <div className="bg-[oklch(0.93_0.01_0)] min-h-screen font-sans relative overflow-hidden">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10 w-full">
                <div className="text-center mb-16 overflow-hidden">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xl md:text-4xl font-bold mb-8 tracking-tighter leading-none"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-[#003399] to-gray-900 bg-[length:200%_auto] animate-gradient block">
                            Our Services
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "circOut", delay: 0.3 }}
                        className="h-[1.5px] w-32 md:w-48 bg-gradient-to-r from-transparent via-[#003399]/30 to-transparent mx-auto mb-10"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-gray-600 text-lg md:text-2xl max-w-3xl mx-auto px-6 font-light leading-relaxed tracking-wide"
                    >
                        Comprehensive solutions tailored to your business needs, <br className="hidden md:block" /> powered by innovation and world-class expertise.
                    </motion.p>
                </div>

                <ServiceTimeline services={services} />
            </div>

            <Footer />
        </div>
    );
};

export default ServicesPage;
