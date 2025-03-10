import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <img src="vite.svg" width={40} alt="Vite Logo" />
      <ul className={styles.nav}>
        <li><a href="/">main</a></li>
        <li><a href="#">news</a></li>
        <li><a href="#">about</a></li>
      </ul>
    </header>
  );
};

export default Header;
