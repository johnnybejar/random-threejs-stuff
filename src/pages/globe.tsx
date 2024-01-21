import { Canvas } from "@react-three/fiber";

function Globe() {
  return (
    <Canvas className="">
      <ambientLight />
      <mesh rotation={[1, 1, 0]} position={[0, 0, 1]}>
        <sphereGeometry args={[2, 10, 10]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </Canvas>
  );
}

export default Globe;
