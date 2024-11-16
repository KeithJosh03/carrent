'use client';
import React from 'react'
import Image from 'next/image'
import CustomButton from '../CustomButton';

import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})


function NavBar() {
    let headClick = () => {
        console.log('Sign Up')
    }

  return (
    <nav className='bg-mainground border border-b-[#ADB2BE] h-fit w-screen flex flew-row fixed top-0 z-50 p-6'>
        <div className="basis-4/12 flex flex-row items-center container">
            <div className="basis-1/2 flex flex-row items-center justify-end h-12">
                <Image
                    src="/car/car.png"
                    width={32}
                    height={32}
                    alt="Picture of the author"
                />
                <h1 className="font-bold text-2xl ml-3 font-Montserrat">CarRent</h1>
            </div>
            <input
                type="search"
                className={`${inter.className} h-12 ml-16 basis-1/2 rounded-l outline-none text-start placeholder:text-base p-4 border`}
                placeholder="Search..."
            />
            <button className='h-12 w-20 bg-mainorange rounded-r'>
                <Image
                className='m-auto'
                src="/icons/iconsearch.png"
                width={18}
                height={18}
                alt="Picture of the author"
                />
            </button>
        </div>
        <div className={`${inter.className} basis-6/12 flex flex-row justify-center items-center space-x-8`}>
            <div className='text-center font-Inter text-base text-[#5F6062] hover:text-[#010001] hover:border-b-2 border-b-[#FF492C]'>Lorem Ipsum</div>
            <div className='text-center font-Inter text-base text-[#5F6062] hover:text-[#010001] hover:border-b-2 border-b-[#FF492C]'>Lorem Ipsum</div>
            <div className='text-center font-Inter text-base text-[#5F6062] hover:text-[#010001] hover:border-b-2 border-b-[#FF492C]'>Lorem Ipsum</div>
            <div className='text-center font-Inter text-base text-[#5F6062] hover:text-[#010001] hover:border-b-2 border-b-[#FF492C]'>Lorem Ipsum</div>
        </div>
        <div className={`${inter.className} basis-2/12 flex flex-row items-center justify-start container`}>
            <CustomButton 
            title="Sign Up"
            handleClick={headClick}
            />
            <CustomButton 
            title="Sign In"
            handleClick={headClick}
            />
        </div>
    </nav>
  )
}

export default NavBar