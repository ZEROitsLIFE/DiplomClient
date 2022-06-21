import React from "react";
import './style.css'
const Timing = () => {
  return (
    <section className="timing_section layout_padding">
      <div className="container-fluid">
        <div className="heading_container heading_center">
          <h2>Години роботи</h2>
          <p>Ми працюєм кожен день для вас</p>
        </div>
        <div className="timing_container">
          <div className="box">
            <h4 className="day">Понеділок</h4>
            <h6 className="time">10:00-22:00</h6>
          </div>
          <div className="box">
            <h4 className="day">Вівторок</h4>
            <h6 className="time">10:00-22:00</h6>
          </div>
          <div className="box">
            <h4 className="day">Середа</h4>
            <h6 className="time">10:00-22:00</h6>
          </div>
          <div className="box">
            <h4 className="day">Четвер</h4>
            <h6 className="time">10:00-22:00</h6>
          </div>
          <div className="box">
            <h4 className="day">Пятниця</h4>
            <h6 className="time">10:00-22:00</h6>
          </div>
          <div className="box">
            <h4 className="day">Субота</h4>
            <h6 className="time">11:00-20:00</h6>
          </div>
          <div className="box">
            <h4 className="day">Неділя</h4>
            <h6 className="time">11:00-20:00</h6>
          </div>
      
        </div>
      </div>
    </section>
  );
};

export default Timing;
