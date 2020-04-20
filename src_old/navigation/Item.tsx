import  React from "react";

interface IItemList {
  disabled?: boolean;
  onClick?: ((id: number) => void);
  id?: number;
}

export default class Item extends React.Component<IItemList> {
  constructor(props: IItemList) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  public handleClick() {
    const { id, onClick } = this.props;
    if (onClick && id) {
      onClick(id - 1);
    }
  }
  public render() {
    const { disabled, children: inner } = this.props;

    return (
      <li>
        <button disabled={disabled} onClick={this.handleClick}>
          {inner}
        </button>
      </li>
    );
  }
}
