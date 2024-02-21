const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWY3OTU1OTJjMTFiMTQxYjBlNDQzYzcwNmUyZGZmMSIsInN1YiI6IjY0OTQ4Y2RiOWEzNThkMDBmZjM1MmZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lFmDA8KpY3QvPeE9OQ845-DHEJ2GwSeTRRcPuN7Gsrw';
const BASE_URL = 'https://api.themoviedb.org/3/';
const BASE_BACKDROP_PATH = 'https://image.tmdb.org/t/p/original';
const SMALL_BACKDROP_PATH = 'https://image.tmdb.org/t/p/w300';

const OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
};

export { API_KEY, BASE_URL, OPTIONS, BASE_BACKDROP_PATH, SMALL_BACKDROP_PATH };