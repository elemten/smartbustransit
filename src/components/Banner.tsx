import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col justify-center rounded-2xl border border-primary shadow-xl w-full p-10'>
        <div className='leftSide flex flex-col justify-center align-middle text-center w-full'>
          <h1 className='text-4xl font-bold text-primary'> Auction Hub</h1>
          <p className='text-lg'>The best place to list and bid on assets</p>
        </div>
       
      
    </div>
  )
}

export default Banner