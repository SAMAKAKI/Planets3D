import { Canvas } from "@react-three/fiber"
import { Sun } from "./components"
import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"
import { Earth, Jupiter, Mars, Mercury, Navbar, Neptune, Pluto, Saturn, Uranus, Venus, } from "./components"

function App() {

  return (
    <div className="w-full h-[100vh] bg-[url('bg.jpeg')] bg-cover bg-center relative">
      <Navbar />
      <Canvas shadows camera={{position: [5, 1, 5], fov: 50}}>
        <Suspense fallback={null}>
          <OrbitControls zoomToCursor enableZoom={true} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
          <ambientLight/>
          <Sun position={[0, 0, 0]}/>
          <Mercury position={[2, 0, 0]} speed={0.34} scale={0.03}/>
          <Venus position={[3, 0, 0]} speed={0.25} scale={0.08}/>
          <Earth position={[4.7, 0, 0]} speed={0.21} scale={0.09}/>
          <Mars position={[6, 0, 0]} speed={0.17} scale={0.04}/>
          <Jupiter position={[8, 0, 0]} speed={0.09} scale={0.04}/>
          <Saturn position={[10.5, 0, 0]} speed={0.06} scale={0.15}/>
          <Uranus position={[12, 0, 0]} speed={0.04} scale={0.06}/>
          <Neptune position={[14, -.3, 0]} speed={0.035} scale={0.05}/>
          <Pluto position={[16, 0, 0]} speed={0.03} scale={0.03}/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
