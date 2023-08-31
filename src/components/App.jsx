import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home, MovieDetails, Movies } from 'pages';
import { MovieCast } from './MovieCast/MovieCast';
import { Reviews } from './Reviews/Revievs';

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
