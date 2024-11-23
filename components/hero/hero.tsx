import React from 'react';
import Image from 'next/image';

import { Josefin_Sans, Inter } from 'next/font/google';

import { iconsearch , contactcalendar} from '@/public/icons';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


function Hero() {
  return (
    <div className="bg-mainground h-screen w-full flex flex-col justify-center items-center">
      <div className="flex flex-row w-4/5 h-5/5 justify-center items-center gap-12 relative">
        <div className="basis-6/12 flex flex-col max-w-fit justify-center space-y-8 h-full">
          <div className={`${josefin.className} text-[#010001] font-bold text-5xl tracking-wide`}>
            <h1>Looking for more</h1>
            <h1>On your rental car ?</h1>
          </div>
          <div className="border-4 border-[#FF492C] w-14"></div>
          <div className={`${josefin.className} text-[#666666] text-2xl font-medium text-left tracking-wide leading-10 text-balance w-5/6`}>
            <p>
              Discover Kurikong car rental options in Philippines with Rent a Car. Select a range of car options and local specials.
            </p>
          </div>
        </div>
        <div className="basis-6/12 flex flex-col h-screen items-center justify-center bg-herobg rounded-[40px] relative top-48">
          <Image
            src="/herobgcar/Untitled-4@2x.png"
            alt="Car"
            className="object-contain relative bottom-24 right-48 h-full w-full z-0"
            width={2574}
            height={1832} 
            style={{ maxHeight: '100%', maxWidth: '100%' }}
            />
        </div>
      </div>
      <div className='flex flex-row w-6/12 gap-8 bg-[#FFFFFF] border border-[#00000029] rounded-xl p-8 z-0 font-bold text-sm shadow-md self-start relative left-44'>
        <div className='text-sm container border border-[#B8BECC] rounded w-12/12 flex flex-row gap-2 place-content-center items-center justify-center opacity-100'>
          <div className={`${inter.className} flex h-full bg-[#EEEFF1] w-3/12 justify-center text-sm rounder-l`}>
            <h1 className='self-center'>From</h1>
          </div>
          <div className={`${inter.className} text-left flex w-6/12 text-[#B8BECC] rounded-l`}>
          December 2020
          </div>
          <div className='self-center justify-center flex w-3/12'>
            <Image
            className='m-auto'
            src={contactcalendar}
            width={18}
            height={18}
            alt="Picture of the author"
            />
          </div>
        </div>
        <div className='text-sm container border border-[#B8BECC] rounded w-12/12 flex flex-row gap-2 place-content-center items-center justify-center opacity-100'>
          <div className='flex h-full bg-[#EEEFF1] w-3/12 justify-center rounder-l'>
            <h1 className={`${inter.className} self-center text-sm`}>To</h1>
          </div>
          <div className={`${inter.className} text-left flex w-6/12 text-[#B8BECC] rounded-l`}>
          January 2021
          </div>
          <div className='self-center justify-center flex w-3/12'>
            <Image
            className='m-auto'
            src={contactcalendar}
            width={18}
            height={18}
            alt="Picture of the author"
            />
          </div>
        </div>
        <button className='container bg-[#454FA5] p-4 rounded w-7/12 text-white font-semibold flex flex-row'>
          <h1 className='m-auto'>Search</h1>  
          <Image
          className='m-auto'
          src={iconsearch}
          width={18}
          height={18}
          alt="Picture of the author"
          />
        </button>
      </div>
    </div>

  
   );
}

export default Hero;
