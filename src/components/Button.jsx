import React from 'react'

function Button(props) {
  return (
    <div>
      <div className='md:hidden block'>
        <div className='w-52 bg-black hover:bg-blue-700 px-4 py-4 text-sm font-semibold text-white flex justify-center'>
          {props.text}
        </div>
      </div>
      <div className='hidden md:block'>
        <div className='w-52 bg-black hover:bg-blue-700 px-4 py-4 text-md font-semibold text-white flex justify-center'>
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default Button