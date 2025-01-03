"use client";

import "@fontsource/inter";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type Movie = {
  id: number;
  title: string;
  poster: string;
  rating: number;
};

type UpcomingProps = {
  endpoint: string; 
  id: string;      
  title: string;   
};

function Section({ endpoint, id, title }: UpcomingProps) {
  const [movies, setMovies] = useState<Movie[]>([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmM1YmY4NjE0MjVkNDAxMGQ3NWNmZDE0MWMxOWExOCIsIm5iZiI6MTczNDk0OTE4My42NTI5OTk5LCJzdWIiOiI2NzY5MzkzZjYxNzhmY2JiZWFjNGUwMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fONUw9p9dhH-1zkQj9uLhZTao8W4HrUVfqUhSTKDrpE`,
    },
  };

  const fetchData = async () => {
    try {
      const res = await fetch(endpoint, options);
      const data = await res.json();

      const formattedMovies = data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average,
      }));

      setMovies(formattedMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return (
    <div className="text-[20px] text-black mb-[50px] justify-center">
      <h1 className="font-extrabold ml-[20px] mb-[30px] text-[24px] font-[Inter] mt-[10px] dark:text-white lg:text-[35px]">
        {title}
      </h1>
      <Link href={`/category/${id}`}>
        <h2 className="dark:text-white">See more</h2>
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-x-[5px] ml-[3vh] mr-[1vh]  lg:mr-[1%] lg:ml-[2.5%] justify-center items-center">
  {movies.slice(0, 10).map((movie) => (
    <Link key={movie.id} href={`/movie/${movie.id}`}>
      <div className="rounded-md shadow w-[157.5px] h-[309.1px] bg-[#F4F4F5] text-start dark:bg-[#27272A] md:w-[350px] md:h-[600px] ">
        <img
          src={movie.poster}
          className="w-[157.5px] h-[233.1px] rounded-tl-md rounded-tr-md dark:text-white hover:bg-black md:w-[350px] md:h-[500px]"
          alt={movie.title}
        />
        <p className="text-black text-[12px] ml-[10px] mt-[6px] dark:text-white">
          ⭐ {Math.round(movie.rating * 10) / 10}/10
        </p>
        <h3 className="text-[14px] ml-[10px] font-[400] text-[#09090B] dark:text-white flex text-left text-ellipsis text-pretty truncate line-clamp-2">
          {movie.title}
        </h3>
      </div>
    </Link>
  ))}
</div>
    </div>
  );
}

export default Section;
