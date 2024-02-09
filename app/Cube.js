// Cube.js
"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Cube() {
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <>
      <mesh ref={cubeRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <OrbitControls />
    </>
  );
}

export default Cube;

