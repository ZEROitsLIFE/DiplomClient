import React from "react";
import { Link } from "react-router-dom";
import foto from '../../static/AboutFoto.jpg'
import "./style.css";
const Poslugi = () => {
  return (
    <div>
      <section className="about_section  layout_padding-left">
        <div className="box">
          <div className="detail-box">
            <div className="heading_container">
              <h2>Коротко про нас</h2>
            </div>
            <p>"RELAX+" пропонує якісне оздоровлення за доступними цінами</p>
            <Link to="/service">
              <div>Більше...</div>
            </Link>
          </div>
          <div className="img-box">
            <img
              src={foto}
              alt="foto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Poslugi;
