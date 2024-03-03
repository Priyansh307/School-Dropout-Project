import React from 'react'
import './Districtpro.css'

const Disschwise = () => {
  return (
    <div className="container_district_chart">

    <div className="drop_out_school_wise_container_district">
        <h1 className="dr_title_district">School Wise Dropout Statistics</h1>
        <table className='table_district'>
            <tr>
                <td className="t_title_distict"> School Name </td>
                <td className="t_title_distict">Total dropout studnet</td>
                <td className="t_title_distict">Total Male dropout </td>
                <td className="t_title_distict">Total Female dropout </td>
                <td className="t_title_distict">Total Students</td>
                <td className="t_title_distict">Dropout Ratio</td>
            </tr>        
            <tr>
                <td>Divin</td>
                <td>3</td>
                <td>2</td>
                <td>1</td>
                <td>6</td>
                <td>50%</td>
            </tr>                
        </table>   
    </div>
</div>
  )
}

export default Disschwise
