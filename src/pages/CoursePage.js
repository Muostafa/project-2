import React from "react";
import { useParams } from "react-router-dom";
import CourseBlackBar from "../components/CoursesComponents/CourseBlackBar/CourseBlackBar";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

function CoursePage({ courses }) {
  //extract course id from the url
  const params = useParams();
  const courseID = params.ID;

  let course = 0;
  courses.forEach(function (x) {
    if (x.id == courseID) course = x;
  });
  return (
    <div className="home-page">
      <NavBar />
      <Footer />
      <CourseBlackBar course={course} />
    </div>
  );
}

export default CoursePage;
