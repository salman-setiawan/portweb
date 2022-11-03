import React from 'react'

function Card(props) {
  return (
    <div>
        <div className="md:hidden block">
          <div className='w-full bg-white hover:bg-blue-500 hover:text-white shadow-sha1'>
            <img src={props.img} alt="card_img" />
            <div className='px-4 py-3'>
                <div className='text-sm font-bold mb-1'>
                    {props.title}
                </div>
                <div className='text-xs'>
                    {props.desc}
                </div>
            </div>
        </div>
      </div>
      <div className="hidden md:block">
          <div className='w-fit bg-white shadow-sha1 hover:scale-[1.02] ease-in-out duration-200'>
            <img src={props.img} alt="card_img" />
            <div className='px-4 py-3'>
                <div className='font-semibold mb-1'>
                    {props.title}
                </div>
                <div className='text-xs'>
                    {props.desc}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
