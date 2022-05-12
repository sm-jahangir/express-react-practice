import React, { useEffect, useState } from "react";
import useProduct from "../../hooks/useProducts";
import Product from "../Product/Product";
import "./Shop.css";

function Shop() {
  const [products] = useProduct();
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    fetch("http://localhost:4000/productCount")
      .then((response) => response.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);
  return (
    <div className="container my-5">
      <div className="d-flex">
        <div className="ms-4 mb-5">
          <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
          <div>
            {[...Array(pageCount).keys()].map((number) => (
              <button className="pagination-button">{number + 1}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
