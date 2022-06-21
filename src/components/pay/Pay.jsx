import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Field, reduxForm } from "redux-form";

const Pay = ({typeOptions, typeChange}) => {

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8 mx-auto">
          <h2 className="h3 mb-4 page-title">Pay</h2>
          <div className="my-4">
            <hr className="my-4" />
            <div className="">
              <form>
                {/* onChange={(e) => props.TypeChange(e.target.value)} */}
                <select
                  name="typeSelect"
                  id="typeSelect"
                  onChange={(e) => typeChange(e.target.value)}

                  >
                
                    {typeOptions.map(type=>{
                      return <option value={type.value}>{type.label}</option>
                    })}
                </select>

                <select
                  name="serviceSelect"
                  id="seviceSelect"
                  // onChange={(e) => props.serviceChange(e.target.value)}
                >
                 
                </select>
                
              </form>

              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Тип</th>
                    <th scope="col">Послуга</th>
                    <th scope="col">Зарезервовано</th>
                    <th scope="col">Дата</th>
                    <th scope="col">Час</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
  
                   

                    
                      <tr>
                        <th scope="row">1</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
              
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /* <input onChange={(e) => props.setName(e.target.value)} /> */
}
export default Pay;
