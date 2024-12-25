"use client"

import React, { useEffect, useState } from "react";

type TopRatedMovie = {
  id: number;
  title: string;
  poster: string;
  rating: number;
};

function TopRatedMovies () {
  const [movies, setMovies] = useState<TopRatedMovie[]>([]);

  const url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
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
      console.log(data)

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
  }, []);

  return (
    <div className="text-[20px] text-black ">
      <h1 className="font-extrabold ml-[20px] mb-[30px] text-[24px] font-[Inter] mt-[10px]">Top</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 ml-4">
          {movies.slice(0,10).map((movie) => (
            <div key={movie.id} className="rounded-md shadow w-[157.5px] h-[309.1px] bg-[#F4F4F5] text-start">
              <img src={movie.poster}  className="w-[157.5px] h-[233.1px] rounded-tl-md rounded-tr-md  " />
              <p className="text-black text-[12px] ml-[10px] mt-[6px] ">⭐ {Math.round(movie.rating * 10) / 10}/10</p>
              <h3 className="text-[14px]  ml-[10px] font-[400]  text-[#09090B]">{movie.title}</h3>
            </div>
          ))}
        </div>
   
    </div>
  );
}

export default TopRatedMovies;