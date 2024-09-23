import CarShow from "./carshow/page";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CarShow />
      </main>
    </>
  );
}