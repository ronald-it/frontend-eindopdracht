const createTableCalculatorSearch = (product) => {
    const searchTable = document.getElementById('calorie-calculator-product-table-div');
    searchTable.replaceChildren();

    searchTable.innerHTML = `<p>${product.recipe.label}</p>`;

    return searchTable;
}

export default createTableCalculatorSearch;