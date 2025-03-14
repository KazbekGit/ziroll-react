import React, { useState } from "react";
import styles from "./Main.module.css";
import imgs from "../../data/images";
import Image from "../image";
import FormIngredients from "../formIngredients";

const images = imgs.map((img, index, imgs) => {
  return <Image {...img} key={img.id} />;
});

const Main = () => {
  return (
    <main className={styles.wrapper}>
      <FormIngredients />
      <div className={styles.offers}>{images}</div>
    </main>
  );
};

export default Main;
