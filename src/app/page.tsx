


import Section from "@/components/section";
import PhoneTop from "@/components/Top";


export default function Home() {


  return (

    <> 
    <PhoneTop/>
    
    <Section
   endpoint="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
   id="upcoming"
  title="Upcoming"
  />
     <Section
   endpoint="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
   id="popular"
  title="Popular"
  />
     <Section
   endpoint="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
   id="top_rated"
  title="Top Rated"
  />
    </>
    
      
    
  );
}
