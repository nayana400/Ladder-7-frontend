import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

const FloatingSphere = ({ color, position, size, speed, distort }) => {
    const mesh = useRef();

    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={mesh} args={[size, 100, 100]} position={position}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={distort}
                    speed={speed}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

const BlogScene = () => {
    return (
        <div
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0, opacity: 0.8, height: '100vh', width: '100vw' }}
        >
            <Canvas shadows camera={{ position: [0, 0, 15], fov: 50 }}>
                <ambientLight intensity={2} />
                <spotLight position={[20, 20, 20]} angle={0.3} penumbra={1} intensity={2} castShadow />
                <pointLight position={[-20, -20, -20]} intensity={1.5} />
                <directionalLight position={[0, 10, 10]} intensity={2} />

                <FloatingSphere
                    color="#3b82f6"
                    position={[-6, 4, 0]}
                    size={3}
                    speed={2}
                    distort={0.4}
                />
                <FloatingSphere
                    color="#8b5cf6"
                    position={[6, -5, -2]}
                    size={4}
                    speed={1.5}
                    distort={0.3}
                />
                <FloatingSphere
                    color="#6366f1"
                    position={[4, 8, -4]}
                    size={2}
                    speed={3}
                    distort={0.5}
                />
                <FloatingSphere
                    color="#2563eb"
                    position={[-5, -8, -1]}
                    size={2.5}
                    speed={2.5}
                    distort={0.6}
                />
            </Canvas>
        </div>
    );
};

export default BlogScene;
