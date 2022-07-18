const createTableCalculatorSearch = (product) => {
    const searchTable = document.getElementById('calorie-calculator-product-table-div');
    searchTable.replaceChildren();

    const table = document.createElement('table')
    table.setAttribute('class', 'calorie-calculator-product-table');

    const thead = document.createElement('thead');
    thead.setAttribute('class', 'thead-table');
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    tbody.setAttribute('class', 'tbody-table');
    table.appendChild(tbody);

    const trOne = document.createElement('tr');
    trOne.setAttribute('class', 'row-one-product');
    trOne.innerHTML = `<td>Product</td>
                    <td>Quantity</td>
                    <td>Label</td>`
    tbody.appendChild(trOne);

    const trTwo = document.createElement('tr');
    trTwo.setAttribute('class', 'row-two-product');
    trTwo.innerHTML = `<td>${product[0].food.label}</td>
                    <td>100</td>
                    <td>Gram</td>`
    tbody.appendChild(trTwo);

    searchTable.appendChild(table);

    return searchTable;
}

export default createTableCalculatorSearch;