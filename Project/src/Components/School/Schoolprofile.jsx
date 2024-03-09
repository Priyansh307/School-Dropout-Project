import React, { useState, useEffect } from "react";
import axios from "axios";
import "../School/Schoolprofile.css";

const Schoolprofile = () => {
  const [school, setSchool] = useState(null);

  useEffect(() => {
    // Fetch school data from the server
    const fetchSchool = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/auth/school", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSchool(response.data.schools[0]); // Assuming there's only one school per user
      } catch (error) {
        console.error(error);
      }
    };

    fetchSchool();
  }, []);

  return (
    <div className="container_school">
      <div className="sub-container_school">
        <h2>School Profile</h2>
        {school && (
          <table className="table_school_com">
            <tbody>
              <tr>
                <td>School Name</td>
                <td>{school.username}</td>
              </tr>
              <tr>
                <td>School Email</td>
                <td>{school.email}</td>
              </tr>
              <tr>
                <td>School District</td>
                <td>{school.district}</td>
              </tr>
              <tr>
                <td>School State</td>
                <td>{school.state}</td>
              </tr>
              <tr>
                <td>School Category:</td>
                <td>{school.schoolCategory}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Schoolprofile;
