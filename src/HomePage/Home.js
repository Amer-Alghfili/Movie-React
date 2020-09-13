import React, { Component } from "react";
import Hero from "./Hero/Hero";
import Features from './Features/Features'
import './Home.css';

export default class extends Component {
  render() {
    return (
      <div>
        <div className="background"></div>
        <Hero></Hero>
        <Features></Features>
      </div>
    );
  }
}
