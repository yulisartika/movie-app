import React from "react";
import staticImage from "../../../Assets/JSONfile";

export default function Character() {
  return (
    <div className="detail-navigation-container">
      <div className="movie-list">
        {staticImage.length !== 0
          ? staticImage.map((cast, index) => (
              <a href="#" key={index}>
                <img src={cast.image} alt={cast.name} />
                <p className="cast-name">{cast.name}</p>
              </a>
            ))
          : ""}
      </div>
    </div>
  );
}
