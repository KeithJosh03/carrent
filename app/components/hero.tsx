import React from 'react';
import Image from 'next/image';





function Hero() {
  return (
    <div className="bg-mainground h-screen w-full flex flex-col justify-center items-center">
      <div className="flex flex-row w-4/5 h-5/5 justify-center items-center gap-12 relative">
        <div className="basis-6/12 flex flex-col max-w-fit justify-center space-y-8 h-full">
          <div className="text-[#010001] font-bold text-5xl font-Josefin tracking-wide">
            <h1>Looking for more</h1>
            <h1>On your rental car ?</h1>
          </div>
          <div className="border-4 border-[#FF492C] w-14"></div>
          <div className="text-[#666666] text-2xl font-medium text-left tracking-wide leading-10 text-balance w-5/6 font-Josefin">
            <p>
              Discover Kurikong car rental options in Philippines with Rent a Car. Select a range of car options and local specials.
            </p>
          </div>
        </div>
        <div className="basis-6/12 flex flex-col h-screen items-center justify-center bg-herobg rounded-heroborder relative top-48">
          <Image
            src="/herobgcar/Untitled-4@2x.png"
            alt="Car"
            className="object-contain relative bottom-24 right-48 h-full w-full"
            width={2574}
            height={1832} 
            style={{ maxHeight: '100%', maxWidth: '100%' }}
            />
        </div>
      </div>
      <div className="flex w-4/5 h-5/5 justify-start items-center gap-12">
        <h1>Hello</h1>
      </div>
    </div>

  
   );
}

export default Hero;
