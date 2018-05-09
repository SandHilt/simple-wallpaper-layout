import * as React from "react";
import "./App.css";
import Card from "./card/Card";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";

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
    const total = 100;
    const cardsPerPage = 20;
    const cards: JSX.Element[] = [];

    this.state = {
      cards,
      cardsPerPage,
      start,
      total
    };
    this.handleClick = this.handleClick.bind(this);
  }
  public handleClick(id: number) {
    const actual = id - 1;
    this.setState({
      start: actual
    });
  }
  public componentWillMount() {
    const { cards, total, cardsPerPage } = this.state;

    for (let index = 0; index < total; index++) {
      cards.push(
        <Card
          key={index}
          hidden={index >= cardsPerPage}
          url={`holder.js/180x320?auto=yes`}
        />
      );
    }
  }
  public render() {
    const { cards, cardsPerPage, total } = this.state;
    const perPageNavigation = Math.ceil(total / cardsPerPage);

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
