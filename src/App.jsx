import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box/Box";

function App() {
  return (
    <section className="h-screen flex items-center justify-center">
      <Canvas>
        <ambientLight intensity={0.9} />
        {/* <pointLight position={[10, 10, 10]} /> */}
        <Box />
        <OrbitControls />
      </Canvas>
    </section>
  );
}

export default App;
