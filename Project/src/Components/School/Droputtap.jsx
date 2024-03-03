import React from 'react'
import '../School/Schoolprofile.css'


const Droputtap = () => {
  return (
    <>
    
    <div className="container_school">
       
    <div className="class-filter_school">
       
        <select id="class-select" onchange="filterByClass()">
            <option value="all">All Classes</option>
            <option value="name">Name</option>
            <option value="age">age</option>
            <option value="class">class</option>
            <option value="gender">gender</option>
            <option value="area">area</option>
            <option value="city">city</option>
            <option value="income">income</option>
            <option value="reason">reason for leaving</option>
          
        </select>

        
    </div>
    <div className="sub-container_school_droptab">
        <table className="table_school_com table_school_com-bordered table_school_com-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Caste</th>
                <th>School Category</th>
                <th>Distance</th>
                <th>Area</th>
                <th>City</th>
                <th>Income</th>
                <th>Reason</th>
                <th>Father Occupation</th>
                <th>School Name</th>
                <th>State</th>
                <th>Student Roll No</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
             
                <tr>
                  <td>Mahesh</td>
                  <td>18</td>
                  <td>Male</td>
                  <td>open</td>
                  <td>Private</td>
                  <td>5</td>
                  <td>Rajkot</td>
                  <td>Rajkot</td>
                  <td>50000</td>
                  <td>health</td>
                  <td>Farmer</td>
                  <td>Divine</td>
                  <td>Gujarat</td>
                  <td>25</td>
                  <td>2022</td>
                  <td>Delete</td>
                </tr>       
            </tbody>
          </table>    
    </div>
</div>
    </>
  )
}

export default Droputtap
