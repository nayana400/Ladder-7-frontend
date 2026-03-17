import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, Center, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';
import logoUrl from "../../../assets/Images/LADDER 7 LOGO.png";

// Component that suspends while loading texture
const LogoMesh = () => {
    const texture = useLoader(THREE.TextureLoader, logoUrl);
    return (
        <mesh castShadow receiveShadow>
            <planeGeometry args={[3.2, 3.2]} />
            <meshStandardMaterial
                map={texture}
                transparent={true}
                side={THREE.DoubleSide}
                roughness={0.2}
                metalness={0.8}
                emissive="#ffffff"
                emissiveIntensity={0.05}
            />
        </mesh>
    );
};

// Component that handles the continuous animation loop
const AnimationWrapper = ({ children }) => {
    const groupRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            // Continuous motion that starts immediately
            groupRef.current.rotation.y = time * 0.5; // Slightly faster continuous rotation
            groupRef.current.rotation.x = Math.sin(time * 0.4) * 0.12; // Gentle tilt
            groupRef.current.position.y = Math.sin(time * 1.5) * 0.25; // Pronounced floating

            const scale = 1 + Math.sin(time * 2.5) * 0.04;
            groupRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <group ref={groupRef}>
            {children}
            {/* Consistent lighting that moves with the logo */}
            <pointLight position={[0, 0, -1]} intensity={5} color="#4f46e5" distance={5} />
        </group>
    );
};

const Logo3DScene = () => {
    return (
        <div className="w-full h-full min-h-[300px] flex items-center justify-center cursor-grab active:cursor-grabbing">
            <Canvas
                alpha
                dpr={[1, 2]}
                camera={{ position: [0, 0, 5], fov: 45 }}
                shadows
            >
                <ambientLight intensity={1.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#4f46e5" />

                <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4}>
                    <Center>
                        <AnimationWrapper>
                            <Suspense fallback={null}>
                                <LogoMesh />
                            </Suspense>
                        </AnimationWrapper>
                    </Center>
                </Float>

                <ContactShadows
                    position={[0, -2, 0]}
                    opacity={0.4}
                    scale={10}
                    blur={2.5}
                    far={4}
                />

                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default Logo3DScene;
