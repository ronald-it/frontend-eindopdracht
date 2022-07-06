// Naar de relevante HTML elementen refereren
import fetchData from "./fetchData";

const ingredientInput = document.getElementById('search-bar')
const mealTypeInput = document.getElementById('meals')
// const cuisineInput = document.getElementById('cuisine')
// const dietInput = document.getElementById('diet')
// const timeInput = document.getElementById('time')
const submitButton = document.getElementById('search-button');

// Click event voor handleClickHome
submitButton.addEventListener("click", () => {
    const ingredient = ingredientInput.value;
    const mealType = mealTypeInput.value;
    // const cuisine = cuisineInput.value;
    // const diet = dietInput.value;
    // const time = timeInput.value;
    fetchData(ingredient, mealType);
})

ingredientInput.addEventListener("keyup", (e) => {
    console.log(e.target.value);
})