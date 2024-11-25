import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?apikey=&s=harry potter")
      .then((response) => {
        setMovies(response.data.Search);
      });
    const fetchMovies = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=&s=${searchQuery}`
      );
      setMovies(response.data.Search);
    };
    if (searchQuery) {
      fetchMovies();
    }
  }, [searchQuery]);

  return (
    <>
      <div className="w-full bg-orange-600 justify-between items-center flex">
        <Header title="FinProH8" />
        <Search onSearch={setSearchQuery} />
      </div>
      <div className="mt-8">
        <h1 className="px-8 font-semibold text-2xl text-sky-300">
          Show your favorite movies
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-5 gap-6">
        {movies.map((movie, imdbID) => {
          return (
            <Movie
              key={imdbID}
              image={movie.Poster}
              Title={movie.Title}
              year={movie.Year}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
