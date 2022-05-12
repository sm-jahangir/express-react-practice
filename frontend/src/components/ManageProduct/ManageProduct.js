import React from "react";
import useProduct from "../../hooks/useProducts";

function ManageProduct() {
  const [products, setProducts] = useProduct();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `http://localhost:4000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success:", data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container">
      <h2>ManageServices</h2>
      {products.map((product) => (
        <div key={product._id}>
          <h4>
            {product.name}{" "}
            <button
              onClick={() => {
                handleDelete(product._id);
              }}
            >
              X
            </button>
          </h4>
        </div>
      ))}
    </div>
  );
}

export default ManageProduct;