import * as Lorem from 'lorem-ipsum';
import * as React from 'react';
import './Card.css';

interface IProps {
  url: string;
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
    const { url } = this.props;
    const { text } = this.state;

    return (
      <figure className="Card">
        <img src={url} alt="Wallpaper" />
        <figcaption>{text}</figcaption>
      </figure>
    );
  }
}
