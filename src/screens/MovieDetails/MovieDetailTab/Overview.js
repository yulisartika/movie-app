import React from "react";
import ReactStars from "react-rating-stars-component";

import { imageURL } from "../../constants/api";

function Overview({ movieDetail }) {
  const {
    overview,
    title,
    runtime,
    genres,
    production_countries,
    status,
    release_date,
    budget,
    poster_path,
    vote_average,
    vote_count,
  } = movieDetail;

  const releaseYear = release_date.split("-")[0];
  console.log(releaseYear);

  return (
    <div className="detail-navigation-container">
      <div className="overview-container">
        <div className="detail-poster">
          <img
            src={`${imageURL}${poster_path}`}
            alt="movie poster"
            className="overview-movie-poster"
          />
        </div>
        <div className="detail-content">
          {movieDetail ? (
            <div>
              <div className="ratings stars-rating">
                <h3 className="title stars-rating">
                  <b>{title}</b>
                </h3>
              </div>

              <div className="ratings">
                <div className="stars-rating">
                  <ReactStars
                    size={18}
                    value={vote_average / 2}
                    edit={false}
                    isHalf={true}
                    // activeColor="#13d654"
                  />
                </div>
                <div className="review-numbers">{vote_count} reviews</div>
              </div>

              <div className="synopsis">
                <p>{overview}</p>
              </div>

              <div className="movie-info-container synopsis">
                <h4 className="movie-info-title">Movie Info</h4>
                <ul>
                  <li>Run Time: {runtime} minutes</li>
                  <li>
                    Genres:{" "}
                    {genres.map((item) => (
                      <span>{item.name} </span>
                    ))}
                  </li>
                  <li>
                    Country:{" "}
                    {production_countries.map((item) => (
                      <span>{item.name} </span>
                    ))}
                  </li>
                  <li>Status: {status}</li>
                  <li>Release Date: {release_date}</li>
                  <li>Budget: {budget}</li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Overview;
