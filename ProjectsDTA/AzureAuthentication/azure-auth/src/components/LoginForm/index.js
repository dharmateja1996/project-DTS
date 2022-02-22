import React from "react";

import './index.css'

function LoginForm() {
  const [userName, setUserName] = React.useState('');
  const [password , setPassword] = React.useState('')



  const submitForm = async (e) =>{
      e.preventDefault()
      const userDetails = {userName,password}
      const loginUrl = 'https://apis.ccbp.in/login'
      const option = {
        method: "POST",
        body: JSON.stringify(userDetails)
      }

      const response = await fetch(loginUrl,option)
      const data = await response.json()

      console.log(response)
      console.log(data)

  }
  

  const renderPasswordField = () => {
    return (
      <>
        <label className="label" htmlFor="password">Password:</label>
        <input
        className="input"
          id="password"
          placeholder="Enter Password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </>
    );
  };

  const renderUserNameField = () => {
    return (
      <>
        <label className="label" htmlFor="username">UserName:</label>
        <input
        className="input"
          id="username"
          placeholder="User Name"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </>
    );
  };

  return (
    <div className="login-form" onSubmit={submitForm}>
        <h1 className="heading">LogIn Form</h1>
      <form className="form-container">
        <div className="sub-container">{renderUserNameField()}</div>
        <div className="sub-container">{renderPasswordField()}</div>
        <button className="button">Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;
