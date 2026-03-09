import { useEffect, useRef } from "react";

export default function HeroBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        let app;

        const init = async () => {
            try {
                const TubesCursor = (
                    await import(
                        "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
                    )
                ).default;

                if (canvasRef.current) {
                    app = TubesCursor(canvasRef.current, {
                        tubes: {
                            colors: ["#2563eb", "#60a5fa", "#22d3ee"],
                            lights: {
                                intensity: 200,
                                colors: ["#3b82f6", "#0ea5e9", "#22d3ee", "#ffffff"],
                            },
                        },
                    });
                }
            } catch (error) {
                console.error("Failed to load TubesCursor:", error);
            }
        };

        init();

        const websiteColors = ["#2563eb", "#3b82f6", "#60a5fa", "#0ea5e9", "#22d3ee", "#ffffff", "#818cf8"];

        const getRandomBrandColors = (count) => {
            return new Array(count).fill(0).map(() =>
                websiteColors[Math.floor(Math.random() * websiteColors.length)]
            );
        };

        const changeColors = () => {
            if (!app) return;

            const colors = getRandomBrandColors(3);
            const lightsColors = getRandomBrandColors(4);

            app.tubes.setColors(colors);
            app.tubes.setLightsColors(lightsColors);
        };

        document.body.addEventListener("click", changeColors);

        return () => {
            document.body.removeEventListener("click", changeColors);
            if (app && app.destroy) app.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    );
}