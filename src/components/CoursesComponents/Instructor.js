import React, { useState } from "react";
import instructor from "../../pages/instructors";
import styles from "../../styles/CoursePage/instructor.module.css";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function Instructor() {
  const [showMore, setShowMore] = useState("more");
  let about = "";
  if (instructor.about)
    about = instructor.about.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Instructor</h3>
      <article className={styles.info}>
        <h3>{instructor.name}</h3>
        <p>{instructor.description}</p>
      </article>
      <div className={styles.imgStats}>
        <div className={styles.photo}>
          <img
            width={"100%"}
            height={"100%"}
            alt="Course"
            src={instructor.photo}
          />
        </div>
        <div className={styles.stats}>
          <div>
            <StarIcon className={styles.icon} fontSize="small" />
            <p>{instructor.rating} Instructor Rating</p>
          </div>
          <div>
            <WorkspacePremiumIcon className={styles.icon} fontSize="small" />
            <p>{instructor.reviews} Reviews</p>
          </div>
          <div>
            <PeopleIcon className={styles.icon} fontSize="small" />
            <p>{instructor.students} Students</p>
          </div>
          <div>
            <PlayCircleIcon className={styles.icon} fontSize="small" />
            <p>{instructor.courses} Courses</p>
          </div>
        </div>
      </div>
      <div
        className={styles.about}
        style={{
          height: showMore==="more"?"8.8rem":"unset",
          WebkitMaskImage:showMore==="more"?
            "linear-gradient(#fff, #fff, rgba(255, 255, 255, 0))":"unset",
        }}
      >
        {about}
      </div>
      <span style={{width:"7rem", margin:"1rem 0"}}>
      <div
        className={styles.showMore}
        onClick={() =>
          setShowMore((showMore) => (showMore === "more" ? "less" : "more"))
        }
      >
        <h3>Show {showMore}</h3>
        <KeyboardArrowUpIcon style={{transform:showMore==="more"?"rotate(180deg)":"unset"}} fontSize="small" />
      </div></span>
    </div>
  );
}

export default Instructor;
