/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "../components/Navbar";
import "./MovieDetails.css";

const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const MovieDetails = ({ data }) => {
  const [movieSearch, setMovieSearch] = useState("");
  const [genre, setGenre] = useState("");

  const filterMovie = data.filter((movie) => {
    if (
      movie.title.toLowerCase().includes(movieSearch.trim().toLocaleLowerCase())
    ) {
      return { movie };
    }
  });
  const listGenre = [];

  // const filterGenre = data.filter((movie) => {
  //   movie.genre_ids.map((genreId) => {
  //     if (genreId === genre) {
  //       listGenre.push(movie)
  //       return [...listGenre];
  //     }
  //   })
  // });

  data.filter((movie, idx) => {
    movie.genre_ids.map((genreId) => {
      if (genreId === genre) {
        listGenre.push(movie);
      }
    });
  });


  return (
    <div className="container">
      <Navbar />

      <div className="search">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Nhập tên phim....."
            value={movieSearch}
            onChange={(e) => {
              setMovieSearch(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="genreList">
        {genres.map((genre) => {
          return (
            <div
              className="genreItem"
              key={genre.id}
              onClick={() => setGenre(genre.id)}
            >
              {genre.name}
            </div>
          );
        })}
      </div>

      <div className="header">
        <h2>Phim chiếu rạp</h2>
      </div>
      <div className="movieList">
        {/* <div className="movieItem">
          <div className="movieImage">
            <img src="./iso.jpg" />
          </div>
          <div className="movieContent">
            <div className="genre">Animation</div>
            <div className="title">{`Inside Out 2 (Phụ đề)`}</div>
            <div className="relDate">Khởi chiếu: 12/07/2024</div>
            <div className="movieRating">
              <img src="./imdb_icon.png" />
              7.0
            </div>
          </div>
        </div> */}
        {
          filterMovie.map((movie) => {
          return (
            <div className="movieItem" key={movie.id}>
              <div className="movieImage">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              </div>
              <div className="movieContent">
                <div className="genre">
                  {movie.genre_ids.map((genreid, idx) => {
                    let genre;
                    switch (genreid) {
                      case 28:
                        genre = "Action";

                        break;
                      case 12:
                        genre = "Adventue";

                        break;
                      case 16:
                        genre = "Animation";

                        break;
                      case 35:
                        genre = "Comedy";

                        break;
                      case 80:
                        genre = "Crime";

                        break;
                      case 99:
                        genre = "Documentary";

                        break;
                      case 18:
                        genre = "Drama";

                        break;
                      case 10751:
                        genre = "Family";

                        break;
                      case 14:
                        genre = "Fantasy";

                        break;
                      case 36:
                        genre = "History";

                        break;
                      case 27:
                        genre = "Horror";

                        break;
                      case 10402:
                        genre = "Music";

                        break;
                      case 9648:
                        genre = "Mystery";

                        break;
                      case 10749:
                        genre = "Romance";

                        break;
                      case 878:
                        genre = "Science Fiction";

                        break;
                      case 10770:
                        genre = "TV Movie";

                        break;
                      case 53:
                        genre = "Thriller";

                        break;
                      case 10752:
                        genre = "War";

                        break;
                      case 37:
                        genre = "TV Western";

                        break;
                    }
                    return (
                      <div key={idx} className="movieGenre">
                        {genre}
                      </div>
                    );
                  })}
                </div>
                <div className="title">{`${movie.title} (Phụ đề)`}</div>
                <div className="relDate">Khởi chiếu: {movie.release_date}</div>
                <div className="movieRating">
                  <img src="./imdb_icon.png" />
                  {movie.vote_average.toFixed(1)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieDetails;
