import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ films }) => {
  console.log(films);
  const location = useLocation();

  return (
    <div className="movie-list">
      {films.map(movie => (
        <div className="movie-card" key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
