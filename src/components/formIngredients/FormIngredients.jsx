import React, { useState } from "react";
import style from "./FormIngredients.module.css";

const FormIngredients = () => {
  const [ingredientsList, setIngredientsList] = useState([]);

  const formSubmit = (formData) => {
    const ingredients = formData.get("ingredients");
    if (ingredients) {
      console.log("in formS");
      setIngredientsList((prev) => [
        ...new Set([
          ...prev,
          ...ingredients
            .split(/[,;\s]+/)
            .map((item) => item.trim().toLowerCase())
            .filter(Boolean)
        ]),
      ]);
    }
  };

  const ingredientsItems = ingredientsList.map((item) => {
    return <li>{item}</li>;
  });

  return (
    <>
      <form className={style.ingredients} action={formSubmit}>
        <h3>Ingredients</h3>
        <div>
          <input
            type="text"
            aria-label="ingredients"
            placeholder="e.g. apple, banana; orange pear"
            name="ingredients"
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
