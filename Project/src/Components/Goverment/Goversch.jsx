import React from 'react'
import './Govpro.css'

const Goversch = () => {
  return (
    <div className="container_goverment">

      
        <table className='table_goverment'>
            <tr>
                <td className="t_title_goverment"> School Name </td>
                <td className="t_title_goverment">Total dropout studnet</td>
                <td className="t_title_goverment">Total Male dropout </td>
                <td className="t_title_goverment">Total Female dropout </td>
                <td className="t_title_goverment">Total Students</td>
                <td className="t_title_goverment">Dropout Ratio</td>
            </tr>
            
            
            <tr>
                <td>Divin</td>
                <td>3</td>
                <td>1</td>
                <td>2</td>
                <td>6</td>
                <td>50%</td>
            </tr>
            
           
        </table>
        
    </div>
  )
}

export default Goversch
