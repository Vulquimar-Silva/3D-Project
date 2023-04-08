import { Preload } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";

import CanvasLoader from "../Loader";

import EarthDayMap from "/earth/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "/earth/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "/earth/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "/earth/textures/8k_earth_clouds.jpg";

const Earth = () => {

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <pointLight color="#cfcfcf" position={[-1500, 350, 40]} intensity={1.8} />
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.5}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.8}
          roughness={0.7}
        />

      </mesh>
    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      className="mouse-events earth"
      frameloop='always'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;