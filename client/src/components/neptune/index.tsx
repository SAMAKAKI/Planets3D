import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { RefObject, useRef } from 'react'
import { Mesh } from 'three'

type Props = {
  position: [x: number, y: number, z: number],
  speed?: number,
  scale?: number
}

export const Neptune: React.FC<Props> = ({ position, speed = 0.1, scale }) => {
  const neptune = useGLTF('Neptune.glb');
  const ref = useRef<Mesh>()

  useFrame(({clock}) => {
    const elapsedTime = clock.getElapsedTime();
    ref.current.position.x = Math.cos(elapsedTime * speed) * position[0]
    ref.current.position.z = Math.sin(elapsedTime * speed) * position[0]
    ref.current.rotation.y += 0.01
  }, [])

  return (
    <mesh scale={scale} position={position} ref={ref as RefObject<Mesh>}>
      <primitive object={neptune.scene.clone()} />
    </mesh>
  )
}
