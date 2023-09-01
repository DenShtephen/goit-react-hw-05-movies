import { useState, useEffect } from 'react';
import { MovieTrending } from 'service/moviesApp';
import { MovieList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    MovieTrending().then(setTrendingMovies);
  }, []);

  return (
    <div>
      <h1 className="title-home">Trending films</h1>
      <MovieList films={trendingMovies} />
    </div>
  );
};

export default Home;
