import * as React from 'react';

interface IItemList {
  disabled?: boolean;
}

export default class Item extends React.Component<IItemList> {
  public render() {
    const { disabled, children: inner } = this.props;

    return (
      <React.Fragment>
        <li>{<button disabled={disabled}>{inner}</button>}</li>
      </React.Fragment>
    );
  }
}
