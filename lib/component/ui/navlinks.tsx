import { BiSolidMoviePlay } from "react-icons/bi";
import Link from 'next/link';

export default function NavLinks(){
    return(
        <div>
            <BiSolidMoviePlay/>
            <Link
                className= ""
                href = "/newTitle"
            >
                <div>新着</div>
            </Link>
            <Link
                className= ""
                href = "/ranking"
            >
                <div>ランキング</div>
            </Link>
            <Link
                className= ""
                href = "/recommended"
            >
                <div>今週のおすすめ</div>
            </Link>
            <Link
                className= ""
                href = "/mypage"
            >
                <div>マイページ</div>
            </Link>
        </div>
    )
}