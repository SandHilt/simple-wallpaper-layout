import 'holderjs';
import * as React from 'react';

export default class Card extends React.Component {
  public render() {
    return (
      <figure>
        <img src="#" data-src="holder.js/180x320?auto=yes&random=yes" />
        <figcaption>Some caption here.</figcaption>
      </figure>
    );
  }
}
