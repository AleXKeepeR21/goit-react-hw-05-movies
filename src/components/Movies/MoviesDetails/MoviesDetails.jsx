import { fetchGetMovieDetails } from 'FetchMovies/FetchMovies';
import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [moviesDetails, setMoviesDetails] = useState(null);

  useEffect(() => {
    fetchGetMovieDetails(movieId).then(setMoviesDetails);
  }, [movieId]);

  if (!moviesDetails) {
    return null;
  }

  return (
    <>
      <button type="button" onClick={() => navigate(-1)}>
        ⇐Go back
      </button>
      <div style={{ paddingTop: 16 }}>
        <img
          src={`${BASE_URL}${moviesDetails.poster_path}`}
          alt={moviesDetails.title}
          width="320"
        />
      </div>
      <div>
        <h2>
          {moviesDetails.title}({moviesDetails.release_date.slice(0, 4)})
        </h2>
        <p>User Score: {`${Math.round(moviesDetails.vote_average * 10)}%`}</p>
        <h3>Overview:</h3>
        <p>{moviesDetails.overview}</p>
        <h3>Genres:</h3>
        {/* <ul>
          {moviesDetails.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul> */}

        <p>
          {moviesDetails.genres.map((genre, index) => (
            <span key={index} style={{ marginRight: '10px' }}>
              {genre.name} /
            </span>
          ))}
        </p>
      </div>

      <div>
        <h3>Cast:</h3>
        <Link to="cast">Cast</Link>
        <h3>Reviews:</h3>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  );
};
