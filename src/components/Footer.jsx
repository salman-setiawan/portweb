import React from 'react'

function Footer(props) {
  return (
    <div className='flex justify-between'>
        <div className='flex gap-x-3'>
        <div className='text-sm'>
            {props.date}
            
        </div>
        <div className='text-sm'>
            •
        </div>
        <div className='text-sm'>
            Portfolio
        </div>
        </div>
        <div className='text-sm'>
            {props.copyright}
        </div>
    </div>
  )
}

export default Footer