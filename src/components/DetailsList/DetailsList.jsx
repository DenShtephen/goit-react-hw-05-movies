import PropTypes from 'prop-types';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../service/moviesApp';

export const DetailsList = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);
  const [roundedPopularity, setRoundedPopularity] = useState(0);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
        const roundedPopularity = Math.round(movie.vote_average * 10);
        setRoundedPopularity(roundedPopularity);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={location.state?.from || '/'}>
        <button>Go back</button>
      </Link>
      <div>
        <h1>{movieDetails.title}</h1>
        <h4>User score: {roundedPopularity}%</h4>
        <h2>Overview</h2>
        <p>{movieDetails.overview}</p>
        <h2>Genres</h2>
        <p>
          {movieDetails.genres.map(genre => (
            <span key={genre.id}> {genre.name}</span>
          ))}
        </p>
      </div>
      <div>
        <img
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
              : 'https://via.placeholder.com/500x750' // Ваша альтернативна картинка заглушка
          }
          alt={movieDetails.title}
        />
      </div>
      <hr />
      <h3>Additional information</h3>
      <Link to="cast">
        <button>Cast</button>
      </Link>
      <Link to="reviews">
        <button>Reviews</button>
      </Link>
    </div>
  );
};
