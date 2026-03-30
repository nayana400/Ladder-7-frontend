import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundParticles from './BackgroundParticles';

const SLIDES = [
  {
    id: 1,
    titleTop: "DISCOVER YOUR",
    titleMid: "WELL-BEING-FOCUSED",
    titleBot: "CAREER!",
    description: "Design your well-being-focused career ladder with AI-enabled solutions aligned with UNICEF's global framework of transferable skills.",
    ctaText: "Learn More"
  },
  {
    id: 2,
    titleTop: "EMPOWER YOUR",
    titleMid: "FUTURE WITH ADVANCED LEARNING",
    titleBot: "PROGRAMS",
    description: "Empower your career with skill-building programs designed for today's dynamic world. Learn in-demand skills, stay ahead of the curve, and shape a brighter future.",
    ctaText: "Explore Now"
  },
  {
    id: 3,
    titleTop: "TRANSFORM YOUR",
    titleMid: "BUSINESS WITH ADVANCED TECHNOLOGY",
    titleBot: "STRATEGIES",
    description: "Drive your business forward with our customized IT services that streamline processes and ensure sustainable growth in today’s fast-paced digital environment.",
    ctaText: "Get Started"
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  return (
    <section className="h-[90vh] bg-[oklch(0.97_0_0)] text-gray-900 flex flex-col justify-center px-6 md:px-16 relative overflow-hidden pt-20">
      {/* Three.js Background Layer */}
      <BackgroundParticles />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Slider Container */}
        <div className="relative overflow-hidden w-full h-[60vh] md:h-[50vh]">
          {SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;

            return (
              <motion.div
                key={slide.id}
                initial={false}
                animate={{
                  x: isActive ? "0%" : index > currentSlide ? "100%" : "-100%",
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 0.95
                }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                style={{ pointerEvents: isActive ? 'auto' : 'none' }}
              >
                {/* Left Content */}
                <div className="z-10">
                  <h2 className="text-4xl md:text-6xl mb-8 leading-[1.1] tracking-tight font-bold">
                    <span className="whitespace-nowrap">
                      <span className="text-blue-600">{slide.titleTop.charAt(0)}</span>
                      {slide.titleTop.slice(1)}
                    </span>
                    <span className="block text-xl md:text-3xl text-gray-600 mt-2 whitespace-nowrap">{slide.titleMid}</span>
                    <span className="text-gray-900">{slide.titleBot}</span>
                  </h2>
                </div>

                {/* Right Content */}
                <div className="z-10 flex flex-col justify-center items-start md:pl-24">
                  <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 rounded-full"></div>
                  <p className="text-gray-600 mb-8 max-w-md text-base font-semibold leading-relaxed">
                    {slide.description}
                  </p>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition text-2xl font-bold group cursor-pointer">
                    {slide.ctaText}
                    <span className="ml-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg px-3 py-1 text-sm group-hover:scale-110 transition-transform duration-300 shadow-md">
                      →
                    </span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Controls: Dots and Play/Pause Centered at Bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20 bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 shadow-sm">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-white/80 transition group text-gray-700 hover:text-blue-600"
            aria-label="Previous Slide"
          >
            <svg className="w-4 h-4 transition-transform group-active:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-3 items-center">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsPaused(true);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                  ? "bg-blue-600 scale-125 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-500"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Play/Pause */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-white/80 transition text-gray-700 hover:text-blue-600"
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? (
              <svg className="w-3 h-3 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            ) : (
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
            )}
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-white/80 transition group text-gray-700 hover:text-blue-600"
            aria-label="Next Slide"
          >
            <svg className="w-4 h-4 transition-transform group-active:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
