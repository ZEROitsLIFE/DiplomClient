import React from "react";
import { Field, reduxForm } from "redux-form";

const changeUserInfo = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="firstname">Firstname</label>
          <Field
            type="text"
            id="firstname"
            className="form-control"
            name="firstname"
            placeholder="Oleksandr"
            component={"input"}
          />
        </div>
        <div className="form-group">
          <label for="inputPhone">Phone</label>
          <Field
            type="tell"
            className="form-control"
            id="inputPhone"
            name="inputPhone"
            placeholder="+"
            component={"input"}
          />
        </div>
      </div>
      <div className="btn-submit">
        <button type="submit" className="btn btn-primary">
          Save Change
        </button>
      </div>
    </form>
  );
};

const ChangeUserInfoReduxForm = reduxForm({ form: "changeInfo" })(
  changeUserInfo
);

export default ChangeUserInfoReduxForm;
