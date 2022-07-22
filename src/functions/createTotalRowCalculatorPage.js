const createTotalRowCalculatorPage = (array) => {

const totalRow = document.getElementById('total-row');

totalRow.innerHTML = `
                    <td>Total</td>
                    <td>${Math.round(array[0])} kcal</td>
                    <td>${Math.round(array[1])} g</td>
                    <td>${Math.round(array[2])} g</td>`

return totalRow;

}

export default createTotalRowCalculatorPage;