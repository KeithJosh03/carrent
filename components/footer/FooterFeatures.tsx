import { FooterFeatProps } from "@/types";

import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

const FooterFeatures = ({title}: FooterFeatProps) => {
    return (
        <div className={`${inter.className} text-left`}>
            <h3 className='font-bold text-2xl mb-4'>{title}</h3>
            <ul className={`text-sm font-normal leading-10`}>
                <li className='hover:text-[#454FA5]'>Brands</li>
                <li className='hover:text-[#454FA5]'>Customers</li>
                <li className='hover:text-[#454FA5]'>Research</li>
                <li className='hover:text-[#454FA5]'>Resources</li>
                <li className='hover:text-[#454FA5]'>Careers</li>
                <li className='hover:text-[#454FA5]'>About</li>
                <li className='hover:text-[#454FA5]'>Contact</li>
            </ul>
        </div>
    );
}

export default FooterFeatures;