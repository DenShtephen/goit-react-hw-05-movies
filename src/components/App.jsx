import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { lazy } from 'react';

const eazyLazy = path => {
  return lazy(() => import(`pages/${path}`));
};

const Home = eazyLazy('Home');
const Movies = eazyLazy('Movies');
const MovieDetails = eazyLazy('MovieDetails');
const MovieCast = lazy(() => import(`pages/MovieCast/MovieCast`));
const Reviews = lazy(() => import(`pages/Reviews/Revievs`));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
