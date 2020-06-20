import React, { useState, useEffect, FormEvent } from "react";
import NavigationItem from "../NavigationItem";
import "./style.css";

export const Navigation: React.FC<NavigationProps> = ({
  length,
  page,
  cardsPerPage,
  onChangeSize,
  optSize,
}) => {
  const [maxItens] = useState(17);
  const [nav, setNav] = useState<JSX.Element[]>([]);
  // console.log({ length });

  useEffect(() => {
    console.log("setnav");
    // console.table({ length, maxItens, page });
    const max = Math.min(maxItens, length);

    const aux: JSX.Element[] = [];

    // aux.push(
    //   <NavigationItem key={0} disabled={}>

    //   </NavigationItem>
    // )

    // let id = 1;

    for (let i = 1; i < max + 1; i++) {
      aux.push(
        <NavigationItem key={i} disabled={page === 1} id={page}>
          {i}
        </NavigationItem>
      );
    }
    setNav(aux);
  }, [length, maxItens, page]);

  const noop = ({ preventDefault }: FormEvent<HTMLFormElement>) =>
    preventDefault();

  return (
    <nav className="Navigator">
      <span className="title">
        <form method="POST" onSubmit={noop}>
          <label htmlFor="perpage">Item por página </label>
          <select name="perpage" onChange={onChangeSize} value={cardsPerPage}>
            {optSize.map((size, key) => (
              <option {...{ key }} value={size}>
                {size}
              </option>
            ))}
          </select>
        </form>
      </span>
      <ul>{nav}</ul>
    </nav>
  );
};

export default Navigation;
