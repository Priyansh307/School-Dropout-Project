import React, { useState, useEffect } from 'react';
import "../School/Schoolprofile.css";
import axios from "axios";

const Studentprofile = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    caste: "",
    s_category: "",
    Distance: "",
    area: "",
    city: "",
    income: "",
    foccupation: "",
    mystate: "",
    studentstd: "",
    stdrollno: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // Fetch current user's data from the server
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/current-user");
        const currentUserData = response.data;

        // Update form data with current user's data
        setFormData({
          ...formData,
          ...currentUserData,
        });
      } catch(error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/auth/submit-form", formData);
      alert("Form submitted successfully");
  
      // Clear form data after successful submission
      setFormData({
        name: "",
        age: "",
        gender: "",
        caste: "",
        s_category: "",
        Distance: "",
        area: "",
        city: "",
        income: "",
        foccupation: "",
        mystate: "",
        studentstd: "",
        stdrollno: ""
      });
    } catch(error) {
      console.error(error);
      alert("Internal server error");
    }
  };
  return (
    <div className="container_school">
      <div className="form-container_school">
        <form
          className="form_school"
          action=""
          method="post"
          onSubmit={handleSubmit}
        >
          <h2>Student Profile Form</h2>
          <label htmlhtmlFor="student-name">Student Name:</label>
          <input
            type="text"
            id="student-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter student's name"
          />
          <label htmlFor="student-age">Student Age:</label>
          <input
            type="number"
            id="student-age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            placeholder="Enter student's age"
          />
          <label>Student Gender:</label>
          Male
          <input
            type="radio"
            id="male"
            name="gender"
            className="inl"
            value="male"
            onChange={handleChange}
            required
          />
          Female
          <input
            type="radio"
            id="female"
            name="gender"
            className="inl"
            value="female"
            onChange={handleChange}
            required
          />
          <label htmlFor="student-caste">Student Caste:</label>
          <select id="student-caste" name="caste" value={formData.caste} onChange={handleChange} required>
            <option value="" disabled selected>
              Select Caste
            </option>
            <option value="open">Open</option>
            <option value="obc">OBC/SEBC</option>
            <option value="sc">Scheduled Caste</option>
            <option value="st">Scheduled Tribe</option>
          </select>
          <label htmlFor="s_category">School Category</label>
          <select id="s_category" name="s_category" value={formData.s_category} onChange={handleChange} required>
            <option value="" disabled selected>
              Select School Category
            </option>
            <option value="Private">Private</option>
            <option value="Government">Government</option>
            <option value="SemiGovernment">SemiGovernment</option>
          </select>
          <label htmlFor="Distance">Distance Form School:</label>
          <input
            type="number"
            id="Distance"
            name="Distance"
            value={formData.Distance}
            onChange={handleChange}
            required
            placeholder="Enter Distance Form School"
          />
          <label htmlFor="student-area">Student Area:</label>
          <input
            type="text"
            id="student-area"
            name="area"
            required
            value={formData.area}
            onChange={handleChange}
            placeholder="Enter student's area"
          />
          <label htmlFor="student-city">Student City:</label>
          <input
            type="text"
            id="student-city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter student's city"
          />
          <label htmlFor="household-income">Household Income:</label>
          <input
            type="number"
            id="household-income"
            name="income"
            required
            value={formData.income}
            onChange={handleChange}
            placeholder="Enter household income"
          />
          <label htmlFor="father-occupation">Father's Occupation:</label>
          <input
            type="text"
            id="father-occupation"
            name="foccupation"
            required
            value={formData.foccupation}
            onChange={handleChange}
            placeholder="Enter father's occupation"
          />
          <label htmlFor="mystate">State</label>
          <select id="mystate" name="mystate" value={formData.mystate} onChange={handleChange} required>
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
          <label htmlFor="studentstd">Student Standard</label>
          <input
            type="text"
            id="studentstd"
            name="studentstd"
            required
            value={formData.studentstd}
            onChange={handleChange}
            placeholder="Enter Student Standard"
          />
          <label htmlFor="stdrollno">Roll No</label>
          <input
            type="number"
            id="stdrollno"
            name="stdrollno"
            required
            value={formData.stdrollno}
            onChange={handleChange}
            placeholder="Enter Roll no"
          />



          {/* i add this basic fields */}

          <label>Address:</label>
          <input
            type="text"
            required
            placeholder="Enter student's Address"
          />

          <label>Student Mobile No:</label>
          <input
            type="number"
            required
            placeholder="Enter student's Mobile No"
          />

          <label>Student Adhaar No:</label>
          <input
            type="number"
            required
            placeholder="Enter student's Adhaar No"
          />

          <label>Student Adhaar No:</label>
          <input
            type="number"
            required
            placeholder="Enter student's Adhaar No"
          />

          <label>Mother's Occupation:</label>
          <input
            type="text"
            required
            placeholder="Enter Mother's occupation"
          />

          <label>Email Id</label>
          <input
            type="text"
            required
            placeholder="Enter Email Id"
          />

          <label>Skill</label>
          <input
            type="text"
            required
            placeholder="Enter Skill"
          />

          <label>Birth Date</label>
          <input
            type="text"
            required
            placeholder="Enter Birth Date"
          />
{/*  my change complete */}




          <button className="btn_school"
            type="submit"
            name="submit"
            value="Submit">Submit</button>
          
        </form>
      </div>
    </div>
  );
};

export default Studentprofile;
