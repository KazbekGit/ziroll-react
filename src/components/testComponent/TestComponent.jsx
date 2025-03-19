import React, { useState } from "react";
import style from "./TestComponent.module.css";

const TestComponent = () => {

  const [images, setImages] = useState([])

  const fetchData = (e) => {
    e.preventDefault(); // Предотвращаем стандартную отправку формы
    fetch("https://api.nekosia.cat/api/v1/images/catgirl", {
      method: "GET", // Меняем на GET, так как это запрос данных
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className={style.wrapper}>
      <form method="post" onSubmit={fetchData}>
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
    </div>
  );
};

export default TestComponent;
