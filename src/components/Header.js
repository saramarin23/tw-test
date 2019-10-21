import React from "react";
import santa from "../images/santa.png";

const Header = () => {
  return (
    <header className="App-header">
      <img src={santa} className="App-logo" alt="logo" />
      <p>Lista de deseos</p>
    </header>
  );
};

export default Header;
