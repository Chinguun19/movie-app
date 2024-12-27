
import { Badge } from "@/components/ui/badge";
import { json } from "stream/consumers";
import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

type Props = {
    params: {
        id: string;
    }
}

type Movie = {
    id: number;
    title: string;
    poster: string;
    rating: number;
    vote_average: number;
  };


export default async function Page({params} : Props) {



    const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmM1YmY4NjE0MjVkNDAxMGQ3NWNmZDE0MWMxOWExOCIsIm5iZiI6MTczNDk0OTE4My42NTI5OTk5LCJzdWIiOiI2NzY5MzkzZjYxNzhmY2JiZWFjNGUwMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fONUw9p9dhH-1zkQj9uLhZTao8W4HrUVfqUhSTKDrpE'
      }
    };
    
  const response = await fetch(url, options)
  const data = await response.json()
  const results = data.results
  const posterPath = results.poster_path
  const poster = `https://image.tmdb.org/t/p/${posterPath}` 
    



    console.log(results)
    
    return (
        <div className="text-[20px] text-black mb-[42px] ">
      <h1 className="font-extrabold ml-[20px] mb-[30px] text-[24px] font-[Inter] mt-[10px] dark:text-white">{params.id.toUpperCase()}</h1>
     
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 ml-4">
          
     
          {results.slice(0,10).map((movie: { id: Key | null | undefined; poster: string | undefined; vote_average: number | undefined; rating: number; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div key={movie.id} className="rounded-md shadow w-[157.5px] min-h-[309.1px] max-h-fit  bg-[#F4F4F5] text-start dark:bg-[#27272A]">
              <img src={poster}  className="w-[157.5px] h-[233.1px] rounded-tl-md rounded-tr-md dark:text-white " />
              <p className="text-black text-[12px] ml-[10px] mt-[6px] dark:text-white">⭐ {movie.vote_average}/10</p>
              <h3 className="text-[14px] ml-[10px] font-[400]  text-[#09090B] dark:text-white">{movie.title}</h3>
            </div>
            </Link>
          ))}
         
        </div>
   
    </div>
    )




    }