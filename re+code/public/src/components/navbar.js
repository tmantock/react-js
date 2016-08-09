import React from 'react';

const NavBar = () => {
  return (

    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Re + Code</a>
        </div>

        <div className="navbar-collapse collapse navbar-responsive-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a>Home</a></li>
            <li><a>About Us</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavBar;
