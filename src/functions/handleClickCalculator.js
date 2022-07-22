// Import statements

import fetchDataCalculatorSearch from "./fetchDataCalculatorSearch";
import fetchDataCalculatorAdd from "./fetchDataCalculatorAdd";
import fetchDataCalculatorCalories from "./fetchDataCalculatorCalories";
import createTotalRowCalculatorPage from "./createTotalRowCalculatorPage";

// Elementen voor de search button event listener

const submitButton = document.getElementById('submit-form-calculator-search')
const productInput = document.getElementById('search-bar-calculator')
let productArray = [];

// Submit event voor handleClickCalculator

submitButton.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    fetchDataCalculatorSearch(productInput.value);
    productArray.push(productInput.value);
    // console.log(productArray);
})

// Elementen voor de add button event listener

const addButton = document.getElementById('submit-form-calculator-add');

// Add event voor handleClickCalculator

addButton.addEventListener("submit", async (e) => {

    e.preventDefault();

    // console.log(e.target.value)

    let arrayOfProductData;

    for (let i = 0; i < productArray.length; i++) {
        fetchDataCalculatorAdd(productArray[i]);
    }

    for (let i = 0; i < productArray.length; i++) {
        arrayOfProductData = await fetchDataCalculatorCalories(productArray[i]);
    }

    createTotalRowCalculatorPage(arrayOfProductData);

    // console.log(arrayOfProductData);

    productArray = [];
})