import React, { useState } from "react";
import style from "./TestComponent.module.css";

const testComponent = () => {
  const [count, setCount] = useState(0);

  const minus = () => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };

  const plus = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div className={style.wrapper}>
      <div>{count}</div>
      <p className={style.p} onClick={plus}>
        +
      </p>
      <p className={style.p} onClick={minus}>
        -
      </p>
    </div>
  );
};

export default testComponent;
