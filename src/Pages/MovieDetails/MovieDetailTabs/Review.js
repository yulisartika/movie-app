import React, { useState } from "react";

function Review() {
  const [textReview, setTextReview] = useState("");
  const [reviews, setReviews] = useState([{ review: "" }]);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    setReviews([
      ...reviews,
      {
        review: textReview,
      },
    ]);
    setTextReview("");
  };

  return (
    <div className="detail-navigation-container">
      <form onSubmit={handleSubmitReview}>
        <textarea
          value={textReview}
          rows={3}
          cols={50}
          placeholder="Leave a review"
          style={{ resize: "none" }}
          onChange={({ target: { value } }) => setTextReview(value)}
        />
        <div className="btn-review">
          <button type="submit">Submit</button>
        </div>

        {reviews.map((item, index) => {
          return (
            <div key={index} className="reviews">
              {item.review}
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default Review;
