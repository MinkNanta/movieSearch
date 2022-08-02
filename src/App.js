import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./movieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=2cf5b5d8";

const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className='app'>
      <h1 className='header'>Just search a movie!</h1>
      <div>
        <input
          placeholder='Which movie are you looking for...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button onClick={() => searchMovies(searchTerm)}>Go</button>
      </div>
      <div className='m-80'></div>

      {movies?.length > 0 ? (
        <div className='flex'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div>
          <h2> no movies found</h2>
        </div>
      )}
      <div className='footer'>
        <p>This project for leaned in React and Rest API</p>
        <p>
          walk around my repositories{" "}
          <a href='https://github.com/MinkNanta'>Here!</a>
        </p>
      </div>
    </div>
  );
};

export default App;
