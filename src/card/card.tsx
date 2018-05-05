import 'holderjs';
import * as Lorem from 'lorem-ipsum';
import * as React from 'react';
import './Card.css';

interface IProps {
  nth: number;
}

interface IText {
  text: string;
}

export default class Card extends React.Component<IProps, IText> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: Lorem({
        count: 1,
      }),
    };
  }
  public render() {
    return (
      <figure className="Card">
        <img
          src="#"
          data-src={`holder.js/180x320?text=Image ${this.props.nth}`}
          alt="Wallpaper"
        />
        <figcaption>{this.state.text}</figcaption>
      </figure>
    );
  }
}
