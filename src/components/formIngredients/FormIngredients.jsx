import React, { useState } from "react";
import style from "./FormIngredients.module.css";

const FormIngredients = () => {
  const [ingredientsValue, setIngredientsValue] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);

  const handleIngredients = (event) => {
    setIngredientsValue(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();

    if (ingredientsValue && ingredientsValue.trim()) {
      setIngredientsList((prev) => [
        ...new Set([
          ...prev,
          ...ingredientsValue
            .split(/[,;\s]+/)
            .map((item) => item.trim().toLowerCase())
            .filter(Boolean),
        ]),
      ]);
      setIngredientsValue("");
    }
  };

  const ingredientsItems = ingredientsList.map((item) => {
    return <li>{item}</li>;
  });

  return (
    <>
      <form className={style.ingredients} onSubmit={formSubmit}>
        <h3>Ingredients</h3>
        <div>
          <input
            type="text"
            aria-label="ingredients"
            placeholder="e.g. apple, banana; orange pear"
            name="ingredients"
            value={ingredientsValue}
            onChange={handleIngredients}
          />
          <button>add ingredients</button>
        </div>
      </form>
      {ingredientsList.length > 0 ? (
        <ul className={style.ingredientsList}>{ingredientsItems}</ul>
      ) : null}
    </>
  );
};

export default FormIngredients;
