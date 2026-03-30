import React, { useEffect } from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import Careers from './Careers';

const CareersPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[oklch(0.93_0.01_0)] min-h-screen">
            <Navbar />
            <Careers />
            <Footer />
        </div>
    );
};

export default CareersPage;
