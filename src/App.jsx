import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Movie from "./components/Movie";
import MovieDetails from "./pages/MovieDetails";
import News from "./pages/News";
import Promotion from "./pages/Promotion";
import About from "./pages/About";

import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=017104cc08e46912154df155c5372d13"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Movie data={movieList} />} />
            <Route path="/FinalProject-CIJS96/movies" element={<MovieDetails data={movieList} />} />
            <Route path="/FinalProject-CIJS96/news" element={<News />} />
            <Route path="/FinalProject-CIJS96/promotion" element={<Promotion />} />
            <Route path="/FinalProject-CIJS96/about" element={<About />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
