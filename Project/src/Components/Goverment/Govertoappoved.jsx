import React from 'react'
import './Govpro.css'

const Govertoappoved = () => {
  return (
    <>
    
    <div className="container_goverment">
        <div className="district_table_container_govermrnt">
                <h2>Unapproved Table</h2>
            <table className="table_goverment">
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

                            <td>Rajkot</td>
                            <td>rajkot@gmail.com</td>
                            <td>Gujarat</td>
                            <td>Rajkot</td>
                            <td><a href="{% url 'approve_district' district.id %}">Approve</a></td>
                            
                        </tr>                   
                </tbody>
            </table>
        </div>

        <div className="district_table_container_govermrnt">
                <h2>Approved Table</h2>
            <table className="table_goverment">
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

                            <td>Rajkot</td>
                            <td>rajkot@gmail.com</td>
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

export default Govertoappoved
