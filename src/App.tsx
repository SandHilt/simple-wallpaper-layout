import * as holder from 'holderjs';
import * as React from 'react';
import './App.css';
import Card from './card/Card';
import Header from './header/Header';
import Navigation from './navigation/Navigation';

interface ISettings {
  cards: JSX.Element[];
  cardsPerPage: number;
  perPageNavigation: number;
  start: number;
}

class App extends React.Component<any, ISettings> {
  constructor(props: any) {
    super(props);
    const start = 0;
    const total = 100;
    const cardsPerPage = 20;
    const cards: JSX.Element[] = Array(total).fill(null);

    this.state = {
      cards,
      cardsPerPage,
      perPageNavigation: Math.ceil(total / cardsPerPage),
      start,
    };
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
          url={`holder.js/180x320?auto=yes&bg=#333&text=Image ${index + 1}`}
        />
      );
    }
  }
  public componentDidUpdate() {
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
      holder.run({
        images: images.item(i),
      });
    }
  }
  public render() {
    const { start, cards, cardsPerPage, perPageNavigation } = this.state;

    const begin = start * cardsPerPage;
    const end = begin + cardsPerPage;

    const someVisibleCards = cards.slice(begin, end);

    return (
      <main className="App">
        <Header />
        <Navigation
          length={perPageNavigation}
          start={this.state.start}
          onClick={this.handleClick}
        />
        <article className="App-wall">{someVisibleCards}</article>
      </main>
    );
  }
}

export default App;
