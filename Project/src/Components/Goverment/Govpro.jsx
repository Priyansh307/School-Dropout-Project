import React from 'react'
import './Govpro.css'


const Govpro = () => {
  return (
    <div className="container_goverment">
        <div className="sub-container_goverment">
            <h2 className="state_title">State Education Profile</h2>
            <table className="table_goverment">
                <tr>
                    <td className="t_title_goverment"> State Name </td>
                    <td>Gujarat</td>
                </tr>
                <tr>
                    <td className="t_title_goverment"> State Email </td>
                    <td>gujaratgov123@gmail.com</td>
                </tr>
                <tr>
                    <td className="t_title_goverment"> State Id </td>
                    <td>12</td>
                </tr>
               
               
            </table>
        </div>
                <form className='form_school' method="get" action="">
                    
                    <label htmlFor="year">Filter by Year:</label>
                    <input type="text" id="year" name="year" value="selected_year" placeholder="Enter year"/>
                    <button type="submit">Filter</button>
                </form>
        
    </div>
  )
}

export default Govpro
