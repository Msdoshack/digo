"use client";
import React from "react";
import StarRatings from "react-star-ratings";

type PropsType = {
  rating: number[];
};
const ReactRating = ({ rating }: PropsType) => {
  const avgRating = Math.round(
    rating.reduce((prev, item) => prev + item, 0) / rating?.length
  );

  if (typeof window == undefined) return;
  return (
    <div>
      <StarRatings
        rating={avgRating}
        starRatedColor="orange"
        starHoverColor="orange"
        starDimension="14px"
        starSpacing="5px"
        // changeRating={(newRating) => console.log(newRating)}
        numberOfStars={5}
        name="rating"
      />
    </div>
  );
};

export default ReactRating;
