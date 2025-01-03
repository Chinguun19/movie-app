"use client"
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { ChevronRight } from "lucide-react";
import { Search } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { useEffect, useState } from "react";
import { title } from "process";


type Genres = {
  name: string;
  id: number;
};

type Movie = {
  title: string;
  id: number;
  poster_path: string;
  release_date: string


}

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("")
  const [searchMovies, setSearchMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genres[]>([]);
  const { setTheme } = useTheme();
  const key = "36c5bf861425d4010d75cfd141c19a18"
  const genreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=36}`
  const url =
    "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmM1YmY4NjE0MjVkNDAxMGQ3NWNmZDE0MWMxOWExOCIsIm5iZiI6MTczNDk0OTE4My42NTI5OTk5LCJzdWIiOiI2NzY5MzkzZjYxNzhmY2JiZWFjNGUwMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fONUw9p9dhH-1zkQj9uLhZTao8W4HrUVfqUhSTKDrpE",
    },
  };
  
  const searchURL =`https://api.themoviedb.org/3/search/movie?query=${search}}`


  const fetchSearchData = async () => {
    try {
      const res = await fetch(searchURL, options);
      const data = await res.json();
      console.log(data)


      const formattedSearchedMovies = data.results.map((movies: Movie) => ({
        title: movies.title,
        poster_path: `https://image.tmdb.org/t/p/w500/${movies.poster_path}`,
        release_date: movies.release_date,
        id: movies.id
      }));
      setSearchMovies(formattedSearchedMovies)
    }
    catch(Error){
      console.log(Error)
    }
  } 
  useEffect(() => {
    fetchSearchData();
  }, [searchURL]); 

  const fetchData = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data);

      const formattedGenres = data.genres.map((genre: Genres) => ({
        id: genre.id,
        name: genre.name,
      }));

      setGenres(formattedGenres); 
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };


 const handleChange = (event: any) => {
  setSearch(event.target.value)
  if (search.trim().length > 0) {
    setIsOpen(true)
  }

 }

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <header className="bg-[#FFFFFF] h-[59px] w-screen text-white flex items-center dark:bg-blac ">
      <Link href="/">
        <img src="film.png" className="h-[24px] ml-[10px]" />
      </Link>

      <Link href="/">
        <h1 className="text-indigo-700 text-[20px] font-[700] ml-[10px] mt-[5px] italic">
          Movie Z
        </h1>
      </Link>

      <Popover>
        <PopoverTrigger>
          <div className="absolute right-[70px] top-4 w-[36px] h-[36px] border-[1px] rounded-md border-[gray]">
            <Search />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-screen mt-[-20px] border-none ">
          <div className="w-screen h-[20px] border-none">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="">Genres</div>
              </DropdownMenuTrigger>
              {isOpen && (
              <DropdownMenuContent className="h-[320px] w-[335px] flex mt-[31px] ml-[8%] ">
                <div className="justify-center  pt-[10px]">
             
                  {
                    genres.map((genre) => (
                 
                       <Badge key={genre.id} className="ml-[10px] mb-[30px] mr-[10px] bg-white border-gray-400 text-black">{genre.name}</Badge>
                    
                    ))
                
                  }
                </div>
              </DropdownMenuContent>
              )}
            </DropdownMenu>
                  <DropdownMenu> 
                
            <input type="text" placeholder="Search" value={search} onChange={handleChange} className=" placeholder:pl-[10px] pl-[20px] border-none rounded-md h-10 w-[260px] ml-[10px] " />
      
            {isOpen && (
            <div className="h-fit z-99 bg-white text-black rounded-lg w-[600px] absolute top-[58px] pt-[20px]">
      {searchMovies.slice(0,5).map((results) => (
        <Link href={`/movie/${results.id}`}> 
        <div key={results.id} className="h-[116px] mb-[25px] w-[311px] flex ">
          <img className="h-[100px] w-[67px] ml-[10px] rounded-lg" src={results.poster_path}></img>
          <h1 className="text-left ml-[20px] text-[20px] font-[600]">{results.title}</h1>
          <p className="text-black "></p>
          {/* <h3 className="text-black">{results.release_date}</h3> */}
        </div>
</Link>
      ))}
      </div>
            )}
            </DropdownMenu>
          </div>
          <PopoverClose className=" ml-[97%] " onClick={c => setSearch("")}>X</PopoverClose>
        </PopoverContent>
      </Popover>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="absolute right-[20px] top-4">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
                
   
    </header>
  );
};

export default Header;
