import * as React from 'react';
import './App.css';
import Card from './card/Card';
import Header from './header/Header';
import Navigation from './navigation/Navigation';

interface ISettings {
  cards: JSX.Element[];
  start: number;
  cardsPerPage: number;
}

class App extends React.Component<any, ISettings> {
  constructor(props: any) {
    super(props);
    const start = 0;
    const total = 100;
    const cardsPerPage = 20;
    const cards: JSX.Element[] = Array(total).fill(null);

    this.state = { cards, cardsPerPage, start };
    this.handleClick = this.handleClick.bind(this);
  }
  public handleClick(start: number) {
    this.setState({
      start,
    });
  }
  public componentWillMount() {
    const { cards } = this.state;

    for (let index = 0; index < cards.length; index++) {
      cards[index] = (
        <Card
          key={index}
          // hidden={index < start * cardsPerPage || index >= cardsPerPage}
          url={`holder.js/180x320?auto=yes&text=Image ${index + 1}`}
        />
      );
    }
  }
  public render() {
    const { cards, cardsPerPage } = this.state;
    const perPageNavigation = Math.ceil(cards.length / cardsPerPage);

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
