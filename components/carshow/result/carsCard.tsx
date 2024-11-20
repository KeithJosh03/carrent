import React from 'react'
import Image from 'next/image'

import { inter } from '@/utils/font'



function CarsCard() {
  return (
    <div className='container flex flex-row h-fit gap-4'>
      <div className='basis-4/12 border border-[#0000001F] rounded-lg'>
        <div className='p-4 flex flex-col gap-2'>
          <div className='bg-[#EEEFF1] rounded-xl'>
            <Image
              className='m-auto'
              src="/carshow/carshow.png"
              width={315}
              height={196}
              alt="Picture of the author"
            />
          </div>
          <div className={`${inter.className} font-bold text-3xl text-left flex flex-col`}>
            <span>2020 Hondo Pilot</span>
            <span className='text-[#FF4400]'>6,000 PHP</span>
          </div>
        </div>
        <div className='border-y border-[#0000001F]'>
asdadssa
        </div>
      </div>  
    </div>
  )
}

export default CarsCard


{/* <div className='basis-4/12 border border-[#0000001F] h-96 rounded-xl shadow flex flex-col p-4'>
  <div className='h-3/5 bg-[#EEEFF1] rounded-xl content-center mb-4'>
    <Image
      className='m-auto'
      src="/carshow/carshow.png"
      width={315}
      height={196}
      alt="Picture of the author"
    />
  </div>
  <span className={`${inter.className} font-bold text-2xl`}>2020 Honda Pilot</span>
  <span className={`${inter.className} font-bold text-2xl text-[#FF4400]`}>6,000 PHP</span>
</div> */}