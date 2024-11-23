import React from 'react'
import Image from 'next/image'

import { inter } from '@/utils/font'

import { downarrow } from '@/public/icons'

function ResultscarInput() {

  return (
  <div className='container flex flex-row h-3/6'>
    <div className={`${inter.className} flex flex-row gap-1 font-bold text-xl basis-5/12 p-4 items-center`}>
      <h3>Results: </h3>
      <h3 className='text-[#FF4400]'>0000</h3>
    </div>
    <div className={`${inter.className} flex flex-row w-7/12 gap-6 place-content-center items-center`}>
      <div className='w-5/12 border border-[#B8BECC] rounded h-5/6 flex flex-row justify-center text-sm'>
        <div className='flex h-full bg-[#EEEFF1] w-4/12 justify-center font-bold'>
          <h1 className='self-center'>Car type</h1>
        </div>
        <div className={`${inter.className} flex h-full w-5/12 justify-center text-[#B8BECC] font-semibold`}>
          <h1 className='self-center'>Select Type</h1>
        </div>
        <div className='flex w-3/12 self-center justify-center'>
          <Image
          src={downarrow}
          width={24}
          height={24}
          alt="Picture of the author"
          />
        </div>
      </div>
      <div className='w-5/12 border border-[#B8BECC] rounded h-5/6 flex flex-row justify-center text-sm'>
        <div className='flex h-full bg-[#EEEFF1] w-4/12 justify-center font-bold '>
          <h1 className='self-center'>Prices</h1>
        </div>
        <div className={`${inter.className} flex h-full w-5/12 justify-center text-[#B8BECC] font-semibold`}>
          <h1 className='self-center'>0000</h1>
        </div>
        <div className='flex w-3/12 self-center justify-center'>
          <Image
          src={downarrow}
          width={24}
          height={24}
          alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ResultscarInput