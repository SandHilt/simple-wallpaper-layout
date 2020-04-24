import React, { useContext } from "react";
import "./style.css";
import NavigationContext from "../NavigationContext";

const NavigationItem: React.FC<NavigationItemProps> = ({
  id,
  disabled,
  children: inner,
}) => {
  const context = useContext(NavigationContext);

  const handleClick = () => {
    console.log("chamei o clique");
    debugger;

    if (context.handlePage) {
      context.handlePage(id - 1);
    }
  };

  return (
    <li className="Navigator-item">
      <button {...{ disabled }} onClick={handleClick}>
        {inner}
      </button>
    </li>
  );
};

export default NavigationItem;
