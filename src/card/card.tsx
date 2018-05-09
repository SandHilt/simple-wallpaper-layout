import 'holderjs';
import * as Lorem from 'lorem-ipsum';
import * as React from 'react';
import './Card.css';

interface IProps {
  url: string;
  page: number;
}

interface IText {
  hidden: boolean;
  text: string;
}

export default class Card extends React.Component<IProps, IText> {
  constructor(props: any) {
    super(props);
    this.state = {
      hidden: false,
      text: Lorem(),
    };
  }
  public render() {
    const { url } = this.props;
    const { text, hidden } = this.state;

    return (
      <figure className="Card" hidden={hidden}>
        <img src={url} alt="Wallpaper" />
        <figcaption>{text}</figcaption>
      </figure>
    );
  }
}
