import React from "react";
import "./style.css";

const Footer: React.FC = () => {
  const time = new Date().getFullYear().toString();

  return (
    <footer className="Footer">
      &copy; Contoso <time dateTime={time}>{time}</time>
    </footer>
  );
};

export default Footer;
