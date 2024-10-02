import Image from "next/image";
import img from '../images/Screenshot 2024-09-30 233904.png'
import HeroSection from "@/components/HeroSection/HeroSection";
import HotelDataCardSection from "@/components/HotelDataCardSection.ts/HotelDataCardSection";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <HotelDataCardSection/>
    </>
  );
}
