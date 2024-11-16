import React from 'react'

import {Filter, inter , CarshowLayout } from './index';


function CarShow() {
  return (
    <CarshowLayout>
      <Filter InterFont={inter.className} />
    </CarshowLayout>
  )
}
{/* <Resultscar InterFont={inter.className} /> */}

export default CarShow;
