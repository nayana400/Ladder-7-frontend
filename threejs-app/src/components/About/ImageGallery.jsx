import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
];

export default function ImageGallery() {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="w-full min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center py-20">

            {/* Heading */}
            <div className="text-center mb-14">
                <h1 className="text-5xl font-bold">
                    Image <span className="text-blue-500">Gallery</span>
                </h1>
                <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                    Experience visual storytelling through our curated lens. Use the
                    navigation to explore our latest works.
                </p>
            </div>

            {/* Carousel */}
            <div className="relative w-full max-w-5xl flex items-center justify-center">

                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Images */}
                <div className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">

                    {images.map((img, i) => {
                        const position =
                            i === index
                                ? "center"
                                : i === (index - 1 + images.length) % images.length
                                    ? "left"
                                    : i === (index + 1) % images.length
                                        ? "right"
                                        : "hidden";

                        return (
                            <img
                                key={i}
                                src={img}
                                alt=""
                                className={`absolute transition-all duration-500 rounded-xl shadow-2xl
                ${position === "center"
                                        ? "w-[70%] opacity-100 z-10 scale-100"
                                        : position === "left"
                                            ? "w-[60%] -translate-x-[70%] opacity-40 blur-sm scale-95"
                                            : position === "right"
                                                ? "w-[60%] translate-x-[70%] opacity-40 blur-sm scale-95"
                                                : "opacity-0"
                                    }`}
                            />
                        );
                    })}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Dots */}
            <div className="flex gap-3 mt-8">
                {images.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${i === index ? "bg-blue-500" : "bg-gray-500"
                            }`}
                    />
                ))}
            </div>

        </section>
    );
}