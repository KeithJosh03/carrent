'use client';

import { CustomButtomProps } from "@/types";


const CustomButton = ({title, handleClick}:CustomButtomProps) => {
    return (
        <button 
        className='text-[#454FA5] font-Inter text-base hover:bg-[#454FA5] hover:text-[#FFFFFF] hover:rounded h-12 w-28'
        onClick={handleClick}
        >
        {title}
        </button>
    );
}

export default CustomButton