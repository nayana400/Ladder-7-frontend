import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import HeroSection from "./HeroSection";
import MentalWellBeing from "./MentalWellBeing";
import StressMangement from "./StressMangement";
import DecisonMaking from "./DecisonMaking.jsx";
import EmpoweringGrowth from "./EmpoweringGrowth";
import MentalHealth from "./MentalHealth";

const MyGym = () => {
  return (
    <div className="bg-[#050505] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Placeholder sections for the other Gym components to be implemented later */}
      {/* These are currently empty files (0 bytes) based on previous view_file results */}
      {/* I'll wrap them in containers just in case the user wants to add content to them */}

      <div id="stress-management">
        <StressMangement />
      </div>

      <div id="decision-making">
        <DecisonMaking />
      </div>

      <div id="mental-health">
        <MentalHealth />
      </div>


      <div id="mental-wellbeing">
        <MentalWellBeing />
      </div>

      <div id="empowering-growth">
        <EmpoweringGrowth />
      </div>

      <Footer />
    </div>
  );
};

export default MyGym;
