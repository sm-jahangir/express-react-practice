import React from "react";
import { useParams } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams();
  return (
    <div className="container">
      <h2>UpdateUser: {id}</h2>
    </div>
  );
}

export default UpdateUser;
