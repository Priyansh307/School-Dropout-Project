import React from 'react'
import './Districtpro.css'

const Districttab = () => {
  return (
    <>
     <div className="container_district">
       
       <div className="class-filter_district">
          
           <select id="class-select3">
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
       <div className="district_table_container">
               <h2 className='state_title_district'>District Table</h2>
           <table className='table_district'>
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
                   </tr>  
                   
               </tbody>
           </table>
       </div>
      
   </div>
    
    </>
  )
}

export default Districttab
