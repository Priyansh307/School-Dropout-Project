import React, { useState, useEffect } from "react";
import axios from "axios";
import './Govpro.css'


const Govpro = () => {
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
    <div className="container_goverment">
        <div className="sub-container_goverment">
            <h2 className="state_title">State Education Profile</h2>
            {school && ( // Check if school is not null before rendering
              <table className="table_goverment">
                  <tbody>
                      <tr>
                          <td className="t_title_goverment"> State Name </td>
                          <td>{school.username}</td>
                      </tr>
                      <tr>
                          <td className="t_title_goverment"> State Email </td>
                          {/* <td>{school.email}</td> */}
                          <td>gujaratgov123@gmail.com</td>
                      </tr>
                      <tr>
                          <td className="t_title_goverment"> State Id </td>
                          <td>12</td>
                      </tr>
                  </tbody>
              </table>
            )}
        </div>
        <form className='form_school' method="get" action="">
            <label htmlFor="year">Filter by Year:</label>
            <input type="text" id="year" name="year" value="selected_year" placeholder="Enter year"/>
            <button type="submit">Filter</button>
        </form>
    </div>
  )
}

export default Govpro
