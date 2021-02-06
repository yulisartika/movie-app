import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsMovieFetching } from "../../Redux/Movie/movie-selectors";

import CollectionOverview from "./CollectionOverview";

const mapStateToProps = createStructuredSelector({
  isMovieOverviewLoading: selectIsMovieFetching,
});

const CollectionOverviewMovie = compose(connect(mapStateToProps))(
  CollectionOverview
);

export default CollectionOverviewMovie;
