import React from "react";
import { Field, reduxForm } from "redux-form";

const createType = (props) => {
  return (
    <div>
      <h1>Створити Тип</h1>
      <form onSubmit={props.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="name">Назва Типу</label>
            <Field
              type="text"
              id="name"
              className="form-control"
              name="name"
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
     
    </div>
  );
};

const CreateTypeReduxForm = reduxForm({ form: "type_form" })(createType);

export default CreateTypeReduxForm;
