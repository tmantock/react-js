import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="nav navbar-inverse navbar-fixed-top" id="navbar">
        <div className="navbar-header">
          <a to="/" className="navbar-brand">Re<span className="orange-plus">+</span>Code</a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Showcase</a>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
