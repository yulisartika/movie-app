import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsMovieFetching } from "../../Redux/Movie/movie-selectors";

import CollectionGrid from "./CollectionGrid";

const mapStateToProps = createStructuredSelector({
  isMovieGridLoading: selectIsMovieFetching,
});

const CollectionGridMovie = compose(connect(mapStateToProps))(CollectionGrid);

export default CollectionGridMovie;
