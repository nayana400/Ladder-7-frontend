import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const PencilLine = ({ start, end, progress }) => {
    const lineRef = useRef();

    useFrame(() => {
        if (lineRef.current) {
            const currentEnd = new THREE.Vector3().lerpVectors(start, end, progress);
            const points = [start, currentEnd];
            lineRef.current.geometry.setFromPoints(points);
        }
    });

    return (
        <line ref={lineRef}>
            <bufferGeometry />
            <lineBasicMaterial color="#3b82f6" linewidth={10} transparent opacity={1} />
        </line>
    );
};

const PencilModel = ({ pencilRef }) => {
    return (
        <group ref={pencilRef}>
            <group rotation={[0, 0, -Math.PI / 4]}>
                {/* Pencil Body - Hexagonal */}
                <mesh position={[0, 1.5, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 3, 6]} />
                    <meshStandardMaterial color="#007bff" roughness={0.3} metalness={0.2} />
                </mesh>
                {/* Pencil Tip (Wood) */}
                <mesh position={[0, -0.2, 0]}>
                    <coneGeometry args={[0.1, 0.4, 6]} />
                    <meshStandardMaterial color="#e5c07b" />
                </mesh>
                {/* Lead Tip */}
                <mesh position={[0, -0.4, 0]}>
                    <coneGeometry args={[0.04, 0.1, 32]} />
                    <meshStandardMaterial color="#007bff" />
                </mesh>
            </group>
        </group>
    );
};

const Scene = () => {
    const [writingProgress, setWritingProgress] = useState(0);
    const [writingDone, setWritingDone] = useState(false);
    const [lineProgress, setLineProgress] = useState(0);

    const text = "About Us";
    const startX = -2.5;
    const endX = 2.8;

    const lineStart = new THREE.Vector3(-3.2, -0.8, 0);
    const lineEnd = new THREE.Vector3(3.8, -0.8, 0);

    const pencilRef = useRef();

    const visibleChars = Math.floor(writingProgress * text.length);

    useFrame((state, delta) => {
        if (!pencilRef.current) return;

        const t = state.clock.getElapsedTime();

        if (!writingDone) {
            setWritingProgress((prev) => {
                const next = prev + delta * 0.25;
                if (next >= 1) {
                    setWritingDone(true); // Immediate transition
                    return 1;
                }
                return next;
            });

            const targetX = THREE.MathUtils.lerp(startX, endX, writingProgress);
            const scribbleY = Math.sin(t * 20) * 0.05;

            pencilRef.current.position.x = targetX;
            pencilRef.current.position.y = 0.5 + scribbleY;
            pencilRef.current.position.z = 0.2;
        } else if (lineProgress < 1) {
            setLineProgress((prev) => Math.min(prev + delta * 0.8, 1));
            const currentLinePos = new THREE.Vector3().lerpVectors(lineStart, lineEnd, lineProgress);
            // DIRECT assignment, no lerp lag
            pencilRef.current.position.copy(currentLinePos);
            pencilRef.current.position.y += 0.1; // Slight offset so tip touches line
            pencilRef.current.position.z = 0.2;
        }
    });

    return (
        <group rotation={[0.4, -0.3, 0.1]}> {/* Restored Tilt to match pic exactly */}
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={2.5} />

            <group position={[0, 0, 0]}>
                <Text
                    fontSize={1.4}
                    color="#202020"
                    fontWeight="900"
                    anchorX="left"
                    anchorY="middle"
                    position={[startX, 0.5, 0]}
                >
                    {text.slice(0, visibleChars)}
                </Text>

                <PencilModel pencilRef={pencilRef} />

                {writingDone && (
                    <PencilLine start={lineStart} end={lineEnd} progress={lineProgress} />
                )}

                <ContactShadows
                    position={[0, -1.8, 0]}
                    opacity={0.3}
                    scale={10}
                    blur={3}
                />
            </group>
        </group>
    );
};

const AboutScene = () => {
    return (
        <div className="absolute inset-0 z-0 bg-white">
            <Canvas shadows dpr={[1, 2]}>
                <color attach="background" args={['#ffffff']} />
                <Scene />
            </Canvas>
        </div>
    );
};

export default AboutScene;
