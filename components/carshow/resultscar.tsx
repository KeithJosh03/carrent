import React from 'react'
import Image from 'next/image'

import { FontsFeatProps} from '@/types'


function Resultscar({InterFont}:FontsFeatProps ) {

  return (
    <div className='w-10/12 flex flex-col gap-4'>
        <div className='container flex flex-row h-3/6'>
          <div className={`${InterFont} flex flex-row gap-1 font-bold text-xl basis-5/12 p-4 items-center`}>
            <h3>Results: </h3>
            <h3 className='text-[#FF4400]'>0000</h3>
          </div>
          <div className={`${InterFont} flex flex-row w-7/12 gap-6 place-content-center items-center`}>
            <div className='w-5/12 border border-[#B8BECC] rounded h-5/6 flex flex-row justify-center text-sm'>
              <div className='flex h-full bg-[#EEEFF1] w-4/12 justify-center font-bold'>
                <h1 className='self-center'>Car type</h1>
              </div>
              <div className={`${InterFont} flex h-full w-5/12 justify-center text-[#B8BECC] font-semibold`}>
                <h1 className='self-center'>Select Type</h1>
              </div>
              <div className='flex w-3/12 self-center justify-center'>
                <Image
                src="/icons/down-arrow.png"
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
              <div className={`${InterFont} flex h-full w-5/12 justify-center text-[#B8BECC] font-semibold`}>
                <h1 className='self-center'>0000</h1>
              </div>
              <div className='flex w-3/12 self-center justify-center'>
                <Image
                src="/icons/down-arrow.png"
                width={24}
                height={24}
                alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
        <div className='container flex flex-row h-fit gap-4'>
          <div className='basis-4/12 border border-[#0000001F] h-96 rounded-xl shadow flex flex-col'>
            <div className='h-3/5 bg-[#EEEFF1] m-4 rounded-xl content-center'>
              <Image
                className='m-auto'
                src="/carshow/carshow.png"
                width={315}
                height={196}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className='basis-4/12 border border-[#0000001F] h-96 rounded-xl shadow flex flex-col'>
            <div className='h-3/5 bg-[#EEEFF1] m-4 rounded-xl content-center'>
              <Image
                className='m-auto'
                src="/carshow/carshow.png"
                width={315}
                height={196}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className='basis-4/12 border border-[#0000001F] h-96 rounded-xl shadow flex flex-col'>
            <div className='h-3/5 bg-[#EEEFF1] m-4 rounded-xl content-center'>
              <Image
                className='m-auto'
                src="/carshow/carshow.png"
                width={315}
                height={196}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Resultscar