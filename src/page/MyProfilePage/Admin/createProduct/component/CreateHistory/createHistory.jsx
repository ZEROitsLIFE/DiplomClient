import React from "react";

import { Field, reduxForm } from "redux-form";
import { ReduxSelectForm } from "./ReduxSelectFrom";
import DatePicker from "react-datepicker";
import moment from "moment";

export const FieldDatePicker = ({ input, placeholder, minDate, maxDate }) => (
  <DatePicker
    className="plus-icon"
    inputFormat="yyyy/MM/dd"
    selected={input.value ? input.value : Date.now()}
    onChange={input.onChange}
    // minDate={minDate}
    // maxDate={maxDate}
    disabledKeyboardNavigation
    placeholderText={placeholder}
  />
);



const CreateHistory = (props) => {
  console.log("Props->", props);

  return (
    <div>
      <h1>Дотати Історію</h1>
      <form onSubmit={props.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <div>
            <label for="date">Дата</label>
              <Field
                component={FieldDatePicker}
                name="date_till"
                placeholder="YYYY/MM/DD"
                id="date"
              />
            </div>

            <br /><div>
            <label for="standard-select">Виберіть послугу</label>
               <Field
              id="standard-select"
              class="select"
              name="type"
              component="select"
            >
              <option value={null}>Виберіть</option>
              {props.Options.map((data) => {
                return <option value={data.value} key={data.value}>{data.label}</option>;
              })}
            </Field>
            </div>
           
            <br />
            <label for="standard-select">Виберіть Час</label>
            <Field
              id="standard-select"
              class="select"
              name="time"
              component="select"
            >
              <option value={null}>Виберіть час</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              
            </Field>
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

const CreateHistoryReduxForm = reduxForm({ form: "addHistory" })(CreateHistory);
export default CreateHistoryReduxForm;
