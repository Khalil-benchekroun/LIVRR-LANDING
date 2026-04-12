import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function buildScreenTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 896;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#0A0A0F";
  ctx.fillRect(0, 0, 512, 896);

  ctx.fillStyle = "#111118";
  ctx.fillRect(0, 0, 512, 80);
  ctx.fillStyle = "#C9A96E";
  ctx.font = "bold 30px Georgia, serif";
  ctx.textAlign = "center";
  ctx.fillText("LIVRR", 256, 52);

  ctx.fillStyle = "#0A0A0F";
  ctx.beginPath();
  ctx.roundRect(186, 4, 140, 24, 12);
  ctx.fill();

  ctx.fillStyle = "#1C1C28";
  ctx.beginPath();
  ctx.roundRect(20, 96, 472, 48, 24);
  ctx.fill();
  ctx.fillStyle = "#44445A";
  ctx.font = "16px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("🔍  Rechercher une boutique...", 44, 125);

  const chips = [
    ["Tout", true],
    ["Robes", false],
    ["Sacs", false],
    ["Bijoux", false],
  ];
  let cx = 20;
  chips.forEach(([label, active]) => {
    const w = label.length * 13 + 28;
    ctx.fillStyle = active ? "#C9A96E" : "#1C1C28";
    ctx.beginPath();
    ctx.roundRect(cx, 160, w, 34, 17);
    ctx.fill();
    ctx.fillStyle = active ? "#0A0A0F" : "#666677";
    ctx.font = active ? "bold 14px sans-serif" : "14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(label, cx + w / 2, 182);
    cx += w + 10;
  });

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 18px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("Boutiques à la une", 20, 224);

  [
    ["Maison Élise", "Concept Store · Paris 6e", "< 3h"],
    ["Studio Noir", "Prêt-à-porter · Paris 1er", "< 2h"],
  ].forEach(([name, sub, delay], i) => {
    const x = 20 + i * 238;
    ctx.fillStyle = "#141420";
    ctx.beginPath();
    ctx.roundRect(x, 234, 222, 150, 14);
    ctx.fill();
    ctx.fillStyle = "#C9A96E";
    ctx.fillRect(x + 14, 252, 28, 2);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 16px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(name, x + 14, 278);
    ctx.fillStyle = "#666677";
    ctx.font = "12px sans-serif";
    ctx.fillText(sub, x + 14, 298);
    ctx.fillStyle = "#C9A96E22";
    ctx.beginPath();
    ctx.roundRect(x + 14, 316, 80, 26, 13);
    ctx.fill();
    ctx.fillStyle = "#C9A96E";
    ctx.font = "bold 12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(delay, x + 54, 334);
    ctx.textAlign = "left";
  });

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 18px sans-serif";
  ctx.fillText("Sélection du jour", 20, 416);

  ctx.fillStyle = "#141420";
  ctx.beginPath();
  ctx.roundRect(20, 428, 472, 190, 16);
  ctx.fill();
  const g = ctx.createLinearGradient(20, 428, 492, 618);
  g.addColorStop(0, "#C9A96E08");
  g.addColorStop(1, "#C9A96E22");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.roundRect(20, 428, 472, 190, 16);
  ctx.fill();
  ctx.fillStyle = "#C9A96E";
  ctx.fillRect(38, 452, 24, 2);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 20px sans-serif";
  ctx.fillText("Robe Midi Sculptée", 38, 490);
  ctx.fillStyle = "#888899";
  ctx.font = "13px sans-serif";
  ctx.fillText("Maison Élise · Paris 6e", 38, 512);
  ctx.fillStyle = "#C9A96E";
  ctx.font = "bold 22px sans-serif";
  ctx.fillText("485 €", 38, 548);
  ctx.fillStyle = "#555566";
  ctx.font = "12px sans-serif";
  ctx.fillText("Livraison estimée avant 15h", 38, 568);
  ctx.fillStyle = "#C9A96E";
  ctx.beginPath();
  ctx.roundRect(290, 530, 176, 44, 22);
  ctx.fill();
  ctx.fillStyle = "#0A0A0F";
  ctx.font = "bold 14px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Commander", 378, 557);

  ctx.fillStyle = "#0F0F1A";
  ctx.beginPath();
  ctx.roundRect(20, 636, 472, 110, 14);
  ctx.fill();
  ctx.strokeStyle = "#C9A96E44";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(20, 636, 472, 110, 14);
  ctx.stroke();
  ctx.fillStyle = "#C9A96E";
  ctx.font = "bold 13px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("Commande en cours", 38, 666);
  ctx.fillStyle = "#888899";
  ctx.font = "12px sans-serif";
  ctx.fillText("Blazer croisé — Studio Noir", 38, 686);
  ["Préparée", "Collectée", "En route", "Livrée"].forEach((step, i) => {
    const sx = 38 + i * 110;
    ctx.fillStyle = i <= 1 ? "#C9A96E" : "#2A2A38";
    ctx.beginPath();
    ctx.arc(sx, 716, 7, 0, Math.PI * 2);
    ctx.fill();
    if (i < 3) {
      ctx.fillStyle = i < 1 ? "#C9A96E" : "#2A2A38";
      ctx.fillRect(sx + 7, 714, 96, 4);
    }
    ctx.fillStyle = i <= 1 ? "#C9A96E" : "#444455";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(step, sx, 736);
  });

  ctx.fillStyle = "#0D0D16";
  ctx.fillRect(0, 776, 512, 120);
  ctx.fillStyle = "#C9A96E55";
  ctx.fillRect(0, 776, 512, 1);
  [
    ["⌂", "Accueil", true],
    ["♡", "Favoris", false],
    ["◎", "Suivi", false],
    ["◉", "Profil", false],
  ].forEach(([icon, label, active], i) => {
    const nx = 64 + i * 128;
    ctx.fillStyle = active ? "#C9A96E" : "#333344";
    ctx.font = "22px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(icon, nx, 820);
    ctx.font = "11px sans-serif";
    ctx.fillStyle = active ? "#C9A96E" : "#333344";
    ctx.fillText(label, nx, 842);
    if (active) {
      ctx.fillStyle = "#C9A96E";
      ctx.beginPath();
      ctx.roundRect(nx - 16, 856, 32, 3, 2);
      ctx.fill();
    }
  });

  return new THREE.CanvasTexture(canvas);
}

function Phone() {
  const groupRef = useRef();
  const screenTexture = useMemo(() => buildScreenTexture(), []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.35) * 0.18;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.25) * 0.04;
    }
  });

  return (
    <Float speed={1.0} rotationIntensity={0.1} floatIntensity={0.5}>
      <group ref={groupRef}>
        <RoundedBox args={[2.32, 4.72, 0.2]} radius={0.24} smoothness={10}>
          <meshStandardMaterial
            color="#B8953E"
            metalness={1}
            roughness={0.08}
          />
        </RoundedBox>
        <RoundedBox
          args={[2.2, 4.6, 0.22]}
          radius={0.22}
          smoothness={10}
          position={[0, 0, 0.01]}
        >
          <meshStandardMaterial
            color="#18181F"
            metalness={0.9}
            roughness={0.1}
          />
        </RoundedBox>
        <mesh position={[0, 0.05, 0.12]}>
          <planeGeometry args={[2.0, 4.2]} />
          <meshBasicMaterial map={screenTexture} />
        </mesh>
        <mesh position={[1.13, 0.5, 0]}>
          <boxGeometry args={[0.06, 0.4, 0.14]} />
          <meshStandardMaterial color="#B8953E" metalness={1} roughness={0.1} />
        </mesh>
        <mesh position={[-1.13, 0.6, 0]}>
          <boxGeometry args={[0.06, 0.28, 0.14]} />
          <meshStandardMaterial color="#B8953E" metalness={1} roughness={0.1} />
        </mesh>
        <mesh position={[-1.13, 0.2, 0]}>
          <boxGeometry args={[0.06, 0.28, 0.14]} />
          <meshStandardMaterial color="#B8953E" metalness={1} roughness={0.1} />
        </mesh>
        <mesh position={[0, 2.18, 0.12]}>
          <circleGeometry args={[0.08, 16]} />
          <meshStandardMaterial
            color="#0A0A14"
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>
        <pointLight
          position={[0, 0, 1.5]}
          intensity={1.2}
          color="#C9A96E"
          distance={5}
        />
        <pointLight
          position={[0, 2, 0.5]}
          intensity={0.4}
          color="#E8D5A3"
          distance={3}
        />
      </group>
    </Float>
  );
}

function Particles() {
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    return pos;
  }, []);
  const ref = useRef();
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.015;
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
        color="#C9A96E"
        size={0.035}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Ring({ radius, speed, opacity }) {
  const ref = useRef();
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * speed;
      ref.current.rotation.z = s.clock.elapsedTime * speed * 0.6;
    }
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.01, 16, 200]} />
      <meshBasicMaterial color="#C9A96E" opacity={opacity} transparent />
    </mesh>
  );
}

export default function Scene3D({ style }) {
  return (
    <Canvas
      style={style}
      camera={{ position: [0, 0, 9], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <ambientLight intensity={0.25} />
      <pointLight position={[6, 6, 6]} intensity={2.5} color="#ffffff" />
      <pointLight position={[-4, -2, 4]} intensity={1.2} color="#C9A96E" />
      <pointLight position={[0, -6, 2]} intensity={0.8} color="#E8D5A3" />
      <Phone />
      <Particles />
      <Ring radius={4} speed={0.12} opacity={0.25} />
      <Ring radius={5.5} speed={0.08} opacity={0.15} />
    </Canvas>
  );
}
