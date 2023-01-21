import { fetchSearchMovies } from 'FetchMovies/FetchMovies';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesPage } from './MoviesPage';

export const MoviesPageSearch = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    fetchSearchMovies(query).then(setMovies);
  }, [query]);

  return (
    <>
      <MoviesPage />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};
