'use client';
import styles from "../../scss/search.module.scss"
import { MdMovie } from "react-icons/md";
import {
  useEffect,
  useState,
} from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import React from "react";

export const Search = () => {
    const [searchQuery,setSearchQuery] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);
    const router = useRouter();

    //映画詳細ページ遷移先設定

    const handleEnterevent:React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (searchQuery) {
        params.set('searchQuery', searchQuery);
        } else {
        params.delete('searchQuery');
        }
        const url = `${pathname}?${params.toString()}`

        if(event.key === 'Enter'){
            console.log("Enter押下")
            router.replace(url)
        }
    }

    const handleButtonhevent:React.MouseEventHandler<HTMLButtonElement> = () => {
        if (searchQuery) {
            params.set('searchQuery', searchQuery);
            } else {
            params.delete('searchQuery');
            }
            const url = `${pathname}?${params.toString()}`
            console.log("検索ボタン押下")
            router.replace(url)
    }

    return (
        <div className={styles.searchArea}>
            <input
                id="input"
                title="検索入力欄"
                className={styles.input}
                value={searchQuery ?? ''}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                }}
                onKeyDown={handleEnterevent}
            />
            <button
                title="検索実行ボタン"
                id="button"
                className={styles.button}
                onClick={handleButtonhevent}
                disabled={!searchQuery}
            >
                <MdMovie size={30} color={"black"} />
            </button>
        </div>
    );
};