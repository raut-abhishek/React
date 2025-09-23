// context API - consumer
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return <p>Footer - {theme} mode</p>;
};

export default Footer;
