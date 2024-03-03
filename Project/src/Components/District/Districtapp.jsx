import React from 'react'
import './Districtpro.css'

const Districtapp = () => {
  return (
  <>
  <div className="container_district">
        <div className="district_table_container_district">
                <h2>Unapproved Table</h2>
            <table className='table_district'>
                <thead>
                    <tr>
                        <th>username</th>
                        <th>email</th>
                        <th>state</th>
                        <th>District</th>
                        <th>Approval</th>
                        
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>Divin</td>
                            <td>divin@gmail.com</td>
                            <td>Gujarat</td>
                            <td>Rajkot</td>
                            <td><a href="" className="abvhy">Approve</a></td>                        
                        </tr>                           
                </tbody>
            </table>
        </div>

        <div className="district_table_container_district">
                <h2>Approved Table</h2>
            <table className='table_district'>
                <thead>
                    <tr>
                        <th>username</th>
                        <th>email</th>
                        <th>state</th>
                        <th>District</th>
                        
                    </tr>
                </thead>
                <tbody>        
                        <tr>
                            <td>Divin</td>
                            <td>divin@gmail.com</td>
                            <td>Gujarat</td>
                            <td>Rajkot</td>                      
                        </tr>            
                    
                </tbody>
            </table>
        </div>

    </div>

  </>
  )
}

export default Districtapp
