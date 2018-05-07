import * as React from 'react';
import './App.css';
import Card from './card/Card';
import Header from './header/Header';
import Navigation from './navigation/Navigation';

interface ISettings {
  cards: JSX.Element[];
  start: number;
  cardsPerPage: number;
  total: number;
}

class App extends React.Component<any, ISettings> {
  constructor(props: any) {
    super(props);
    const start = 0;
    const total = 327;
    const cardsPerPage = 20;
    const cards: JSX.Element[] = [];

    /* tslint:disable:no-console */

    this.state = {
      cards,
      cardsPerPage,
      start,
      total,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  public handleClick(id: number) {
    const actual = id - 1;
    this.setState({
      start: actual,
    });
  }
  public componentWillMount() {
    const { cards, total } = this.state;
    // const rand: number[] = [];

    // while (rand.length < total) {
    //   const r = Math.floor(Math.random() * 1085);
    //   if (rand.indexOf(r) > -1) {
    //     continue;
    //   } else {
    //     rand.push(r);
    //   }
    // }

    // rand.forEach((r, index) => {
    for (let index = 0; index < total; index++) {
      cards.push(
        <Card
          key={index}
          nth={index}
          hidden={false}
          url={`https://loremflickr.com/180/320?random=${index + 1}`}
        />
      );
    }
    // });
  }
  public render() {
    const { cards, cardsPerPage, total } = this.state;
    const perPageNavigation = Math.ceil(total / cardsPerPage);

    // for (let i = 0; i < cards.length; i++) {
    //   if (i >= start * cardsPerPage && i < (start + 1) * cardsPerPage) {
    //     const card = cards[i];
    //   }
    // }

    /* tslint:enable:no-console */
    return (
      <main className="App">
        <Header />
        <Navigation
          length={perPageNavigation}
          start={this.state.start}
          onClick={this.handleClick}
        />
        <article className="App-wall">{cards}</article>
      </main>
    );
  }
}

export default App;
