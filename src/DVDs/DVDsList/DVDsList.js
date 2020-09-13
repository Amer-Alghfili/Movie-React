import React from "react";
import "./DVDsList.css";
import DVDItem from "../DVDsItem/DVDsItem";

export default props => {
  const { list } = props;
  const renderedDvds = list.map(dvd => <DVDItem dvd={dvd} />);
  return (
    <section className="dvds">
      <ul className="dvd__list">{renderedDvds}</ul>
    </section>
  );
};
