"use client"

import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import {Moon, MoonIcon, Sun} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Header = () => {

  const { setTheme } = useTheme()

// function darkMode () { 
//     const {setTheme} = useTheme()
//     if(useThem){
//     setTheme("dark")
//     }


    return (
      <header className="bg-[#FFFFFF] h-[59px] w-screen text-white flex items-center dark:bg-black ">
        <img src="film.png" className="h-[24px] ml-[10px]  "></img>
        <h1 className="text-indigo-700 text-[20px] font-[700] ml-[10px] mt-[5px] italic">Movie Z</h1>
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