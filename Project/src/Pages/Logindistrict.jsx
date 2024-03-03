import React from "react";
import "./CSS/Logindistrict.css";
import govtg from "../Components/Assets/govtg.png";
import { useState } from "react";
import Axios from "axios";
import { useEffect } from 'react';
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";



const Logindistrict = () => {

  // const navigate1 = useNavigate()
  // axios.defaults.withCredentials = true;
  // useEffect(() =>{
  //   axios.get('http://localhost:3000/auth/verify')
  //   .then(res=>{
  //     if(res.data.status)
  //     {
  //       if(response.data.district)
  //       {
  //         navigate1('/logindishome')
  //       }
  //     }
      
  //   })

  // },[])
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  // sign up logic
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/dissignup", {
      username,
      email,
      password,
      state,
      district,
    })
      .then((response) => {
        if (response.data.status === true) {
          if(response.data.isthisdistrict)
          {
            navigate("/logindishome");
          }
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

// login logic
  const handleSubmitlogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/login", {
      username, 
      password,
    })
      .then((response) => {
        if (response.data.status === true) {
          navigate("/logindishome");
        }
        // console.log("login nahi ho raha");
        
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handleRegister = () => {
    const loginForm = document.getElementById("login");
    const registerForm = document.getElementById("register");
    const button = document.getElementById("btn");

    loginForm.style.left = "-400px";
    registerForm.style.left = "50px";
    button.style.left = "110px";
  };

  const handleLogin = () => {
    const loginForm = document.getElementById("login");
    const registerForm = document.getElementById("register");
    const button = document.getElementById("btn");

    loginForm.style.left = "50px";
    registerForm.style.left = "450px";
    button.style.left = "0";
  };

  return (
    <>
      <div className="log_nav">
        <header></header>
        <nav>
          <div className="logo">
            <img
              className="govtg"
              src={govtg}
              alt="Government of Gujarat Logo"
            />
            <h1>Government Of India</h1>
          </div>
          <ul>
            <li>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Home
            </Link>


            </li>
          </ul>
        </nav>
      </div>

      <div className="hero">
        <div className="form-box">
          <div className="container">
            <h2 className="box_text">District</h2>
          </div>

          <div className="button-box">
            <div id="btn"></div>
            <button type="button" className="toggle-btn" onClick={handleLogin}>
              Log In
            </button>
            <button
              type="button"
              className="toggle-btn"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>

          <form id="login" className="input-group" onSubmit={handleSubmitlogin}>
            <input
              text="text"
              className="input-field"
              placeholder="District ID"
              onChange={(e) => setUsername(e.target.value)}

              required
            />
            <input
              text="text"
              className="input-field"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="submit-btn">
              Log in
            </button>
          </form>
{/* Sign up form */}
          <form id="register" className="input-group" onSubmit={handleSubmit}>
            <input
              text="text"
              className="input-field"
              placeholder="District Id"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              text="email"
              className="input-field"
              placeholder="Email Id"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              text="text"
              className="input-field"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <select id="student-caste" className="input-field" onChange={(e) => setState(e.target.value)} required>
              <option value="" disabled selected>
                Select State
              </option>

              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Delhi">Delhi</option>
            </select>

            <input
              type="text"
              className="input-field"
              placeholder="Enter District"
              onChange={(e) => setDistrict(e.target.value)}
              required
            />

            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Logindistrict;