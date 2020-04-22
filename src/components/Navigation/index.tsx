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
  const [nav, setNav] = useState<JSX.Element[]>([]);
  console.log({ length });

  useEffect(() => {
    console.log("setnav");
    const max = Math.min(17, length);

    const aux: JSX.Element[] = [];

    for (let i = 0; i < max + 1; i++) {
      aux.push(
        <NavigationItem key={i} disabled={page === 1} id={page - 1}>
          {i}
        </NavigationItem>
      );
    }
    setNav(aux);
  }, [length, page]);

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
