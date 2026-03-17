import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import TechnicalSection from "./TechnicalSection";
import BlogScene from "./BlogScene";
import { technicalBlogs } from "./blogData";

export default function TechnicalInsightsPage() {
    return (
        <div className="bg-transparent min-h-screen">
            <Navbar />
            <section className="relative min-h-screen pt-32 pb-40 px-6 lg:px-20 overflow-hidden">
                <BlogScene />
                <div className="relative z-10 max-w-[1400px] mx-auto">
                    <div className="mb-20">
                        <div className="h-1.5 w-40 bg-blue-600 rounded-full shadow-[0_0_20px_#2563eb]" />
                    </div>

                    <div className="grid grid-cols-1">
                        <TechnicalSection technicalBlogs={technicalBlogs} />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
