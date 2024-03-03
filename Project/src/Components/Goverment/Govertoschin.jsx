import React from 'react'
import './Govpro.css'

const Govertoschin = () => {
  return (
    <>

<div className="container_goverment">

<div className="instruction_cointainer_goverment">
    <h2>Instructions To School</h2>

     

    <div className="instruction_inbox_goverment" >
       
        <form id="dataForm_govermenrt" method="post" action="">
            

            <label for="name">Instructor Name:</label>
            <input type="text" id="name" name="instructor_name" required/>

            <label for="age">School name:</label>
            <input type="text" id="age" name="school_name" required/>

            <label for="email">Instruction:</label>
            <input type="text" id="email" name="instruction" required/>


            <input type="submit" value="Submit" name="submit"/>
        </form>
    </div>


    <table className="ins_table_goverment">
        <thead>
            <tr>
               <th>Instruction Name</th>
                <th>State name</th>
                <th>School name</th>
                <th>Suggestion</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            
            
            <tr>     
                <td>Dhyanam</td>          
                <td>Gujarat</td>
                <td>Divine</td>
                <td>Dropout rate is high</td>
                <td><a className="black-text">Delete</a></td>

              
            </tr>
            
            
            
        </tbody>
    </table>

</div>

</div>
    
    
    
    
    
    </>
  )
}

export default Govertoschin
