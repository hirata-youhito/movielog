'use client';
import styles from "../../scss/search.module.scss"

import { MdMovie } from "react-icons/md";
import { Titles,TitleSearchResponse } from '../../type';
import {
  FunctionComponent,
  useEffect,
  useState,
  useTransition,
} from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import React,{FC} from "react";
import { Url } from "next/dist/shared/lib/router/router";
import { URLSearchParams } from "url";



export const Search = () => {
    const [movieId,setMovieId] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    //映画詳細ページ遷移先設定
    const handleChangePage = () => {
        if(!movieId){
        return;
        }
        const url = new URL(`http://localhost:3000/movieInfo?searchQuery=${movieId}`);
        return (
            router.push(`${url}`)
        );
    };

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {

    }

    useEffect(() => {
        // エンターキーもしくはボタンをクリックした時に検索欄の入力値をURLパラメータの値に設定し、その値をSQLクエリの条件値とする
        // event.key === 'Enter'を利用してエンターキーを指定する
    },[])

    return (
        <div className={styles.searchArea}>
            <input
                title="検索入力欄"
                className={styles.input}
                value={movieId ?? ''}
                onChange={(e) => {
                    setMovieId(e.target.value);
                }}
                // onKeyDown={handleChangePage}
            />
            <button
                title="検索実行ボタン"
                className={styles.button}
                onClick={handleChangePage}
                disabled={!movieId}
            >
                <MdMovie size={30} color={"black"} />
            </button>
        </div>
    );
};