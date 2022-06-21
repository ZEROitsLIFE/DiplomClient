import React from "react";

import { Field, reduxForm } from "redux-form";
import { ReduxSelectForm } from "./ReduxSelectForm";

const CreateServie = (props) => {
  console.log();
  console.log("Props->", props.Options);
  console.log();

const cak=[{value:"1",label:"1"},{value:"2",label:"2"},]

  return (
    <div>
      <h1>Створити Послугу</h1>
      <form onSubmit={props.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
          
            <label for="standard-select">Тип Послкги</label>
              <Field
              id="standard-select"
               class="select"
              name="type"
              component='select'
              // onChange={(value) => onchange(value)}
              options={props.Options}
            >
              <option value={null}></option>
            {props.Options.map(data=>{

              return <option value={data.value}>{data.label}</option>
            })}
            </Field>
    
          
            <label for="name">Назва Послкги</label>
            <Field
              type="text"
              id="name"
              className="form-control"
              name="name"
              component={"input"}
            />

            <label for="name">Опис</label>
            <Field
              type="text"
              id="name"
              className="form-control"
              name="description"
              component={"input"}
            />
            <label for="name">Ціна</label>
            <Field
              type="number"
              id="name"
              className="form-control"
              name="price"
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

const CreateServieReduxForm = reduxForm({ form: "createProguct" })(
  CreateServie
);
export default CreateServieReduxForm;
