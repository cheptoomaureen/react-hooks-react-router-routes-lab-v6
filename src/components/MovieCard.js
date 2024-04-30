import {Link} from 'react-router-dom';
import React from "react";

const MovieCard = ({ movie }) => {
  
  return (
    <article>
        <h2>{movie.title}</h2>
        { <Link to={`/movie/${movie.id}`}>View Details</Link>
}
    </article>
  );
};

export default MovieCard;