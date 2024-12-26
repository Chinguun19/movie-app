
import { Badge } from "@/components/ui/badge";


type Props = {
    params: {
        id: string;
    }
}


export default async function Page({params} : Props) {



    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmM1YmY4NjE0MjVkNDAxMGQ3NWNmZDE0MWMxOWExOCIsIm5iZiI6MTczNDk0OTE4My42NTI5OTk5LCJzdWIiOiI2NzY5MzkzZjYxNzhmY2JiZWFjNGUwMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fONUw9p9dhH-1zkQj9uLhZTao8W4HrUVfqUhSTKDrpE'
        }
      };

    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US`, options)
    const credits = await res.json()
    

    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}`, options )
    const data = await response.json()

    const genres = data.genres
    
    const backDropPath = `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`
    const poster = `https://image.tmdb.org/t/p/w500${data.poster_path}`
    console.log(data)
    console.log(credits)
    


    return ( 

    <div className="h-[882px] w-screen">
        <div className="h-fit w-fit relative">
            <h1 className="text-black dark:text-white text-[24px] font-[600] ml-[20px] mt-[32px]" >{data.title}</h1>
            <h3 className="text-black text-[14px] font-[400] ml-[20px] mb-[12px] dark:text-white">{data.release_date} · PG · 2h 40m</h3>  
            <h3 className="absolute right-[50px] top-[-20px]"></h3>
            <h3> </h3>
            <img src={backDropPath}></img>      
        </div>
        <div className="flex mt-[20px] px-[20px] ">  
            <img className="w-[100px] h-[148px] justify-start" src={poster}></img>
            <div className=" ml-[20px]">
                <ul className="text-center" >
                    {genres.map((genre: { id: number; name: string }) => (
                        <Badge variant="outline" className=" mr-[4px] mb-[6px] dark:bg-black dark:border-gray-600 dark:text-white" key={genre.id}>{genre.name}</Badge>
    
                    ))}
                </ul>
                <p className=" text-black text-[16px] mt-[20px] dark:text-white">{data.overview}</p>

                </div>
             
        </div>
        <div >
            <label className="float-left ]"  htmlFor="director">Director</label>
            <h1 className="flex ml-[200px]" id="director">{credits.cast[0].name}</h1>
        </div>
    </div>
    
    )
}