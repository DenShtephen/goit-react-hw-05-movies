import { fetchMovieCast } from 'service/moviesApp';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import placeholder from '../../placeholders/placeholder-actors.jpg';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieCast();
  }, [movieId]);

  return (
    <div>
      {cast.length !== 0 ? (
        <div>
          <h2 className="title-home">Movie Cast</h2>
          <ul className="cast-list">
            {cast.map(actor => (
              <li key={actor.id} className="actor-card">
                <img
                  className="actor-image"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : `${placeholder}`
                  }
                  alt={actor.original_name}
                />
                <div className="actor-wrapper">
                  <h3 className="actor-name">{actor.name}</h3>
                  <p className="actor-character">{actor.character}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="no-cast-message">
          We don't have any cast for this movie.
        </div>
      )}
    </div>
  );
}

export default MovieCast;
