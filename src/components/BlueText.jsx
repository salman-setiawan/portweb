import React from 'react'

function BlueText(props) {
  return (
    <div>
      <div className='md:hidden block'>
        <div className='font-semibold text-[#65B5FF] text-xl'>
            {props.title}
        </div>
      </div>
      <div className='hidden md:block'>
        <div className='font-semibold text-[#65B5FF] text-2xl'>
            {props.title}
        </div>
      </div>
    </div>
  )
}

export default BlueText