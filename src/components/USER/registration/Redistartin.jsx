import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Field, reduxForm } from "redux-form";
import { NavLink } from "react-router-dom";
import { registrationAPI } from "../../../http/userApi";

const RegForm = (props) => {
  return (
    <div className="signup-form">
      <form onSubmit={props.handleSubmit}>
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account!</p>
        <hr />
        <div className="form-group">
          <div className="row">
            <div className="col-xs-6">
              <Field
                component="input"
                type="text"
                className="form-control"
                name="first_name"
                placeholder="First Name"
                required="required"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <Field
            component="input"
            type="tel"
            className="form-control"
            name="phoneNumber"
            placeholder="Phone number"
            required="required"
          />
        </div>
        {/* <div className="form-group col-md-6">
          <Field
            component="select"
            id="inputSex"
            className="form-control"
            placeholder="Chose sex"
            name="imputSex"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Field>
        </div>
        {props.imputSex && (
        <div
          style={{
            height: 80,
            width: 200,
            margin: '10px auto',
            backgroundColor: "#00ff00"
          }}
        />
      )} */}
        <div className="form-group">
          <Field
            component="input"
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            required="required"
          />
        </div>
        <div className="form-group">
          <Field
            component="input"
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required="required"
          />
        </div>
        <div className="form-group">
          <Field
            component="input"
            type="password"
            className="form-control"
            name="confirm_password"
            placeholder="Confirm Password"
            required="required"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </form>
      <div className="hint-text">
        Already have an account? <NavLink to="/login">Login here</NavLink>
      </div>
    </div>
  );
};

const RegistrationReduxForm = reduxForm({ form: "registration" })(RegForm);

export default RegistrationReduxForm;
