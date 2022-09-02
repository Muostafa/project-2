import React from "react";
import styles from "./courseBlackBar.module.css";
import StarIcon from "@mui/icons-material/Star";

function CourseBlackBar({ course }) {
  return (
    <div className={styles.container}>
      <h3>{course.title}</h3>
      <span className={styles.reviews}>
      {course.bestseller && (
        <aside className={styles.bestseller}>Bestseller</aside>
      )}
        <h3 className={styles.ratingNumber}>{course.rating}</h3>
        <StarIcon fontSize="small" className={styles.star} />
        <h3 className={styles.reviewsNumber}>({course.people} ratings)</h3>
      </span>
    </div>
  );
}

export default CourseBlackBar;
