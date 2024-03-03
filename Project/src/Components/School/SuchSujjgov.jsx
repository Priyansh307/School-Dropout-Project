import React from 'react'
import '../School/Schoolprofile.css'

const SuchSujjgov = () => {
  return (
    <div className="container_school">
        <div className="sub-container_school">
                <h2>Suggestion From State</h2>
            <table className='table_school_com'>
                <thead>
                    <tr>
                       <th>Instruction Name:</th>
                        <th>State name</th>
                        <th>Suggestion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>     
                        <td>Vraj</td>          
                        <td>Gujarat</td>
                        <td>I watch you </td>
                    </tr>                  
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default SuchSujjgov
