import Navbar from "./Navbar";
import Hero from "./Hero/Hero";
import Programs from "./Programs";
import OurJourney from "./OurJourney";
import OurPrograms from "./OurPrograms";
import Advisor from "./Advisor";
import Partners from "./Partners";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <Hero />
            <Programs />
            <OurJourney />
            <OurPrograms />
            <Advisor />
            <Partners />
            <Footer />
        </div>
    );
};

export default Home;
