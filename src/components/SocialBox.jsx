import React from 'react'

function SocialBox() {
  return (
    <div>
      <div>
        <div className='flex flex-row gap-x-4'>
          <div className='bg-black p-2'>
            <img src='icon_linkedin.svg' alt="icon" />
          </div>
          <div className='bg-black p-2'>
            <img src='icon_instagram.svg' alt="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialBox