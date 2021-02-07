import React from "react";
import "./CollectionItem.scss";
import Truncate from "../../Utils/Truncate";
import { withRouter } from "react-router";
// import { FixString } from "../../Utils/FixString";

const CollectionItem = ({ item, movies, history }) => {
  const { title, synopsis, image, name, _id } = item;
  const synop = Truncate(synopsis, 120, " ..read more");
  // var titlePath = movies ? FixString(title) : null;
  return (
    <div className="collection-item">
      {/* //Routing to movie detail */}
      <div
        onClick={() => {
          return movies && history.push(`/movie-detail/${_id}`);
        }}
      >
        {/* Movie card grid */}
        <img src={image} alt={title} className="collection-item__movie-image" />
        <div className="collection-item__text">
          <h1 className="collection-item__title">{title}</h1>
          <h1 className="collection-item__title">{name}</h1>
          <span className="collection-item__synopsis">{synop}</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CollectionItem);
