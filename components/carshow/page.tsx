import React from 'react'

import { inter, CarshowLayout , Filter , Resultscar} from './index';


function CarShow() {
  return (
    <CarshowLayout>
      <Filter InterFont={inter.className} />
      <Resultscar InterFont={inter.className} />
    </CarshowLayout>
  )
}

export default CarShow;
