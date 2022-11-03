import React from 'react'

function AwardText(props) {
  return (
<div>
  <div className='md:hidden block'>
    <div className='flex flex-col'>
      <div className='font-semibold mb-1'>
        {props.title}
      </div>
      <div className='text-gray-500 mb-1 text-sm'>
        {props.company}
      </div>
      <div className='text-gray-500 text-sm'>
        {props.date}
      </div>
      <div className='mt-2 mb-1 text-sm'>
        {props.desc1}
      </div>
      <div className='mb-1 text-sm'>
        {props.desc2}
      </div>
      <div className='mb-1 text-sm'>
        {props.desc3}
      </div>
      <div className='mb-1 text-sm'>
        {props.desc4}
      </div>
      <div className='mb-1 text-sm'>
        {props.desc5}
      </div>
    </div>
  </div>
  <div className='hidden md:block'>
    <div className='grid lg:grid-cols-4'>
      <div className="">
        <div className='hidden lg:block text-gray-500'>
          {props.date}
        </div>
      </div>
      <div className='col-span-3'>
        <div className='font-semibold mb-1'>
          {props.title}
        </div>
        <div className='text-gray-500'>
          {props.company}
        </div>
        <div className='lg:hidden text-gray-500'>
          {props.date}
        </div>
        <div className='mt-2 mb-1'>
        {props.desc1}
        </div>
        <div className='mb-1'>
          {props.desc2}
        </div>
        <div className='mb-1'>
          {props.desc3}
        </div>
        <div className='mb-1'>
          {props.desc4}
        </div>
        <div className='mb-1'>
          {props.desc5}
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default AwardText