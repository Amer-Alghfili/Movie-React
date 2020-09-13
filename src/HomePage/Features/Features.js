import React, { Component } from "react";
import "./Features.css";
import Feature from "./Feature/Feature";
import movie from "../../assets/img/popcorn.svg";
import dvd from "../../assets/img/dj.svg";
import staff from "../../assets/img/cinema.svg";

export default class extends Component {
  state = {
    features: [
      {
        img: movie,
        title: "Movies",
        description:
          "You can explore the top box office movies, movies in theaters, opening movies and upcoming movies"
      },
      {
        img: dvd,
        title: "DVD",
        description:
          "View all DVD movies released, top rentals and upcoming DVDs"
      },
      {
        img: staff,
        title: "Staff",
        description:
          "You can view the movie's detailed information, movie's reviews and movie's staff"
      }
    ]
  };

  render() {
    const { features } = this.state;
    console.log(features[0].img);
    const renderedFeatures = features.map((feature, indx) => (
      <Feature
        key={indx}
        img={feature.img}
        title={feature.title}
        description={feature.description}
      />
    ));
    return (
      <section className="features">
        <h1 className="features__title">Our services</h1>
        <ul className="feature__list">{renderedFeatures}</ul>
      </section>
    );
  }
}
