import React, { useState, useEffect } from "react";
import axios from "axios";
import '../District/Districtpro.css'

const Districtpro = () => {
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
    <div className="container_district">
    <div className="sub-container_district">
        <h2 className="state_title_district">District Info</h2>
        <table className='table_goverment'>
            <tr>
                <td className="t_title_distict"> District Name </td>
                <td>{school.username}</td>
            </tr>
            <tr>
                <td className="t_title_district"> District email </td>
                <td>{school.email}</td>
            </tr>
            <tr>
                <td className="t_title_district"> District State </td>
                <td>{school.state}</td>
            </tr>
            
            
        </table>
    </div>
            <form className='form_district' method="get">
                <label htmlFor="year">Filter by Year:</label>
                <input type="text" id="year" name="year"  placeholder="Enter year" />
                <button type="submit">Filter</button>
                {/* new  */}
            </form>
</div>
  )
}

export default Districtpro
