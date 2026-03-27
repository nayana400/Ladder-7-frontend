import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import HeroSection from "./HeroSection";
import GoalSetting from "./GoalSetting";
import CoreFocus from "./CoreFocus";
import GrowthSection from "./GrowthSection";
import CTASection from "./CTASection";

export default function MyLadder() {
    return (
        <div className="bg-[#060a18] text-white min-h-screen">
            <Navbar />
            <main className="pt-[72px]">
                <HeroSection />
                <GoalSetting />
                <CoreFocus />
                <GrowthSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
