import * as React from 'react';
import Item from './Item';
import './Navigation.css';

interface IProps {
  length: number;
}

export default class Navigation extends React.Component<IProps> {
  public render() {
    const { length } = this.props;
    const nav = [];
    let id = 1;
    const m = Math.min(17, length);

    nav.push(
      <Item key={id++} disabled={true}>
        Previous
      </Item>
    );

    nav.push(
      <Item key={id++} disabled={true}>
        <strong>1</strong>
      </Item>
    );

    for (; id < m + 1; id++) {
      const btn = <Item key={id}>{id}</Item>;
      nav.push(btn);
    }

    if (length > 17) {
      if (length - m > 3) {
        nav.push(
          <Item key={id} disabled={true}>
            ...
          </Item>
        );
        id++;
      }
      for (let i = length - 2; i <= length; i++, id++) {
        const btn = <Item key={id}>{i}</Item>;
        nav.push(btn);
      }
    }

    nav.push(<Item key={id++}>Next</Item>);

    return (
      <nav className="Navigator">
        <ul>{nav}</ul>
      </nav>
    );
  }
}
