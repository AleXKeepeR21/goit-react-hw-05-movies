// import { Outlet, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
// import { Header } from './Header/Header';
import { Layout } from './Layout/Layout';
import { Home } from './Home/Home';
import { MoviesPage } from './Movies/MoviesPage';
import { MoviesDetails } from './Movies/MoviesDetails/MoviesDetails';
import { MoviesCast } from './Movies/MoviesCast/MoviesCast';

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
        </Route>
      </Route>
    </Routes>
  );
};
