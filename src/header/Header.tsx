import  React from 'react';
import './Header.css';

export default class Header extends React.Component {
  public render() {
    return (
      <header className="Header">
        <figure>
          <img
            className="Header-logo"
            src="holder.js/100px100p?auto=yes"
            alt="logo"
          />
          <figcaption className="Header-title">
            <h1>
              Contoso <span aria-label="This is a cat" role="img">😸</span>
              <small>The beautiful design</small>
            </h1>
          </figcaption>
        </figure>
      </header>
    );
  }
}
