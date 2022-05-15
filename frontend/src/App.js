import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

      <h1>
        Module 68{" "}
        <a href="https://github.com/sm-jahangir/genius-car-module-68-frontend">
          Go to Client Site
        </a>
      </h1>
    </div>
  );
}

export default App;
