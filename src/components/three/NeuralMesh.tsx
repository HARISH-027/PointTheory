"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Node {
  position: THREE.Vector3;
  connections: number[];
  pulseSpeed: number;
  pulseOffset: number;
}

export function NeuralMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  const nodes = useMemo<Node[]>(() => {
    const nodeCount = 40;
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + Math.random() * 2;

      nodes.push({
        position: new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        ),
        connections: [],
        pulseSpeed: 0.5 + Math.random() * 2,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Create connections (each node connects to 2-4 nearest nodes)
    nodes.forEach((node, i) => {
      const distances = nodes
        .map((other, j) => ({
          j,
          dist: node.position.distanceTo(other.position),
        }))
        .filter((d) => d.j !== i)
        .sort((a, b) => a.dist - b.dist);

      const connectionCount = 2 + Math.floor(Math.random() * 3);
      node.connections = distances
        .slice(0, connectionCount)
        .map((d) => d.j)
        .filter((j) => {
          // Avoid duplicate connections
          return !nodes[j].connections.includes(i);
        });
    });

    return nodes;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.05;
      groupRef.current.rotation.x = Math.sin(t * 0.03) * 0.1;
    }

    if (materialRef.current) {
      materialRef.current.emissiveIntensity =
        0.5 + Math.sin(t * 2) * 0.3;
    }
  });

  // Create line geometry for connections
  const linesGeometry = useMemo(() => {
    const positions: number[] = [];
    const opacities: number[] = [];

    nodes.forEach((node, i) => {
      node.connections.forEach((j) => {
        positions.push(
          node.position.x,
          node.position.y,
          node.position.z,
          nodes[j].position.x,
          nodes[j].position.y,
          nodes[j].position.z
        );
        opacities.push(0.3 + Math.random() * 0.3);
      });
    });

    return { positions, opacities };
  }, [nodes]);

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      {linesGeometry.positions.length > 0 && (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(linesGeometry.positions), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#8b5cf6"
            transparent
            opacity={0.15}
            depthWrite={false}
          />
        </lineSegments>
      )}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshPhysicalMaterial
            ref={i === 0 ? materialRef : undefined}
            color={i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#06b6d4"}
            emissive={
              i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#06b6d4"
            }
            emissiveIntensity={0.8}
            transparent
            opacity={0.8}
            metalness={0.3}
            roughness={0.2}
          />
        </mesh>
      ))}

      {/* Central glowing core */}
      <mesh>
        <octahedronGeometry args={[0.3, 1]} />
        <meshPhysicalMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={1.5}
          transparent
          opacity={0.6}
          metalness={0.5}
          roughness={0.1}
          wireframe
        />
      </mesh>

      <mesh>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshPhysicalMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>

      <mesh>
        <torusGeometry args={[0.8, 0.02, 16, 100]} />
        <meshPhysicalMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.3}
          transparent
          opacity={0.3}
        />
      </mesh>

      <group rotation={[Math.PI / 3, 0, 0]}>
        <mesh>
          <torusGeometry args={[1.2, 0.015, 16, 100]} />
          <meshPhysicalMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
            transparent
            opacity={0.2}
          />
        </mesh>
      </group>
    </group>
  );
}
