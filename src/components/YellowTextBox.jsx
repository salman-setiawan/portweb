import React from 'react'

function YellowTextBox(props) {
  return (
    <div>
      <div className="md:hidden block">
        <div className='bg-amber-100 px-6 py-6'>
          <div className='flex flex-row gap-4'>
              <div className='text-lg'>
                  🧒🏻
              </div>
              <div className='text-sm'>
                  {props.text}
              </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className='bg-amber-100 px-8 py-8'>
          <div className='flex flex-row gap-4'>
              <div className='text-xl'>
                  🧒🏻
              </div>
              <div>
                  {props.text}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YellowTextBox