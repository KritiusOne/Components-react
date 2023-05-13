import React from 'react'
import {AiOutlineAppstore} from 'react-icons/ai'
import './card.css'
export function Card({title, fecha}) {
  return (
    <div className='card'>
      <AiOutlineAppstore className='card__icon' />
      <div className='card__container container-left'>
        <h3 className='card__title'> {title} </h3>
        <span className='card__fecha'> {fecha} </span>
      </div>
      <button onClick={()=>{console.log("soy un click")}} className='card__button container-right'>Ver</button>
    </div>
  )
}
