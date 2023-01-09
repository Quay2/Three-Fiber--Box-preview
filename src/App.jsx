import React, {Suspense} from 'react'
import Box from "../src/Components/Box"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"


function App() {

  return (
    <div className="relative h-[100vh]">
      <Canvas className="bg-[#b1b1b1] Canvas">
        <ambientLight intensity={0.1} />
        <directionalLight position={[-2,5,2]} intensity={1} />

        <OrbitControls  enablePan={false} enableZoom={false}/>
        <Suspense fallback={null}></Suspense>
       <Box />
      </Canvas>
    </div>

  )
}

export default App
