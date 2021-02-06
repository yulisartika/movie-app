import React from "react";
import reactDom from "react-dom";
// import ReactStars from "react-rating-stars-component";

function Overview({ movieDetail }) {
  const {
    title,
    genre,
    image,
    synopsis,
    totalRating,
    totalReview,
  } = movieDetail;

  return (
    <div className="detail-navigation-container">
      <div className="overview-container">
        <div className="detail-poster">
          <a href="#">
            <img
              src={image}
              alt="movie poster"
              className="overview-movie-poster"
            />
          </a>
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
                {/* <div className="stars-rating">
                  <ReactStars
                    size={18}
                    value={totalRating}
                    edit={false}
                    isHalf={true}
                    // activeColor="#13d654"
                  />
                </div> */}
                <div className="review-numbers">{totalReview} reviews</div>
              </div>

              <div className="synopsis">
                <p>{synopsis}</p>
              </div>

              <div className="movie-info-container synopsis">
                <h4 className="movie-info-title">Movie Info</h4>
                <ul>
                  <li>Genres: {genre} </li>
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
