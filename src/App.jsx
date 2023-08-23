import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";


function App() {
  const [ allFoods, setAllFoods ] = useState(foodsJson);

  return (
    <>
     <AddFoodForm 
     allFoods={allFoods}
     setAllFoods={setAllFoods}
     />

      <hr />

      <div>
        {allFoods.map((eachProduct, i) => {
          return (
            <FoodBox
              key={i}
              food={eachProduct}
              allFoods={allFoods}
              setAllFoods={setAllFoods}
            />
          );
        })}
        <hr />
      </div>
    </>
  );
}

export default App;
