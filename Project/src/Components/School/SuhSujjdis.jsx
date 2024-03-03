import React from 'react'
import '../School/Schoolprofile.css'

const SuhSujjdis = () => {
  return (
    <div class="container_school">
        <div class="sub-container_school">
                <h2>Suggestion From District</h2>
            <table className='table_school_com'>
                <thead>
                    <tr>
                       <th>Instruction Name:</th>
                        <th>District name</th>
                        <th>Suggestion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>     
                        <td>Yogin</td>          
                        <td>Rajkot</td>
                        <td>Your School Dropout Ratio high</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default SuhSujjdis
