let calories = 0;
let fats = 0;
let carbs = 0;

const createTableCalculatorAdd = (product) => {

    calories += product[0].food.nutrients.ENERC_KCAL;
    fats += product[0].food.nutrients.FAT;
    carbs += product[0].food.nutrients.CHOCDF;

    const tbody = document.getElementById('tbody-add-table');

    const trTwo = document.createElement('tr');
    trTwo.setAttribute('class', 'row-three-calculation');
    trTwo.innerHTML = `<td>${product[0].food.label}</td>
                    <td>${Math.round(product[0].food.nutrients.ENERC_KCAL)} kcal</td>
                    <td>${Math.round(product[0].food.nutrients.FAT)} g</td>
                    <td>${Math.round(product[0].food.nutrients.CHOCDF)} g</td>`
    tbody.appendChild(trTwo);

    return tbody;
}

export default createTableCalculatorAdd;