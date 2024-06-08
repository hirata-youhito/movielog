'use client'

import React from "react";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { NextPage } from "next";

export default function Page() {
    const Id = useSearchParams().get("searchQuery")
    if(typeof Id === "undefined") {
        return (
            <div>日本語対応がありません</div>
        )
    }
    return (
        <div className="title">{Id}</div>
        
    )
}

