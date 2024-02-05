import React, { useState } from "react";

// A function to validate the email format
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// A function to validate the password length
function validatePassword(password) {
  return password.length >= 8;
}

// A component to render the registration form
function Registration() {
  // State variables to store the input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State variables to store the validation errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // A function to handle the form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default behavior of the form
    let isValid = true; // A flag to indicate the validity of the input

    // Validate the name input
    if (name === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    // Validate the email input
    if (email === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Email is not valid");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate the password input
    if (password === "") {
        setPasswordError("Password is required");
        isValid = false;
      } else if (!validatePassword(password)) {
        setPasswordError("Password must be at least 8 characters long");
        isValid = false;
      } else {
        setPasswordError("");
      }
  
      // If the input is valid, send it to the server or display a success message
      if (isValid) {
        // TODO: Send the input to the server or display a success message
        alert("Registration successful!");
      }
    }
  
    // A function to handle the name input change
    function handleNameChange(event) {
      setName(event.target.value); // Update the name state
    }
  
    // A function to handle the email input change
    function handleEmailChange(event) {
      setEmail(event.target.value); // Update the email state
    }
    // A function to handle the password input change
  function handlePasswordChange(event) {
    setPassword(event.target.value); // Update the password state
  }

  // Return the JSX code for the registration form
  return (
    <div className="registration">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
          <span className="error">{nameError}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}/>
            <span className="error">{emailError}</span>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span className="error">{passwordError}</span>
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default Registration;