import fetchDataCalculatorSearch from "./fetchDataCalculatorSearch";
import fetchDataCalculatorAdd from "./fetchDataCalculatorAdd";
import fetchDataCalculatorCalories from "./fetchDataCalculatorCalories";
// Elementen voor de search button event listener
const submitButton = document.getElementById('submit-form-calculator-search')
const productInput = document.getElementById('search-bar-calculator')
const productArray = [];
// Submit event voor handleClickCalculator

submitButton.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.value);
    fetchDataCalculatorSearch(productInput.value);
    productArray.push(productInput.value);
    console.log(productArray);
})
// Elementen voor de add button event listener
const addButton = document.getElementById('submit-form-calculator-add');
// Add event voor handleClickCalculator

addButton.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.value)
    const tbody = document.getElementById('tbody-add-table');
    tbody.replaceChildren();
    const rowOneCalculation = document.createElement('tr');
    rowOneCalculation.setAttribute('class', 'row-one-calculation');
    rowOneCalculation.innerHTML = `                                                <td>Product</td>
                    <td>Calories</td>
                    <td>Fat</td>
                    <td>Carbs</td>`
    tbody.appendChild(rowOneCalculation);
    for (let i = 0; i < productArray.length; i++) {
        fetchDataCalculatorAdd(productArray[i]);
    }
    fetchDataCalculatorCalories(productArray[1], tbody);
})