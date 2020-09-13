import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Home from "./HomePage/Home";
import moviesAndDVDHoc from "./hoc/moviesAndDVDsHoc";
import Movies from "./movies/moviesList/MoviesList";
import DVDsList from "./DVDs/DVDsList/DVDsList";
export default class extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={moviesAndDVDHoc(Movies, "movies")} />
          <Route path="/dvds" exact component={moviesAndDVDHoc(DVDsList, "dvds")} />
          {/* <Route path="/movies/:id" exact component={MovieInformation} /> */}
        </main>
        <Footer />
      </div>
    );
  }
}
