import React from 'react'
import './SignUp.css'
import { useState } from 'react'

const SignUp = () => {
  const [action, setAction] = useState("SignUp");
  const [values, setValue] = useState({
    firstname: '',
    lastname: '',
    contact: '',
    email: '',
    password: '',
  });

  const handleChanges = (e) => {
    e.setValue({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }


  return (
    <div className='container'>

      <h1>Register Form</h1>
      <form form onSubmit={handleSubmit}>

        <label htmlFor='firstname'>First Name*</label>
        <input type="text" placeholder='Enter First Name' name='firstname'
          onChange={(e) => handleChanges(e)} required />

        <label htmlFor='lastname'>Last Name*</label>
        <input type="text" placeholder='Enter Last Name' name='lastname'
          onChange={(e) => handleChanges(e)} required />

        <label htmlFor='contact'>Contact*</label>
        <input type="text" placeholder='Enter Phone #' name='contact'
          onChange={(e) => handleChanges(e)} required />

        <label htmlFor='email'>Email*</label>
        <input type="email" placeholder='Enter Email' name='email'
          onChange={(e) => handleChanges(e)} required />

        <label htmlFor='password'>Password*</label>
        <input type="text" placeholder='Enter Password' name='password'
          onChange={(e) => handleChanges(e)} required />

         {action === "SignUp" && (
        <div className="Sign-Up-condition">
          <input type="checkbox" required /><p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
         )}

        <button type="button" onClick={() => console.log(values)}>Reset</button>
        <button type="button"onClick={() => console.log(values)}>Submit</button>





      </form>

    </div>


  )
}

export default SignUp
