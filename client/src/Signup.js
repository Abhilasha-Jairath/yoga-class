import React, {useState}  from 'react';
import { NavLink, useHistory } from 'react-router-dom';


const Signup = () => 
{
    
    return (
        <>
           <div className="signup">
      <form
        className="signup_container" method='POST'
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Yoga Classes Registration</h1>

     

        <label className="signup_label" for="name">
          Name
        </label>
        <input
          className="signup_input"
          type="text"
          name='name'
          autoComplete='off'
          value={user.name}
          onChange={handleInputs}
          placeholder="Your name"
        ></input>

        <label className="signup_label" for="email">
          Email
        </label>
        <input
          className="signup_input"
          type="email"
          name='email'
          autoComplete='off'
          value={user.email}
          onChange={handleInputs}
          placeholder="Your email"
        ></input>

        <label className="signup_label" for="phoneNumber">
          Phone Number
        </label>
        <input
          className="signup_input"
          type="number"
          name='phone'
          autoComplete='off'
          value={user.phone}
          onChange={handleInputs}
          placeholder="Your phone "
        ></input>

        <label className="signup_label" for="dateOfBirth">
        Date Of Birth
        </label>
        <input
          className="signup_input"
          type="text"
          name='dob'
          autoComplete='off'
          value={user.dob}
          onChange={handleInputs}
          placeholder="Your Date of Birth"
        ></input>

        <label className="signup_label" for="Gender">
          Gender
        </label>
        {}
        <br></br>
        <div >
                <input type="radio" value="Male" name="gender" onChange={handleInputs} /> Male
                <input type="radio" value="Female" name="gender" onChange={handleInputs} /> Female
                <input type="radio" value="Other" name="gender" onChange={handleInputs} /> Other
            </div>
           
        

         {}
        {}
<br></br>
        <label className="signup_label" for="Schedule">
          Schedule
        </label>
        <br></br>
        
        <div >
                <input type="radio" value="slot-1" name="slot" onChange={handleInputs} /> 6-7 AM
                <input type="radio" value="slot-2" name="slot" onChange={handleInputs} /> 7-8 AM
                <input type="radio" value="slot-3" name="slot" onChange={handleInputs} /> 8-9 AM
                <input type="radio" value="slot-4" name="slot" onChange={handleInputs} /> 5-6 PM
            </div>

        <input type="submit" name='signup' id='signup' value="register" 
        onClick={postData}
         className="signup_btn" />
       
      </form>
    </div>
        </>
    )
}

export default Signup
