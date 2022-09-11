import React,{useRef} from "react";
import styles from "../../styles/HomePage/coursePopup.module.css";
import CheckIcon from "@mui/icons-material/Check";
function CoursePopup({ course }) {
  const ref = useRef();
  const style = {
    top: "0rem",
    left: "17rem"
  };
  let learnings = "";
  if (course.learnings)
    learnings = course.learnings.slice(0, 3).map((learning, index) => (
      <div key={index}>
        <CheckIcon className={styles.checkMark} fontSize="small" />
        <p>{learning}</p>
      </div>
    ));
    console.log(ref.current?ref.current.offsetLeft:0)
  return (
    <div ref={ref} className={styles.container} style={style}>
        <h3>{course.title}</h3>
        {course.bestseller && (
          <aside className={styles.bestseller}>Bestseller</aside>
        )}
        <h3>{course.hours}</h3>
        <p>
          {course.description ||
            "This is a default description for the course. Please make sure to add a description to this course to the data base."}
        </p>
        <div className={styles.learnings}>
          {learnings ||
            "We are currently working on adding this part to this course."}
        </div>
    </div>
  );
}

export default CoursePopup;
