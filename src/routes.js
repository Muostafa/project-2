import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";

export const routes = [
  {
    path: "*",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "course/:ID",
    element: <CoursePage />,
  },
];
