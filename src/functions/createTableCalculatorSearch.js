const createTableCalculatorSearch = (product) => {
    const searchTable = document.getElementById('calorie-calculator-product-table-div');
    searchTable.replaceChildren();

    searchTable.innerHTML = `<h2>${product.recipe.label}</h2>`;

    return searchTable;
}

export default createTableCalculatorSearch;