const API_KEY = "a0d9586980219099c1ac3211b50757d4";

const requests = {
  fetchTrending: `/genre/tv/list?api_key=${API_KEY}&language=enUS$page=1`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=enUS$page=1`,
  fetchNetflixOriginal: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

};



export default requests;
