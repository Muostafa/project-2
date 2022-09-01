import React from "react";
import ContentAccordion from "./ContentAccordion";
import styles from "./courseContent.module.css";
function CourseContent() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.main}>
      <h3>Course content</h3>
      <div className={styles.accordions}>
        <ContentAccordion />
        <ContentAccordion />
        <ContentAccordion />
      </div>
    </div>
  );
}

export default CourseContent;
