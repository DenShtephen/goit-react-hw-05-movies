import { MovieReviews } from 'service/moviesApp';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await MovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieReviews();
  }, [movieId]);

  return (
    <div className="reviews-container">
      {reviews.length !== 0 && (
        <div>
          <h2 className="title-home">Movie Reviews</h2>
          <ul className="reviews-list">
            {reviews.map(review => (
              <li key={review.id} className="review-card">
                <p className="review-author">{review.author}</p>
                <p className="review-content">{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div className="no-reviews-message">
          We don't have any reviews for this movie.
        </div>
      )}
    </div>
  );
};

export default Reviews;
