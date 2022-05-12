import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { _id, name, img, price } = product;
  const navigate = useNavigate();
  const navigateToProductDetails = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="col">
      <div className="card">
        <img
          onClick={() => navigateToProductDetails(_id)}
          src={img}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5
            onClick={() => navigateToProductDetails(_id)}
            className="card-title"
          >
            {name}
          </h5>
          <p>Price: ${price}</p>
        </div>
        <div className="card-footer text-center bg-primary">
          {/* <button
            onClick={() => navigateToProductDetails(_id)}
            className="btn btn-primary"
          >
            Details
          </button> */}
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
