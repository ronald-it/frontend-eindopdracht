const createTableCalculatorAdd = (product) => {
    const servingInput = document.getElementById('amount-calculator').value;
    const caloriesPerServing = product[0].food.nutrients.ENERC_KCAL * servingInput;
    const fatsPerServing = product[0].food.nutrients.FAT * servingInput;
    const carbsPerServing = product[0].food.nutrients.CHOCDF * servingInput;
    const tbody = document.getElementById('tbody-add-table');
    const trTwo = document.createElement('tr');
    trTwo.setAttribute('class', 'row-three-calculation');
    trTwo.innerHTML = `<td>${product[0].food.label}</td>
                    <td>${Math.round(caloriesPerServing)} kcal</td>
                    <td>${Math.round(fatsPerServing)} g</td>
                    <td>${Math.round(carbsPerServing)} g</td>`
    tbody.appendChild(trTwo);
    return tbody;
}
export default createTableCalculatorAdd;