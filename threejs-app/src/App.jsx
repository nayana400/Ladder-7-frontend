import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Home from "./components/Home/Home";
import ProductDetail from "./components/Home/Products/ProductDetail";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Blog from "./components/Blog/Blog";
import TechnicalInsightsPage from "./components/Blog/TechnicalInsightsPage";
import EventsPage from "./components/Blog/EventsPage";
import CareersPage from "./components/Careers/CareersPage";
import About from "./components/About/About";
import BlogDetail from "./components/Blog/BlogDetail";
import ServicesPage from "./components/Services/ServicesPage";
import MyLadder from "./components/MyLadder/MyLadder";
import MyGym from "./components/MyGym/MyGym";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/technical-insights" element={<TechnicalInsightsPage />} />
        <Route path="/blog/:type/:id" element={<BlogDetail />} />
        <Route path="/blog/events" element={<EventsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/myladder" element={<MyLadder />} />
        <Route path="/program/2" element={<MyGym />} />
        <Route path="/program/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
