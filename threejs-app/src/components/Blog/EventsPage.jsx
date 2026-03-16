import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import EventsSection from "./EventsSection";
import BorealSky from "./BorealSky";
import { events } from "./blogData";

export default function EventsPage() {
    return (
        <div className="bg-transparent min-h-screen">
            <Navbar />
            <section className="relative min-h-screen pt-32 pb-40 px-6 lg:px-20 overflow-hidden">
                <BorealSky />
                <div className="relative z-10 max-w-[1400px] mx-auto">
                    <div className="mb-20">
                        <div className="h-1.5 w-40 bg-blue-600 rounded-full shadow-[0_0_20px_#2563eb]" />
                    </div>
                    
                    <div className="grid grid-cols-1">
                        <EventsSection events={events} />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
