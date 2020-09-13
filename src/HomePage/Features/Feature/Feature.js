import React from "react";
import './Feature.css';

export default props => {
  const { img, title, description } = props;
  console.log(props.img);
  return (
    <li className="feature">
      <div className="feature__imgage--container">
        <img className="feature__image" src={img} />
      </div>
      <h1 className="feature__title">{props.title}</h1>
      <p className="description">{props.description}</p>
    </li>
  );
};
