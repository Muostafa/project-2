import React from "react";
import styles from "../../styles/CoursePage/studentFeedback.module.css";
import LinearDeterminate from "./LinearDeterminate";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import BarWithPercentage from "./BarWithPercentage";

function StudentFeedback({ course }) {
  return (
    <div className={styles.container}>
      <h3 style={{ marginBottom: "1rem" }}>Student feedback</h3>
      <div className={styles.feedback}>
        <div className={styles.averageRating}>
          <h3 className={styles.ratingText}>4.4</h3>
          <Rating
            className={styles.rating}
            style={{ fontSize: "1.4rem" }}
            name="text-feedback"
            value={course.rating}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon
                className={styles.star}
                style={{ fontSize: "1.4rem" }}
              />
            }
          />
          <h3 className={styles.courseRating}>Course Rating</h3>
        </div>
        <div className={styles.bars}>
          <BarWithPercentage stars={5} percentage={43} />
          <BarWithPercentage stars={4} percentage={37} />
          <BarWithPercentage stars={3} percentage={15} />
          <BarWithPercentage stars={2} percentage={3} />
          <BarWithPercentage stars={1} percentage={2} />
        </div>
      </div>
    </div>
  );
}

export default StudentFeedback;
