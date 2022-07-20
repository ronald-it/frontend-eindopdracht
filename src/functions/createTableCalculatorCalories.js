let calories = 0;
const servingInput = document.getElementById('amount-calculator');

const createTableCalculatorCalories = (product) => {

    calories += (product[0].food.nutrients.ENERC_KCAL * servingInput);

    return calories;
}

export default createTableCalculatorCalories;