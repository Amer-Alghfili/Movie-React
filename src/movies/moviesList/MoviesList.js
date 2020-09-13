import React, { Component } from "react";
import "./MoviesList.css";
import MoviesItem from "../moviesItem/MoviesItem";

export default props => {
  const { list } = props;
  const renderedMovies = list.map(movie => <MoviesItem movie={movie} />);
  return (
    <section className="movies">
      {/* <ul className="movie__list">{renderedMovies}</ul> */}
      {list.props}
    </section>
  );
};
