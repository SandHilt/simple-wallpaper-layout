import "animate.css";
// import "holderjs";
import { run } from "holderjs";
import React, { useState, useEffect, Suspense } from "react";
import "./App.css";

const Card = React.lazy(() => import("./card/Card"));
const Footer = React.lazy(() => import("./footer/Footer"));
const Header = React.lazy(() => import("./header/Header"));
const Navigation = React.lazy(() => import("./navigation/Navigation"));
const DEFAULT_TEXT = "This component will load.";

const App: React.FC = () => {
  const total = 100;

  const [start, setStart] = useState(0);
  const [cards, setCards] = useState<JSX.Element[]>([]);
  
  const cardsPerPage = 20;
  const perPageNavigation = Math.ceil(total / cardsPerPage);

  const handleClick = (start: number) => setStart(start);

  useEffect(() => {
    for (let key = 0; key < total; key++) {
      const url = new URL(`/180/320?lock=${key}`, "https://loremflickr.com");
      cards.push(
        <Suspense fallback={DEFAULT_TEXT}>
          <Card {...{ key, url }} />
        </Suspense>
      );
    }

    const images = document.getElementsByTagName("img");
    for (let i = 0, j = images.length; i < j; i++) {
      run({
        images: images.item(i)
      });
    }
  }, []);

  return <main></main>;
};

// class App extends React.Component<any, ISettings> {
//   constructor(props: any) {
//     super(props);
//     const start = 0;
//     const total = 100;
//     const cardsPerPage = 20;
//     const cards: JSX.Element[] = Array(total).fill(null);

//     this.state = {
//       cards,
//       cardsPerPage,
//       perPageNavigation: Math.ceil(total / cardsPerPage),
//       start,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   public handleClick(start: number) {
//     this.setState({
//       start,
//     });
//   }
//   public componentWillMount() {
//     const { cards } = this.state;

//     for (let index = 0; index < cards.length; index++) {
//       const url = new URL(`/180/320?lock=${index}`, 'https://loremflickr.com');
//       cards[index] = <Card key={index} url={url} />;
//     }
//   }
//   // public componentDidUpdate() {
//   //   const images = document.getElementsByTagName('img');
//   //   for (let i = 0; i < images.length; i++) {
//   //     holder.run({
//   //       images: images.item(i),
//   //     });
//   //   }
//   // }
//   public render() {
//     const { start, cards, cardsPerPage, perPageNavigation } = this.state;

//     const begin = start * cardsPerPage;
//     const end = begin + cardsPerPage;

//     const someVisibleCards = cards.slice(begin, end);

//     return (
//       <main className="App">
//         <Header />
//         <Navigation
//           length={perPageNavigation}
//           start={this.state.start}
//           onClick={this.handleClick}
//         />
//         <article className="App-wall">{someVisibleCards}</article>
//         <Footer />
//       </main>
//     );
//   }
// }

export default App;
