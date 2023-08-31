import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MovieList = ({ films }) => {
  console.log(films);
  return (
    <ul>
      {films.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
