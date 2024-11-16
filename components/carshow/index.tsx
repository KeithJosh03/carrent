
import Filter from "./filter/filter";
import Resultscar from "./result/resultscar";
import { CarshowLayout } from "./layout";


import { Inter } from 'next/font/google'
import Car from '../../public/carshow/carshow.png'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})



export {
    Filter,
    Resultscar,
    CarshowLayout,
    inter,
    Car
}