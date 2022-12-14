import React from 'react'

function SocialBox() {
  return (
    <div>
      <div>
        <div className='flex flex-row gap-x-4'>
          <a href={'https://www.linkedin.com/in/salman-setiawan/'} target="_blank">
            <div className='bg-[#242424] p-3 hover:bg-blue-600'>
              <img src='icon_linkedin.svg' alt="icon" />
            </div>
          </a>
          <a href={'http://www.instagram.com/ikrxu'} target="_blank">
            <div className='bg-[#242424] p-3 hover:bg-blue-600'>
              <img src='icon_instagram.svg' alt="icon" />
              </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialBox