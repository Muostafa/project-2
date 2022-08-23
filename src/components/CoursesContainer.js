import React from "react";
import CourseCard from "./CourseCard";
import styles from "./courseCard.module.css";

function CoursesContainer(props) {
  const coursesList = props.courses.map((course) => (
    <div className={styles.courseContent} key={course.id}>
      <CourseCard course={course}></CourseCard>
    </div>
  ));

  return (
    <div className={styles.coursesContainer}>
      <article className={`${styles.webpage} ${styles.pythonArticle}`}>
        <h3>{props.title}</h3>
        <p style={{ maxWidth: "74%" }}>{props.description}</p>
      </article>
      <div className={styles.coursesPictures}>{coursesList}</div>
    </div>
  );
}

export default CoursesContainer;
