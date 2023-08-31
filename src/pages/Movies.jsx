import { MovieList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MovieSearch } from 'components/service/moviesApp';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
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
      <h2>Find you're movie</h2>
      <SearchForm onSubmit={handleSubmit} nameButton={'Search Film'} />
      <MovieList films={films} />
    </>
  );
};
