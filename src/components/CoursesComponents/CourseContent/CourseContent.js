import React from "react";
import ContentAccordion from "./ContentAccordion";
import styles from "./courseContent.module.css";
function CourseContent({ course }) {
  let contents = "";
  if (course.content)
    contents = course.content.map((details, index) => (
      <ContentAccordion key={index} title={details[0]} info={details[1]}/>
    ));
  return (
    <div className={styles.main}>
      <h3>Course content</h3>
      <div className={styles.accordions}>{contents?contents:<h6>We are currently working on adding this part to this course.</h6>}</div>
    </div>
  );
}

export default CourseContent;
