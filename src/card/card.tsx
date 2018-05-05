import 'holderjs';
import * as Lorem from 'lorem-ipsum';
import * as React from 'react';

interface IText {
  text: string;
}

export default class Card extends React.Component<any, IText> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: Lorem(),
    };
  }
  public render() {
    return (
      <figure>
        <img src="#" data-src="holder.js/180x320?auto=yes&theme=social" />
        <figcaption>{this.state.text}</figcaption>
      </figure>
    );
  }
}
