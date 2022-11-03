import React from 'react'
import { SliderData } from './SliderData'

const Slider = () => {
  return (
    <div className=''>
      <div id='slider' className="relative flex gap-x-2 overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
        {SliderData.map((item) => {
          return (
            <img
              className='pb-4'
              src={item.image} 
              alt='pict' 
            />
          )
        })}
      </div>
    </div>
  )
}

export default Slider