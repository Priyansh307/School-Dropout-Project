import React from 'react'
import './Govpro.css'

const GoverReport = () => {
  return (
   <>
   <div className="container_goverment">
        <div>
            <h2>Report</h2>
        </div>
        <div className="info_table_goverment">
        <table className='table_goverment'>
            <tr>
                <td>State Name </td>
                <td>Gujartat</td>
            </tr>
            <tr>
                <td>Year</td>
                <td>2022</td>
            </tr>
            <tr>
                <td>Total Student</td>
                <td>100</td>
            </tr>
            <tr>
                <td>Total Dropout Student</td>
                <td>10</td>
            </tr>
            <tr>
                <td>State Dropout Ratio</td>
                <td>10 %</td>
            </tr>
            <tr>
                <td>State Male Dropout</td>
                <td>3</td>
            </tr>
            <tr>
                <td>State Female Dropout</td>
                <td>7</td>
            </tr>
            <tr>
                <td>Private School Dropout Ratio</td>
                <td>50%</td>
            </tr>
            <tr>
                <td>Government School Dropout Ratio</td>
                <td>50%</td>
            </tr>
           
        </table>
        </div>




        <p className="top3">Top 3 School Dropout</p>
        <div className="ins_table_goverment">
            
            <table className='table_goverment'>
                <thead>
                    <tr>
                        <th>School Name</th>
                        <th>Ratio</th>     
                    </tr>
                </thead>
               
                <tbody>             
                    <tr>
                            <td>Divin</td>
                            <td>40%</td>       
                    </tr>   
                  
                </tbody>
            </table>
            
        </div>

        <p className="top3">Top 3 District Dropout</p>
        <div className="ins_table_goverment">
            
            <table className='table_goverment'>
                <thead>
                    <tr>
                        <th>District Name</th>
                        <th>Ratio</th>     
                    </tr>
                </thead>
                
                <tbody>  
                            
                    <tr>
                        <td>Rajkot</td>
                        <td>40%</td>      
                    </tr>  
                    
               
                </tbody>
            </table>
            
        </div>

  
    </div>
   
   
   
   
   </>
  )
}

export default GoverReport
