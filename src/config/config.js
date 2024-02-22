const BASE_URL = 'https://api.themoviedb.org/3/';
const BASE_BACKDROP_PATH = 'https://image.tmdb.org/t/p/original';
const SMALL_BACKDROP_PATH = 'https://image.tmdb.org/t/p/w300';

const OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }
};

export { BASE_URL, OPTIONS, BASE_BACKDROP_PATH, SMALL_BACKDROP_PATH };