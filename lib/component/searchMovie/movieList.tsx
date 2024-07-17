// 'use client'

import React,{useEffect} from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { getImageUrl } from "../api/getImageUrl";
import { movieInfo } from "../../type";
import { movieInfoArray } from "../api/getMovieInfoArray";

import { Suspense } from "react";
import Loading from "@/app/(overview)/searchMovie/loading";

type searchParams = {
    searchQuery:string;
}

type Props = {
    params:searchParams
}

// 取得データ件数によって以下の型になる場合がある
// type dataTypeNest = {
//     data:[
//         {
//             id:number,
//             title:string,
//         }
//     ]
// }

const createArray = async (searchQuery:string | null) => {
    const dataArray = await movieInfoArray(searchQuery);
    if("data" in dataArray){
        return dataArray.data
    } else {
        return dataArray
    }
}

export default  async function MovieList({params}:Props)  {
    // const searchParams = useSearchParams();
    // const searchQuery = searchParams.get('searchQuery')
    // const [dataArray,setDataArray] = useState<movieInfo[]>([])
    const searchQuery:string = params.searchQuery ?? ""
    console.log("searchQuery:"+searchQuery)
    
    
    
    // useEffect(() => {
    //     createArray(searchQuery)
    //     .then((newArray) => {
    //         setDataArray(newArray)
    //     })
    // },[])

    return (
        <Suspense fallback={<Loading />}>
            <div className="grid grid-cols-3 gap-4 content-normal">
                {(await createArray(searchQuery)).map(async (movieInfo:movieInfo) => {
                    const url = await getImageUrl(movieInfo.id)
                    // console.log("url:")
                    // console.log(url)
                    const imageUrl = `https://image.tmdb.org/t/p/w500${url}`
                    console.log("imageUrl:"+imageUrl)
                    return(
                        <div key = {movieInfo.id} className="w-full h-full">
                            <Link
                                className=""
                                href = {{
                                    pathname:`http://localhost:3000/movieInfo`,
                                    query: {
                                        id:movieInfo.id,
                                        title:movieInfo.title,
                                        imageUrl:imageUrl
                                    }
                                }}
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
        </Suspense>
    );
};
