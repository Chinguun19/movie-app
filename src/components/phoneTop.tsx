"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import React from "react"

import Autoplay from "embla-carousel-autoplay"

const PhoneTop = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false})
  )

return (

  <Carousel
    plugins={[plugin.current]}
    opts={{
    loop: true,
    align: "start"

  }}>
  <CarouselContent>
    <CarouselItem>
      <img className="h-[246px] w-screen" src="wicked.background.jpeg"></img>
      <div>
        <p>Now Playing</p>
        <h1>Wicked</h1>
        <h3>6.9/10</h3>
        <p></p>
        <button></button>
      </div>
    </CarouselItem>
    <CarouselItem>
    <img src="superman.webp" className="h-[246px] w-screen"></img>
      <div>
        <p>Now Playing</p>
        <h1>Wicked</h1>
        <h3>6.9/10</h3>
        <p></p>
        <button></button>
      </div>

    </CarouselItem>
    <CarouselItem>
    <img src="moana2.jpg" className="h-[246px] w-screen"></img>
      <div>
        <p>Now Playing</p>
        <h1>Wicked</h1>
        <h3>6.9/10</h3>
        <p></p>
        <button></button>
      </div>

    </CarouselItem>
  </CarouselContent> 
</Carousel>

)
}

export default PhoneTop