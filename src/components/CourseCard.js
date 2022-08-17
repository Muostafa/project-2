import React from "react";
import stars from "../assets/stars.png";
import './courseCard.css';
function CourseCard({ course }) {
  return (
    <>
      <img
        className="border"
        alt="Course picture"
        width={240}
        height={135}
        src={course.image}
      />
      <article className="course-title">
        <h3>{course.title}</h3>
        <h6 className="instructors">{course.author}</h6>
      </article>
      <div className="course-rating">
        <h3 className="rating-number">{course.rating}</h3>
        <img
          className="stars"
          src={stars}
          alt="course reviews"
          height="12px"
          width="64px"
        />
        <h3 className="reviews-number">({course.people})</h3>
      </div>
      <h3>E£{course.price}</h3>
      {course.bestseller && <aside className="bestseller">Bestseller</aside>}
    </>
  );
}

export default CourseCard;
