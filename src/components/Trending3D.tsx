"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function ComputerModel() {
  const { scene } = useGLTF("/computer.glb");
  scene.scale.set(0.5, 0.5, 0.5); // scale down
  scene.position.set(0, -0.5, 0); // adjust height
  return <primitive object={scene} />;
}

const Trending3D = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white p-10 rounded-xl shadow-lg mb-10">
      <h2 className="text-2xl font-semibold mb-4">🔥 MY ALL PROJECTS</h2>
      <div className="w-full h-96 bg-gray-800 rounded-lg">
        <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <ComputerModel />
          </Suspense>
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </div>
  );
};

export default Trending3D;
