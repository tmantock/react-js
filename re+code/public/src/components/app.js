import React, { Component } from 'react';
import NavBar from './navbar';
import LandingImage from './landing-image';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LandingImage />
      </div>
    );
  }
}
