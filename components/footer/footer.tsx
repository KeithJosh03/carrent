import React from 'react'
import Image from 'next/image'

import { Inter } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

import FooterFeatures from './FooterFeatures'

function Footer() {
  return (
    <footer className='w-full bg-[#EEEFF1] flex flex-col'>
        <div className='h-fit border border-b-[#ADB2BE] flex flex-row p-10'>
          <div className='basis-3/5 flex flex-row text-center justify-center items-center gap-x-28'>
            <FooterFeatures title="Company"/>
            <FooterFeatures title="About CarRent"/>
            <FooterFeatures title="Resources" />
            <FooterFeatures title="Extras" />
          </div>
          <div className='basis-2/5 flex flex-row place-content-center content-center'>
            <div className='flex flex-col'>
              <div>
                <h3 className={`${inter.className} font-bold text-2xl mb-4`}>NewsLetters</h3>
              </div>
              <div>
                <input
                type="search"
                className={`${inter.className} h-12 rounded-l placeholder:text-base p-4 border outline-none`}
                placeholder="Email address"
                />
                <button className='h-12 w-20 rounded-r bg-mainorange text-white text-base'>
                Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='h-fit flex flex-row items-center p-8'>
          <div className='flex place-content-center basis-4/12'>
            <Image 
            width={168}
            height={24}
            src="/footer/carrentlogo.png" 
            alt="Picture of the author"
            />
          </div> 
          <div className={`${inter.className} flex container text-center text-sm font-normal place-content-center basis-4/12`}>
            <p>Carrent. All Rights Reserve 2021</p>
          </div>
          <div className='flex flex-row container justify-end gap-14  basis-4/12 relative right-28'>
            <div>
              <Image
              width={24}
              height={22}
              src="/footer/facebook.png"
              alt="facebooklogo"
              />
            </div>
            <div>
              <Image
              width={24}
              height={22}
              src="/footer/twitter.png"
              alt="facebooklogo"
              />
            </div>
            <div>
              <Image
              width={24}
              height={22}
              src="/footer/insta.png"
              alt="facebooklogo"
              />
            </div>
            <div>
              <Image
              width={24}
              height={22}
              src="/footer/linken.png"
              alt="facebooklogo"
              />
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer