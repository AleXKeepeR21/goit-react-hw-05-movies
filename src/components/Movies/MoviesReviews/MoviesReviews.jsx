import { FetchGetMovieReviews } from 'FetchMovies/FetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const MoviesReviews = () => {
  const { movieId } = useParams();
  const [moviesReviews, setMoviesReviews] = useState(null);

  useEffect(() => {
    FetchGetMovieReviews(movieId).then(setMoviesReviews);
  }, [movieId]);
  console.log(moviesReviews);
  if (!moviesReviews) {
    return null;
  }

  return (
    <>
      {moviesReviews.results.length !== 0 && (
        <div>
          <ul>
            {moviesReviews.results.map(moviesReviews => (
              <li key={moviesReviews.id}>
                <h2>Author: {moviesReviews.author}</h2>
                <p>{moviesReviews.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {moviesReviews.results.length < 1 && (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
