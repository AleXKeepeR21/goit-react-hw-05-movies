import { FetchGetMovieCredits } from 'FetchMovies/FetchMovies';
import css from '../MoviesCast/MoviesCast.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MoviesCast = () => {
  const { movieId } = useParams();
  const [moviesCast, setMoviesCast] = useState(null);

  useEffect(() => {
    FetchGetMovieCredits(movieId).then(setMoviesCast);
  }, [movieId]);
  //   console.log(moviesCast);
  if (!moviesCast) {
    return null;
  }

  return (
    <div>
      <ul className={css.cast}>
        {moviesCast.cast.map(moviesCast => (
          <li key={moviesCast.id}>
            <img
              width="200px"
              src={BASE_URL + moviesCast.profile_path}
              alt={moviesCast.original_name}
            />
            <p>{moviesCast.name}</p>
            <p>Character: {moviesCast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesCast;
