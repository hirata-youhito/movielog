'use client'

import React from "react";
import { useParams } from "next/navigation";
import {getTitle} from '@/app/api/route';
import { useSearchParams } from "next/navigation";
import { NextPage } from "next";

export default function Page() {
    const Id = useSearchParams().get("movieId")
    if(typeof Id === "undefined") {
        return (
            <div>日本語対応がありません</div>
        )
    }
    return (
        <div className="title">{Id}</div>
        
    )
}

