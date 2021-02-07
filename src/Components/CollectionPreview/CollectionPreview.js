import React, { createRef } from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";
import { connect } from "react-redux";
import { selectMovieItems } from "../../Redux/Movie/movie-selectors";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LeftArrow, RightArrow } from "../../Utils/ScrollArrows";
import Fade from "react-reveal/Fade";

const CollectionPreview = ({ title, movieItems, start, end, movies }) => {
  const divRef = createRef();

  const onLeftClick = () => {
    LeftArrow(divRef);
  };

  const onRightClick = () => {
    RightArrow(divRef);
  };

  const movieData = movieItems.slice(start, end);

  return (
    <Fade>
      <div className="collection-preview">
        <h1 className="collection-preview__title">{title.toUpperCase()}</h1>

        <div className="collection-preview__box">
          <span className="collection-preview__left-arrow">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="collection-preview__left-arrow-icon"
              onClick={onLeftClick}
            />
          </span>
          <span className="collection-preview__right-arrow">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="collection-preview__right-arrow-icon"
              onClick={onRightClick}
            />
          </span>
          <div className="collection-preview__inner" ref={divRef}>
            {movies
              ? movieData.map((item) => (
                  <CollectionItem key={item._id} item={item} movies={movies} />
                ))
              : null}
          </div>
        </div>
      </div>
    </Fade>
  );
};

const mapStateToProps = (state) => ({
  movieItems: selectMovieItems(state),
});

export default connect(mapStateToProps)(CollectionPreview);
