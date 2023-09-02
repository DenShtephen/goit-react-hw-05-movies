import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieDetails } from 'service/moviesApp';
import placeholder from 'placeholders/placeholder-movie.jpg';
import { Loader } from 'components/Loader/Loader';

function MovieDetails() {
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
    return <Loader />;
  }

  return (
    <div className="movie-details-container">
      <Link to={location.state?.from || '/'} className="back-link">
        Go back
      </Link>
      <div className="movie-details-content">
        <div className="poster-container">
          <img
            className="movie-poster"
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : `${placeholder}`
            }
            alt={movieDetails.title}
          />
        </div>
        <div className="movie-description">
          <h1 className="movie-title">{movieDetails.title}</h1>
          <h4 className="user-score">User score: {roundedPopularity}%</h4>
          <h2 className="section-title">Overview</h2>
          <p className="overview-text">{movieDetails.overview}</p>
          <h2 className="section-title">Genres</h2>
          <p className="genres-list">
            {movieDetails.genres.map(genre => (
              <span key={genre.id} className="genre">
                {genre.name}
              </span>
            ))}
          </p>
          <div className="additional-info-links">
            <Link to="cast" className="info-link">
              Cast
            </Link>
            <Link to="reviews" className="info-link">
              Reviews
            </Link>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetails;
