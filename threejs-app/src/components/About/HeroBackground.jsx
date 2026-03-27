import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

/**
 * ──────────────────────────────────────────────────────────────
 * NEURAL FIELD CONFIG
 * ──────────────────────────────────────────────────────────────
 */
const NODE_COUNT = 45;
const PARTICLE_COUNT = 1500;
const BOUNDS = 15;
const CONNECT_DISTANCE = 5.5;

export default function HeroBackground() {
    const containerRef = useRef(null);
    const mountRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const mount = mountRef.current;
        if (!container || !mount) return;

        // ── Renderer ─────────────────────────────────────────
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        mount.appendChild(renderer.domElement);

        // ── Scene / Camera ────────────────────────────────────
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            55,
            window.innerWidth / window.innerHeight,
            0.1,
            500
        );
        camera.position.set(0, 0, 25);

        // ── Lights ────────────────────────────────────────────
        const ambientLight = new THREE.AmbientLight("#0ea5e9", 0.8);
        scene.add(ambientLight);

        const mainLight = new THREE.PointLight("#60a5fa", 15, 100);
        mainLight.position.set(10, 10, 10);
        scene.add(mainLight);

        const subLight = new THREE.PointLight("#22d3ee", 10, 50);
        subLight.position.set(-15, -10, 5);
        scene.add(subLight);

        // ── Neural Nodes (Floating Orbs) ─────────────────────
        const nodes = [];
        const nodeGeo = new THREE.IcosahedronGeometry(0.18, 2);
        const nodeMat = new THREE.MeshPhysicalMaterial({
            color: "#60a5fa",
            emissive: "#1e3a8a",
            metalness: 0.9,
            roughness: 0.1,
            transmission: 0.6,
            thickness: 0.5,
            transparent: true,
            opacity: 0.9,
        });

        const nodeGroup = new THREE.Group();
        for (let i = 0; i < NODE_COUNT; i++) {
            const mesh = new THREE.Mesh(nodeGeo, nodeMat);
            const pos = new THREE.Vector3(
                (Math.random() - 0.5) * BOUNDS * 2,
                (Math.random() - 0.5) * BOUNDS * 1.5,
                (Math.random() - 0.5) * BOUNDS
            );
            mesh.position.copy(pos);
            mesh.userData = {
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02
                ),
                originalPos: pos.clone()
            };
            nodeGroup.add(mesh);
            nodes.push(mesh);
        }
        scene.add(nodeGroup);

        // ── Synapse Connections (Lines) ──────────────────────
        const lineMat = new THREE.LineBasicMaterial({
            color: "#22d3ee",
            transparent: true,
            opacity: 0.15,
            blending: THREE.AdditiveBlending,
        });
        const lineGeo = new THREE.BufferGeometry();
        const linePositions = new Float32Array(NODE_COUNT * NODE_COUNT * 6);
        lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
        const lines = new THREE.LineSegments(lineGeo, lineMat);
        scene.add(lines);

        // ── Background Starfield ─────────────────────────────
        const starGeo = new THREE.BufferGeometry();
        const starPos = new Float32Array(PARTICLE_COUNT * 3);
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            starPos[i * 3] = (Math.random() - 0.5) * 100;
            starPos[i * 3 + 1] = (Math.random() - 0.5) * 100;
            starPos[i * 3 + 2] = (Math.random() - 0.5) * 100;
        }
        starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
        const starMat = new THREE.PointsMaterial({
            color: "#ffffff",
            size: 0.08,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending,
        });
        const starField = new THREE.Points(starGeo, starMat);
        scene.add(starField);

        // ── Mouse Interaction ───────────────────────────────
        const mouse = new THREE.Vector2(0, 0);
        const targetMouse = new THREE.Vector2(0, 0);

        const onMouseMove = (e) => {
            targetMouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
            targetMouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("mousemove", onMouseMove);

        // ── Render Loop ──────────────────────────────────────
        let frameId;
        const tick = () => {
            frameId = requestAnimationFrame(tick);

            // Smooth mouse move
            mouse.x += (targetMouse.x - mouse.x) * 0.05;
            mouse.y += (targetMouse.y - mouse.y) * 0.05;

            // Tilt camera slightly
            camera.position.x = mouse.x * 2.5;
            camera.position.y = mouse.y * 2.5;
            camera.lookAt(0, 0, 0);

            // Rotate node group slowly
            nodeGroup.rotation.y += 0.001;
            nodeGroup.rotation.z += 0.0005;

            // Update Nodes
            let lineIdx = 0;
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                node.position.add(node.userData.velocity);

                // Boundary bounce
                if (Math.abs(node.position.x) > BOUNDS) node.userData.velocity.x *= -1;
                if (Math.abs(node.position.y) > BOUNDS) node.userData.velocity.y *= -1;
                if (Math.abs(node.position.z) > BOUNDS) node.userData.velocity.z *= -1;

                // React to mouse
                const distToMouse = node.position.distanceTo(new THREE.Vector3(mouse.x * BOUNDS, mouse.y * BOUNDS, 0));
                if (distToMouse < 4) {
                    node.position.lerp(new THREE.Vector3(mouse.x * BOUNDS, mouse.y * BOUNDS, node.position.z), 0.01);
                }

                // Connections
                for (let j = i + 1; j < nodes.length; j++) {
                    const other = nodes[j];
                    const d = node.position.distanceTo(other.position);
                    if (d < CONNECT_DISTANCE) {
                        linePositions[lineIdx++] = node.position.x;
                        linePositions[lineIdx++] = node.position.y;
                        linePositions[lineIdx++] = node.position.z;
                        linePositions[lineIdx++] = other.position.x;
                        linePositions[lineIdx++] = other.position.y;
                        linePositions[lineIdx++] = other.position.z;
                    }
                }
            }
            // Clear rest of the line positions
            for (let i = lineIdx; i < linePositions.length; i++) {
                linePositions[i] = 0;
            }
            lineGeo.attributes.position.needsUpdate = true;

            starField.rotation.y += 0.0003;
            renderer.render(scene, camera);
        };
        tick();

        // ── Resize ────────────────────────────────────────────
        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", onResize);

        // ── Cleanup ───────────────────────────────────────────
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onResize);
            cancelAnimationFrame(frameId);
            renderer.dispose();
            nodeGeo.dispose();
            nodeMat.dispose();
            lineGeo.dispose();
            lineMat.dispose();
            starGeo.dispose();
            starMat.dispose();
            if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden bg-black"
        >
            <div ref={mountRef} className="w-full h-full" />

            {/* Overlay Gradients for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#051120]/80 via-transparent to-black pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#000_100%)] opacity-60 pointer-events-none" />

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}