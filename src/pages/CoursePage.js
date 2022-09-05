import React, { useState, useRef, createContext } from "react";
import { useParams } from "react-router-dom";
import CourseBlackBar from "../components/CoursesComponents/CourseBlackBar";
import CourseContent from "../components/CoursesComponents/CourseContent";
import Instructor from "../components/CoursesComponents/Instructor";
import Requirements from "../components/CoursesComponents/Requirements";
import Sidebar from "../components/CoursesComponents/Sidebar";
import TopContainer from "../components/CoursesComponents/TopContainer";
import WhatYouWillLearn from "../components/CoursesComponents/WhatYouWillLearn";
import Description from "../components/CoursesComponents/Description";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import useOnScreen from "../hooks/useOnScreen";
import instructors from "../pages/instructors";

//to pass the refs to navigator
export const refsContext = createContext();
function CoursePage({ courses }) {
  //extract course id from the url
  const params = useParams();
  const courseID = params.ID;

  //initial navigation value
  const [value, setValue] = useState("overview");

  //get course id
  let course = 0;
  courses.forEach(function (x) {
    if (x.id == courseID) course = x;
  });

  //get instructor
  let instructor = 0;
  instructors.forEach(function (x) {
    if (x.id == course.instructor) instructor = x;
  });

  const topContainerRef = useRef();
  const contentRef = useRef();
  const instructorRef = useRef();
  const footerRef = useRef();
  const whatYouLearnRef = useRef();
  const footerOnScreen = useOnScreen(footerRef, "0px");
  const topContainerOnScreen = useOnScreen(topContainerRef, "-60px");

  return (
    <refsContext.Provider value={{ whatYouLearnRef, contentRef, instructorRef ,value, setValue}}>
      <div className="home-page">
        <NavBar />
        <TopContainer
          ref={topContainerRef}
          course={course}
          topContainerOnScreen={topContainerOnScreen}
        />
        <div className="course-page-main">
          <div className="course-page-contents">
            <Sidebar
              course={course}
              footerOnScreen={footerOnScreen}
              topContainerOnScreen={topContainerOnScreen}
            />
            <WhatYouWillLearn ref={whatYouLearnRef} course={course} />
            <CourseContent course={course} ref={contentRef} />
            <Requirements course={course} />
            <Description course = {course}/>
            <Instructor ref={instructorRef} instructor={instructor}/>
          </div>
        </div>
        <Footer ref={footerRef} />
        <CourseBlackBar
          course={course}
          topContainerOnScreen={topContainerOnScreen}
        />
      </div>
    </refsContext.Provider>
  );
}

export default CoursePage;
