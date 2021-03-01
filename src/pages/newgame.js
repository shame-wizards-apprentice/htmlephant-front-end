import React, { useState } from "react";
import store from "../config/store";
import API from "../utils/API";

function NewGame() {
  // Set initial user state
  const [userState, setUserState] = useState({
    username: "",
    password: "",
    token: "",
    isLoggedIn: false
  });

  // Set initial signup state
  const [signupState, setSignupState] = useState({
    username: "",
    password: ""
  })

  // Set signup state on input change
  const handleInputChange = e => {
    const { name, value } = e.target;
    setSignupState({
      ...signupState,
      [name]: value
    })
  }

  const handleSubmit = e=>{
    e.preventDefault();
    API.signup(signupState).then(res=>{
      console.log(`Congrats! ${JSON.stringify(res.data)}`);
      localStorage.setItem("token",res.data.token)
      setUserState({
        username: res.data.username,
        password: res.data.password,
        token: res.data.token,
        isLoggedIn: true
      });
      store.dispatch({
        type: "USER_ACTION",
        payload: {
          ...userState
        }
      });
      setSignupState({
        email:"",
        password:"",
        name:''
      });
    }).catch(err=>{
      console.log(`FOOL! Due to your stupidity, ${err}`);
      store.dispatch({
        type: "USER_ACTION",
        payload: {
          username: "",
          password: "",
          token: "",
          isLoggedIn: false
        }
      });
      localStorage.removeItem("token")
    })
  }

  return (
    <form>
      <label>
        User:
            </label>
      <input name="username" type="text" onChange={handleInputChange} />
      <label>
        Password:
            </label>
      <input name="password" type="password" onChange={handleInputChange}/>
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </form>
  );
}

export default NewGame