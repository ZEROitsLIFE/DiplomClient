import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const Page404 = () => {
  return (
    <div className="b">
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container">
        <Link to="/">
          <div class="more-link" role="button">
                Повернутися до головної
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page404;
