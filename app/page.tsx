import Image from 'next/image';
import { Search } from '../lib/component/searchMovie/Search';
import { getTitle } from '../lib/tmdb';
import Link from 'next/link';


export default function Page() {
  return (
    <div>
      <Search></Search>
      <Link href = {`http://localhost:3000/searchMovie`}>
        <p>検索URLへ</p>
      </Link>
    </div>
  );
};