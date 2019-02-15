import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import "../styles/styleIndex";

//movie card component
const Movie = ({ title, poster, genres, rating, synopsis }) => {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} explain={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <h3 className={rating >= 8 ? "Movie__rating" : "Movie__low_rating"}>{rating}</h3>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine="4"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
    </div>
  );
};

//image dumb component
const MoviePoster = ({ poster, explain }) => {
  return <img src={poster} alt={explain} title={explain} className="Movie__Poster" />;
};

//Genre dumb component
const MovieGenre = ({ genre }) => {
  return <span className="Movie__Genre"> {genre} </span>;
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  explain: PropTypes.string.isRequired
};

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
};

export default Movie;
