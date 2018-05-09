import * as React from "react";

interface IItemList {
  disabled?: boolean;
  onClick?: any;
  id?: number;
}

export default class Item extends React.Component<IItemList> {
  constructor(props: IItemList) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  public handleClick() {
    const { onClick, id } = this.props;
    if (onClick && id) {
      onClick(id);
    }
  }
  public render() {
    const { disabled, children: inner } = this.props;

    return (
      <React.Fragment>
        <li>
          {
            <button disabled={disabled} onClick={this.handleClick}>
              {inner}
            </button>
          }
        </li>
      </React.Fragment>
    );
  }
}
