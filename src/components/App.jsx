// import { Outlet, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
// import { Header } from './Header/Header';
import { Layout } from './Layout/Layout';
import { Home } from './Home/Home';
import { MoviesPage } from './Movies/MoviesPage/MoviesPage';
import { MoviesDetails } from './Movies/MoviesDetails/MoviesDetails';
import { MoviesCast } from './Movies/MoviesCast/MoviesCast';
import { MoviesReviews } from './Movies/MoviesReviews/MoviesReviews';
import { NotFound } from './Movies/NotFound/NotFound';

export const App = () => {
  return (
    // <Header />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="movies" element={<Outlet />}>
          <Route index element={<MoviesPage />} /> */}
        <Route path="movies" element={<MoviesPage />}></Route>
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<MoviesCast />} />
          <Route path="reviews" element={<MoviesReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
