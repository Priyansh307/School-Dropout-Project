import React from 'react'
import './Districtpro.css'

const Districtsuggestion = () => {
  return (
    <div className="container_district">
        <div className="sub-container_district">
                <h2 className="state_title_district">Suggestion From Higher Authority</h2>
            <table className='table_district'>
                <thead>
                    <tr>
                       <th>Instruction Name:</th>
                        <th>District name</th>
                        <th>Suggestion</th>
                    </tr>
                </thead>
                <tbody>   
                    <tr>     
                        <td className='district_tr_td_text'>Priyansh</td>          
                        <td className='district_tr_td_text'>Ahemdabad</td>
                        <td className='district_tr_td_text'>You only do html</td>      
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default Districtsuggestion
