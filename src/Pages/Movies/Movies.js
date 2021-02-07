import React, { Suspense, lazy } from "react";
import "./Movies.scss";
import { connect } from "react-redux";
import {
  selectMovieItems,
  selectIsMovieFetching,
} from "../../Redux/Movie/movie-selectors";
import { getMovies } from "../../Redux/Movie/movie-actions";

const CollectionGridMovie = lazy(() =>
  import("../../Components/CollectionGrid/CollectionGridMovie")
);

const CollectionOverviewMovie = lazy(() =>
  import("../../Components/CollectionOverview/CollectionOverviewMovie")
);

class Movies extends React.Component {
  componentDidMount() {
    if (!this.props.token) {
      this.props.history.push("signin"); // if no token, then redirect to sign in page
    }

    this.props.dispatch(getMovies());
  }

  // componentDidMount() {
  //   this.props.dispatch(getMovies());
  // }

  render() {
    return (
      <div className="movies">
        <Suspense fallback={<div></div>}>
          <CollectionGridMovie movies />
          <CollectionOverviewMovie movies />
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieItems: selectMovieItems(state),
  isFetching: selectIsMovieFetching(state),
  token: state.user.token,
});

export default connect(mapStateToProps)(Movies);
