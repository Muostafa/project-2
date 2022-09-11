import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import { useState, createContext, useEffect } from "react";
import Router from "./Router";
export const dataContext = createContext();
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.npoint.io/1f3c0239d8c5b56edfa4`)
      .then((res) => res.json())
      .then((result) => {
        setData(result)
        console.log(result)
        setIsLoading(false)
      })
      .catch(console.log);
  }, []);

  return (
    <dataContext.Provider value={{data, isLoading}}>
      <div className="App">
        <div style={{ minHeight: "100vh" }}>
          <Router/>
          {/* <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/course/:ID" element={<CoursePage />}></Route>
          </Routes> */}
        </div>
      </div>
    </dataContext.Provider>
  );
}
export default App;
