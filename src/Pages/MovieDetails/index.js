import React, { useEffect } from "react";
import { Jumbotron, Spinner } from "reactstrap";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";

import { getMovieDetails } from "../../Redux/MovieDetail/movieDetail-action";
import Overview from "./MovieDetailTabs/Overview";
import Character from "./MovieDetailTabs/Character";
import Review from "./MovieDetailTabs/Review";

function MovieDetails(props) {
  const params = useParams();

  useEffect(() => {
    props.getMovieDetails({ id: params.id });
  }, [props.getMovieDetails, params.id]);

  // console.log(props);

  return (
    <div>
      {props.movieDetail ? (
        <>
          <Jumbotron
            style={{
              backgroundImage: `url('${props.movieDetail.image}')`,
            }}
            className="jumbotron"
          >
            <div className="header-container">
              <div className="jumbotron-btn-container">
                <a
                  href={props.movieDetail.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="jumbotron-btn-play">Watch Trailer</button>
                </a>
                <a href="#">
                  <button className="jumbotron-btn-watchlist">
                    Add to Watchlist
                  </button>
                </a>
              </div>
            </div>
          </Jumbotron>

          <div className="detail-navigation-container">
            <NavLink
              to={`/movie-detail/${props.match.params.id}`}
              className="navLink"
              activeClassName="navLinkActive"
              exact
            >
              Overview
            </NavLink>
            <NavLink
              to={`/movie-detail/${props.match.params.id}/character`}
              className="navLink"
              activeClassName="navLinkActive"
              exact
            >
              Character
            </NavLink>
            <NavLink
              to={`/movie-detail/${props.match.params.id}/review`}
              className="navLink"
              activeClassName="navLinkActive"
              exact
            >
              Review
            </NavLink>
          </div>

          <Switch>
            <Route path={`/movie-detail/:id/review`} exact>
              <Review />
            </Route>
            <Route path={`/movie-detail/:id/character`} exact>
              <Character movieDetail={props.movieDetail} />
            </Route>
            <Route path={`/movie-detail/:id`} exact>
              <Overview movieDetail={props.movieDetail} />
            </Route>
          </Switch>
        </>
      ) : (
        <div>
          <Spinner
            style={{ width: "3rem", height: "3rem" }}
            color="danger"
            className="centered"
          />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetailReducer.movieDetails,
  };
};

export default connect(mapStateToProps, { getMovieDetails })(MovieDetails);
