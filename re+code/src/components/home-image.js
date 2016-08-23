import React from 'react';

const HeaderImage = () => {
  return (
    <div className="home-image">
      <div className="home-inner-text">
        <h1>The Fastest Way to</h1>
        <h1>Connect with Your Users</h1>
        <div className="form-group col-sm-6 col-sm-offset-3">
          <button className="home-button-left btn btn-primary col-sm-5">
            Inquire
          </button>
          <button className="home-button-right btn btn-info col-sm-5 col-sm-offset-1">
            Tutorial
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
