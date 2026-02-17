import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSphere = ({ count = 12000 }) => {
    const points = useRef();

    // Generate particles on a spherical surface
    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 2.0 + Math.random() * 0.1; // Smaller sphere radius

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
        }
        return positions;
    }, [count]);

    useFrame((state) => {
        if (points.current) {
            // Faster continuous rotation
            points.current.rotation.y += 0.005;
            points.current.rotation.x += 0.002;

            // Subtle mouse tilting added on top of rotation
            const targetX = state.pointer.y * 0.5;
            const targetY = state.pointer.x * 0.5;
            points.current.rotation.x = THREE.MathUtils.lerp(points.current.rotation.x, points.current.rotation.x + targetX, 0.01);
            points.current.rotation.y = THREE.MathUtils.lerp(points.current.rotation.y, points.current.rotation.y + targetY, 0.01);
        }
    });

    return (
        <Points ref={points} positions={particles} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#ffffff"
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.9}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
};

const ParticleGlobe = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            <Suspense fallback={null}>
                <Canvas
                    camera={{ position: [0, 0, 7], fov: 45 }}
                    dpr={[1, 2]}
                >
                    <ambientLight intensity={1} />
                    <ParticleSphere />
                </Canvas>
            </Suspense>
        </div>
    );
};

export default ParticleGlobe;
