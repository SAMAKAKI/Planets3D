import { OrbitControls } from '@react-three/drei'
import { Canvas} from '@react-three/fiber'
import React, {Suspense } from 'react'
import { Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto } from '../../components'

type Props = {
  name: string
}

export const PlanetInfoCard: React.FC<Props> = ({ name }) => { 
  let peaseOfCode: JSX.Element;
  let description: string;
  
  switch (name) {
    case 'sun':
      peaseOfCode = <Sun position={[0, 0, 0]} scale={1}/>
      description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui in aperiam corrupti molestiae aliquid a fugiat maxime illum veritatis omnis reprehenderit temporibus natus ea cupiditate facere! Ratione, dolores tempora.'
      break;
    case 'mercury':
      peaseOfCode = <Mercury position={[0, 0, 0]} scale={1}/>
      description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui in aperiam corrupti molestiae aliquid a fugiat maxime illum veritatis omnis reprehenderit temporibus natus ea cupiditate facere! Ratione, dolores tempora.'
      break;
    case 'venus':
      peaseOfCode = <Venus position={[0, 0, 0]} scale={2}/>
      description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui in aperiam corrupti molestiae aliquid a fugiat maxime illum veritatis omnis reprehenderit temporibus natus ea cupiditate facere! Ratione, dolores tempora.'
      break;
    case 'earth':
      peaseOfCode = <Earth position={[0, 0, 0]} scale={2}/>
      description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui in aperiam corrupti molestiae aliquid a fugiat maxime illum veritatis omnis reprehenderit temporibus natus ea cupiditate facere! Ratione, dolores tempora.'
      break;
    case 'mars':
      peaseOfCode = <Mars position={[0, 0, 0]} scale={2}/>
      description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui in aperiam corrupti molestiae aliquid a fugiat maxime illum veritatis omnis reprehenderit temporibus natus ea cupiditate facere! Ratione, dolores tempora.'
      break;
    case 'jupiter':
      peaseOfCode = <Jupiter position={[0, 0, 0]} scale={0.3}/>
      description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui in aperiam corrupti molestiae aliquid a fugiat maxime illum veritatis omnis reprehenderit temporibus natus ea cupiditate facere! Ratione, dolores tempora.'
      break;
    case 'saturn':
      peaseOfCode = <Saturn position={[0, 0, 0]} scale={1.5}/>
      description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui in aperiam corrupti molestiae aliquid a fugiat maxime illum veritatis omnis reprehenderit temporibus natus ea cupiditate facere! Ratione, dolores tempora.'
      break;
    case 'uranus':
      peaseOfCode = <Uranus position={[0, 0, 0]} scale={2}/>
      description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui in aperiam corrupti molestiae aliquid a fugiat maxime illum veritatis omnis reprehenderit temporibus natus ea cupiditate facere! Ratione, dolores tempora.'
      break;
    case 'neptune':
      peaseOfCode = <Neptune position={[0, -3.3, 0]} scale={0.5}/>
      description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui in aperiam corrupti molestiae aliquid a fugiat maxime illum veritatis omnis reprehenderit temporibus natus ea cupiditate facere! Ratione, dolores tempora.'
      break;
    case 'pluto':
      peaseOfCode = <Pluto position={[0, 0, 0]} scale={2}/>
      description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui in aperiam corrupti molestiae aliquid a fugiat maxime illum veritatis omnis reprehenderit temporibus natus ea cupiditate facere! Ratione, dolores tempora.'
      break;
    default: 
      peaseOfCode = <div></div>
      description = ''
    }

  return (
    <div className='w-full h-[300px] mt-5'>
      <Canvas shadows camera={{position: [4, 1, 4], fov: 50}}>
        <Suspense fallback={null}>
          <OrbitControls autoRotate autoRotateSpeed={0.1} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
          <ambientLight />
          {/* { name === 'sun' && <Sun position={[0, 0, 0]} scale={0.2}/>}
          { name === 'mercury' && <Mercury position={[0, 0, 0]} scale={1}/>} */}
          {peaseOfCode}
        </Suspense>
      </Canvas>
      <p className='text-lg text-center'>{description}</p>
    </div>
  )
}
