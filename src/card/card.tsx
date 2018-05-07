import 'holderjs';
import * as Lorem from 'lorem-ipsum';
import * as React from 'react';
import './Card.css';

interface IProps {
  nth: number;
  hidden: boolean;
  url?: string;
}

interface IText {
  text: string;
}

export default class Card extends React.Component<IProps, IText> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: Lorem(),
    };
  }
  public render() {
    const { hidden, url } = this.props;
    const { text } = this.state;

    return (
      <figure className="Card" hidden={hidden}>
        <img
          src={url || '#'}
          // data-src={`holder.js/180x320?bg=#333&text=Image ${nth}`}
          alt="Wallpaper"
        />
        <figcaption>{text}</figcaption>
      </figure>
    );
  }
}
