import Image from 'next/image';
import { Search } from '../../../lib/component/searchMovie/Search';
import MovieList from '../../../lib/component/searchMovie/movieList'

type Props = {
  params:{}
  searchParams:{
    searchQuery:string,
  },
}

export default function Page(Props:Props) {
  console.log(Props)
  return (
    <div>
      <Search></Search>
      <MovieList params={Props.searchParams}></MovieList>
    </div>
  );
};