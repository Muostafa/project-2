import React from "react";
import CourseCard from "./CourseCard";
import styles from "../../styles/HomePage/courseCard.module.css";

function CoursesContainer({ courses, title, description }) {
  //max 3 lines for description
  const textStyle = {
    maxWidth: "79%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const coursesList = courses.map((course) => (
    <div className={styles.courseContent} key={course.id}>
      <CourseCard course={course}></CourseCard>
    </div>
  ));

  return (
    <div className={styles.coursesContainer}>
      <article className={`${styles.webpage} ${styles.pythonArticle}`}>
        <h3>{title}</h3>
        <p style={textStyle}>{description}</p>
      </article>
      <div className={styles.coursesPictures}>{coursesList}</div>
    </div>
  );
}

export default CoursesContainer;
