import { useState, useEffect } from 'react';
import css from '../Home/Home.module.css';
import { fetchGetTrending } from '../../FetchMovies/FetchMovies';
import { Link } from 'react-router-dom';
// import * as MovieAPI from '../../FetchMovies/FetchMovies';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchGetTrending().then(setTrendingMovies);
  }, []);
  return (
    <div className={css.container}>
      <ul className={css.item}>
        {trendingMovies.map(trendingMovie => (
          <li className={css.gallery} key={trendingMovie.id}>
            <Link to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
