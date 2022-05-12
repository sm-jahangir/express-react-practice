import React from "react";

function Product({ product }) {
  const { name, img, price } = product;
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>Price: ${price}</p>
        </div>
        <div className="card-footer text-center bg-primary">
          <button className="border-0 bg-transparent text-white px-5">
            Add To Cart{" "}
            <span>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
