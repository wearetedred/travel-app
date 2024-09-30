import Image from "next/image";
import img from '../images/Screenshot 2024-09-30 233904.png'

export default function Home() {
  return (
    <>
    <h1>Hello </h1> 
    <Image src={img} alt=" hell" />
    </>
  );
}
