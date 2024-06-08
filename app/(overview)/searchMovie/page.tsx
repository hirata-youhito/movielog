import Image from 'next/image';
import { Search } from '../../../lib/component/searchMovie/Search';
import MovieList from '../../../lib/component/searchMovie/movieList'


export default function Page({
  params,
  searchParams,
}:{
  params:{slug:string | undefined},
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div>
      <Search></Search>
      <MovieList></MovieList>
    </div>
  );
};