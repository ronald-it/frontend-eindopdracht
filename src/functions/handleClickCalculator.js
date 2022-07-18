import fetchDataCalculatorSearch from "./fetchDataCalculatorSearch";


const submitButton = document.getElementById('search-button-calculator')
const productInput = document.getElementById('search-bar-calculator')

// Submit event voor handleClickCalculator

submitButton.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    fetchDataCalculatorSearch(productInput.value);
})