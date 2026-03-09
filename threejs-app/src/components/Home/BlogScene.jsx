import { useEffect, useRef } from "react";
import * as THREE from "three";
import Stats from "stats.js";
import { GUI } from "lil-gui";

const BlogScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        let camera, scene, renderer, material, stats;
        let mouseX = 0,
            mouseY = 0;

        const container = mountRef.current;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        // Camera
        camera = new THREE.PerspectiveCamera(
            55,
            window.innerWidth / window.innerHeight,
            2,
            2000
        );
        camera.position.z = 1000;

        // Scene
        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.001);

        // Geometry
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        const colors = [];

        const color1 = new THREE.Color("#3b82f6"); // blue-500
        const color2 = new THREE.Color("#a855f7"); // purple-500

        for (let i = 0; i < 10000; i++) {
            vertices.push(
                2000 * Math.random() - 1000,
                2000 * Math.random() - 1000,
                2000 * Math.random() - 1000
            );

            // Randomly interpolate between blue and purple
            const mixedColor = color1.clone().lerp(color2, Math.random());
            colors.push(mixedColor.r, mixedColor.g, mixedColor.b);
        }

        geometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(vertices, 3)
        );
        geometry.setAttribute(
            "color",
            new THREE.Float32BufferAttribute(colors, 3)
        );

        // Generate a circular texture using a canvas
        const canvas = document.createElement("canvas");
        canvas.width = 128;
        canvas.height = 128;
        const context = canvas.getContext("2d");
        const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(0.2, "rgba(255,255,255,1)");
        gradient.addColorStop(0.4, "rgba(255,255,255,0.8)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        context.fillStyle = gradient;
        context.fillRect(0, 0, 128, 128);
        const sprite = new THREE.CanvasTexture(canvas);
        sprite.colorSpace = THREE.SRGBColorSpace;

        // Material
        material = new THREE.PointsMaterial({
            size: 35,
            sizeAttenuation: true,
            map: sprite,
            alphaTest: 0.1,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true,
        });

        // Points
        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // Stats
        stats = new Stats();
        container.appendChild(stats.dom);

        // GUI
        const gui = new GUI();
        gui.add(material, "sizeAttenuation").onChange(() => {
            material.needsUpdate = true;
        });

        // Events
        const onPointerMove = (event) => {
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        };

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        document.addEventListener("pointermove", onPointerMove);
        window.addEventListener("resize", onResize);

        // Animation
        const animate = () => {
            const time = Date.now() * 0.00005;

            camera.position.x += (mouseX - camera.position.x) * 0.05;
            camera.position.y += (-mouseY - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
            stats.update();

            requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            gui.destroy();
            container.removeChild(renderer.domElement);
            container.removeChild(stats.dom);
            document.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("resize", onResize);
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="w-full h-screen bg-black overflow-hidden"
        />
    );
};

export default BlogScene;