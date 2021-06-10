import React, { useContext, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./signIn.css";
import { useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";

const SignIn = () => {
  const [loggedInUser, setLoggedInUser]=useContext(UserContext);
  
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };

    const [user, setUser]=useState({
            isSignedIn:false,
            name:'',
            email:'',
            success:false,
            photo:''
    })
  

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }else{
    firebase.app();
  }

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const {displayName,email,photoURL}=result.user;
          const signedInUser={
            isSignedIn:true,
            name:displayName,
            email:email,
            success:true,
            photo:photoURL
          }
          setUser(signedInUser);
          storeAuthToken(signedInUser);

  }).catch((error) => {
    const newUserInfo={...user};
              newUserInfo.error=error.message;
              newUserInfo.success=false;
              setUser(newUserInfo);
  });
  }

  const handleFacebookSignIn = () => {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const {displayName,email,photoURL}=result.user;
          const signedInUser={
            isSignedIn:true,
            name:displayName,
            email:email,
            success:true,
            photo:photoURL
          }
          setUser(signedInUser);
          storeAuthToken(signedInUser);
      })
      .catch((error) => {
        const newUserInfo={...user};
              newUserInfo.error=error.message;
              newUserInfo.success=false;
              setUser(newUserInfo);
      });
  };

  const storeAuthToken=(signedInUser)=>{
        
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
   .then(function(idToken) {
       
       const newSignedInUser={...signedInUser};
       newSignedInUser.token=idToken;
       setLoggedInUser(newSignedInUser)
       sessionStorage.setItem('token', idToken);
       sessionStorage.setItem('userName', newSignedInUser.name);
       sessionStorage.setItem('userEmail', newSignedInUser.email);
       history.replace(from);
     }).catch(function(error) {
       // Handle error
     });
  }

  return (
    <div className="signin-section">
      <div className="signin-form">
        {/* <form action="#" method="post">
          <h2>Sign In</h2>
          <p>Please fill in this form to create an account!</p>
          <hr />

          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email Address"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-dark btn-block">
              Sign In
            </button>
          </div>
        </form> */}
        <div className="signIn">
        <div className="form-group">
          <button onClick={handleGoogleSignIn} type="submit" className="btn btn-dark btn-block google">
            Sign In with Google
          </button>
        </div>
        <div className="form-group">
          <button
            onClick={handleFacebookSignIn}
            type="submit"
            className="btn btn-dark btn-block facebook"
          >
            Sign In with Facebook
          </button>
        </div>
        </div>
        {/* <div className="text-center">
          Already have an account? <Link to="/sign-up">Create Account</Link>
        </div> */}
      </div>
    </div>
  );
};

export default SignIn;
