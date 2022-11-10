import React from 'react'

function SocialBox() {
  return (
    <div>
      <div>
        <div className='flex flex-row gap-x-4'>
          <div className='bg-black p-2'>
            <a href={'https://www.linkedin.com/in/salman-setiawan/'} target="_blank">
              <img src='icon_linkedin.svg' alt="icon" />
            </a>
          </div>
          <div className='bg-black p-2'>
            <a href={'http://www.instagram.com/ikrxu'} target="_blank">
              <img src='icon_instagram.svg' alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialBox