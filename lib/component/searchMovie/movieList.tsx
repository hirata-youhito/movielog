import styles from "../../lib/scss/search.module.scss"

import { MdMovie } from "react-icons/md";
import { Title,TitleSearchResponse } from '../../type';
import {
  FunctionComponent,
  useState,
  useTransition,
} from 'react';
import React,{FC} from "react";
import { Url } from "next/dist/shared/lib/router/router";
import { URLSearchParams } from "url";
import Image from 'next/image';
import { StaticImageData } from "next/image"

import Link from 'next/link';
import Rakko1 from '../../test_image/rakko1.jpg'
import Rakko2 from '../../test_image/rakko2.jpg'
import Rakko3 from '../../test_image/rakko3.jpg'




export default function MovieList()  {
    const test = "100";
    type Info ={
        title:string,
        id:string,
        image:StaticImageData,
        key:string
    }

    const infoArray: Info[] = [
        {title:"a",id:"10",image:Rakko1,key:"A"},
        {title:"b",id:"20",image:Rakko2,key:"B"},
        {title:"c",id:"30",image:Rakko3,key:"C"}
    ]

    return (
        <div className="flex justify-center items-center min-h-12">
            {infoArray.map((info) => {
                return(
                    <div className="static w-1/5 h-full">
                        <Link
                            className=""
                            href = {`http://localhost:3000/movieInfo?movieId=${info.id}`}
                            key = {info.key}
                        >
                            <Image
                                className=""
                                src={info.image}
                                key={info.key}
                                alt="movieImage"
                                fill={true}
                                //width={100}
                                //height={200}
                            />
                        </Link>
                        <div className="justify-center text-blue-600">{info.title}</div>
                    </div>
                )
            })}
        </div>
    );
    
};