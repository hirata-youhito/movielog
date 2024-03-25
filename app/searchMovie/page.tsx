import Image from 'next/image';
import { Search } from '../../lib/component/searchMovie/Search';
import { getTitle } from '../../lib/tmdb';
import MovieList from '../../lib/component/searchMovie/movieList'


export default function Page() {
  return (
    <div>
      <Search></Search>
      <MovieList></MovieList>
    </div>
  );
};