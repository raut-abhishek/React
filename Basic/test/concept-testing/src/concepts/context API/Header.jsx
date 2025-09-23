// context API - consumer
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return <h1>Header - Current Theme: {theme}</h1>;
};

export default Header;
