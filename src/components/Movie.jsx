/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import Modal from "./Modal";
import Carousel from "./Carousel";
import "./Movie.css";

const Movie = (props) => {
  const [currMovie, setCurrMovie] = useState(null);
  

  const { data } = props;

  

  let showModal = null;
  if (currMovie) {
    showModal = (
      <Modal
        data={currMovie}
        onClose={() => {
          setCurrMovie(null);
        }}
      />
    );
  }
  //   console.log(currMovie)
  return (
    <div className="movieContainer">
      <Navbar />

      <Carousel />

      <div className="movieListHeader">
        <h2>Phim đề cử</h2>
      </div>
      <div className="movieList">
        {/* <div className='movieItem'>
                <div className='movieImg'>
                    <img src='./iso.jpg'/>
                </div>
                <div className='movieReleaseDate'>Release: 2024-06-11</div>
                <div className='movieTitle'>Inside Out 2</div>
            </div> */}
        {data.map((movie) => {
          return (
            <MovieCard
              id={movie.id}
              title={movie.title}
              imgPost={movie.poster_path}
              relDate={movie.release_date}
              onClick={() => {
                setCurrMovie(movie);
              }}
            />
          );
        })}
        {showModal}
      </div>
    </div>
  );
};

export default Movie;
