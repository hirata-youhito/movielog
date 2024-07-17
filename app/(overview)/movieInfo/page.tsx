'use client'

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useState } from "react";
import Image from 'next/image';
import { getCast } from "@/lib/component/api/getCast";
import { getGenres } from "@/lib/component/api/getGenres";
import { genres } from "@/lib/type";



export default function Page() {
    // const router = useRouter();
    const searchParams = useSearchParams()
    const id = searchParams.get("id")!
    const title = searchParams.get("title")!
    const imageUrl = searchParams.get("imageUrl")!
    const [credit,setCredit] = useState("");
    const [genres,setGenres] = useState("");
    // console.log(id)
    // console.log(title)
    // console.log(imageUrl)
    useEffect(() => {
        getCredit(id)
            .then((creditName) => {
                setCredit(creditName)
            });
        getDetails(id)
            .then((genresArray) => {
                let genresList = "";
                for(let i = 0; i < genresArray.length; i++){
                    if(i === genresArray.length-1){
                        genresList += genresArray[i].name
                    } else {
                        genresList += genresArray[i].name + "/";
                    }
                }
                setGenres(genresList);
            })
    },[])

    return (
        <div className="">
            <div className="text-center">
                <Image
                    className="w-2/5 h-72 mx-auto"
                    src={imageUrl}
                    key={id}
                    alt="movieImage"
                    //placeholder="blur"
                    //fill={true}
                    width={500}
                    height={281}
                />
                <div className="">{title}</div>
                <div>{genres}</div>
                <div>{credit}</div>
                <div>あらすじ</div>
                <div>口コミ</div>
            </div>
            
        </div>
    )
}

const getCredit = async (id:number|string):Promise<string> => {
    const creditName = getCast(id);
    return creditName;
}

const getDetails = async (id:number|string):Promise<genres> => {
    const genresArray:genres = await getGenres(id);
    return genresArray;
}