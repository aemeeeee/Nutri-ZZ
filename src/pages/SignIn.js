import React, {useState} from 'react';
import firebase from '../firebase';
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../stylesheets/SignIn.css'

const SignIn = (props) => {

  // TODO: Listen to firestore change, update props
  const [onSignUp, setOnSignUp] =  useState(true);

  const signUp = () => {
    const username = document.querySelector("#signUp-username");
    const email = document.querySelector("#signUp-email");
    const password = document.querySelector("#signUp-password");
    // Add User
    let auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.then(function(result) {
      props.changeSign(!!firebase.auth().currentUser);
      return result.user.updateProfile({
        displayName: username.value
      })
    })
    promise.catch((e) => (alert(e)));
  }

  const logIn = () => {
    const email = document.querySelector('#logIn-email');
    const password = document.querySelector('#logIn-password');
    // CHECK LOGIN
    let auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.then(function(result) {
      props.changeSign(!!firebase.auth().currentUser);
    })
    promise.catch((e) => (alert(e)));

  }


  if (onSignUp === true) {
    return (
      <div className="page-signin">
        <div className="signin card col-5 mx-auto ">
          <h1>Sign Up</h1>
          <input type="text" placeholder="Username" id="signUp-username" maxLength="12" autoComplete="off" fontSize/>
          <input type="email" placeholder="Email" id="signUp-email" maxLength="20" autoComplete="off"/>
          <input type="password" placeholder="Password" id="signUp-password" maxLength="15" autoComplete="off"/>
          <button onClick={signUp} >Submit</button>
          <div className="w-100 text-center" style={{fontSize:16}}>
            <span>Already a User? </span>
            <span className="redirect" onClick={() => {setOnSignUp(false)}} style={{color: "#f1b6ac"}}>
              Login
            </span>
          </div>
          {/* <h4>Already a User?</h4> */}
          {/* <button onClick={() => {setOnSignUp(false)}} id="signin-btnOther">Log In</button> */}
        </div>
      </div>
    );
  } else {
    return (
      <div  className="page-signin">
        <div  className="signin">
          <h1>Log In</h1>
          <input type="email" placeholder="email" id="logIn-email" autoComplete="off"/>
          <input type="password" placeholder="password" id="logIn-password" autoComplete="off"/>
          <button onClick={logIn}>Log In</button>
          <h4>Not a member?</h4>
          <button onClick={() => {setOnSignUp(true)}} id="signin-btnOther">Sign Up</button>
        </div>
      </div>
    );
  }


}

export default SignIn;