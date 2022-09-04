import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CoursesContainer from "../components/CoursesContainer/CoursesContainer";
import courses from "./courses";
import Categories from "../components/Categories/Categories";
import BillBoard from "../components/BillBoard/BillBoard";
import HeadLine from "../components/HeadLine/HeadLine";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  let searchText = searchParams.get("search") || "";
  const coursesFiltered = courses.filter(course => (course.title.toLowerCase()).includes(searchText.toLowerCase()));

  const title = "Expand your career opportunities with Python";
  const description =
    "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.";
    return (
    <div className="home-page">
      <NavBar/>
      <main>
        <BillBoard />
        <HeadLine />
        <CoursesContainer
          courses={coursesFiltered}
          title={title}
          description={description}
        />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}
export default HomePage;
