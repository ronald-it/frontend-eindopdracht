import fetchDataCalculatorSearch from "./fetchDataCalculatorSearch";


const productInput = document.getElementById('search-button-calculator')

// Submit event voor handleClickCalculator

productInput.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchDataCalculatorSearch(productInput.value);
})