const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '18cb12699e14d8de9e9367a7c1c3c558';

export async function fetchGetTrending() {
  const res = await fetch(`${apiUrl}/trending/movie/day?api_key=${apiKey}`);
  // return await res.json();

  const response = await res.json();
  return response.results;
}

export async function fetchSearchMovies(query, page = 1) {
  const res =
    await fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=${page}&include_adult=false
    `);
  const response = await res.json();
  return response.data;
}

export async function fetchGetMovieDetails(id) {
  const res =
    await fetch(`${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US
`);
  return await res.json();
  // const response = await res.json();
  // return response.data;
}

export async function FetchGetMovieCredits(id) {
  const res =
    await fetch(`${apiUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US
  `);
  const response = await res.json();
  return response.data.cast;
}

export async function FetchGetMovieReviews(id, page = 1) {
  const res =
    await fetch(`${apiUrl}/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=${page}
  `);
  const response = await res.json();
  return response.data.results;
}

// import axios from 'axios';

// axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
// const KEY = '18cb12699e14d8de9e9367a7c1c3c558';

// export const fetchGetTrending = async page => {
//   const response = await axios.get(
//     `trending/movie/day?api_key=${KEY}&page=${page}`
//   );

//   return response.data;
// };

// export const fetchSearchMovies = async (query, page) => {
//   const response = await axios.get(
//     `search/movie?api_key=${KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
//   );

//   return response.data;
// };

// export const fetchGetMovieDetails = async id => {
//   const response = await axios.get(`movie/${id}?api_key=${KEY}&language=en-US`);

//   return response.data;
// };

// export const FetchGetMovieCredits = async id => {
//   const response = await axios.get(
//     `movie/${id}/credits?api_key=${KEY}&language=en-US`
//   );
//   return response.data.cast;
// };

// export const FetchGetMovieReviews = async id => {
//   const response = await axios.get(
//     `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
//   );
//   return response.data.results;
// };
