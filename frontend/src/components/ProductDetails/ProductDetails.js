import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:4000/product/${productId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="container">
      <h2>ProductDetails:{product.name}</h2>
      <h2>ProductDetails:{product.price}</h2>
    </div>
  );
}

export default ProductDetails;
