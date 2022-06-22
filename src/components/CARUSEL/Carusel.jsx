import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style/Carusel.css";
import foto1 from "../../static/slider.jpg";
import foto2 from "../../static/slider-2.jpg";
import foto3 from "../../static/slider-3.jpg";
import { Carousel } from "react-bootstrap";
// import * as mdb from 'mdb-ui-kit';

const Carusel = () => {
  return (
    <div className="carusell_conteiner">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src={foto1} alt="First slide" />
          <Carousel.Caption>
            <h3>Vb </h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={foto2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Нові Послуги</h3>
            <p>У нас появилися нові послуга Косметичний маваж.</p>
            <Link to="/service">
              <button className="button-74">Перейти</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={foto3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Нова реабілітація прямо для вас</h3>
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            <Link to="/service">
              <button className="button-74">Перейти</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carusel;
