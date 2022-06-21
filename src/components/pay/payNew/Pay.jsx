import React from "react";
import { Field, reduxForm } from "redux-form";

const Pay = (props) => {
  console.log("props", props);
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-8 mx-auto">
          <h2 class="h3 mb-4 page-title">Settings</h2>
          <form onSubmit={props.handleSubmit}>
            <label for="standard-select">Виберіть послугу</label>
            <Field
              id="standard-select"
              class="select"
              name="type"
              component="select"
              onChange={(e) => props.onSelectType(e.target.value)}
            >
              <option value={null}>Виберіть</option>
              {props.typeOption.map((data) => {
                return <option value={data.value}>{data.label}</option>;
              })}
            </Field>

            <label for="standard-select-2">Виберіть послугу</label>
            <Field
              id="standard-select-2"
              class="select"
              name="type"
              component="select"
              onChange={(e) => props.onSelectService(e.target.value)}
            >
              <option value={null}>Виберіть</option>
              {props.serviceOption.map((data) => {
                return <option value={data.value}>{data.label}</option>;
              })}
            </Field>
            {/* <Field
              id="standard-select-3"
              class="button"
              name="button"
              component="button"
              placeholder="Обновіть таблицю"
            /> */}
            <button>Обновіть таблицю</button>
          </form>

          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Тип</th>
                <th scope="col">Послуга</th>
                <th scope="col">Ціна</th>
                <th scope="col">Дата</th>
                <th scope="col">Час</th>
                <th scope="col">Зарезервовано</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {props.historyStore === undefined ||
              props.historyStore === null ? (
                <p>Не знайдено</p>
              ) : (
                props.historyStore.map((store) => {
                  return (
                    <tr>
                      <th scope="row">1</th>
                      <td>{props.type.name}</td>
                      <td>{props.service.name}</td>
                      <td>{props.service.price} грн</td>
                      <td>{store.date.split("T")[0]}</td>
                      <td>{store.time}</td>
                      <td>{store.reserved ? "Так" : "Ні"}</td>
                      <td>
                        {store.reserved ? (
                          <p>Зарезервовано</p>
                         
                        ) : ( props.User.isActivated ===false?  <p>Ви не активували аккаунт</p> :
                        <button onClick={() =>props.Reserved(store._id)}>
                            Зарезервувати
                          </button>
                        )
                        }
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const PayRedux = reduxForm({ form: "pay" })(Pay);
export default PayRedux;
