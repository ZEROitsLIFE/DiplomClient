import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Field, reduxForm } from "redux-form";
import { Link, NavLink } from "react-router-dom";

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <hr />

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
          <button type="submit" className="btn btn-primary btn-lg">
            Ввійти
          </button>
        </div>
      </form>
      <div className="hint-text">
        <NavLink to="/registr"> Не маєте акаунта? Зареєструватися</NavLink>
      </div>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
