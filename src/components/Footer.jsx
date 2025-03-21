import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme === "light" ? "#6e8cb5" : "#0d0dde",
        color: theme === "light" ? "#14de0d" : "#de0d41",
        padding: "10px",
        width: "100%",
        position: "fixed",
        bottom: "0",
        left: "0",
        textAlign: "center",
      }}
    >
      <p>Footer Theme : {theme}</p>
    </div>
  );
};

export default Footer;
