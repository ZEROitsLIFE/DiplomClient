import React from "react";
import './style.css'

import foto1 from '../../static/icon/Prefence.jpg'
import foto2 from '../../static/icon/Prefemce-2.jpg'
import foto3 from '../../static/icon/Prefence-3.jpg'

const Prefence = () => {
  return (
    <section id="prefence" class="prefence_section layout_padding-bottom">
    <div class="container ">
      <div class="prefence_container">
        <div class="heading_container heading_center">
          <h2>
            Services
          </h2>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="box_prefence">
              <div class="img-box">
                <img src={foto1}  alt=""/>
              </div>
              <div class="detail-box">
                <h5>
                  Надійність
                </h5>
                <h6>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box_prefence">
              <div class="img-box">
                <img src={foto2}  alt=""/>
              </div>
              <div class="detail-box">
                <h5>
                  Комфорт
                </h5>
                <h6>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box_prefence">
              <div class="img-box">
                <img src={foto3} alt=""/>
              </div>
              <div class="detail-box">
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
