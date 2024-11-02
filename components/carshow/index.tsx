import Filter from "./filter";
import Resultscar from "./resultscar";

import { Inter } from 'next/font/google'
import Car from '../../public/carshow/carshow.png'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})



export {
    Filter,
    Resultscar,
    inter,
    Car
}