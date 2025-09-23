import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import Header from "./Header";
import Footer from "./Footer";
import ThemeToggleButton from "./ThemeToggleButton";

const ThemeDemo = () => {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    background: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px"
  };

  return (
    <div style={appStyle}>
      <Header />
      <ThemeToggleButton />
      <Footer />
    </div>
  );
};

export default ThemeDemo;
