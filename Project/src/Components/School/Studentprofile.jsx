import React from 'react'
import '../School/Schoolprofile.css'

const Studentprofile = () => {
  return (
    <div className="container_school">
    <div className="form-container_school">


        <form className='form_school' action="" method="post">
            
            <h2>Student Profile Form</h2>
          
            <label htmlhtmlFor="student-name">Student Name:</label>
            <input type="text" id="student-name" name="name"  required placeholder="Enter student's name"/>

            <label htmlFor="student-age">Student Age:</label>
            <input type="number" id="student-age" name="age"  required placeholder="Enter student's age"/>

            <label>Student Gender:</label>

            Male
            <input type="radio" id="male" name="gender" className="inl" value="male" required/>
            
            Female
            <input type="radio" id="female" name="gender" className="inl" value="female" required/>

            <label htmlFor="student-caste">Student Caste:</label>
           
            <select id="student-caste" name="caste" required>
                <option value="" disabled selected>Select Caste</option>
                <option value="open">Open</option>
                <option value="obc">OBC/SEBC</option>
                <option value="sc">Scheduled Caste</option>
                <option value="st">Scheduled Tribe</option>
               
            </select>

            <label htmlFor="s_category">School Category</label>
            <select id="s_category" name="s_category" required>
                <option value="" disabled selected>Select School Category</option>
                <option value="Private">Private</option>
                <option value="Government">Government</option>
                <option value="SemiGovernment">SemiGovernment</option>
            </select>

            <label htmlFor="Distance">Distance Form School:</label>
            <input type="number" id="Distance" name="Distance"  required placeholder="Enter Distance Form School"/>

            <label htmlFor="student-area">Student Area:</label>
            <input type="text" id="student-area" name="area" required placeholder="Enter student's area"/>

            <label htmlFor="student-city">Student City:</label>
            <input type="text" id="student-city" name="city" required placeholder="Enter student's city"/>

            <label htmlFor="household-income">Household Income:</label>
            <input type="number" id="household-income" name="income" required placeholder="Enter household income"/>

            <label htmlFor="father-occupation">Father's Occupation:</label>
            <input type="text" id="father-occupation" name="foccupation" required placeholder="Enter father's occupation"/>

            <label htmlFor="mystate">State</label>
            
            <select id="mystate" name="mystate" required>
                <option value="" disabled selected>Select State</option>
  
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Delhi">Delhi</option>             
            </select>



            <label htmlFor="studentstd">Student Standard</label>
            <input type="text" id="studentstd" name="studentstd" required placeholder="Enter Student Standard"/>

            <label htmlFor="stdrollno">Roll No</label>
            <input type="number" id="stdrollno" name="stdrollno" required placeholder="Enter Roll no"/>

            
            <input className="btn_school" type="submit" name="submit" value="Submit"/>

                
        </form>
    </div>
</div>
  )
}

export default Studentprofile
