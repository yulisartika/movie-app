import React from "react";
import "./SearchItem.scss";
import { withRouter } from "react-router";
import { FixString } from "../../Utils/FixString";

const SearchItem = ({ item, history }) => {
  const { _id, title, image } = item;
  var titlePath = title ? FixString(title) : null;
  return (
    <div className="search-item">
      <div
        className="search-item__img-box"
        onClick={() => {
          return (
            title &&
            history.push({ pathname: `/movies/${titlePath}`, state: { _id } })
          );
        }}
      >
        <img src={image} alt={title} className="search-item__img" />
      </div>

      <div className="search-item__text">
        <h1 className="search-item__title">{title}</h1>
      </div>
    </div>
  );
};

export default withRouter(SearchItem);
