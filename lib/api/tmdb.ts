import 'server-only';
import { Titles } from '../type'

export const getTitle = async(
    movieId:string
): Promise<Titles> => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/alternative_titles?country=JP'`,
        {
            method:'GET',
            headers:{
                Authorization:`Bearer process.env.Access_Token_Auth`
            }
        }
    );
    console.log(response.json())
    return response.json()
};