import * as dialogPolyfill from 'dialog-polyfill';
import 'dialog-polyfill/dialog-polyfill.css';
import * as Lorem from 'lorem-ipsum';
import * as React from 'react';
import './Card.css';

interface IProps {
  url: URL;
}

interface IText {
  text: string;
}

export default class Card extends React.Component<IProps, IText> {
  private dialog: React.RefObject<HTMLDialogElement>;

  constructor(props: IProps) {
    super(props);

    this.state = {
      text: Lorem(),
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.dialog = React.createRef();
  }

  public toggleModal(e: any) {
    e.preventDefault();
    const dialog = this.dialog.current;

    if (dialog) {
      if (dialog.open) {
        dialog.close();
      } else {
        dialog.showModal();
      }
    }
  }

  public componentDidMount() {
    if (this.dialog.current) {
      dialogPolyfill.registerDialog(this.dialog.current);
    }
  }

  public render() {
    const { url } = this.props;
    const { text } = this.state;

    return (
      <figure className="Card">
        <a href="#" onClick={this.toggleModal}>
          <img className="animated fadeIn" src={url.href} alt="Wallpaper" />
          <figcaption>{text}</figcaption>
        </a>
        <dialog ref={this.dialog}>
          <form method="dialog">
            <input className="close" type="submit" value="&times;" />
          </form>
          <img src={`${url.origin}/800/600${url.search}`} />
        </dialog>
      </figure>
    );
  }
}
