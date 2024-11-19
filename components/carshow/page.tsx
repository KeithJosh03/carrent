import React from 'react'

import { inter, CarshowLayout , Filter , ResultCarsPage} from './index';


function CarShow() {
  return (
    <CarshowLayout>
      <Filter InterFont={inter.className} />
      <ResultCarsPage />
    </CarshowLayout>
  )
}

export default CarShow;
