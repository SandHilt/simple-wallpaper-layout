import * as React from 'react';

interface IItemList {
  ret?: boolean;
}

export default class Item extends React.Component<IItemList> {
  public render() {
    const { ret, children: inner } = this.props;

    let special: string = '';

    if (ret) {
      special = 'borderless';
    }

    return (
      <React.Fragment>
        <li>
          {
            <button disabled={ret} className={special}>
              {inner}
            </button>
          }
        </li>
      </React.Fragment>
    );
  }
}
