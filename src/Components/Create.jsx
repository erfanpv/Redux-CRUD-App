import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUser } from "../Redux/UserReducer/UserReducer";
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

const Create = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEdit) {
      const user = users.find((user) => user.id == id);
      if (user) {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [id, isEdit, users]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEdit) {
      dispatch(updateUser({ id: id, name, email }));
    } else {
      dispatch(addUser({ id: nanoid(), name, email }));
    }
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4">
          {isEdit ? "Edit User" : "Add New User"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              className="form-control w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              {isEdit ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
