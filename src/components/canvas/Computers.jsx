import { OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";

import CanvasLoader from "../Loader";

const Computers = () => {
  const { scene, animations } = useGLTF("./cosmonaut_on_a_rocket/scene.gltf");
  const { ref, names, actions } = useAnimations(animations)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Adiciona um ouvinte para alterações no tamanho da tela
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Define o valor inicial da variável de estado `isMobile`
    setIsMobile(mediaQuery.matches);

    // Defina uma função de retorno de chamada para lidar com alterações na media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Adiciona a função de retorno de chamada como um ouvinte para alterações no media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove o ouvinte quando o componente for desmontado
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(1).play()
  })

  return (
    <mesh ref={ref}>
      <hemisphereLight intensity={0.20} groundColor='black' />
      <spotLight
        position={[-90, 1600, 900]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.5 : 1.10}
        position={isMobile ? [40, -90, -20.9] : [30, -120.55, -190.5]}
        rotation={[-0.11, -0.1, -6.5]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Adiciona um ouvinte para alterações no tamanho da tela
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Define o valor inicial da variável de estado `isMobile`
    setIsMobile(mediaQuery.matches);

    // Defina uma função de retorno de chamada para lidar com alterações na media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Adiciona a função de retorno de chamada como um ouvinte para alterações no media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove o ouvinte quando o componente for desmontado
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <Canvas
        className={isMobile ? "mouse-events" : null}
        shadows
        frameloop='always'
        dpr={[1, 2]}
        camera={{ position: [450, 540, 200], fov: 27 }}
        gl={{ preserveDrawingBuffer: false }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 1}
            minPolarAngle={Math.PI / 2}
          />

          <Computers />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default ComputersCanvas;