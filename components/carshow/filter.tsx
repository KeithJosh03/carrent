import React from 'react'
import { FontsFeatProps } from '@/types'
import Image from 'next/image'


function Filter({InterFont}: FontsFeatProps) {
  return (
    <div className='w-2/12 h-fit border border-[#E0E0E0] flex flex-col'>
        <div className='p-6 border-b border-[#E0E0E0] flex flex-row items-center gap-4'>
        <Image
        src="/icons/sort.png"
        width={28}
        height={28}
        alt="Picture of the author"
        />
        <h5 className={`${InterFont} font-bold text-4xl`}>Filter</h5>
        </div>
        <div className='border-b border-[#E0E0E0] p-6'>
        Filter
        </div>
    </div>
  )
}

export default Filter