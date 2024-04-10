'use client'

import React,{FC} from "react";

import Image from 'next/image';
import { StaticImageData } from "next/image"
import {useState} from "react"

import {Images} from "../../type"

import Link from 'next/link';
import Rakko1 from '../../test_image/rakko1.jpg'
import Rakko2 from '../../test_image/rakko2.jpg'
import Rakko3 from '../../test_image/rakko3.jpg'
import Rakko4 from '../../test_image/rakko4.jpg'


export default function MovieList()  {
    const test = "100";
    type Info ={
        title:string,
        id:string,
        image:StaticImageData,
        key:string
    }

    const infoArray: Info[] = [
        {title:"a",id:"670292",image:Rakko1,key:"A"},
        {title:"b",id:"872585",image:Rakko2,key:"B"},
        {title:"c",id:"572802",image:Rakko3,key:"C"},
        {title:"d",id:"940551",image:Rakko4,key:"D"},
    ]

    //const movieId = "670292";

    //const [imageUrl,setimageUrl] = useState< string | null >(null)

    async function getImage(movieId:string) {
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
        //console.log(image)
        console.log(image.backdrops[0].file_path)
        console.log("loop")
        
        return(
            image.backdrops[0].file_path
        )
    }


    return (
        <div className="grid grid-cols-3 gap-4 content-normal">
            {infoArray.map((info) => {
                const imageUrl = `https://image.tmdb.org/t/p/w500${getImage(info.id)}`
                //const imageUrl = async () => {
                //    `https://image.tmdb.org/t/p/w500${getImage(info.id)}`
                //}
                console.log(imageUrl)
                return(
                    <div key = {info.key} className="w-full h-full">
                        <Link
                            className=""
                            href = {`http://localhost:3000/movieInfo?movieId=${info.id}`}
                            key = {info.key}
                        >
                            <Image
                                className="w-full h-44"
                                src={imageUrl}
                                key={info.key}
                                alt="movieImage"
                                fill={true}
                                //width={200}
                                //height={200}
                            />
                        </Link>
                        <div className="text-center text-blue-600">{info.title}</div>
                    </div>
                )
            })}
        </div>
    );
};

