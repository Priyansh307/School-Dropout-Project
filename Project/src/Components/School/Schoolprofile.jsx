import React from 'react'
import '../School/Schoolprofile.css'

const Schoolprofile = () => {
  return (
    <div className="container_school">
    <div className="sub-container_school" >
        <h2>School Profile</h2>
        <table className='table_school_com'>
            <tr>
                <td>School Name</td>
                <td> Divin </td>
            </tr>
            <tr>
                <td>School Email</td>
                <td>divin@gmail,com</td>
            </tr>
            <tr>
                <td>School District</td>
                <td>Rajkot</td>
            </tr>
            <tr>
                <td>School State</td>
                <td>Gujarat</td>
            </tr>
            <tr>
                <td>School Category:</td>
                <td>Private</td>
            </tr>
            
            
        </table>

    </div>
 
</div>   
  )
}

export default Schoolprofile
