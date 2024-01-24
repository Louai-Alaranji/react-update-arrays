
import React,{useState} from "react";


function Counter(){

    const [foods, setFoods] = useState(["Apple", "Orange"]);

    function handleAddFoods(){

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods( prevFoods => [...prevFoods, [newFood]]);

    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index))
    }

    
    return(<>
        <h2>List Of food</h2>
        <ul>
            {foods.map((food, index) => <li key = {index} onClick={() => handleRemoveFood(index)}>
                                            {food}</li>)}
        </ul>
        <input type="text"  id = "foodInput" placeholder="Enter food name" />
        <button onClick={handleAddFoods}> Add Food </button>
       
    </>)
}

export default Counter;