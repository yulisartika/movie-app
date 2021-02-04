import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getMovies } from "../../store/Action/GetMovies";
import { imageURL } from "../../constants/api";

function Character(props) {
  useEffect(() => {
    props.getMovies();
  }, []);

  return (
    <div className="movie-list">
      {props.movies.length !== 0
        ? props.movies.map((movie, index) => (
            <div key={index}>
              <img src={`${imageURL}${movie.poster_path}`} alt={movie.name} />
              <h4>Dummy Data</h4>
            </div>
          ))
        : ""}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.MovieLists.movies,
  };
};

export default connect(mapStateToProps, { getMovies })(Character);
