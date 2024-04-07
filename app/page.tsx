import Image from 'next/image';
import { Search } from '../lib/component/searchMovie/Search';
import { getTitle } from './api/route';
import Link from 'next/link';


export default function Page() {
  return (
    <div>
      <Search></Search>
      <Link href = {`http://localhost:3000/searchMovie`}>
        <p>検索結果画面へ</p>
      </Link>
    </div>
  );
};