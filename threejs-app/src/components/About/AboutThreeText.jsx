import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

const AboutThreeText = ({ text = "Ladder7", size = 40 }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        let renderer, scene, camera, line;
        let uniforms;
        let animationId;

        const vertexShader = `
            uniform float amplitude;
            attribute vec3 displacement;

            void main() {
                vec3 newPosition = position + amplitude * displacement;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
            }
        `;

        const fragmentShader = `
            uniform vec3 color;
            uniform float opacity;

            void main() {
                gl_FragColor = vec4(color, opacity);
            }
        `;

        const init = (font) => {
            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera(
                30,
                containerRef.current.clientWidth / containerRef.current.clientHeight,
                1,
                10000
            );
            camera.position.z = 400;

            uniforms = {
                amplitude: { value: 5.0 },
                opacity: { value: 1.0 },
                color: { value: new THREE.Color(0xffffff) }
            };

            const material = new THREE.ShaderMaterial({
                uniforms,
                vertexShader,
                fragmentShader,
                blending: THREE.NormalBlending,
                depthTest: true,
                transparent: true
            });

            const geometry = new TextGeometry(text, {
                font,
                size: size,
                depth: 10,
                curveSegments: 10,
                bevelThickness: 2,
                bevelSize: 1,
                bevelEnabled: true,
                bevelSegments: 10
            });

            geometry.center();

            const count = geometry.attributes.position.count;

            const displacement = new THREE.Float32BufferAttribute(count * 3, 3);
            geometry.setAttribute("displacement", displacement);

            line = new THREE.Line(geometry, material);
            line.rotation.x = 0.1;
            scene.add(line);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            renderer.setClearColor(0x000000, 0);

            containerRef.current.appendChild(renderer.domElement);

            animate();
        };

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const time = Date.now() * 0.001;
            line.rotation.y = Math.sin(time * 0.5) * 0.2;

            uniforms.amplitude.value = Math.sin(0.5 * time) * 2;

            const array = line.geometry.attributes.displacement.array;
            for (let i = 0; i < array.length; i += 3) {
                array[i] += 0.1 * (0.5 - Math.random());
                array[i + 1] += 0.1 * (0.5 - Math.random());
                array[i + 2] += 0.1 * (0.5 - Math.random());
            }

            line.geometry.attributes.displacement.needsUpdate = true;

            renderer.render(scene, camera);
        };

        const handleResize = () => {
            if (!containerRef.current) return;
            camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        };

        const loader = new FontLoader();
        loader.load("/fonts/helvetiker_bold.typeface.json", init);

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
            renderer?.dispose();
            if (containerRef.current && renderer?.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, [text, size]);

    return (
        <div className="w-full h-40 md:h-64 flex items-center justify-center overflow-hidden">
            <div ref={containerRef} className="w-full h-full" />
        </div>
    );
};

export default AboutThreeText;
