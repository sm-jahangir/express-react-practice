import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    fetch(`http://localhost:4000/products?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);
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
          <div className="row row-cols-1 row-cols-md-5 g-4 mb-5">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
          <div className="pagination-button">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                onClick={() => setPage(number)}
                key={number}
                className={
                  page === number
                    ? "pagination-button selected"
                    : "pagination-button"
                }
              >
                {number}
              </button>
            ))}
            <select
              onChange={(event) => setSize(event.target.value)}
              className="pagination-button"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
            {size}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
