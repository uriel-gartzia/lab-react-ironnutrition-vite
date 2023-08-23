// import React from 'react'
// import foodsJson from "./foods.json";
// import FoodBox from "./components/FoodBox";
// import AddFoodForm from "./components/AddFoodForm";

// function FoodList() {
// const [ allFoods, setAllFoods ] = useState(foodsJson);
//   return (
//     <div>
//         <AddFoodForm 
//             allFoods={allFoods}
//             setAllFoods={setAllFoods}
//         />
//         <hr />
//         {allFoods.map((eachProduct, i) => {
//           return (
//             <FoodBox
//               key={i}
//               food={eachProduct}
//               allFoods={allFoods}
//               setAllFoods={setAllFoods}
//             />
//           );
//         })}
//         <hr />
//     </div>
//   )
// }

// export default FoodList