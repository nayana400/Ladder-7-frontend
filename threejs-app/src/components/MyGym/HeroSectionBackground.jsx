import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ─── Starfield Background ───
const Starfield = () => {
    const starsRef = useRef();
    const count = 2000;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (starsRef.current) {
            starsRef.current.rotation.y = state.clock.elapsedTime * 0.005;
            starsRef.current.rotation.x = state.clock.elapsedTime * 0.002;
        }
    });

    return (
        <points ref={starsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#ffffff"
                size={0.04}
                transparent
                opacity={0.6}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
};

// ─── Wireframe Geodesic Sphere ───
const GeodesicSphere = () => {
    const meshRef = useRef();
    const glowRef = useRef();

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        if (meshRef.current) {
            meshRef.current.rotation.y = t * 0.15;
            meshRef.current.rotation.x = t * 0.08;
            meshRef.current.rotation.z = t * 0.05;
        }
        if (glowRef.current) {
            glowRef.current.rotation.y = -t * 0.1;
            glowRef.current.rotation.x = -t * 0.06;
        }
    });

    return (
        <group position={[1.5, 0, 0]}>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[2.8, 3]} />
                <meshBasicMaterial
                    color="#00e5cc"
                    wireframe
                    transparent
                    opacity={0.55}
                />
            </mesh>
            <mesh ref={glowRef}>
                <icosahedronGeometry args={[2.2, 2]} />
                <meshBasicMaterial
                    color="#006b5e"
                    wireframe
                    transparent
                    opacity={0.2}
                />
            </mesh>
            <pointLight position={[0, 0, 0]} intensity={2} color="#00e5cc" distance={8} />
        </group>
    );
};

// ─── Orbital Ring ───
const OrbitalRing = () => {
    const ringRef = useRef();

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        if (ringRef.current) {
            ringRef.current.rotation.z = t * 0.12;
        }
    });

    return (
        <group position={[1.5, 0, 0]}>
            <mesh ref={ringRef} rotation={[Math.PI / 2.2, 0, 0.3]}>
                <torusGeometry args={[4.5, 0.015, 16, 200]} />
                <meshBasicMaterial
                    color="#334466"
                    transparent
                    opacity={0.5}
                />
            </mesh>
            <mesh rotation={[Math.PI / 2.5, 0.2, -0.1]}>
                <torusGeometry args={[5.0, 0.008, 16, 200]} />
                <meshBasicMaterial
                    color="#223355"
                    transparent
                    opacity={0.25}
                />
            </mesh>
        </group>
    );
};

// ─── Floating Connector Particles ───
const ConnectorParticles = () => {
    const ref = useRef();
    const count = 300;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 2.5 + Math.random() * 2;
            const height = (Math.random() - 0.5) * 3;
            pos[i * 3] = Math.cos(angle) * radius + 1.5;
            pos[i * 3 + 1] = height;
            pos[i * 3 + 2] = Math.sin(angle) * radius;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#00e5cc"
                size={0.03}
                transparent
                opacity={0.4}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

const HeroSectionBackground = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 45 }}
                style={{ background: "transparent" }}
                gl={{ antialias: true, alpha: true }}
            >
                <Starfield />
                <GeodesicSphere />
                <OrbitalRing />
                <ConnectorParticles />
                <ambientLight intensity={0.15} />
            </Canvas>
        </div>
    );
};

export default HeroSectionBackground;
