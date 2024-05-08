import React from 'react'

type Props = {
  name: string,
  img: JSX.Element,
  selectCard: (name: string) => void,
}

export const PlanetCard: React.FC<Props> = ({ name, img, selectCard }) => {
  return (
    <div className='cursor-pointer flex justify-center w-20 h-20 rounded-xl items-center p-2 bg-zinc-700 hover:bg-zinc-700/70' onClick={() => {selectCard(name)}}>
      {img}
    </div>
  )
}
