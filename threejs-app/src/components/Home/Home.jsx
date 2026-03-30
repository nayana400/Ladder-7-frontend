import Navbar from "./Navbar";
import Hero from "./Hero/Hero";
import Products from "./Products/Products";
import OurJourney from "./OurJourney";
import OurPrograms from "./OurPrograms";
import Advisor from "./Advisor";
import Partners from "./Partners";
import AboutUsSection from "./AboutUsSection";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Hero />
            <Products />
            <OurJourney />
            <OurPrograms />
            <Partners />
            <Advisor />
            <AboutUsSection />
            <Footer />
        </div>
    );
};

export default Home;
