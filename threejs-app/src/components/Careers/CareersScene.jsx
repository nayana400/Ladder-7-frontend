import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WavyLines = () => {
    const meshRef = useRef();
    const count = 60; // Number of lines
    const points = 100; // Points per line

    // Create the geometry for all lines
    const lineData = useMemo(() => {
        const lines = [];
        for (let i = 0; i < count; i++) {
            const vertices = [];
            for (let j = 0; j < points; j++) {
                // Initial positions
                vertices.push(new THREE.Vector3((j - points / 2) * 0.2, (i - count / 2) * 0.05, 0));
            }
            lines.push(new THREE.CatmullRomCurve3(vertices).getPoints(points));
        }
        return lines;
    }, [count, points]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.children.forEach((line, i) => {
                const positions = line.geometry.attributes.position;
                for (let j = 0; j < points; j++) {
                    const x = (j - points / 2) * 0.2;
                    const z = (i - count / 2) * 0.1;

                    // Wave logic: multiple sinusoids for complexity
                    const wave1 = Math.sin(x * 0.5 + time * 1.5 + i * 0.1);
                    const wave2 = Math.cos(x * 0.8 - time * 1.2 + i * 0.05);
                    const y = (wave1 + wave2) * 0.8;

                    // Apply twist/perspective
                    const finalY = y + (i - count / 2) * 0.02;
                    const finalZ = z + Math.sin(x * 0.3 + time * 0.5) * 0.5;

                    positions.setXYZ(j, x, finalY, finalZ);
                }
                positions.needsUpdate = true;
            });
        }
    });

    return (
        <group ref={meshRef}>
            {lineData.map((pointsData, i) => (
                <line key={i}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={pointsData.length}
                            array={new Float32Array(pointsData.length * 3)}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <lineBasicMaterial
                        transparent
                        opacity={0.6 - (i / count) * 0.4}
                        color={i % 2 === 0 ? "#ff4df2" : "#a855f7"}
                        linewidth={2}
                    />
                </line>
            ))}
        </group>
    );
};

const CareersScene = () => {
    return (
        <div className="absolute inset-0 pointer-events-none opacity-70">
            <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
                <ambientLight intensity={2} />
                <pointLight position={[10, 10, 10]} intensity={3} />
                <WavyLines />
            </Canvas>
        </div>
    );
};

export default CareersScene;
