import React, { useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as THREE from "three";

// --- 3D GSAP Animated Particle System ---
const ParticleCluster = () => {
    const groupRef = useRef();
    const coreRef = useRef();

    // Generate heavy geometric particle math
    const particlesPosition = useMemo(() => {
        const count = 10000;
        const positions = new Float32Array(count * 3);
        for(let i = 0; i < count; i++) {
            const distance = Math.pow(Math.random(), 0.5) * 15;
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos((Math.random() * 2) - 1);
            
            const x = distance * Math.sin(phi) * Math.cos(theta) * 1.5;
            const y = distance * Math.sin(phi) * Math.sin(theta) * 0.8;
            const z = distance * Math.cos(phi) * 0.5;
            
            positions.set([x, y, z], i * 3);
        }
        return positions;
    }, []);

    useGSAP(() => {
        gsap.to(groupRef.current.rotation, {
            y: Math.PI * 2, duration: 80, repeat: -1, ease: "none"
        });
        gsap.to(groupRef.current.rotation, {
            x: Math.PI * 2, duration: 110, repeat: -1, ease: "none"
        });
        
        gsap.to(groupRef.current.scale, {
            x: 1.05, y: 1.05, z: 1.05,
            duration: 6, yoyo: true, repeat: -1, ease: "sine.inOut"
        });

        gsap.to(coreRef.current.rotation, {
            y: -Math.PI * 2, x: Math.PI * 2, duration: 25, repeat: -1, ease: "none"
        });
    }, []);

    return (
        <group ref={groupRef}>
            <mesh ref={coreRef}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial 
                    color="#8B5CF6" 
                    emissive="#6366F1"
                    wireframe 
                    transparent 
                    opacity={0.15} 
                />
            </mesh>

            <Points positions={particlesPosition} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#8B5CF6"
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
            
            <Points positions={particlesPosition} stride={3} frustumCulled={false} scale={0.6}>
                <PointMaterial
                    transparent
                    color="#6366F1"
                    size={0.04}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
};

const HeroSectionBackground = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
                <ParticleCluster />
                <ambientLight intensity={0.5} />
                <pointLight position={[0, 0, 0]} intensity={1.5} color="#6366F1" />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0820]/50 to-[#080c1e] pointer-events-none" />
        </div>
    );
};

export default HeroSectionBackground;
