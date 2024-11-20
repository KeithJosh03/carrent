import React from 'react'

import { CarshowLayout , Filter , ResultCarsPage} from './index';


function CarShow() {
  return (
    <CarshowLayout>
      <Filter  />
      <ResultCarsPage />
    </CarshowLayout>
  )
}

export default CarShow;
