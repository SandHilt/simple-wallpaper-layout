import * as React from 'react';
import './App.css';
import Card from './card/Card';
import Header from './header/Header';
import Navigation from './navigation/Navigation';

const TOTAL: number = 1000000;

interface ISettings {
  column: number;
  row: number;
}

class App extends React.Component<any, ISettings> {
  constructor(props: any) {
    super(props);
    this.state = {
      column: 4,
      row: 5,
    };
  }
  public render() {
    const { column: c, row: r } = this.state;
    const perPage = TOTAL / (r * c);

    const cards: JSX.Element[] = [];
    for (let i = 0; i < TOTAL && i < 20; i++) {
      cards.push(<Card key={i} />);
    }

    return (
      <main className="App">
        <Header />
        <Navigation length={perPage} />
        <article className="App-wall">{cards}</article>
      </main>
    );
  }
}

export default App;
