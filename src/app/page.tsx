import { Card } from "flowbite-react";
import Hero from "./Hero/page";
import Navbar from "./Navbar/page";
import Midsection from "./middlesection/page";
import Cards from "./Cards/cards";

import 'flowbite';
import Swipe from "./Carousel/page";
import Slider from "./Slider/page";
import Contact from "./Contact/page";
import About from "./About/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div>
<Navbar />
      <Hero />
    <div>
      <Midsection />
    </div>
      <About />
      <Swipe />
 <Cards />
 <Slider />
 <Contact />
 <Footer />

    </div>
  );
}
