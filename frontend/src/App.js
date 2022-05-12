import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Product from "./components/Product/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
