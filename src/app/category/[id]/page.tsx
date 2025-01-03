"use client";



import { useState, useEffect } from "react";
import Link from "next/link";
import { use } from "react"; // Import use() to resolve params
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  params: Promise<{ id: string }>; // Adjusted type to Promise
  title: string
};


 type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export default function Page({ params }: Props) {
  const resolvedParams = use(params); // Resolve params
  const { id } = resolvedParams; // Access the `id` property
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);


  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US&page=${page}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmM1YmY4NjE0MjVkNDAxMGQ3NWNmZDE0MWMxOWExOCIsIm5iZiI6MTczNDk0OTE4My42NTI5OTk5LCJzdWIiOiI2NzY5MzkzZjYxNzhmY2JiZWFjNGUwMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fONUw9p9dhH-1zkQj9uLhZTao8W4HrUVfqUhSTKDrpE'
    }
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setMovieData(data.results))
  }, [url]);

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrevious = () => setPage((prev) => Math.max(prev - 1, 1));

  const poster = `https://image.tmdb.org/t/p/w500/`;

let title

  function titleHandler() {
    if(id === "upcoming") {
      title = "Upcoming"
    } else if(id === "top_rated") {
      title = "Top Rated"
  } else if(id === "popular") {
    title = "Popular"
  }
    }
    titleHandler()

  return (
    <div className="text-[20px] text-black mb-[42px]">
      <h1 className="font-extrabold ml-[20px] mb-[30px] text-[24px] font-[Inter] mt-[10px] text-black dark:text-white">
      {title}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 ml-4">
        {movieData.map((movie : Movie ) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div className="rounded-md shadow w-[157.5px] h-[309.1px] bg-[#F4F4F5] text-start dark:bg-[#27272A] mt-[20px] md:w-[350px] md:h-[600px] lg:W-[450px] lg:h-[650x]">
              <img
                src={poster + movie.poster_path}
                alt={`${movie.title} Poster`}
                className="w-[157.5px] h-[233.1px] rounded-tl-md rounded-tr-md dark:text-white md:w-[350px] md:h-[500px] lg:w-[450px] lg-h-[600px]"
              />
              <p className="text-black text-[12px] ml-[10px] mt-[6px] dark:text-white lg:text-[14px]">
                ⭐ {Math.round(movie.vote_average * 10) / 10}/10
              </p>
              <h3 className="text-[14px] ml-[10px] font-[400] text-[#09090B]  text-ellipsis text-pretty truncate line-clamp-2 dark:text-white lg:text-[27px]">
                {movie.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      <Pagination className="mt-[30px]">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevious} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{page}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={handleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
