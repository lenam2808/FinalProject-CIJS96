/* eslint-disable react/prop-types */
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div
      className="movieCard"
      key={props.id}
      onClick={() => {
        props.onClick();
      }}
    >
      <div className="movieImg">
        <img src={`https://image.tmdb.org/t/p/w500${props.imgPost}`} className="zoom"/>
      </div>
      <div className="movieReleaseDate">Khởi chiếu: {props.relDate}</div>
      <div className="movieTitle">{props.title}</div>
    </div>
  );
};

export default MovieCard;
