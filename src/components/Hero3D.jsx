import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const DataNode = () => {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main central sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={meshRef} args={[1, 64, 64]} scale={2}>
          <MeshDistortMaterial
            color="#00ff88"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            emissive="#00ff88"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>

      {/* Orbiting small spheres representing data points */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(i * 0.5) * 0.5;

        return (
          <Float key={i} speed={3 + i * 0.2} rotationIntensity={0.3} floatIntensity={0.5}>
            <mesh position={[x, y, z]}>
              <icosahedronGeometry args={[0.15, 0]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? "#00d4ff" : "#b794f6"}
                emissive={i % 2 === 0 ? "#00d4ff" : "#b794f6"}
                emissiveIntensity={0.7}
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
          </Float>
        );
      })}

      {/* Connecting lines/network visualization */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, 0, z)];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <line key={`line-${i}`} geometry={lineGeometry}>
            <lineBasicMaterial attach="material" color="#00ff88" opacity={0.3} transparent />
          </line>
        );
      })}
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-full absolute inset-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00d4ff" />
        <DataNode />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;
