import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
    document.documentElement.classList.add("dark");
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);
  const toggleDarkMode = () => {
    const newMOde = !darkMode;
    setDarkMode(newMOde);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div
      className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </div>
  );
}

export default App;
