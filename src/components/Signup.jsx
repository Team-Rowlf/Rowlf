import React from 'react'

const Signup = () => {
  return (
    <div>
      <img src="/largelogo.svg" alt="Logo" />
      <form action="">
          <div className="signup">
              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p>
              <hr/>

              <label htmlFor="fname"><b>First Name</b></label>
              <input type="text" placeholder="Enter First Name" name="fname" id="fname" required/>

              <label htmlFor="fname"><b>Last Name</b></label>
              <input type="text" placeholder="Enter Last Name" name="lname" id="lname" required/>

              <label htmlFor="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" id="email" required/>

              <label htmlFor="pw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

              <label htmlFor="pw-repeat"><b>Retype Password</b></label>
              <input type="password" placeholder="Retype Password" name="pw-repeat" id="pw-repeat" required/>
              <hr/>

              <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
              <button type="submit" className="registerbtn">Register</button>
          </div>

          <div className="container signin">
              <p>Already have an account? <a href="#">Sign in</a>.</p>
          </div>
      </form>
    </div>
  )
}

export default Signup