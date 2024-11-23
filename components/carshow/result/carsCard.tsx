import React from 'react'
import Image from 'next/image'

import { inter } from '@/utils/font'

import {
  cartype,
  cartransmission,
  gasoline,
  kmpl
} from '@/public/carcards';



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
          <div className={`${inter.className} font-bold text-3xl text-left flex flex-col p-1`}>
            <span>2020 Hondo Pilot</span>
            <span className='text-[#FF4400]'>6,000 PHP</span>
          </div>
        </div>
        <div className='basis-4/12 border-y border-[#0000001F]'>
          <div className={`${inter.className} grid grid-cols-2 grid-rows-2 justify-items-start p-5 gap-6`}>
            <div className='flex flex-row gap-6 self-center'>
              <Image
              src={cartype}
              height={26}
              width={26}
              alt='car type'
              />
              <span className='font-bold text-sm'>SUV</span>
            </div>
            <div className='flex flex-row gap-6 self-center'>
              <Image
              src={kmpl}
              height={22}
              width={22}
              alt='car gasoline'
              />
              <span className='font-bold text-sm'>14/16 KMPL</span>
            </div>
            <div className='flex flex-row gap-6 self-center'>
              <Image
              src={cartransmission}
              height={22}
              width={22}
              alt='car transmission'
              />
              <span className='font-bold text-sm'>Automatic</span>
            </div>
            <div className='flex flex-row gap-6 self-center'>
              <Image
              src={gasoline}
              height={22}
              width={22}
              alt='car kmpl'
              />
              <span className='font-bold text-sm'>Petrol</span>
            </div>
          </div>
          <div className='text-center'>Starts</div>
        </div>
      </div>  
    </div>
  )
}

export default CarsCard
