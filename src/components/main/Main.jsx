import React from "react";
import styles from "./Main.module.css";
import imgs from "../../data/images";
import Image from "../image";

const images = imgs.map((img, index, imgs) => {
  return <Image {...img} />;
});

const Main = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.offers}>{images}</div>
    </main>
  );
};

export default Main;
