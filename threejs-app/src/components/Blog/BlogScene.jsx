import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 1500 }) {
  const points = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color('#3b82f6'); // Electric Blue

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    points.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.03;
  });

  return (
    <Points ref={points} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function GridBackground() {
  return (
    <gridHelper 
      args={[20, 20, '#1e293b', '#0f172a']} 
      position={[0, -2, 0]} 
      rotation={[Math.PI / 2, 0, 0]}
    />
  );
}

export default function BlogScene() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#051120]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#051120] via-[#0a192f] to-[#051120] opacity-80" />
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles />
        <GridBackground />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1d4ed8" />
      </Canvas>
    </div>
  );
}
