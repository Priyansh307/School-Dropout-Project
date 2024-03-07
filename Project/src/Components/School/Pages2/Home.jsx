import React from 'react'
import './CSS/std_home.css'

const Home = () => {
 
  return (
    <>
      <div className='per_info_table'>
      <h2>Personal Info</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Yogin</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>18</td>
          </tr>
          <tr>
            <td>Standard</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Cast</td>
            <td>Open</td>
          </tr>
          <tr>
            <td>School Category</td>
            <td>Private</td>
          </tr>
          <tr>
            <td>Distance</td>
            <td>7 km</td>
          </tr>
          <tr>
            <td>Roll No</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Father Occupation</td>
            <td>Farmer</td>
          </tr>
          <tr>
            <td>Income</td>
            <td>50000</td>
          </tr>
        </tbody>
      </table>


    </div>

      <div>
        <h3>Upload Image</h3>
        <button>Upload</button>
        <button>Save</button>
      </div>

      <div>
      <h2>Baisc Info</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Birth Date</td>
            <td>11/11/2030</td>
          </tr>
          <tr>
            <td>School Name</td>
            <td>Divine</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>Ahembadab ghuma gam "Priyansh Nivass" 36005</td>
          </tr>
          <tr>
            <td>Mobile No</td>
            <td>786291122222</td>
          </tr>
          <tr>
            <td>Aadhar no</td>
            <td>252525252525</td>
          </tr>
          <tr>
            <td>Mother Occupation</td>
            <td>House wife</td>
          </tr>
          <tr>
            <td>Email Id</td>
            <td>Priyansh@gmail.com</td>
          </tr>
          <tr>
            <td>Skill</td>
            <td>Football , Kabbadi</td>
          </tr>
          <tr>
            <td>School Fees</td>
            <td>25000</td>
          </tr>
          
        </tbody>
      </table>


    </div>

    </>
        
  )
}

export default Home
