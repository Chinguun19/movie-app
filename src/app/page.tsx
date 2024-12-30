


import Image from "next/image";
import Upcoming from  "../components/upcoming"
import TopRatedMovies from "../components/topRated";
import Popular from "@/components/popular";
import PhoneTop from "@/components/phoneTop";

export default function Home() {


  return (

    <> 
    <PhoneTop/>
    <Upcoming/>
    <TopRatedMovies/>
    <Popular/>     
    </>
    
      
    
  );
}
