import React, { Component } from "react";
import "./Header.css";
import logo from "../../assets/img/clapperboard.svg";
import { NavLink } from "react-router-dom";
import boxOfficeImg from "../../assets/img/booth.svg";
import openingMovieImg from "../../assets/img/opening.svg";
import theaterImg from "../../assets/img/theater.svg";
import upcomingMovieImg from "../../assets/img/upcoming.svg";
import { v4 as uuidv4 } from "uuid";

export default class extends Component {
  state = {
    navigationLinks: [
      {
        name: "Movies",
        innerLinks: [
          {
            name: "Box Office Movies",
            img: boxOfficeImg,
            type: "box_office"
          },
          {
            name: "In Theater Movies",
            img: theaterImg,
            type: "in_theaters"
          },
          { name: "Opening Movies", img: openingMovieImg, type: "opening" },
          {
            name: "Upcoming Movies",
            img: upcomingMovieImg,
            type: "upcoming"
          }
        ]
      },
      {
        name: "DVD",
        innerLinks: [
          {
            name: "Current Releases",
            img: boxOfficeImg,
            type: "current_releases"
          },
          {
            name: "New Releases DVDs",
            img: boxOfficeImg,
            type: "new_releases"
          },
          { name: "Top Rentals DVDs", img: boxOfficeImg, type: "top_rentals" },
          { name: "Upcoming DVDs", img: boxOfficeImg, type: "upcoming" }
        ]
      }
    ],
    mobileNavClasses: ["mobile-nav"],
    isMobileNavShown: false,
    timeOut: null
  };
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  burgerIconClickHandler = () => {
    const { mobileNavClasses, isMobileNavShown } = this.state;
    const newMobileNavClasses = [...mobileNavClasses];
    this.ref.current.style.display = "block";
    newMobileNavClasses.push("open");
    setTimeout(() => {
      this.ref.current.classList.add("open__backdrop");
    }, 2);
    this.setState(prevState => {
      return {
        isMobileNavShown: !prevState.isMobileNavShown,
        mobileNavClasses: newMobileNavClasses
      };
    });
  };

  backdropClickHandler = () => {
    const { mobileNavClasses, isMobileNavShown } = this.state;
    const newMobileNavClasses = [...mobileNavClasses];
    this.ref.current.classList.remove("open__backdrop");
    newMobileNavClasses.pop();
    setTimeout(() => {
      this.ref.current.style.display = "none";
    }, 502);
    this.setState(prevState => {
      return {
        isMobileNavShown: !prevState.isMobileNavShown,
        mobileNavClasses: newMobileNavClasses
      };
    });
  };

  render() {
    const { navigationLinks, isMobileNavShown, mobileNavClasses } = this.state;
    let renderedInnerNavigationLinks;
    const renderedNavigationLinks = navigationLinks.map((link, indx) => {
      renderedInnerNavigationLinks = link.innerLinks.map(innerLink => (
        <li key={uuidv4()} className="sub-link">
          <NavLink to={`/${link.name.toLocaleLowerCase()}?category=${innerLink.type}`}>
            <div className="sub-link__container">
              <div className="sub-link__image--container">
                <img
                  src={innerLink.img}
                  alt="box office movies logo"
                  className="sub-link__image"
                />
              </div>
              <h1 className="sub-link__title">{innerLink.name}</h1>
            </div>
          </NavLink>
        </li>
      ));
      return (
        <li key={uuidv4()} className="link">
          <NavLink to="/">{link.name}</NavLink>
          <ul className="sub-links">{renderedInnerNavigationLinks}</ul>
        </li>
      );
    });
    return (
      <div>
        <div
          ref={this.ref}
          onClick={this.backdropClickHandler}
          className="backdrop"
        ></div>
        <header className="main-header">
          <div className="main-header__brand-container">
            <NavLink to="/">
              <img
                src={logo}
                alt="Company website logo"
                className="main-header__brand"
              />
            </NavLink>
          </div>
          <div>
            <div onClick={this.burgerIconClickHandler} className="burger-icon">
              <div className="burger-icon__element"></div>
              <div className="burger-icon__element"></div>
              <div className="burger-icon__element"></div>
            </div>
            <nav className={mobileNavClasses.join(" ")}>
              <ul className="link__list">
                {renderedNavigationLinks}
                <input
                  type="search"
                  className="main-nav__search"
                  placeholder="Search"
                />
              </ul>
            </nav>
            <nav className="main-nav">
              <ul className="link__list">{renderedNavigationLinks}</ul>
            </nav>
            <input
              type="search"
              className="main-nav__search"
              placeholder="Search"
            />
          </div>
        </header>
      </div>
    );
  }
}
