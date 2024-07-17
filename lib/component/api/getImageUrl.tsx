import {Images} from "../../type"

export const getImageUrl = async (movieId:number):Promise<string> => {
    console.log("movieId:"+movieId)
    
    const imageHeaders = new Headers();
    imageHeaders.append("Accept", "application/json");
    imageHeaders.append("Authorization", ` Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH}`);

    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/images`,
        {
            method:'GET',
            headers:imageHeaders
        }
    )
    const image:Images = await response.json();
    console.log(image.backdrops[0].file_path)
    
    return(
        image.backdrops[0].file_path
    )
}