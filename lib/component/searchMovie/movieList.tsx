// 'use client'

import React,{FC} from "react";
import Image from 'next/image';
import {Images} from "../../type"
import Link from 'next/link';
import { getTitle } from "../db/title";
import { useSearchParams, usePathname} from 'next/navigation';
import {useState} from 'react';

export type movieInfo = {
    id:number;
    title:string;
}

export default  async function MovieList()  {
    // const searchParams = useSearchParams();
    // const pathname = usePathname();
    // const [movieInfoArray,setMovieInfoArray] = useState<movieInfo[]>([]);

    // type Info = {
    //     title:string,
    //     id:string,
    //     key:string
    // }

    // const infoArray: Info[] = [
    //     {title:"The creater",id:"670292",key:"A"},
    //     {title:"Oppenhymer",id:"872585",key:"B"},
    //     {title:"Aquaman",id:"572802",key:"C"},
    //     {title:"Fly",id:"940551",key:"D"},
    // ]

    const response = await getTitle();

    const putMovieInfoArray = (searchQuery:string) => {
        const movieInfoList:movieInfo[] = [];
        getTitle(searchQuery)
            .then(response => {
                response.map((info:movieInfo) => {
                    movieInfoList.push(info);
                })
            })
        return movieInfoList;
    }

    const movieInfoArray = putMovieInfoArray("t")

    const getImage = async (movieId:number):Promise<string> => {
        const imageHeaders = new Headers();
        imageHeaders.append("Accept", "application/json");
        imageHeaders.append("Authorization", ` Bearer ${process.env.Access_Token_Auth}`);

        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/images`,
            {
                method:'GET',
                headers:imageHeaders
            }
        )
        const image:Images = await response.json();
        
        return(
            image.backdrops[0].file_path
        )
    }
    


    return (
        <div className="grid grid-cols-3 gap-4 content-normal">
            {(await response).map(async (movieInfo) => {
                //const imageUrl = `https://image.tmdb.org/t/p/w500${await getImage(info.id)}`
                const url = await getImage(movieInfo.id)
                
                const imageUrl = `https://image.tmdb.org/t/p/w500${url}`
                console.log(imageUrl)
                return(
                    <div key = {movieInfo.id} className="w-full h-full">
                        <Link
                            className=""
                            href = {`http://localhost:3000/movieInfo?movieId=${movieInfo.id}`}
                            key = {movieInfo.id}
                        >
                            <Image
                                className="w-full h-44"
                                src={imageUrl}
                                key={movieInfo.id}
                                alt="movieImage"
                                //fill={true}
                                width={1000}
                                height={500}
                            />
                        </Link>
                        <div className="text-center text-blue-600">{movieInfo.title}</div>
                    </div>
                )
            })}
        </div>
    );
};

