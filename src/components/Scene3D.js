import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function GoldOrb() {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1.8, 128, 128]}>
        <MeshDistortMaterial
          color="#C9A96E"
          attach="material"
          distort={0.35}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          emissive="#4A3010"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
}

function FloatingRings() {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) { ring1.current.rotation.x = t * 0.2; ring1.current.rotation.z = t * 0.1; }
    if (ring2.current) { ring2.current.rotation.y = t * 0.3; ring2.current.rotation.x = t * 0.15; }
    if (ring3.current) { ring3.current.rotation.z = t * 0.25; ring3.current.rotation.y = t * 0.2; }
  });

  return (
    <>
      <mesh ref={ring1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.8, 0.015, 16, 200]} />
        <meshBasicMaterial color="#C9A96E" opacity={0.4} transparent />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 3, 0, Math.PI / 4]}>
        <torusGeometry args={[3.4, 0.01, 16, 200]} />
        <meshBasicMaterial color="#C9A96E" opacity={0.25} transparent />
      </mesh>
      <mesh ref={ring3} rotation={[Math.PI / 6, Math.PI / 3, 0]}>
        <torusGeometry args={[4.0, 0.008, 16, 200]} />
        <meshBasicMaterial color="#C9A96E" opacity={0.15} transparent />
      </mesh>
    </>
  );
}

function ParticleField() {
  const count = 300;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  const ref = useRef();
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#C9A96E" size={0.03} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function Scene3D({ style }) {
  return (
    <Canvas
      style={style}
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#C9A96E" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
      <spotLight position={[0, 10, 0]} intensity={1} color="#E8D5A3" angle={0.3} />
      <Stars radius={80} depth={50} count={800} factor={2} saturation={0} fade speed={0.5} />
      <GoldOrb />
      <FloatingRings />
      <ParticleField />
    </Canvas>
  );
}
