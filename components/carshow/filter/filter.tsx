import React from 'react'
import Image from 'next/image'

import { inter } from '@/utils/font'

function Filter() {
  return (
    <div className='w-2/12 h-fit border border-[#E0E0E0] flex flex-col'>
        <div className='p-6 border-b border-[#E0E0E0] flex flex-row items-center gap-4'>
        <Image
        src="/icons/sort.png"
        width={28}
        height={28}
        alt="Picture of the author"
        />
        <h5 className={`${inter.className} font-bold text-4xl`}>Filter</h5>
        </div>
        <div className='border-b border-[#E0E0E0] p-6'>
        Filter
        </div>
    </div>
  )
}

export default Filter