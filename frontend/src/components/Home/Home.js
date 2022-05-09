import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are You sure you want to delete?");
    if (proceed) {
      console.log("user id", id);
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log("You Are Cancel it");
    }
  };
  return (
    <div className="container">
      <h2>Available Users: {users.length}</h2>
      <ul>
        {users.map((user) => (
          <li className="my-2" key={user._id}>
            {user.name} :: {user.email}
            <Link className="btn btn-primary btn-sm" to={`/update/${user._id}`}>
              Edit
            </Link>
            <span
              onClick={() => handleUserDelete(user._id)}
              className="btn ms-2 btn-primary btn-sm"
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
