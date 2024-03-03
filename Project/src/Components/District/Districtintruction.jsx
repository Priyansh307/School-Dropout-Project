import React from 'react'
import './Districtpro.css'

const Districtintruction = () => {
  return (
    <div className="container_district">

        <div className="instruction_cointainer_district">
            <h2>Instructions To School</h2>
            
            <div className="instruction_inbox_district">
                
                <form className='form_district' id="dataForm__district" method="post" action="">
                    

                    <label for="name">Instructor Name:</label>
                    <input type="text" id="name" name="instructor_name" required />

                    <label for="age">School name:</label>
                    <input type="text" id="age" name="school_name" required />

                    <label for="email">Instruction:</label>
                    <input type="text" id="email" name="instruction" required />


                    <input type="submit" value="Submit" name="submit" />
                </form>
            </div>

                <table className="ins_table_district">
                    <thead>
                        <tr>
                           <th>Instruction Name</th>
                            <th>District name</th>
                            <th>School name</th>
                            <th>Suggestion</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>     
                            <td>Dhyanam</td>          
                            <td>vadodara</td>
                            <td>Pathak</td>
                            <td>Your school is close soon</td>
                            <td><a href="" className="black-text">Delete</a></td>
                          
                        </tr>
                        
                    </tbody>
                </table>
            
            
        </div>
      
    </div>
  )
}

export default Districtintruction
