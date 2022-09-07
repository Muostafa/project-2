import React, { forwardRef } from "react";
import styles from "../../styles/CoursePage/review.module.css";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import BarWithPercentage from "./BarWithPercentage";

const Review = forwardRef(({ course }, ref) => {
  let reviews = "";
  if (course.reviews)
    reviews = course.reviews.map((review, index) => (
      <p key={index}>{console.table(review)}</p>
    ));

  return (
    <div ref = {ref} className={styles.container}>
      <h3 style={{ marginBottom: "1rem" }}>Reviews</h3>
      <div>
      </div>
    </div>
  );
});

export default Review;
