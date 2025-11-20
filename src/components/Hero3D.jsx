import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Individual neuron node
const NeuronNode = ({ position, color, size = 0.12 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const pulse = 1 + Math.sin(time * 3 + position[0] + position[1]) * 0.15;
    meshRef.current.scale.setScalar(pulse);
  });

  return (
    <Sphere ref={meshRef} args={[size, 16, 16]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

// Synapse connection with pulse animation
const Synapse = ({ start, end, color }) => {
  const lineRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const pulse = 0.2 + Math.sin(time * 2 + start[0]) * 0.15;
    lineRef.current.material.opacity = pulse;
  });

  const points = useMemo(() => [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ], [start, end]);

  const curve = useMemo(() => {
    const midPoint = new THREE.Vector3(
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2 + 0.1,
      (start[2] + end[2]) / 2
    );
    return new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      midPoint,
      new THREE.Vector3(...end)
    );
  }, [start, end]);

  const linePoints = useMemo(() => curve.getPoints(20), [curve]);

  return (
    <line ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={linePoints.length}
          array={new Float32Array(linePoints.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.3} />
    </line>
  );
};

// Neural Network structure
const NeuralNetwork = () => {
  const groupRef = useRef();

  // Define network architecture: 4-layer network
  const layers = useMemo(() => ({
    input: [
      [-2, 0.8, 0],
      [-2, 0.3, 0],
      [-2, -0.3, 0],
      [-2, -0.8, 0]
    ],
    hidden1: [
      [-0.7, 1, 0],
      [-0.7, 0.5, 0],
      [-0.7, 0, 0],
      [-0.7, -0.5, 0],
      [-0.7, -1, 0]
    ],
    hidden2: [
      [0.7, 0.8, 0],
      [0.7, 0.3, 0],
      [0.7, -0.3, 0],
      [0.7, -0.8, 0]
    ],
    output: [
      [2, 0.4, 0],
      [2, -0.4, 0]
    ]
  }), []);

  // Generate all synaptic connections
  const connections = useMemo(() => {
    const conns = [];
    const { input, hidden1, hidden2, output } = layers;

    // Input → Hidden1
    input.forEach(start => {
      hidden1.forEach(end => {
        conns.push({ start, end, color: '#00ff88' });
      });
    });

    // Hidden1 → Hidden2
    hidden1.forEach(start => {
      hidden2.forEach(end => {
        conns.push({ start, end, color: '#00d4ff' });
      });
    });

    // Hidden2 → Output
    hidden2.forEach(start => {
      output.forEach(end => {
        conns.push({ start, end, color: '#b794f6' });
      });
    });

    return conns;
  }, [layers]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.15;
    groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Render all synapses first (behind nodes) */}
      {connections.map((conn, idx) => (
        <Synapse
          key={`synapse-${idx}`}
          start={conn.start}
          end={conn.end}
          color={conn.color}
        />
      ))}

      {/* Input Layer - Green */}
      {layers.input.map((pos, idx) => (
        <NeuronNode key={`input-${idx}`} position={pos} color="#00ff88" size={0.11} />
      ))}

      {/* Hidden Layer 1 - Cyan */}
      {layers.hidden1.map((pos, idx) => (
        <NeuronNode key={`h1-${idx}`} position={pos} color="#00d4ff" size={0.13} />
      ))}

      {/* Hidden Layer 2 - Purple */}
      {layers.hidden2.map((pos, idx) => (
        <NeuronNode key={`h2-${idx}`} position={pos} color="#b794f6" size={0.12} />
      ))}

      {/* Output Layer - Bright Green */}
      {layers.output.map((pos, idx) => (
        <NeuronNode key={`output-${idx}`} position={pos} color="#00ff88" size={0.14} />
      ))}

      {/* Central glow light */}
      <pointLight position={[0, 0, 0]} intensity={0.8} color="#00d4ff" distance={4} />
    </group>
  );
};

// Floating data particles
const DataParticles = () => {
  const particlesRef = useRef();
  const particleCount = 40;

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 2.5 + Math.random() * 0.8;
      
      temp.push({
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ],
        color: ['#00ff88', '#00d4ff', '#b794f6'][i % 3],
        speed: 0.3 + Math.random() * 0.4
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    particlesRef.current.rotation.y = time * 0.08;
    particlesRef.current.rotation.x = time * 0.05;
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, idx) => (
        <Sphere key={idx} args={[0.025, 8, 8]} position={particle.position}>
          <meshBasicMaterial color={particle.color} transparent opacity={0.6} />
        </Sphere>
      ))}
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-full absolute inset-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#00d4ff" />
        
        <NeuralNetwork />
        <DataParticles />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;
