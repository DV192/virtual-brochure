import { Canvas } from "@react-three/fiber";
import Book from "./Book";
import { Suspense } from "react";
import { Environment, Float, Loader, OrbitControls } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils.js";

const Experience = () => {
  return (
    <div className="fixed inset-0">
      <Loader />
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Float
              rotation-x={degToRad(-25)}
              floatIntensity={1}
              speed={2}
              rotationIntensity={2}
            >
              <Book />
            </Float>
            <OrbitControls />
            <Environment preset="studio" environmentIntensity={0.5}></Environment>
            <directionalLight
              position={[2, 5, 2]}
              intensity={2.5}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-bias={-0.0001}
            />
            <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
              <planeGeometry args={[100, 100]} />
              <shadowMaterial transparent opacity={0.2} />
            </mesh>
          </Suspense>
        </group>
      </Canvas>
    </div>
  )
}

export default Experience