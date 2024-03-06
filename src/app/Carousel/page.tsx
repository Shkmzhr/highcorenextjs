'use client'
import { Card, CardContent } from "@/components/ui/card";
import './carousel.css'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const cardData = [
    {
      title: "React",
      image: "./react.svg",
      body: "Our team of React experts possesses in-depth knowledge of the framework and its capabilities. We are proficient in"
      ,
    },
    {
      title: "Angular",
      image: "./angular.svg",
      body: "Our team of Angular experts possesses in-depth knowledge of the framework and its capabilities. We are proficient in"

    },
    {
      title: "Java",
      image: "./java.svg",
      body: "This is the content for card 2.",
    },
    {
      title: "DotNet",
      image: "./code-solid.svg",
      body: "This is the content for card 2.",
    },
    {
      title: "Python",
      image: "./python.svg",
      body: "This is the content for card 2.",
    },
    {
      title: "Backend Development",
      image: "./Server-solid.svg",
      body: "This is the content for card 2.",
    },
    {
      title: "Multiple Language Website",
      image: "./globe-solid.svg",
      body: "This is the content for card 2.",
    },
    {
      title: "Server Development",
      image: "./Server-solid.svg",
      body: "This is the content for card 2.",
    },
    {
      title: "Web Design",
      image: "./palette-solid.svg",
      body: "This is the content for card 2.",
    },
    // ... add data for remaining cards
  ];
  function CardTitle({ children }: { children: string }) {
    return <h3 className="text-2xl font-semibold">{children}</h3>;
  }
  interface CardImageProps {
    src: string; // Specify that src should be a string
    alt: string;
  }
  function CardImage({ src, alt }: CardImageProps) {
    return (
      <Image src={src} alt={alt} className="h-[130px] w-[130px] object-cover rounded-lg image-ang" width="130" height={130}/>
    );
  }
  function CardBody({ children }: { children: string }) {
    return <p className="text-gray-700 pt-10">{children}</p>;
  }

function Swipe() {
  return (
    <div className="container flex flex-col mb-5">
      <div className="text-4xl tracking-tight font-extrabold justify-center flex m-9 text-gray-900 mx-auto">Highcore™: Delivering Exceptional Solutions with Latest Tech Expertise</div>
      <div className="h1 text-gray-500 w-[70%] mb-6">Highcore is a leading provider of technical solutions, specializing in crafting dynamic and interactive web applications using React, a powerful and versatile JavaScript library. Our team of passionate developers possesses exceptional skills and experience in React development, enabling us to deliver innovative and user-centric solutions for our clients.</div>
<div className="flex text-center justify-center font-semibold text-5xl p-5 mb-4">
  <h1>Our Expertise </h1>
  </div>
    <div className="container w-full text-center">
    
 <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-lg"
      >
    <CarouselContent>
  {cardData.map((card, index) => (
    <CarouselItem key={index} className="md:basis-1/2 lg:basis-3/5">
      <div className="p-1 d-flex">
        <Card>
          <CardContent className="flex card-flex aspect-square items-center justify-center p-6 hover:bg-blue-100">
            {/* Use card object properties */}
            <CardTitle>{card.title}</CardTitle>
            <CardImage src={card.image} alt={card.title}/>
            <CardBody>{card.body}</CardBody>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  ))}
</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    </div>
  </div>
  )
}

export default Swipe;