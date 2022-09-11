import React, { useRef, useEffect } from "react";
import stars from "../../assets/stars.png";
import styles from "../../styles/HomePage/courseCard.module.css";
import CoursePopup from "./CoursePopup";
import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };
  const cardRef = useRef();
  useEffect(() => {
    // console.log(cardRef.current);
  });
  return (
    <div onClick={handleClick}>
      <div className={styles.card}>
        <img
          className={styles.border}
          alt="Course"
          width={240}
          height={135}
          src={course.image}
        />
        <article className={styles.courseTitle}>
          <h3>{course.title}</h3>
          <h6 className={styles.instructors}>{course.author}</h6>
        </article>
        <div ref={cardRef} className={styles.courseRating}>
          <h3 className={styles.ratingNumber}>{course.rating}</h3>
          <img
            className={styles.stars}
            src={stars}
            alt="course reviews"
            height="12px"
            width="64px"
          />
          <h3 className={styles.reviewsNumber}>({course.people})</h3>
        </div>
        <h3 style={{ fontWeight: "800" }}>E£{course.price}</h3>
        {course.bestseller && (
          <aside className={styles.bestseller}>Bestseller</aside>
        )}
        <div className={styles.popup}>
          <CoursePopup course={course} parent={cardRef} />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
