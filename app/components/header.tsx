import React from 'react'
import Image from 'next/image'


function Header() {
  return (
    <div className='bg-mainground border border-b-[#ADB2BE] h-24 flex flew-row items-center'>
        <div className="basis-4/12 flex flex-row items-center">
            <div className="basis-1/2 flex flex-row items-center justify-end h-12">
                <Image
                    src="/car/car.png"
                    width={32}
                    height={32}
                    alt="Picture of the author"
                />
                <h1 className="font-bold text-4xl ml-3 font-Montserrat">CarRent</h1>
            </div>
            <input
                type="search"
                className="h-12 ml-9 basis-1/2 rounded outline-none text-start placeholder:text-xl pl-2"
                placeholder="Search..."
            />
            <button></button>
        </div>
        <div className='basis-4/12'>
        Navigation 
        </div>
        <div className='basis-4/12'>
        Account
        </div>
    </div>
  )
}

export default Header