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
    Autoplay({ delay: 2000, stopOnInteraction: false})
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
      <img className="h-[246px] w-screen lg:h-[600px]" src="wicked.background.jpeg"></img>
      <div className="h-[264px] w-screen mt-[20px]" >
        <p className="text-start ml-[20px] text-[#09090B] text-sm font-[400] dark:text-white ">Now Playing</p>
        <h1 className="text-start ml-[20px] text-[#09090B] text-[24px] font-bold dark:text-white">Wicked</h1>
        <h3 className="text-left ml-[20px]">6.9/10</h3>
        <p className="text-start ml-[20px] mt-2 text-wrap">Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. </p>
        <button></button>
      </div>
    </CarouselItem>
    <CarouselItem>
    <img src="superman.webp" className="h-[246px] w-screen lg:h-[600px] "></img>
      <div className="mt-[20px]">
      <p className="text-start ml-[20px] text-[#09090B] text-sm font-[400] dark:text-white ">Now Playing</p>
        <h1 className="text-start ml-[20px] text-[#09090B] text-[24px] font-bold dark:text-white ">Superman</h1>
        <h3 className="text-left ml-[20px]">6.9/10</h3>
        <p className="text-start ml-[20px] mt-2 text-wrap">Follows the titular superhero as he reconciles his heritage with his human upbringing. He is the embodiment of truth, justice and the American way in a world that views this as old-fashioned.</p>
        <button></button>
      </div>

    </CarouselItem>
    <CarouselItem>
    <img src="moana2.jpg" className="h-[246px] w-screen lg:h-[600px]"></img>
      <div className="mt-[20px]">
      <p className="text-start ml-[20px] text-[#09090B] text-sm font-[400] dark:text-white ">Now Playing</p>
        <h1 className="text-start ml-[20px] text-[#09090B] text-[24px] font-bold dark:text-white ">Moana 2</h1>
        <h3 className="text-left ml-[20px]">6.9/10</h3>
        <p  className="text-start ml-[20px] mt-2 text-wrap">After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.</p>
        <button></button>
      </div>

    </CarouselItem>
  </CarouselContent> 
</Carousel>

)
}

export default PhoneTop