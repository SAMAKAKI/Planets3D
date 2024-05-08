import React, { useState } from 'react'
import styles from './index.module.css'
import { PlanetCard, PlanetInfoCard } from '../../components'

export const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [card, setCard] = useState<string>('');

  return (
    <div className='absolute z-50 mt-3 ms-5'>
      <button onClick={() => { setOpenMenu((prev) => !prev) }} className='relative w-10 h-7 flex flex-col gap-2 mb-8'>
        <span className={`${styles.line} ${openMenu && styles.activeLine}`}></span>
        <span className={`${styles.line} ${openMenu && styles.activeLine}`}></span>
        <span className={`${styles.line} ${openMenu && styles.activeLine}`}></span>
      </button>
      <div className={`w-[500px] h-[850px] bg-zinc-600/50 rounded-[40px] text-white transition-all duration-[0.15s] p-5 ease-in ${(openMenu && styles.openMenu) || (!openMenu && styles.closeMenu)}`}>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-3">
            <PlanetCard name='sun' img={<img src='sun.png' className='object-cover'/>} selectCard={setCard}/>
            <PlanetCard  name='mercury' img={<img src='mercury.png' className='object-cover'/>} selectCard={setCard}/>
            <PlanetCard name='venus' img={<img src='venus.png' className='object-cover'/>} selectCard={setCard}/>
            <PlanetCard name='earth' img={<img src='earth.png' className='object-cover'/>} selectCard={setCard}/>
            <PlanetCard name='mars' img={<img src='mars.png' className='object-cover'/>} selectCard={setCard}/>
          </div>
          <div className="flex items-center justify-center gap-3">
          <PlanetCard name='jupiter' img={<img src='jupiter.png' className='object-cover'/>} selectCard={setCard}/>
            <PlanetCard  name='saturn' img={<img src='saturn.png' className='object-cover'/>} selectCard={setCard}/>
            <PlanetCard name='uranus' img={<img src='uranus.png' className='object-cover'/>} selectCard={setCard}/>
            <PlanetCard name='neptune' img={<img src='neptune.png' className='object-cover'/>} selectCard={setCard}/>
            <PlanetCard name='pluto' img={<img src='pluto.png' className='object-cover'/>} selectCard={setCard}/>
          </div>
        </div>
        {card && (
        <div className="mt-5 w-full text-white">
          <h1 className='text-2xl capitalize text-center'>{card}</h1>
          <PlanetInfoCard name={card}/>
        </div>  )}
      </div>
    </div>
  )
}
