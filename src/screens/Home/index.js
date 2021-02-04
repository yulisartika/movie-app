import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
import { Jumbotron, Row, Col } from "reactstrap";

import { getMovies } from "../../Store/Action/GetMovies";
import MovieCard from "../../components/MovieCard";
import imageURL from "../../constants/api";

function Home(props) {
  // const history = useHistory();

  useEffect(() => {
    props.getMovies();
  }, []);

  console.log(props);

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">HOME</h1>
      </Jumbotron>

      <Row>
        {props.movies === 0
          ? null
          : props.movies.map((movie) => (
              <Col
                xs="6"
                sm="3"
                md="2"
                className="p-6 column-one"
                key={movie.id}
              >
                <Link to={`/movie-detail/${movie.id}`}>
                  <MovieCard
                    image={`${imageURL}${movie.poster_path}`}
                    title={movie.title}
                    releaseDate={movie.vote_average}
                  />
                </Link>
              </Col>
            ))}
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.MovieLists.movies,
  };
};

export default connect(mapStateToProps, { getMovies })(Home);
