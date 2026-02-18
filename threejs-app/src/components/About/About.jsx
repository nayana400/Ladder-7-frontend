import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import AboutScene from './AboutScene';

const About = () => {
    return (
        <div className="bg-[#1a365d] min-h-screen">
            <Navbar />

            <main>
                {/* Animated Hero Section */}
                <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-20">
                    <AboutScene />

                </section>

                {/* Content Section */}
                <section className="py-24 bg-[#112240] relative z-10">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-6">
                                    Our Mission
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    Ladder7, the premier skill development and training division of Neyndra Global Solutions Private Limited, is dedicated to empowering individuals in their journey towards personal as well as professional growth. Our training programs focuses on fundamental, transferable, aspirational, and job-specific skills to help the individuals to thrive in today's competitive job market. By enhancing core competencies and well-being, we provide learners with the tools that they need to succeed in their chosen fields, fostering a lifelong commitment to skill improvement and career advancement.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Our outcome-oriented educational approach emphasizes on identifying and developing each learner’s core strengths, setting them up for success in their desired career paths. Through targeted skill-building, we help individuals to achieve their goals and fulfill their aspirations. Ladder7 is committed to bridging up the gap between learning and career readiness, positioning individuals for long-term success in their roles that align with their personal ambitions and professional potential.
                                </p>
                            </div>

                            <div className="bg-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-xl">
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                                        <div className="text-gray-400 text-sm font-semibold uppercase tracking-widest">Students</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                                        <div className="text-gray-400 text-sm font-semibold uppercase tracking-widest">Programs</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-teal-400 mb-2">10+</div>
                                        <div className="text-gray-400 text-sm font-semibold uppercase tracking-widest">Partners</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-pink-400 mb-2">95%</div>
                                        <div className="text-gray-400 text-sm font-semibold uppercase tracking-widest">Success</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
