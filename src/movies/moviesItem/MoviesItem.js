import React from "react";
import { Link } from "react-router-dom";
import "./MoviesItem.css";

export default props => {
  const { movie } = props;
  return (
    <li class="movie">
      <Link to={`movies/${movie._id}`}></Link>
    </li>
  );
};
