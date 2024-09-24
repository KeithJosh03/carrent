'use client';

import React from 'react'
import Image from 'next/image'


function Header() {
    let clickSignUp = () => {
        alert('Sign Up')
    }
    let clickSignIn = () => {
        alert('Sign In')
    }


  return (
    <div className='bg-mainground border border-b-[#ADB2BE] h-28 flex flew-row'>
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
                className="h-12 ml-16 basis-1/2 rounded outline-none text-start placeholder:text-base"
                placeholder="Search..."
            />
            <button className='h-12 w-20 rounded bg-mainorange'>
                <Image
                    className='m-auto'
                    src="/iconsearch/iconsearch.png"
                    width={18}
                    height={18}
                    alt="Picture of the author"
                />
            </button>
        </div>
        <div className='basis-6/12 flex flex-row justify-center items-center space-x-8'>
            <div className='text-center font-Inter text-base text-[#5F6062] hover:text-[#010001] hover:border-b-2 border-b-[#FF492C]'>Lorem Ipsum</div>
            <div className='text-center font-Inter text-base text-[#5F6062] hover:text-[#010001] hover:border-b-2 border-b-[#FF492C]'>Lorem Ipsum</div>
            <div className='text-center font-Inter text-base text-[#5F6062] hover:text-[#010001] hover:border-b-2 border-b-[#FF492C]'>Lorem Ipsum</div>
            <div className='text-center font-Inter text-base text-[#5F6062] hover:text-[#010001] hover:border-b-2 border-b-[#FF492C]'>Lorem Ipsum</div>
        </div>
        <div className='basis-2/12 flex flex-row items-center justify-start container'>
            <button 
            className='text-[#454FA5] rounded font-Inter text-base hover:bg-[#454FA5] hover:text-[#FFFFFF] h-12 w-28'
            onClick={clickSignUp}
            >Sign Up</button>
            <button className='text-[#454FA5] rounded font-Inter text-base hover:bg-[#454FA5] hover:text-[#FFFFFF] h-12 w-28'
            onClick={clickSignIn}
            >Sign In</button>
        </div>
    </div>
  )
}

export default Header