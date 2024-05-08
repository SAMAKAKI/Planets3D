import { useGLTF } from '@react-three/drei'
import React, { RefObject, useRef, version } from 'react'
import { Mesh } from "three"

type Props = {
  position: [x: number, y: number, z: number],
  scale?: number
}

export const Sun: React.FC<Props> = ({ position, scale = 1 }) => {
  const ref = useRef<Mesh>();
  // const [sun] = useLoader(TextureLoader, [
  //   "sun.jpg"
  // ])

  const sun = useGLTF('sun.glb')

  // useFrame(() => {
  //   ref.current.rotation.x += 0.001;
  //   ref.current.rotation.z += 0.001;
  // }, [])

  return (
    <mesh scale={scale} position={position} ref={ref as RefObject<Mesh>}>
      {/* <sphereGeometry args={[1, 100, 100]}/>
      <meshStandardMaterial map={sun} /> */}

      <primitive object={sun.scene.clone()} />
    </mesh>
  )
}
