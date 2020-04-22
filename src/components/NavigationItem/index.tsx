import React, { useContext } from "react";
import "./style.css";
import context from "../NavigationContext";

const NavigationItem: React.FC<NavigationItemProps> = ({
  id,
  disabled,
  children: inner,
}) => {
  const handleClick = () => {
    console.log("chamei");
    // const onClick = useContext(context);
    // onClick(id - 1);
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
