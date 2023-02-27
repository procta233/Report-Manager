import React from "react";
import { useState } from "react";
import "../CSS/UserCreation.css"

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
    <div className="usercreation-div">
      <label >
        <h1 className="usercreation-h1">Creacte New User</h1>
      </label>
      
      <form className="usercreation-form" onSubmit={hanleSubmit}>
        <div className="usercreation-div2">
          <label className="usercreation-label-2">User ID</label>
          <input className="usercreation-input"
            type="text"
            id="user_id"
            name="user_id"
            value={values.user_id}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="usercreation-div2">
          <label className="usercreation-label-2">Username</label>
          <input className="usercreation-input"
            type="text"
            id="user_name"
            name="user_name"
            value={values.user_name}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="usercreation-div2">
          <label className="usercreation-label-2">Employee ID</label>
          <input
          className="usercreation-input"
            type="text"
            id="employ_id"
            name="employ_id"
            value={values.employ_id}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="usercreation-div2">
          <label className="usercreation-label-2">Department</label>
          <input
          className="usercreation-input"
            type="text"
            id="department"
            name="department"
            value={values.department}
            onChange={changeHandler}
          />
        </div>
        <div className="usercreation-div2">
          <label className="usercreation-label-2">User Type</label>
          <select
          className="usercreation-select"
            id="designation"
            name="designation"
            onChange={handleSelectChange}
            required
          >
            <option className="usercreation-label-2" value="">Select User Type</option>
            <option className="usercreation-input" value="admin">Admin</option>
            <option className="usercreation-input" value="approver">Approver</option>
            <option className="usercreation-input" value="checker">Checker</option>
            <option className="usercreation-input" value="creator">Creator</option>
          </select>
        </div>
        <div className="usercreation-div2">
          <label className="usercreation-label-2">Phone Number*</label>
          <input 
          className="usercreation-input"
            type="tel"
            id="phone_number"
            name="phone_number"
            value={values.phone_number}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="usercreation-div2">
          <label className="usercreation-label-2">Email*</label>
          <input
          className="usercreation-input"
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={changeHandler}
            required
          />
        </div>
        <button className="usercreation-button" type="submit">Enter</button>
      </form>
    </div>
  );
};

export default UserCreation;
