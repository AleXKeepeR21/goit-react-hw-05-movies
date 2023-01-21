import { fetchSearchMovies } from 'FetchMovies/FetchMovies';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesPage } from './MoviesPage';

export const MoviesPageSearch = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');

  useEffect(() => {
    fetchSearchMovies(query).then(setMovies);
  }, [query]);

  // const changeParams = params => {
  //   setSearchParams(params !== '' ? { query: params } : {});
  //   setMovies(1);
  // };

  return (
    <>
      {/* <MoviesPage query={query} onSubmit={changeParams} /> */}
      <MoviesPage query={query} />

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      {/* <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul> */}
    </>
  );
};
