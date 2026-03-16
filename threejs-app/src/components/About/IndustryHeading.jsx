import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IndustryHeading({ text }) {
    const headingRef = useRef(null);

    useGSAP(() => {
        if (!headingRef.current) return;
        
        const words = text.split(" ");
        headingRef.current.innerHTML = "";
        
        words.forEach((wordText) => {
            const wordSpan = document.createElement("span");
            wordSpan.className = "word flex flex-nowrap";
            
            const letters = wordText.split("");
            letters.forEach((letter) => {
                const span = document.createElement("span");
                span.className = "letter inline-block opacity-0";
                span.innerText = letter;
                wordSpan.appendChild(span);
            });
            
            headingRef.current.appendChild(wordSpan);
        });

        const allLetters = headingRef.current.querySelectorAll(".letter");

        gsap.to(allLetters, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.02,
            duration: 0.8,
            ease: "back.out(1.7)",
            startAt: { y: 20, rotateX: 90 },
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        });
    }, [text], { scope: headingRef });

    return (
        <h2
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-6 flex flex-wrap gap-x-2 gap-y-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] perspective-2000"
        >
            {/* Content populated by JS */}
        </h2>
    );
}