import { useState } from "react"

// Your code here
function AddFoodForm(props) {

    const [ nameInput, setNameInput ] = useState("")
    const [ imageInput, setImageInput ] = useState("")
    const [ caloriesInput, setCaloriesInput ] = useState(0)
    const [ servingsInput, setServingsInput ] = useState(0)

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNameInput(event.target.value)
    }

    const handleImageChange = (event) => {
        console.log(event.target.value)
        setImageInput(event.target.value)
    }

    const handleCaloriesChange = (event) => {
        console.log(event.target.value)
        setCaloriesInput(event.target.value)
    }

    const handleServingsChange = (event) => {
        console.log(event.target.value)
        setServingsInput(event.target.value)
    }

    const handleCreateFood = (event) => {
        console.log("creando una comida nueva")
        event.preventDefault()

        let newFood = {
            name: nameInput,
            image: imageInput,
            calories: caloriesInput,
            servings: servingsInput
        }
        let clone = [...props.allFoods]
        clone.push(newFood)
        props.setAllFoods(clone)

        
        console.log("Creando", newFood)
    }


return(
    <form>

    <br />

    <label htmlFor="">Name</label>
    <input type="text" name="name" onChange={handleNameChange} value={nameInput}/>

    <br />

    <label htmlFor="">Image</label>
    <input type="text" name="image" onChange={handleImageChange} value={imageInput}/>

    <br />

    <label htmlFor="">Calories</label>
    <input type="number" name="calories" onChange={handleCaloriesChange} value={caloriesInput}/>

    <br />

    <label htmlFor="">Servings</label>
    <input type="number" name="servings" onChange={handleServingsChange} value={servingsInput}/>

    <br />

    <button onClick={handleCreateFood}>Create</button>

    <br />
  </form>
)
  
}

export default AddFoodForm
