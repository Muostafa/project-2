import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import CourseBlackBar from "../components/CoursesComponents/CourseBlackBar/CourseBlackBar";
import CourseContent from "../components/CoursesComponents/CourseContent/CourseContent";
import Instructor from "../components/CoursesComponents/Instructor";
import Requirements from "../components/CoursesComponents/Requirements";
import Sidebar from "../components/CoursesComponents/Sidebar/Sidebar";
import TopContainer from "../components/CoursesComponents/TopContainer/TopContainer";
import WhatYouWillLearn from "../components/CoursesComponents/WhatYouWillLearn/WhatYouWillLearn";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import useOnScreen from "../hooks/useOnScreen";

function CoursePage({ courses }) {
  //extract course id from the url
  const params = useParams();
  const courseID = params.ID;

  let course = 0;
  courses.forEach(function (x) {
    if (x.id == courseID) course = x;
  });

  const topContainerRef = useRef();
  const footerRef = useRef();
  const footerOnScreen = useOnScreen(footerRef, "0px");
  const topContainerOnScreen = useOnScreen(topContainerRef, "-60px");

  return (
    <div className="home-page">
      <NavBar/>
      <TopContainer ref={topContainerRef} course={course} />
      <div className="course-page-main">
        <div className="course-page-contents">
          <Sidebar course={course} footerOnScreen={footerOnScreen} topContainerOnScreen={topContainerOnScreen}/>
          <WhatYouWillLearn course={course} />
          <CourseContent course={course} />
          <Requirements course={course}/>
          <Instructor/>
        </div>
      </div>
      <Footer ref={footerRef}/>
      <CourseBlackBar course={course} topContainerOnScreen={topContainerOnScreen}/>
    </div>
  );
}

export default CoursePage;
