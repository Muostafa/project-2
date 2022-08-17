import React from "react";
import CourseCard from "./CourseCard";
import './courseCard.css';
function CoursesContainer() {
  const courses = [
    {
      id: 1,
      link: "https://www.udemy.com/course/pythonforbeginners/",
      title: "Learn Python: The Complete Python Programming Course",
      author: "Avinash Jain,The Codex",
      image: "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
      price: "679.99",
      rating: 4.4,
      people: "2,948",
      category: "python",
      bestseller: false,
    },
    {
      id: 2,
      link: "https://www.udemy.com/course/learning-python-for-data-analysis-and-visualization/",
      title: "Learning Python for Data Analysis and Visualization",
      author: "Jose Portilla",
      image: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
      price: "1,599.99",
      rating: 4.4,
      people: "18,019",
      category: "python",
      bestseller: true,
    },
    {
      id: 3,
      link: "https://www.udemy.com/course/python-for-beginners-learn-programming-from-scratch/",
      title: "Python for Beginners - Learn Programming from scratch",
      author: "Edwin Diaz, Coding Facutly Solutions",
      image: "https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg",
      price: "679.99",
      rating: 4.4,
      people: "1,781",
      category: "python",
      bestseller: false,
    },
    {
      id: 4,
      link: "https://www.udemy.com/course/learn-python/",
      title: "Learn Python: Python for Beginners",
      author: "Abrar Hussain",
      image: "https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg",
      price: "319.99",
      rating: 4.3,
      people: "2,773",
      category: "python",
      bestseller: false,
    },
    {
      id: 5,
      link: "https://www.udemy.com/course/python-beyond-the-basics-object-oriented-programming/",
      title: "Python Beyond the Basics - Object-Oriented Programming",
      author: "Infinite Skills",
      image: "https://img-c.udemycdn.com/course/480x270/449532_2aa9_7.jpg",
      price: "519.99",
      rating: 4.4,
      people: "2,930",
      category: "python",
      bestseller: false,
    },
    {
      id: 6,
      link: "https://www.udemy.com/course/selenium-webdriver-and-python/",
      title: "Python From Scratch & Selenium WebDriver QA Automation 2022",
      author: "Admas Kinfu",
      image: "https://img-c.udemycdn.com/course/480x270/482754_7146_6.jpg",
      price: "1,299.99",
      rating: 4.7,
      people: "1,813",
      category: "python",
      bestseller: true,
    },
    {
      id: 7,
      link: "https://www.udemy.com/course/teach-your-kids-to-code/",
      title: "Teach Your Kids to Code: Learn to Program Python at Any Age!",
      author: "Bryson Payne",
      image: "https://img-c.udemycdn.com/course/480x270/519554_da68_6.jpg",
      price: "319.99",
      rating: 4.5,
      people: "8,809",
      category: "python",
      bestseller: true,
    },
  ];

  const coursesList = courses.map((course) => (
    <div className="course-content" key={course.id}>
      <CourseCard course={course}></CourseCard>
    </div>
  ));
  return <div className="courses-container"><div className="courses-pictures">{coursesList}</div></div>;
}

export default CoursesContainer;
