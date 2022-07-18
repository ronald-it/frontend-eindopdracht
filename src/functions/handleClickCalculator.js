import fetchDataCalculatorSearch from "./fetchDataCalculatorSearch";


const submitButton = document.getElementById('submit-form-calculator-search')
const productInput = document.getElementById('search-bar-calculator')

// Submit event voor handleClickCalculator

submitButton.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    const searchTable = document.getElementById('calorie-calculator-product-table-div');
    searchTable.replaceChildren();

    searchTable.innerHTML = `<p>Hallo</p>`;
    fetchDataCalculatorSearch(productInput.value);
})