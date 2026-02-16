import { useState, useEffect, useRef } from "react";

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
  const autoPlayRef = useRef();

  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      }, 5000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isPaused]);

  return (
    <section className="h-[90vh] bg-black text-white flex flex-col justify-center px-6 md:px-16 relative overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto relative h-full flex flex-col justify-center">
        {/* Slider Container */}
        <div className="relative overflow-hidden w-full h-[60vh] md:h-[50vh]">
          {SLIDES.map((slide, index) => {
            // Logic for a continuous "move left" feel
            // The active slide is at 0. The next one is at 100%. The previous one is at -100%.
            const isActive = index === currentSlide;
            const isPrev = index === (currentSlide - 1 + SLIDES.length) % SLIDES.length;

            let positionClass = "translate-x-full opacity-0 pointer-events-none";
            if (isActive) {
              positionClass = "translate-x-0 opacity-100 pointer-events-auto";
            } else if (isPrev) {
              positionClass = "-translate-x-full opacity-0 pointer-events-none";
            }

            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${positionClass}`}
              >
                {/* Left Content */}
                <div className="z-10">
                  <h2 className="text-5xl md:text-7xl mb-8 leading-[1.1] tracking-tight">
                    <span className="whitespace-nowrap">
                      <span className="text-purple-400">{slide.titleTop.charAt(0)}</span>
                      {slide.titleTop.slice(1)}
                    </span>
                    <span className="block text-2xl md:text-4xl opacity-90 mt-2 whitespace-nowrap">{slide.titleMid}</span>
                    {slide.titleBot}
                  </h2>
                </div>

                {/* Right Content */}
                <div className="z-10 flex flex-col justify-center items-start md:pl-24">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>
                  <p className="text-gray-300 mb-8 max-w-md text-base font-semibold leading-relaxed">
                    {slide.description}
                  </p>
                  <a href="#" className="flex items-center text-purple-400 hover:text-purple-300 transition text-2xl font-semibold group cursor-pointer">
                    {slide.ctaText}
                    <span className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded px-2 py-1 text-sm group-hover:scale-110 transition-transform duration-300">
                      &gt;
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls: Dots and Play/Pause Centered at Bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
          <div className="flex gap-3">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsPaused(true);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-purple-600 scale-125 shadow-[0_0_8px_rgba(168,85,247,0.5)]" : "bg-gray-600 hover:bg-white"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition"
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? (
              <svg className="w-3 h-3 fill-white translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            ) : (
              <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
