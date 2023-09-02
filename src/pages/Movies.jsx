import { MovieList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MovieSearch } from 'service/moviesApp';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    MovieSearch(query).then(setFilms);
  }, [searchParams]);
  const handleSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <>
      <h2 className="title-home">Find you're movie</h2>
      <SearchForm onSubmit={handleSubmit} nameButton={'Search Film'} />
      <MovieList films={films} />
    </>
  );
};

export default Movies;
