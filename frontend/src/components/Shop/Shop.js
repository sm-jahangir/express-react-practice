import React from "react";
import useProduct from "../../hooks/useProducts";
import Product from "../Product/Product";

function Shop() {
  const [products] = useProduct();
  return (
    <div className="container my-5">
      <div className="d-flex">
        <div className="ms-4">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
