import { fetchGetMovieDetails } from 'FetchMovies/FetchMovies';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const MoviesDetails = () => {
  const { id } = useParams();
  const [moviesDetails, setMoviesDetails] = useState([]);

  useEffect(() => {
    if (id) {
      fetchGetMovieDetails(id).then(setMoviesDetails);
    }
  }, [id]);

  console.log(moviesDetails);

  return (
    <>
      <div>
        <img src="#" alt="Movie Info" />
      </div>
      <div>
        <h3>Movie Info</h3>
      </div>
    </>
  );
};
