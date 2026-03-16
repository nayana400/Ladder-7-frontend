import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function FlowingLines() {
    const lineGroup = useRef();

    const lineData = useMemo(() => {
        const colors = ["#6ee7ff", "#a78bfa", "#ffffff", "#60a5fa", "#fef08a"];
        return Array.from({ length: 45 }, () => {
            const x = Math.random() * 25 - 12;
            const y = Math.random() * 12 - 6;
            const z = Math.random() * -12;

            const length = Math.random() * 6 + 3;
            const p1 = new THREE.Vector3(0, 0, 0);
            const p2 = new THREE.Vector3(length, 0, 0);

            return {
                initialX: x,
                initialY: y,
                z: z,
                points: [p1, p2],
                color: colors[Math.floor(Math.random() * colors.length)],
                speed: Math.random() * 0.015 + 0.005,
                offset: Math.random() * Math.PI * 2,
                amplitude: Math.random() * 0.8 + 0.3
            };
        });
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (lineGroup.current) {
            lineGroup.current.children.forEach((line, i) => {
                const data = lineData[i];
                line.position.x += data.speed;

                // Complex flow motion: Sine + Cosine for a more organic path
                line.position.y = data.initialY + Math.sin(t * 0.4 + data.offset) * data.amplitude + Math.cos(t * 0.2 + data.offset) * 0.2;

                // Reset when passing boundary
                if (line.position.x > 15) {
                    line.position.x = -18;
                }
            });
        }
    });

    return (
        <group ref={lineGroup}>
            {lineData.map((data, i) => (
                <line key={i} position={[data.initialX, data.initialY, data.z]}>
                    <bufferGeometry attach="geometry" onUpdate={self => self.setFromPoints(data.points)} />
                    <lineBasicMaterial attach="material" color={data.color} transparent opacity={0.3} blending={THREE.AdditiveBlending} />
                </line>
            ))}
        </group>
    );
}

function StarField() {
    const groupRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.005;
            groupRef.current.rotation.z = t * 0.002;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Heavy particle field for depth */}
            <Sparkles count={800} scale={25} size={1.5} speed={0.4} opacity={0.5} color="#ffffff" />
            <Sparkles count={400} scale={30} size={2.5} speed={0.2} opacity={0.2} color="#3b82f6" />

            {/* Background static stars for density */}
            <Points positions={new Float32Array(Array.from({ length: 1500 }, () => (Math.random() - 0.5) * 50))} stride={3}>
                <PointMaterial transparent color="#ffffff" size={0.02} sizeAttenuation depthWrite={false} />
            </Points>
        </group>
    );
}

export default function BorealSky() {
    return (
        <div className="fixed inset-0 -z-10 bg-[#020617]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#0f172a] to-[#020617] opacity-90 pointer-events-none" />

            <Canvas camera={{ position: [0, 0, 10], fov: 55 }}>
                <FlowingLines />
                <StarField />
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
                <fog attach="fog" args={['#020617', 8, 30]} />
            </Canvas>
        </div>
    );
}