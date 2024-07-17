import {Credits} from "../../type"

export const getCast = async (movieId:number|string):Promise<string> => {
    console.log("movieId:"+movieId)
    const requestHeaders = new Headers();
    requestHeaders.append("Accept", "application/json");
    requestHeaders.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH}`);

    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
        {
            method:'GET',
            headers:requestHeaders
        }
    )
    const cast:Credits = await response.json();
    console.log(response)
    console.log(cast.cast[0].name)
    
    return(
        cast.cast[0].name
    )
}