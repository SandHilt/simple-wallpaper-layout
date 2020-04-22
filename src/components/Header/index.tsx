import React from "react";
import "./style.css";

const Header: React.FC = () => (
  <header className="Header">
    <figure>
      <img
        src="#"
        data-src="holder.js/100px100p?auto=yes"
        alt="Logo da empresa"
        className="Header-logo"
      />
      <figcaption className="Header-title">
        <h1>
          Contoso{" "}
          <span aria-label="This is a cat" role="img">
            😸
          </span>
          <small>The beautiful design</small>
        </h1>
      </figcaption>
    </figure>
  </header>
);

export default Header;
