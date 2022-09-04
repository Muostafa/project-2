import React from "react";
import styles from "../../styles/CoursePage/whatYouWillLearn.module.css";
import CheckIcon from "@mui/icons-material/Check";

function WhatYouWillLearn({ course }) {
  let learnings = "";
  if (course.learnings)
    learnings = course.learnings.map((learning, index) => (
      <div key={index}>
        <CheckIcon className={styles.checkMark} fontSize="small" />
        <p>{learning}</p>
      </div>
    ));

  return (
    <div className={styles.container}>
      <h3>What you'll learn</h3>
      <div className={styles.learnings}>
        {learnings ||
          "We are currently working on adding this part to this course."}
      </div>
    </div>
  );
}

export default WhatYouWillLearn;
