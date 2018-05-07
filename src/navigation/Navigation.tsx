import * as React from 'react';
import Item from './Item';
import './Navigation.css';

interface IProps {
  length: number;
  onClick: ((id: number) => void);
  start: number;
}

export default class Navigation extends React.Component<IProps> {
  public render() {
    const { length, onClick } = this.props;
    const nav = [];
    const max = Math.min(17, length);

    let { start } = this.props;
    start++;

    nav.push(
      <Item key={0} disabled={start === 1} onClick={onClick} id={start - 1}>
        Previous
      </Item>
    );

    let id = 1;

    for (; id < max + 1; id++) {
      const item = (
        <Item key={id} onClick={onClick} id={id}>
          {id}
        </Item>
      );
      nav.push(item);
    }

    if (start < 17 || length - start < 3) {
      const item = (
        <Item key={start} disabled={true}>
          <strong>{start}</strong>
        </Item>
      );
      nav.splice(start, 1, item);
    }

    if (length > 17) {
      if (length - max > 3) {
        nav.push(
          <Item key={id} disabled={true}>
            ...
          </Item>
        );
        id++;
      }
      for (let i = length - 2; i <= length; i++, id++) {
        const item = <Item key={id}>{i}</Item>;
        nav.push(item);
      }
    }

    nav.push(
      <Item
        key={id++}
        disabled={start === length}
        onClick={onClick}
        id={start + 1}
      >
        Next
      </Item>
    );

    return (
      <nav className="Navigator">
        <ul>{nav}</ul>
      </nav>
    );
  }
}
