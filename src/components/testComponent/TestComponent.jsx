import React, { useState } from "react";
import style from "./TestComponent.module.css";

const TestComponent = () => {
  const [image, setImage] = useState({});

  const fetchData = async () => {
    const res = await fetch("https://api.nekosia.cat/api/v1/images/catgirl", {
      method: "GET", // Меняем на GET, так как это запрос данных
    });

    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}`);
    }

    console.log(res);

    const data = await res.json();
    console.log(data);
    console.log(data.image.original.url);
    setImage(data)
  };

  return (
    <div className={style.wrapper}>
      <form action={fetchData}>
        <button
          style={{
            width: "100px",
            height: "50px",
            border: "1px solid grey",
            borderRadius: "4px",
          }}
        >
          Get cat's
        </button>
      </form>
      <div>{image.original.url ? <img src={image.image.original.url} alt="Cat" /> : null}</div>
    </div>
  );
};

export default TestComponent;
