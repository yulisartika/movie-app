import React from "react";
import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../../Config/config";
import "./CollectionGridItem.scss";

const CollectionGridItem = ({ item }) => {
  const { title, overview, backdrop_path, poster_path, name } = item;
  return (
    // Banner Image
    <div className="grid-item">
      <img
        src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`}
        alt="movie"
        className="grid-item__img"
      />
      {/* //Grid Image */}
      <img
        src={`${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`}
        alt="movie"
        className="grid-item__img grid-item__mobile-img"
      />
      <div className={`${title && "grid-item__movie-text"}`}>
        <h1 className="grid-item__title">{title}</h1>
        <h1 className="grid-item__title">{name}</h1>
        <span className="grid-item__overview">{overview}</span>
      </div>
    </div>
  );
};

export default CollectionGridItem;
