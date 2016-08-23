import React, { Component } from 'react';
import Header from './header';
import HomeImage from './home-image';
import About from './about';
import Companies from './companies';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeImage />
        <About />
        <Companies />
      </div>
    );
  }
}
