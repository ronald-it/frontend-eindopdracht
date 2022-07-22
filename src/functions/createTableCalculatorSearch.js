// Aanmaken van rows per input (bovenste tabel calculator page)

const createTableCalculatorSearch = (product) => {

    const tbody = document.getElementById('tbody-table');

    const trTwo = document.createElement('tr');
    trTwo.setAttribute('class', 'row-two-product');
    trTwo.innerHTML = `<td>${product[0].food.label}</td>
                    <td>100</td>
                    <td>Gram</td>`
    tbody.appendChild(trTwo);

    return tbody;
}

export default createTableCalculatorSearch;