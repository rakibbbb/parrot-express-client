import React from "react";
import "./SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup-section">
      <div className="signup-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account!</p>
          <hr />
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="fullname"
                placeholder="Full Name"
                required="required"
              />
            </div>
          </div>
        
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
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <FontAwesomeIcon icon={faLock} />
                <FontAwesomeIcon icon={faCheck} />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-check-label">
              <input type="checkbox" required="required" /> I accept the{" "}
              <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-dark btn-block">
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center">
          Already have an account? <Link to="/sign-in">SignIn</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
