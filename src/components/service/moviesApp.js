import axios from 'axios';

const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const MovieTrending = async () => {
  const response = await axios.get(`trending/movie/day`, params);
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, params);
  return response.data;
};

export const MovieSearch = async movieName => {
  const response = await axios.get(`/search/movie?query=${movieName}`, params);
  return response.data;
};

export const MovieCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits?`, params);
  return response.data.cast;
};

export const MovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews?`, params);
  return response.data.results;
};
