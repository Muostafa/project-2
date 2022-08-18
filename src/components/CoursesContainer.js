import React from "react";
import CourseCard from "./CourseCard";
import "./courseCard.css";
function CoursesContainer(props) {
  const coursesList = props.courses.map((course) => (
    <div className="course-content" key={course.id}>
      <CourseCard course={course}></CourseCard>
    </div>
  ));

  return (
    <div className="courses-container">
      <article className="webpage python-article">
        <h3>{props.title}</h3>
        <p style={{ maxWidth: "74%" }}>{props.description}</p>
      </article>
      <div className="courses-pictures">{coursesList}</div>
    </div>
  );
}

export default CoursesContainer;
