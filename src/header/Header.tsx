import * as React from 'react';
import logo from '../logo.svg';
import './Header.css';

export default class Header extends React.Component {
  public render() {
    return (
      <header className="Header">
        <figure>
          <img className="Header-logo" src={logo} alt="logo" />
          <figcaption className="Header-title">
            <h2>
              Contoso
              <small>The beautiful design</small>
            </h2>
          </figcaption>
        </figure>
      </header>
    );
  }
}
