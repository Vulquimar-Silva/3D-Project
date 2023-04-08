import { OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import CanvasLoader from "../Loader";

const Earth = () => {

  const { scene } = useGLTF("./earth3d/scene.gltf");
  
  return (
    <mesh>
      <hemisphereLight intensity={0.11} groundColor='black' />
      <spotLight
        position={[1.100, -1, 1.450]}
      />
      <pointLight intensity={1} />
      <primitive object={scene} scale={1.8} position-y={-0.50} position-x={-0.05} rotation-y={-1.95} />
    </mesh>
  );
};

const EarthCanvas = () => {

  return (
    <Canvas
      className="mouse-events"
      shadows
      frameloop='always'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;