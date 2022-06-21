import React from "react";
import "./style.css";
import foto from "../../static/Aboutderect.jpg";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title wow fadeInDown">Про нас</h2>
          {/* <p className="wow fadeInDown">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget risus vitae massa <br /> semper aliquam quis mattis quam.
          </p> */}
        </div>

        <div className="column_about">
          <div className="col-sm-6 wow flex">
            <img className="img-responsive" src={foto} alt="" />
          </div>

          <div className="col-sm-6 wow flex">
            {/* <h3 className="column-title">Our Beauty Studio</h3> */}
            <p>
              Сеанси проводить засновник "RELAX+" Дмитро Мурдза дипломований
              фахівець за спеціальністю "ФІЗИЧНА ТЕРАПІЯ, ЕРТГОТЕРАПІЯ" він же
              майстер масажної справи.
            </p>
            <p>
              Фахівець приймє пацієнтів у кабінеті, а також при потребі виєжджає
              за вказаною адресою.
            </p>
            {/* <ul className="listarrow">
              <li>
                <i className="fa fa-angle-double-right"></i>Aroma Therapy
              </li>
              <li>
                <i className="fa fa-angle-double-right"></i>Manicure
              </li>
              <li>
                <i className="fa fa-angle-double-right"></i>Massage
              </li>
              <li>
                <i className="fa fa-angle-double-right"></i>Body Spa
              </li>
              <li>
                <i className="fa fa-angle-double-right"></i>Hair Spa
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
