import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import Hero from "./Hero";
import VisionMission from "./VisionMission";
import Pillars from "./Pillars";
import WhyChoose from "./WhyChoose";
import CTA from "./CTA";
import IndustrySection from "./IndustrySection";
import ImageGallery from "./ImageGallery";

export default function About() {
    return (
        <div className="bg-[#051120] text-white selection:bg-blue-500/30 relative min-h-screen overflow-x-hidden">
            <Navbar />

            <main className="relative z-10 pt-24 pb-16">
                <Hero />
                <IndustrySection />
                <VisionMission />
                <WhyChoose />
                <Pillars />
                <ImageGallery />

                <CTA />
            </main>

            <Footer />
        </div>
    );
}