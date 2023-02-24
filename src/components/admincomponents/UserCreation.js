import React from "react";
import { useState } from "react";
import "./UserCreation.css";

const UserCreation = () => {
  const [values, setValues] = useState({
    user_id: "",
    user_name: "",
    employ_id: "",
    designation: "",
    department: "",
    phone_number: "",
    email: "",
    password: "",
  });

  const URL = "https://create-users.onrender.com/api/addusers";
  const hanleSubmit = async (event) => {
    event.preventDefault();
    console.log("====finalobj====", values);
    const {
      user_name,
      user_id,
      designation,
      department,
      employ_id,
      phone_number,
      email,
    } = values;
    const password = `${user_name.substring(0, 3)}${phone_number.slice(-3)}`;
    const newUser = {
      user_id,
      user_name,
      employ_id,
      designation,
      department,
      email,
      password,
      phone_number,
    };
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("User registration successful");
      // replace with your logic to handle successful registration
    } catch (error) {
      console.error("There was an error registering the user:", error);
      // replace with your logic to handle registration errors
    }
  };
  const handleSelectChange = (e) => {
    const { value } = e.target;
    setValues({
      ...values,
      designation: value
    });
    console.log(values);
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };
  return (
    <div>
      <label>
        <h1>Create New User</h1>
      </label>

      <form onSubmit={hanleSubmit}>
        <div>
          <label>User ID</label>
          <input
            type="text"
            id="user_id"
            name="user_id"
            value={values.user_id}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={values.user_name}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <label>Employee ID</label>
          <input
            type="text"
            id="employ_id"
            name="employ_id"
            value={values.employ_id}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <label>Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={values.department}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>User Type</label>
          <select
            id="designation"
            name="designation"
            onChange={handleSelectChange}
            required
          >
            <option value="">Select User Type</option>
            <option value="admin">Admin</option>
            <option value="approver">Approver</option>
            <option value="checker">Checker</option>
            <option value="creator">Creator</option>
          </select>
        </div>
        <div>
          <label>Phone Number*</label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={values.phone_number}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          <label>Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={changeHandler}
            required
          />
        </div>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default UserCreation;
