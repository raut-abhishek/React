// context API - consumer
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);
  return (
  <>
  <h1>Header - Current Theme: {theme}</h1>
  <button onClick={toggleTheme}>Toggle Theme</button>
  </>
  );
};

export default Header;
