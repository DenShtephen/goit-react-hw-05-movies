import { useState, useEffect } from 'react';
import { MovieTrending } from 'components/service/moviesApp';
import { MovieList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    MovieTrending().then(setTrendingMovies);
  }, []);

  return (
    <div>
      <h1>Trending films</h1>
      <MovieList films={trendingMovies} />
    </div>
  );
};
