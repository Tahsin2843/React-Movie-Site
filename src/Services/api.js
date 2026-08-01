let API_KEY = "cb04693b45af33915d6d50dac145e4cb";
let BASE_URL = "https://api.themoviedb.org/3";

export let getPopularMovies = async () => {
  let response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  let data = await response.json();
  return data.results;
};

export let searchMovies = async (query) => {
  let response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );
  let data = await response.json();
  return data.results;
};
