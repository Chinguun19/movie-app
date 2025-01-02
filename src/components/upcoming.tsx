"use client"

import "@fontsource/inter"
import React, { useEffect, useState } from "react";
import Link from "next/link";


type Movie = {
  id: number;
  title: string;
  poster: string;
  rating: number;
};

function Upcoming() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmM1YmY4NjE0MjVkNDAxMGQ3NWNmZDE0MWMxOWExOCIsIm5iZiI6MTczNDk0OTE4My42NTI5OTk5LCJzdWIiOiI2NzY5MzkzZjYxNzhmY2JiZWFjNGUwMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fONUw9p9dhH-1zkQj9uLhZTao8W4HrUVfqUhSTKDrpE`,
    },
  };

  const fetchData = async () => {
    try {
      const res = await fetch(url, options);
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
  const id = "upcoming"

  useEffect(() => {
    fetchData();
  }, []);






  return (
    <div className="text-[20px] text-black ">
      <h1 className="font-extrabold ml-[20px] mb-[30px] text-[24px] font-[Inter] mt-[10px] dark:text-white">Upcoming</h1>
      <Link href={`/category/${id}`}>
      <h2 className="dark:text-white">See more</h2>
      </Link>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 ml-4">
          {movies.slice(0,10).map((movie) => (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div key={movie.id} className="rounded-md shadow w-[157.5px] h-[309.1px] bg-[#F4F4F5] text-start dark:bg-[#27272A] lg:w-[229px] lg:h-[439px] ">
            <img src={movie.poster}  className="w-[157.5px] h-[233.1px] rounded-tl-md rounded-tr-md dark:text-white hover:bg-black lg:w-[229.73px] lg:h-[340px] " />
            <p className="text-black text-[12px] ml-[10px] mt-[6px] dark:text-white">⭐ {Math.round(movie.rating * 10) / 10}/10</p>
            <h3 className="text-[14px] ml-[10px] font-[400]  text-[#09090B] dark:text-white text-ellipsis text-pretty truncate line-clamp-2">{movie.title}</h3>
          </div>
          </Link>
          ))}
        </div>
   
    </div>
  );
}

export default Upcoming;
