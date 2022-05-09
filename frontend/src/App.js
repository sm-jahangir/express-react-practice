import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import UpdateUser from "./components/UpdateUser/UpdateUser";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="adduser" element={<AddUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
