import React from "react";
import './style.css'

import foto1 from '../../static/icon/Prefence.jpg'
import foto2 from '../../static/icon/Prefemce-2.jpg'
import foto3 from '../../static/icon/Prefence-3.jpg'

const Prefence = () => {
  return (
    <section id="prefence" className="prefence_section layout_padding-bottom">
    <div className="container ">
      <div className="prefence_container">
        <div className="heading_container heading_center">
          <h2>
            Services
          </h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box_prefence">
              <div className="img-box">
                <img src={foto1}  alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Надійність
                </h5>
                <h6>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box_prefence">
              <div className="img-box">
                <img src={foto2}  alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Комфорт
                </h5>
                <h6>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box_prefence">
              <div className="img-box">
                <img src={foto3} alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Якісні засоби
                </h5>
                <h6>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Prefence;
