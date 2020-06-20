import 'animate.css';
import React from 'react';
import './App.css';
import Card from './card/Card';
import Footer from './footer/Footer';
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
      const url = new URL(`/180/320?lock=${index}`, 'https://loremflickr.com');
      cards[index] = <Card key={index} url={url} />;
    }
  }
  // public componentDidUpdate() {
  //   const images = document.getElementsByTagName('img');
  //   for (let i = 0; i < images.length; i++) {
  //     holder.run({
  //       images: images.item(i),
  //     });
  //   }
  // }
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
        <Footer />
      </main>
    );
  }
}

export default App;
