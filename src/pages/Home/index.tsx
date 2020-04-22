import React, { useState, useEffect, ChangeEvent } from "react";
import "./style.css";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import NavigationContext from "../../components/NavigationContext";

const Home: React.FC = () => {
  const optSize = [5, 10, 20];
  const [page, setPage] = useState(0);
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const total = 20;
  const [cardsPerPage, setCardsPerPage] = useState(optSize[1]);
  const [pages, setPages] = useState(0);
  const [partialCards, setPartialCards] = useState<JSX.Element[]>([]);

  const handlePage = (page: number) => {
    setPage(page);
  };

  const onChangeSize = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const value = parseInt(e.target.value);
    setCardsPerPage(value);
  };

  useEffect(() => {
    const aux: JSX.Element[] = [];

    if (cards.length === 0) {
      for (let i = 0; i < total; i++) {
        const url = new URL(`?lock=${i}`, "https://loremflickr.com");
        aux.push(
          <Card
            index={i}
            key={i}
            big={{ width: 800, height: 600 }}
            thumb={{ width: 180, height: 320 }}
            {...{ url }}
          />
        );
      }
      setCards(aux);
    }
  }, [cards]);

  useEffect(() => {
    console.log("setpages");
    setPages(Math.ceil(total / cardsPerPage));
  }, [cardsPerPage]);

  useEffect(() => {
    console.log("setpartialcards");
    if (cards.length > 0) {
      const begin = page * cardsPerPage;
      const end = begin + cardsPerPage;

      setPartialCards(cards.slice(begin, end));
    }
  }, [page, cardsPerPage, cards]);

  return (
    <main>
      <Header />
      <NavigationContext.Provider value={handlePage}>
        <Navigation
          length={pages}
          {...{ page, optSize, onChangeSize, cardsPerPage }}
        />
      </NavigationContext.Provider>
      <article className="Home-wall">{partialCards}</article>
      <Footer />
    </main>
  );
};

export default Home;
