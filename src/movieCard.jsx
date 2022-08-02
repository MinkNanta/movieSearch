import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className='card'>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "http://via.placeholder.com/400"
          }
          alt={movie.Title}
        ></img>
      </div>
      <div className='description'>
        <h3>{movie.Title}</h3>
        <p>Year {movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
