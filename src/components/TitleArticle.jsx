import React from 'react'

function TitleArticle(props) {
  return (
    <div>
      <div className='md:hidden block'>
        <div className='flex-row justify-center text-center'>
          <div className='text-xl font-semibold'>
              {props.name}
          </div>
          <div className='text-sm mt-1'>
              {props.type}
          </div>
          <div className='text-sm mt-1'>
              {props.project}
          </div>
        </div>
      </div>
      <div className='hidden md:block'>
        <div className='flex-row justify-center text-center'>
          <div className='text-2xl font-semibold'>
              {props.name}
          </div>
          <div className='mt-1'>
              {props.type}
          </div>
          <div className='mt-1'>
              {props.project}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleArticle