import React from "react";
import CoursesContainer from "../components/CoursesContainer";
import courses from "./courses";

function HomePage() {
  const title = "Expand your career opportunities with Python";
  const description =
    "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.";
  return (
    <div>
      <CoursesContainer
        courses={courses}
        title={title}
        description={description}
      />    
    </div>
  );
}
export default HomePage;
