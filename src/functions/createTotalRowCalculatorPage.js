const createTotalRowCalculatorPage = (array, parentElement) => {

const totalRow = document.createElement('tr');
totalRow.setAttribute('class', 'total-row');

totalRow.innerHTML = `
                    <td>Total</td>
                    <td>${Math.round(array[0])} kcal</td>
                    <td>${Math.round(array[1])} g</td>
                    <td>${Math.round(array[2])} g</td>`

parentElement.appendChild(totalRow);

return parentElement;

}

export default createTotalRowCalculatorPage;