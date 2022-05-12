import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container my-5">
      <div className="d-flex">
        <div className="ms-4">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {products.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
