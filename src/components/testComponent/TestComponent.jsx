import React, { useState } from "react";
import style from "./TestComponent.module.css";

const testComponent = () => {
  const [sign, setSign] = useState(true);

  const handleSign = () => {
    setSign((prev) => !prev);
  };

  return (
    <div className={style.wrapper}>
      <p className={style.p} onClick={handleSign}>
        {sign ? "+" : "-"}
      </p>
    </div>
  );
};

export default testComponent;
