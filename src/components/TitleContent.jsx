import React from 'react'

function TitleContent(props) {
  return (
    <div>
      <div className='md:hidden block'>
        <div className='flex-row justify-center text-center'>
          <div className='text-xl font-semibold'>
              {props.name}
          </div>
          <div className='flex justify-center gap-2 mt-1'>
            <div className='text-sm'>
                {props.degree}
            </div>
            <div className='text-sm'>
            •
            </div>
            <div className='text-sm'>
                {props.school}
            </div>
          </div>
          <div className='text-sm mt-1'>
              {props.place}
          </div>
        </div>
      </div>
      <div className='hidden md:block'>
        <div className='flex-row justify-center text-center'>
          <div className='text-2xl font-semibold'>
              {props.name}
          </div>
          <div className='flex justify-center gap-2 mt-1'>
            <div>
                {props.degree}
            </div>
            <div>
            •
            </div>
            <div>
                {props.school}
            </div>
          </div>
          <div className='mt-1'>
              {props.place}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleContent