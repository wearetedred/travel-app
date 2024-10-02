"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StaticImageData } from 'next/image';


import { Button } from "@/components/ui/button";
import Image from "next/image";
import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";
import image5 from "../../images/5.jpg";
import image6 from "../../images/6.jpg";
import image7 from "../../images/7.jpg";
import image8 from "../../images/8.jpg";
import image9 from "../../images/9.jpg";
import image10 from "../../images/10.jpg";
import image12 from "../../images/12.jpg";
import image13 from "../../images/13.jpg";
import image14 from "../../images/14.jpg";
import image15 from "../../images/15.jpg";
import image16 from "../../images/16.jpg";
import image17 from "../../images/17.jpg";

// Type definition for destinations data
interface Destination {
  name: string;
  image: StaticImageData;
  price: string;
  type: string;
}

const destinations: Record<string, Destination[]> = {
  Riyadh: [
    { name: "Salzburg", image: image1, price: "SAR 0*", type: "One Way / Economy" },
    { name: "Vienna", image: image2, price: "SAR 0*", type: "One Way / Economy" },
    { name: "Sarajevo", image: image3, price: "SAR 634.24*", type: "One Way / Economy" },
    { name: "Dubai", image: image4, price: "SAR 194.00*", type: "One Way / Economy" },
  ],
  Jeddah: [
    { name: "Paris", image: image5, price: "SAR 1200*", type: "One Way / Economy" },
    { name: "London", image: image6, price: "SAR 1500*", type: "One Way / Economy" },
    { name: "New York", image: image7, price: "SAR 2500*", type: "One Way / Economy" },
    { name: "Tokyo", image: image8, price: "SAR 2000*", type: "One Way / Economy" },
  ],
  Dammam: [
    { name: "Istanbul", image: image9, price: "SAR 800*", type: "One Way / Economy" },
    { name: "Cairo", image: image10, price: "SAR 600*", type: "One Way / Economy" },
    { name: "Mumbai", image: image12, price: "SAR 700*", type: "One Way / Economy" },
    { name: "Manila", image: image13, price: "SAR 1100*", type: "One Way / Economy" },
  ],
  Madinah: [
    { name: "Mecca", image: image14, price: "SAR 300*", type: "One Way / Economy" },
    { name: "Amman", image: image15, price: "SAR 500*", type: "One Way / Economy" },
    { name: "Beirut", image: image16, price: "SAR 700*", type: "One Way / Economy" },
    { name: "Muscat", image: image17, price: "SAR 600*", type: "One Way / Economy" },
  ],
};

export default function HotelDataCardSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof destinations>("Riyadh");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="sm:flex-row flex flex-col justify-between items-center mb-6">
        <div className="flex space-x-4">
          {Object.keys(destinations).map((city) => (
            <button
              key={city}
              className={`md:px-4 py-2 md:text-lg font-semibold ${
                activeTab === city
                  ? "text-[#05367f] border-b-2 border-[#05367f]"
                  : "text-gray-500 hover:text-[#05367f]"
              }`}
              onClick={() => setActiveTab(city as keyof typeof destinations)}
            >
              {city}
            </button>
          ))}
        </div>
        <Button className="mt-3 sm:mt-0 bg-white text-[#05367f] border border-[#05367f] hover:bg-[#05367f] hover:text-white transition-colors duration-300">
          Find the best fares
        </Button>
      </div>
      <div>
        <Carousel className="relative w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {destinations[activeTab].map((dest, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="relative group overflow-hidden rounded-lg aspect-[3/4]">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-4 text-white">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{dest.name}</h3>
                      <p className="text-sm mb-1">From</p>
                      <p className="text-lg sm:text-xl font-bold mb-1">{dest.price}</p>
                      <p className="text-sm">{dest.type}</p>
                    </div>
                    <div className="flex justify-center mt-4">
                      <Button className="w-full sm:w-auto px-4 py-2 bg-[#05367f] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 sm:left-4 bg-[#05367f] text-white" />
          <CarouselNext className="absolute right-2 sm:right-4 bg-[#05367f] text-white" />
        </Carousel>
      </div>
    </div>
  );
}
