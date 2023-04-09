import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { inSphere } from "maath/random";
import { Suspense, useRef, useState } from "react";

const Stars = (props) => {
  const ref = useRef();
  const myBuffer = new Float32Array(1000 * 2);
  const [sphere] = useState(() => inSphere(myBuffer, { radius: 5.9 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 1;
    ref.current.rotation.y -= delta / 10;
  });

  return (
    <group rotation={[3, 1, Math.PI / 7]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }} className="mouse-events">
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;