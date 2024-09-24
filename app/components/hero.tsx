import React from 'react'

function Hero() {
  return (
    <div className='bg-mainground h-lvh w-full flex justify-center items-center'>
      <div className='flex flex-row w-full max-w-6xl justify-center items-center'>
        <div className='basis-1/2 flex flex-col space-y-8'>
          <div className='text-[#010001] font-bold text-5xl font-Josefin'>
            <h1>Looking for more</h1>
            <h1>On your Rental car?</h1>
          </div>
          <div className='border-4 border-[#FF492C] w-14'></div>
          <div className='text-[#666666] text-3xl font-Josefin font-medium text-left tracking-tight leading-10'>
            <p>Discover Kurikong car rental options in Philippines with Rent a Car Select a range of car options and local specials</p>
          </div>
        </div>
        <div className='basis-1/2 text-center'>
          car
        </div>
      </div>
    </div>
  )
}

export default Hero
