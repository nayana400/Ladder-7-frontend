import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import Hero from "./Hero";
import VisionMission from "./VisionMission";
import Pillars from "./Pillars";
import WhyChoose from "./WhyChoose";
import Expertise from "./Expertise";
import Team from "./Team";
import CTA from "./CTA";
import IndustrySection from "./IndustrySection";

export default function About() {
    return (
        <div className="bg-[#051120] text-white selection:bg-blue-500/30 relative min-h-screen overflow-x-hidden">
            <Navbar />

            <main className="relative z-10 pt-32 pb-16">
                <Hero />
                <IndustrySection />
                <VisionMission />
                <Pillars />
                <WhyChoose />
                <Expertise />
                <Team />
                <CTA />
            </main>

            <Footer />
        </div>
    );
}