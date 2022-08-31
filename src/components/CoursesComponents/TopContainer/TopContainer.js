import React from "react";
import styles from "./topContainer.module.css";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Breadcrumbs from "@mui/material/Breadcrumbs";

function TopContainer({ course }) {
  const breadcrumbs = [
    <h3 key="1" className={styles.breadCrumb}>
      Development
    </h3>,
    <h3 key="3" className={styles.breadCrumb}>
      {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
    </h3>,
  ];
  
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <Breadcrumbs
            className={styles.breadCrumb}
            separator="›"
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <span className={styles.reviews}>
            {course.bestseller && (
              <aside className={styles.bestseller}>Bestseller</aside>
            )}
            <h3 className={styles.ratingNumber}>{course.rating}</h3>
            <Rating
              className={styles.rating}
              style={{ fontSize: "medium" }}
              name="text-feedback"
              value={course.rating}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon
                  className={styles.star}
                  style={{ fontSize: "medium" }}
                />
              }
            />
            <h3 className={styles.reviewsNumber}>({course.people} ratings)</h3>
          </span>
          <span>
            <h6>Created by </h6>
            <h5>{course.author}</h5>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
