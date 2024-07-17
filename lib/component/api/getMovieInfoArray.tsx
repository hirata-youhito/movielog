import { movieInfo } from "../../type";
import { getMovieInfo } from "../db/getMovieInfo";

type response = {
    data:[
        {id:number,title:string}
    ]
};

export async function movieInfoArray(searchQuery:string|null)  {
    const response = await fetch(
            `http://localhost:3000/searchMovie/api?searchQuery=${searchQuery}`,
            {
                method:'GET',
            }
        );
        
    const responseData = await response.json()
    console.log("response.json()戻り値")
    console.log(responseData)
    return responseData
}