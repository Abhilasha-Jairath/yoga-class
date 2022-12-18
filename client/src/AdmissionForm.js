import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./AdmissionForm.css";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    preference: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault(); // to prevent the loading of form page

    const { name, email, phone, gender, dob, preference } = user;

    // fetching the registration page data by defining their function
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        gender,
        dob,
        preference,
      }),
    });

    const data = await res.json();

    // I need to change the data to res
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      if (!alert("Registration Successfull"))
        document.location = "http://localhost:3000/payment";
      // window.alert(" Registration Successfull");
      console.log("Successfull Registration");

      navigate.push("/login"); // after successful registration we render the login page
    }
  };
  return (
    <>
      <div className="signup">
        <form className="signup_container" method="POST">
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            YOGA REGISTRATION
          </h1>

          <label className="signup_label" for="name">
            Name
          </label>
          <input
            className="signup_input"
            type="text"
            name="name"
            autoComplete="off"
            value={user.name}
            onChange={handleInputs}
            placeholder="Your name"
          ></input>

          <label className="signup_label" for="email">
            Email
          </label>
          <input
            className="signup_input"
            type="email"
            name="email"
            autoComplete="off"
            value={user.email}
            onChange={handleInputs}
            placeholder="Your email"
          ></input>

          <label className="signup_label" for="phoneNumber">
            Phone Number
          </label>
          <input
            className="signup_input"
            type="number"
            name="phone"
            autoComplete="off"
            value={user.phone}
            onChange={handleInputs}
            placeholder="Your phone "
          ></input>

          <label className="signup_label" for="dateOfBirth">
            Date Of Birth
          </label>
          <input
            className="signup_input"
            type="date"
            name="dob"
            autoComplete="off"
            value={user.dob}
            onChange={handleInputs}
            placeholder="Your Date of Birth"
          ></input>

          <label className="signup_label" for="Gender">
            Gender
          </label>
          {}
          <br></br>
          <div>
            <input
              type="radio"
              value="Male"
              name="gender"
              onChange={handleInputs}
            />{" "}
            Male
            <input
              type="radio"
              value="Female"
              name="gender"
              onChange={handleInputs}
            />{" "}
            Female
            <input
              type="radio"
              value="Other"
              name="gender"
              onChange={handleInputs}
            />{" "}
            Other
          </div>

          {}
          {}
          <br></br>
          <label className="signup_label" for="Schedule">
            Schedule
          </label>
          <br></br>

          <div>
            <input
              type="radio"
              value="6:00-7:00 AM"
              name="preference"
              onChange={handleInputs}
            />{" "}
            6:00-7:00 AM
            <br></br>
            <input
              type="radio"
              value="7:00-8:00 AM"
              name="preference"
              onChange={handleInputs}
            />{" "}
            7:00-8:00 AM
            <br></br>
            <input
              type="radio"
              value="8:00-9:00 AM"
              name="preference"
              onChange={handleInputs}
            />{" "}
            8:00-9:00 AM
            <br></br>
            <input
              type="radio"
              value="5:00-6:00 PM"
              name="preference"
              onChange={handleInputs}
            />{" "}
            5:00-6:00 PM
          </div>

          <input
            type="submit"
            name="signup"
            id="signup"
            value="Register"
            onClick={PostData}
            className="signup_btn"
          />
        </form>
      </div>
    </>
  );
};

export default Signup;
