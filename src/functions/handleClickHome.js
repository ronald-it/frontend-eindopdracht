import fetchDataHome from "./fetchDataHome";

const ingredientInput = document.getElementById('search-bar')
const mealTypeInput = document.getElementById('meals')
const cuisineInput = document.getElementById('cuisine')
const dietInput = document.getElementById('diet')
const timeInput = document.getElementById('time')
const submitForm = document.getElementById('submit-form');

// Submit event voor handleClickHome
submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchDataHome(ingredientInput.value, mealTypeInput.value, cuisineInput.value, dietInput.value, timeInput.value);
})