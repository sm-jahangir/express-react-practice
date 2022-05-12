import React from "react";
import { useForm } from "react-hook-form";

function AddProduct() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = "http://localhost:4000/product";

    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log(data);
  };
  return (
    <div className="container">
      <h1>AddProduct</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter Product Name"
          className="form-control my-2"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          placeholder="Enter Image file Path"
          className="form-control my-2"
          {...register("img")}
        />
        <input
          placeholder="Enter Price"
          className="form-control my-2"
          type="number"
          {...register("price")}
        />
        <input
          placeholder="Enter Product Stock"
          className="form-control my-2"
          type="number"
          {...register("stock")}
        />
        <input
          placeholder="Enter Product quantity"
          className="form-control my-2"
          type="number"
          {...register("quantity")}
        />
        <input type="submit" value="Add To Product" />
      </form>
    </div>
  );
}

export default AddProduct;
