/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import "./Modal.css";

const Modal = (props) => {
  const { data, genre } = props;
  console.log(data);

  const fixNumber = data.vote_average.toFixed(1);

  return (
    <div className="modal">
      <div className="content">
        <div className="modalImg">
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
        </div>
        <div className="modalInfo">
          <div className="modalTitle">
            <h2>{data.title}</h2>
          </div>
          <div className="modalDesc">{data.overview}</div>
          <div className="gerne">
            Thể loại:
            {data.genre_ids.map((genreid, idx) => {
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
                  {genre},
                </div>
              );
            })}
          </div>
          <div className="releaseDate">
            Ngày khởi chiếu: <div className="date">{data.release_date}</div>
          </div>
          <div className="rating">
            Đánh giá: <div className="ratingNum">{fixNumber}/10</div>
          </div>
        </div>
        <div className="closeBtn" onClick={props.onClose}>
        <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  );
};

export default Modal;
