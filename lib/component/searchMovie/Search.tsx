'use client';
import styles from "../../scss/search.module.scss"

import { MdMovie } from "react-icons/md";
import { Titles,TitleSearchResponse } from '../../type';
import {
  FunctionComponent,
  useState,
  useTransition,
} from 'react';
import { useRouter } from 'next/navigation';
import React,{FC} from "react";
import { Url } from "next/dist/shared/lib/router/router";
import { URLSearchParams } from "url";



export const Search:FunctionComponent = () => {
    const [movieId,setMovieId] = useState<string | null>(null);
    const router = useRouter();

    //映画詳細ページ遷移先設定
    const Info = () => {
        if(!movieId){
        return;
        }
        const url = new URL(`http://localhost:3000/movieInfo?movieId=${movieId}`);
        return (
            router.push(`${url}`)
        );
    };

    return (
        <div className={styles.searchArea}>
            <input
                title="検索入力欄"
                className={styles.input}
                value={movieId ?? ''}
                onChange={(e) => {
                    setMovieId(e.target.value);
                }}
            />
            <button
                title="検索実行ボタン"
                className={styles.button}
                onClick={Info}
                disabled={!movieId}
            >
                <MdMovie size={30} color={"black"} />
            </button>
        </div>
    );
};