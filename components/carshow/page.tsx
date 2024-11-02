import React from 'react'

import {Filter , Resultscar, inter } from './index';


function CarShow() {
  return (
    <div className='h-screen w-5/5 m-auto flex justify-center mt-52'>
      <div className='w-10/12 h-fit flex flex-row gap-2'>
        <Filter InterFont={inter.className}/>
        <Resultscar 
        InterFont={inter.className} 

        />
      </div>
    </div>
  )
}

export default CarShow