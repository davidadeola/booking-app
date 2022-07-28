import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://wallpaperaccess.com/full/180132.jpg"
          alt="london"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://wallpaperaccess.com/full/180132.jpg"
          alt="london"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://wallpaperaccess.com/full/180132.jpg"
          alt="london"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
