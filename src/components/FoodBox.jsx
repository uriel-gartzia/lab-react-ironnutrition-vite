// Your code here
import React from 'react'

function FoodBox(props) {
  const { calories, id, image, name, servings } = props.food;
  const { allFoods, setAllFoods } = props;

  const handleDeleteFood = (id) => {
    console.log("borrar comida", { id });

    let filteredArr = allFoods.filter((eachFood) => {
      if (eachFood.id === id) {
        return false;
      } else {
        return true;
      }
    });

    setAllFoods(filteredArr);
  };

  return (
    <div>
      <br />

      <h3>{name}</h3>

      <img src={image} width={300} />

      <p>Calories: {calories}</p>
      <p>
        Servings <b>{servings}</b>
      </p>

      <p>
        <b>Total Calories: {servings * calories}</b> kcal
      </p>

      <button onClick={() => handleDeleteFood(id)}>Delete</button>
      <br />
    </div>
  );
}

export default FoodBox;
