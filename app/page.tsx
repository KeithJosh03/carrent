import { Hero, CarShow , HomeLayout} from '@/components'


import React from "react";



export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <CarShow />
    </HomeLayout>
  );
}
