import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home, MovieDetails, Movies } from 'pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
