import { Details , genres } from "../../type"


export const getGenres = async (movieId:number|string):Promise<genres> => {
    console.log("movieId:"+movieId)
    const requestHeaders = new Headers();
    requestHeaders.append("Accept", "application/json");
    requestHeaders.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH}`);

    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        {
            method:'GET',
            headers:requestHeaders
        }
    )
    const genres:Details = await response.json();
    console.log(response)
    console.log(genres.genres)
    
    return(
        genres.genres
    )
}