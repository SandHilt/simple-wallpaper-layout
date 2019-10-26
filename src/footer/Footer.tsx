import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
  public render() {
    return (
      <footer className="Footer">
        &copy; Contoso <time>2018</time>
      </footer>
    );
  }
}
