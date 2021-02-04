import React, { useEffect } from "react";
import { Jumbotron, Spinner } from "reactstrap";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";

import { getMovieDetails } from "../../store/Action/GetMovies";
import Overview from "./MovieDetailTab/Overview";
import Character from "./MovieDetailTab/Character";
import Review from "./MovieDetailTab/Review";
import { imageURL } from "../../constants/api";
// import iconImage from "../../Assets/images/icon.png";

function MovieDetails(props) {
  const params = useParams();

  useEffect(() => {
    props.getMovieDetails({ id: params.id });
  }, [props.getMovieDetails, params.id]);

  return (
    <div>
      {props.movieDetail ? (
        <>
          <Jumbotron
            style={{
              backgroundImage: `url('${imageURL}${props.movieDetail.backdrop_path}')`,
            }}
            className="jumbotron"
          >
            <div className="header-container">
              {/* <div style={{ display: "block", marginBottom: "5px" }}>
                <NavLink to="/">
                  <img src={iconImage} className="image-icon" />
                </NavLink>
              </div> */}

              <div className="header-text">
                <h1>{props.movieDetail.title}</h1>
                <h5>{props.movieDetail.tagline}</h5>
              </div>

              <div className="jumbotron-btn-container">
                <a href="#">
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
    movieDetail: state.MovieLists.movieDetails,
  };
};

export default connect(mapStateToProps, { getMovieDetails })(MovieDetails);
