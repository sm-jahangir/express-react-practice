import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="adduser" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
