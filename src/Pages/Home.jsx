import "../CSS/Home.css";

import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import { searchMovies, getPopularMovies } from "../Services/api";

function Home() {
  let [searchQuery, setSearchQuery] = useState("");
  let [movies, setMovies] = useState([]);
  let [laoding, setLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    let loadPopularMovies = async () => {
      try {
        let popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  let handleSubmit = () => {
    e.preventDefault();
    alert(searchQuery);
  };
  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          value={searchQuery}
          placeholder="Search for Movies"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title
              .toLowerCase()
              .startsWith(searchQuery.toLowerCase()) && (
              <MovieCard key={movie.id} movie={movie} />
            ),
        )}
      </div>
    </div>
  );
}

export default Home;
