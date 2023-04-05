import { OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";

import CanvasLoader from "../Loader";

const HeavyFirefly = () => {
  const {  scene, animations  } = useGLTF("./heavy_firefly/scene.gltf");
  const { ref, names, actions } = useAnimations(animations);
  
  useEffect(() => {
    actions[names[0]].reset().fadeIn(1).play()
  })
  return (
    <mesh ref={ref}>
      <hemisphereLight color='white' intensity={-1.20} groundColor='white' />
      <spotLight
        angle={0.90}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
    <primitive 
      object={scene} 
      scale={7.8}
      position={[-20, -90.55, -900.5]}
      rotation={[0.9, 1, 0]}
    />
    </mesh>
  );
};

const HeavyFireflyCanvas = () => {
  return (
    <Canvas
      className="mouse-events"
      shadows='soft'
      color="blue"
      frameloop='always'
      gl={{ preserveDrawingBuffer: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <HeavyFirefly />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default HeavyFireflyCanvas;