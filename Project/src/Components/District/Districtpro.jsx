import React from 'react'
import '../District/Districtpro.css'

const Districtpro = () => {
  return (
    <div className="container_district">
    <div className="sub-container_district">
        <h2 className="state_title_district">District Info</h2>
        <table className='table_goverment'>
            <tr>
                <td className="t_title_distict"> District Name </td>
                <td>Rajkot</td>
            </tr>
            <tr>
                <td className="t_title_district"> District email </td>
                <td>rajkot@gmail.com</td>
            </tr>
            <tr>
                <td className="t_title_district"> District State </td>
                <td>Gujarat</td>
            </tr>
            
            
        </table>
    </div>
            <form className='form_district' method="get">
                <label htmlFor="year">Filter by Year:</label>
                <input type="text" id="year" name="year"  placeholder="Enter year" />
                <button type="submit">Filter</button>
            </form>
</div>
  )
}

export default Districtpro
