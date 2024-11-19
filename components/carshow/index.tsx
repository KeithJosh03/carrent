
import Filter from "./filter/filter";
import { CarshowLayout } from "./layout";



// result component
import ResultCarsPage from "./result/page";

import {ResultCarLayout}  from "./result/layout";
import ResultscarInput from "./result/resultscar";
import CarsCard from "./result/carsCard";





import { Inter } from 'next/font/google'
import Car from '../../public/carshow/carshow.png'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})



export {
    Filter,
    ResultscarInput,
    CarshowLayout,
    CarsCard,
    ResultCarLayout,
    ResultCarsPage,
    inter,
    Car
}